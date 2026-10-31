# Paglora documentation

This **public repository** contains the official Paglora documentation source. The website is built **with [Paglora](https://github.com/m1nsook/paglora) itself** and will be hosted on GitHub Pages once a tested static export is available.

## Repository layout

- [`project/paglora-docs/`](project/paglora-docs/) — the real Paglora v1 documentation project, including Markdown, page manifest, site settings, and custom CSS.
- [`project/README.md`](project/README.md) — directions for validating and opening the project.
- [`reference/`](reference/) — publicly readable historical engineering/design notes in the repository, **not** pages on the generated website.
- [`.github/workflows/validate-project.yml`](.github/workflows/validate-project.yml) — project validation with the released npm CLI.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) — deploys **only** the generated `site/` export to Pages when it exists.

## Current status — October 31, 2026

The source repository is **public**. The GitHub Pages website is **not deployed yet**: source Markdown is not the same as a built site.

The current [Paglora source](https://github.com/m1nsook/paglora) includes offline MiniSearch, local images, multilingual metadata, canonical URLs/sitemaps, coordinated light/dark site palettes, and a desktop 0.2.0 publishing report. The public npm CLI **`paglora@0.0.1-alpha.3`** remains available under the `alpha` tag.

The CLI can create, inspect and validate projects; it **does not build websites**. Static export currently requires Paglora Desktop running from source on Windows.

## Validate the docs source

From the repository root:

```powershell
bunx --bun paglora@alpha validate ./project/paglora-docs
bunx --bun paglora@alpha inspect ./project/paglora-docs
```

GitHub Actions pins `paglora@0.0.1-alpha.3` for reproducible project validation.

## Publish on GitHub Pages

**Site root:** `https://m1nsook.github.io/paglora-docs/`

1. In this repository's **Settings → Pages**, choose **GitHub Actions** as the source. Do not select `main` under **Deploy from a branch**.
2. Use GitHub Desktop to update the repository to `main`. Open the full `project/paglora-docs/` project in Paglora Desktop (see [project instructions](project/README.md)).
3. In Studio choose **Website → Build static site**. Check the publishing report and test the generated site over HTTP(S). The project already configures the intended Pages URL for canonical links and sitemap.
4. In the repository's root create a folder named **`site/`**. Copy the **contents** of the generated static export into it (so `site/index.html` exists). For future builds, delete the old `site/` contents first so deleted pages don't linger.
5. In GitHub Desktop, commit those generated files on `main`, then **Push origin**. The [Pages workflow](.github/workflows/deploy-pages.yml) runs only when `site/` files change (or you start it manually under Actions).
6. Confirm deployment status in **Actions** and open your Pages URL. Test search, appearance, navigation, images, and code-copy buttons on the real site.

The workflow checks for an actual Paglora export before publishing and never deploys `project/` or `reference/`.

**Do not upload the raw editable project source to `site/`.** Project source, private drafts, and engineering notes can appear in the public repo, but should not be copied into the public website export.

## Collaboration

The primary application [m1nsook/paglora](https://github.com/m1nsook/paglora) remains the authoritative location for code, releases, and issues. For a public but maintainer-managed docs repository, use **Settings → General → Features → Pull requests → Collaborators only** and disable unnecessary repository features. This does not stop people from reading, downloading, or forking public source.
