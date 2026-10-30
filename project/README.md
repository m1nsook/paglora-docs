# Paglora-authored documentation project

The source directory `project/paglora-docs/` is a real **Paglora v1 project**. It uses the public `paglora.json` and `pages.json` format, written as Markdown pages and first-party site settings/CSS.

This project is designed to become the official Paglora documentation site and live demo, eventually hosted on GitHub Pages. The repository is currently **private** and the content is a development draft. No site is deployed by this change.

## Validate with the public CLI

```powershell
bunx --bun paglora@0.0.1-alpha.2 validate ./project/paglora-docs
bunx --bun paglora@0.0.1-alpha.2 inspect ./project/paglora-docs
```

## Open in Paglora Studio

The desktop app currently discovers projects in its application data `projects/` directory. Copy `project/paglora-docs/` into the folder shown in **Settings → Local project storage** to open it in the Studio.

## Publish later

Use **Website → Build static site** from the Studio. Publish **only the generated static files** to GitHub Pages when the site is reviewed. Avoid publishing `reference/` or private source materials by mistake.

`reference/` holds engineering notes separately from user-facing pages.
