import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { verifyDeployment } from "./verify-deployed-site.mjs";

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), "paglora-verify-"));
  const files = {
    "index.html": '<!doctype html><link rel="icon" href="assets/icon.png"><link rel="stylesheet" href="_paglora/chunks/css/0123456789abcdef.css"><script defer src="_paglora/chunks/0123456789abcdef.js"></script>',
    "pages/index.html": '<base href="../index.html"><meta name="robots" content="noindex,follow">',
    "component-badges.html": "<h1>Status badges</h1>",
    "search-index.json": '{"pages":[]}',
    "_paglora/chunks/0123456789abcdef.js": "console.log(1)",
    "_paglora/chunks/css/0123456789abcdef.css": "body{margin:0}",
    "assets/icon.png": Buffer.from([137,80,78,71,13,10,26,10]),
    "fonts/geist-latin.woff2": Buffer.from([119,79,70,50,0,0]),
  };
  for (const [path, content] of Object.entries(files)) {
    const target = join(root, ...path.split("/"));
    await mkdir(join(target, ".."), { recursive: true });
    await writeFile(target, content);
  }
  return root;
}
function fromFixture(root, overrides = {}) {
  return async url => {
    const path = new URL(url).pathname.split("/paglora-docs/")[1];
    if (!path) return new Response("Not found", { status: 404 });
    const content = overrides[path] ?? await readFile(join(root, ...path.split("/")));
    return new Response(content, { status: 200 });
  };
}

test("live verifier accepts exact hashed CSS, JS, favicon and HTML outputs", async () => {
  const root = await fixture();
  try {
    const result = await verifyDeployment(root, "https://m1nsook.github.io/paglora-docs/", {
      request: fromFixture(root), attempts: 1, delayMs: 0, onProgress: () => {},
    });
    assert.equal(result.checked, 8);
  } finally { await rm(root, { recursive: true, force: true }); }
});
test("stale HTML is a failure even if an icon loads", async () => {
  const root = await fixture();
  try {
    await assert.rejects(
      verifyDeployment(root, "https://m1nsook.github.io/paglora-docs/", {
        request: fromFixture(root, { "index.html": "<link rel=\"icon\" href=\"assets/icon.png\">" }),
        attempts: 1, delayMs: 0, onProgress: () => {},
      }),
      /index\.html: live content differs/,
    );
  } finally { await rm(root, { recursive: true, force: true }); }
});
test("missing deployed JS is reported, not silently accepted", async () => {
  const root = await fixture();
  try {
    await assert.rejects(
      verifyDeployment(root, "https://m1nsook.github.io/paglora-docs/", {
        request: async url => url.includes("0123456789abcdef.js")
          ? new Response("Missing", { status: 404 }) : fromFixture(root)(url),
        attempts: 1, delayMs: 0, onProgress: () => {},
      }), /HTTP 404/,
    );
  } finally { await rm(root, { recursive: true, force: true }); }
});
