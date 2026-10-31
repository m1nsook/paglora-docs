# Paglora-authored documentation project

`project/paglora-docs/` is the **real Paglora v1 project** powering the official docs. Its Markdown pages and `pages.json` drive navigation; `site.json` and `theme/custom.css` control the website.

The source repository is **public**. The GitHub Pages website is not live until the generated export is uploaded and deployed.

## Validate with the released CLI

From the repository root:

```powershell
bunx --bun paglora@0.0.1-alpha.3 validate ./project/paglora-docs
bunx --bun paglora@0.0.1-alpha.3 inspect ./project/paglora-docs
```

These commands do not build or publish a website. The [validation workflow](../.github/workflows/validate-project.yml) runs the pinned CLI automatically.

## Open in Studio

The current desktop build discovers projects under its own app data `projects/` folder. Open **Settings → Local project storage** and copy the entire `project/paglora-docs/` directory there, preserving its name and subdirectories. Open **Paglora Docs** from Studio.

## Build and deploy

1. Select **Website → Build static site** in Studio.
2. Confirm the publishing report, check links, and test the generated HTML/CSS/JavaScript via HTTP(S).
3. The default `siteUrl` in `site.json` is `https://m1nsook.github.io/paglora-docs/`, including the repository path. If the official domain changes, update the setting in **Design site** before rebuilding.
4. Place only the generated export files in the top-level **`site/`** directory of this repository, with `site/index.html` at its root; remove an older export before copying.
5. Commit and push the generated files with GitHub Desktop. The Pages workflow publishes the `site/` directory, provided **Settings → Pages → Source** is set to **GitHub Actions**.

Never copy the editable `project/` or engineering `reference/` directories into `site/`.

## Related files

The [`reference/`](../reference/) directory contains engineering history. It is visible in this **public repository** but intentionally excluded from the deployed docs website.
