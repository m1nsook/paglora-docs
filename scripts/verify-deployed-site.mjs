/**
 * Check that the live GitHub Pages site serves the exact output of the
 * source-driven Paglora build, not an old tracked site/ snapshot or CDN cache.
 * No dependencies, Git CLI, credentials or write access required.
 *
 * node scripts/verify-deployed-site.mjs /absolute/path/to/export https://user.github.io/repo/
 */
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const sha256 = data => createHash("sha256").update(data).digest("hex");
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function assetPaths(out) {
  const files = ["index.html", "pages/index.html", "component-badges.html", "search-index.json"];
  for (const folder of ["_paglora/chunks", "_paglora/chunks/css"]) {
    for (const item of await readdir(join(out, folder), { withFileTypes: true })) {
      if (item.isFile() && /\.(?:js|css)$/.test(item.name)) {
        files.push(folder + "/" + item.name);
      }
    }
  }
  if (!files.some(item => item.endsWith(".js") && item.startsWith("_paglora/"))) {
    throw new Error("Export has no content-hashed JavaScript bundles.");
  }
  if (!files.some(item => item.endsWith(".css") && item.startsWith("_paglora/"))) {
    throw new Error("Export has no content-hashed CSS bundle.");
  }
  const html = await readFile(join(out, "index.html"), "utf8");
  if (!html.includes('_paglora/chunks/') || !html.includes('rel="icon"')) {
    throw new Error("Export index.html does not reference the expected chunks and favicon.");
  }
  // Prefer detecting the actual emitted local icon over assuming a project path.
  const icon = html.match(/<link rel="icon"[^>]*href="(assets\/[^"]+)"/)?.[1];
  if (icon) files.push(icon);
  if (html.includes('href="custom.css"')) files.push("custom.css");
  // Verify that the relocated CSS's relative font URL resolves publicly too.
  files.push("fonts/geist-latin.woff2");
  return [...new Set(files)];
}

export async function verifyDeployment(directory, baseUrl, {
  request = fetch,
  attempts = 6,
  delayMs = 8000,
  onProgress = console.log,
} = {}) {
  const root = resolve(directory);
  const base = new URL(baseUrl);
  if (base.protocol !== "https:" || !base.pathname.endsWith("/")) {
    throw new Error("Expected HTTPS site root with trailing slash.");
  }
  const assets = await assetPaths(root);
  const expected = new Map(await Promise.all(assets.map(async path => [
    path, sha256(await readFile(join(root, ...path.split("/")))),
  ])));
  let lastFailure;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      for (const path of assets) {
        const url = new URL(path, base);
        // Each attempt bypasses stale browser/proxy HTML caches, while
        // preserving the static file path (GitHub Pages ignores query data).
        url.searchParams.set("_paglora_audit", String(attempt));
        const response = await request(url.toString(), {
          headers: { "Cache-Control": "no-cache" },
          redirect: "follow",
        });
        if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
        const actual = sha256(Buffer.from(await response.arrayBuffer()));
        if (actual !== expected.get(path)) {
          throw new Error(`${path}: live content differs from new Paglora build (stale deployment or cache)`);
        }
      }
      onProgress(`Verified ${assets.length} live Paglora files at ${base.href}: all match this build exactly.`);
      return { checked: assets.length, url: base.href };
    } catch (error) {
      lastFailure = error;
      onProgress(`Live deployment check ${attempt}/${attempts}: ${error.message}`);
      if (attempt < attempts) await sleep(delayMs);
    }
  }
  throw new Error(`GitHub Pages live smoke test failed: ${lastFailure?.message}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const output = process.argv[2];
  const url = process.argv[3];
  if (!output || !url) {
    console.error("Usage: node scripts/verify-deployed-site.mjs <generated-site-folder> <https-site-root/>");
    process.exitCode = 2;
  } else {
    verifyDeployment(output, url).catch(error => {
      console.error(error.message);
      process.exitCode = 1;
    });
  }
}
