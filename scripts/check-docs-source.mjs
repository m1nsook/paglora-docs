import { readFileSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const project = join(root, "project", "paglora-docs");
const pages = JSON.parse(readFileSync(join(project, "pages.json"), "utf8")).pages;
const docDir = join(project, "docs");
const docs = readdirSync(docDir).filter(name => name.endsWith(".md"));
const issues = [];
if (!pages.some(page => page.id === "translations" && page.isPublic)) issues.push("Missing public Translate Paglora navigation entry");
for (const page of pages.filter(x => x.isPublic)) if (!docs.includes(page.id+".md")) issues.push("Missing public page: "+page.id);
for (const doc of docs) {
  const body = readFileSync(join(docDir, doc), "utf8");
  if (/^>\s*\\\[!(?:NOTE|TIP|CARD|STEPS|WARNING|IMPORTANT|CAUTION)\\\]/m.test(body)) issues.push(doc+": escaped Markdown marker (must be [!NOTE], not \\[!NOTE\\])");
  if (/still private during development|GitHub Pages has not been deployed|still private and not publicly hosted/i.test(body)) issues.push(doc+": stale private/deployment claim");
}
if (issues.length) { console.error(issues.join("\n")); process.exitCode = 1; }
else console.log("Docs source checks passed. Remember to rebuild and commit site/ to update GitHub Pages.");
