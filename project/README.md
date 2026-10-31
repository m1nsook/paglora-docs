# Paglora-authored documentation project

`project/paglora-docs/` is the **real Paglora v1 project** for the official docs site. Its Markdown pages and `pages.json` drive the user-facing navigation; `site.json` and `theme/custom.css` configure appearance.

The docs are a development draft in a **private repository**. There is no public GitHub Pages deployment yet.

## Validate with the released CLI

From the **repository root**:

```powershell
bunx --bun paglora@0.0.1-alpha.3 validate ./project/paglora-docs
bunx --bun paglora@0.0.1-alpha.3 inspect ./project/paglora-docs
```

These commands do not build or publish a website. The [validation workflow](../.github/workflows/validate-project.yml) runs the same published CLI automatically.

## Open in Studio

The current desktop build discovers projects in its own app data `projects/` folder. Open **Settings → Local project storage** and copy the entire `project/paglora-docs/` directory to that location, preserving its name and subdirectories. You can then open **Paglora Docs** from the Studio.

## Build the site

Choose **Website → Build static site** in Studio. Review exported HTML, runtime JavaScript, search, images, language metadata and appearance. Publish only the generated static output, **not** `project/` or `reference/`.

When GitHub Pages is ready, set the exact HTTPS root and trailing slash in **Design site → Published site URL**, then rebuild. The current `site.json` intentionally leaves this field blank until the deployment URL is confirmed.

## Related files

The [`reference/`](../reference/) directory is retained for engineering history and should not be exposed as public documentation.
