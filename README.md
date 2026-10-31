# Paglora documentation

This repository contains the **official Paglora documentation source**. Its website will be built **with [Paglora](https://github.com/m1nsook/paglora) itself** and hosted on GitHub Pages when ready, demonstrating what Paglora generates instead of using another documentation framework.

## Repository layout

- [`project/paglora-docs/`](project/paglora-docs/) — the **real Paglora v1 documentation project**, with public Markdown pages, `pages.json`, `site.json`, and `theme/custom.css`.
- [`project/README.md`](project/README.md) — instructions for validating and opening the project.
- [`reference/`](reference/) — historical engineering/design notes, **not** public website pages.
- [`.github/workflows/validate-project.yml`](.github/workflows/validate-project.yml) — validates the project source using the published npm CLI.

## Current status — October 31, 2026

The repository is **private during development**, and GitHub Pages is **not yet publicly deployed**. The Paglora-authored project is already present and includes getting-started, Studio, navigation, local images, search, language/SEO, publishing, troubleshooting, and CLI guides.

The current [Paglora source](https://github.com/m1nsook/paglora) includes an offline MiniSearch runtime, locally imported images, multilingual HTML metadata, optional canonical URLs/sitemap generation, and dark-mode accent handling. The npm CLI **`paglora@0.0.1-alpha.3`** is published under the `alpha` tag.

The CLI is for creating and validating projects; it **does not build websites**. Static export currently requires Paglora Desktop running from source on Windows.

## Validate the docs source

From this repository's root:

```powershell
bunx --bun paglora@alpha validate ./project/paglora-docs
bunx --bun paglora@alpha inspect ./project/paglora-docs
```

CI pins `paglora@0.0.1-alpha.3` for reproducible project validation.

## Publish later

1. Copy `project/paglora-docs/` into the Studio's local project folder (see [project instructions](project/README.md)).
2. Edit and preview the docs in Paglora Desktop.
3. Configure **Published site URL** once the final GitHub Pages URL is known, including any repository subpath.
4. Choose **Website → Build static site**.
5. Test the real export, then deploy **only its generated files** to GitHub Pages.

**Do not deploy `reference/` or the raw project source.** It can contain unpublished working material. Paglora's [main application repository](https://github.com/m1nsook/paglora) is the authoritative source for code, releases and issues.
