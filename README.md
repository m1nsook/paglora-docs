# Paglora documentation

This **public repository** contains the official Paglora documentation source and its independently generated static site. The website is built **with [Paglora](https://github.com/m1nsook/paglora) itself** and is [live on GitHub Pages](https://m1nsook.github.io/paglora-docs/).

## Official repositories

| Repository | Role |
| --- | --- |
| [Paglora](https://github.com/m1nsook/paglora) | Main application, npm CLI, releases and issues |
| [Paglora Docs](https://github.com/m1nsook/paglora-docs) | This project source and the generated GitHub Pages site |
| [Paglora Languages](https://github.com/m1nsook/paglora-lang) | Community translation packs and contributions |

**Live site:** https://m1nsook.github.io/paglora-docs/

## Repository layout

- [`project/paglora-docs/`](project/paglora-docs/) — the real Paglora v1 documentation project, including Markdown, page manifest, site settings, and custom CSS.
- [`project/README.md`](project/README.md) — directions for validating and opening the project.
- [`site/`](site/) — a legacy generated website snapshot, available for a manual rollback; the normal workflow builds from the source project.
- [`reference/`](reference/) — publicly readable historical engineering/design notes in the repository, **not** pages on the generated website.
- [`.github/workflows/validate-project.yml`](.github/workflows/validate-project.yml) — project validation with the released npm CLI.
- [`.github/workflows/build-project-pages.yml`](.github/workflows/build-project-pages.yml) — rebuilds from the source project on pushes to main using Paglora's headless Rust renderer.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) — **manual-only** deployment of the legacy `site/` snapshot for rollback.

## Current status — October 31, 2026

The source repository is **public**, and the first generated website is [deployed on GitHub Pages](https://m1nsook.github.io/paglora-docs/). The source-driven workflow builds and deploys directly from `project/paglora-docs/` on pushes to main. Studio changes remain local until synchronized into this repository.

The current [Paglora source](https://github.com/m1nsook/paglora) includes offline MiniSearch, local images, multilingual metadata, canonical URLs/sitemaps, coordinated light/dark site palettes, and a desktop 0.2.0 publishing report. The public npm CLI **`paglora@0.0.1-alpha.3`** remains available under the `alpha` tag.

The npm CLI can create, inspect and validate projects; it **does not build websites**. Static exports use Paglora Desktop or the separate headless Rust builder used by this repository's GitHub Actions workflow.

## Validate the docs source

From the repository root:

```powershell
bunx --bun paglora@alpha validate ./project/paglora-docs
bunx --bun paglora@alpha inspect ./project/paglora-docs
```

GitHub Actions pins `paglora@0.0.1-alpha.3` for reproducible project validation.

## Why a saved Studio design doesn't automatically update the website

**Design site → Save layout updates only the local Tauri project.** It does not update the GitHub repository or the deployed site.

There are three distinct locations: your **local Studio project**, this repository's editable **`project/paglora-docs/`**, and the legacy generated **`site/`** snapshot. Normal GitHub Pages deployment is built from the project source, while the snapshot workflow is manual-only. The theme changes from the October 31 Studio export did appear in generated HTML, but older local project content simultaneously overwrote newer docs source. Install the repository's newest project into Studio **before** editing to avoid losing recently added pages.

Use the [Windows sync helper](scripts/sync-from-studio.ps1) to back up and install the latest project, then collect both the saved Studio project and rebuilt export into this checkout. The helper never pushes to GitHub or deploys for you.

## Unattended source builds

The [headless build workflow](.github/workflows/build-project-pages.yml) is configured to **build and deploy directly from `project/paglora-docs/` on every push to `main` that changes project files**. It checks out the Paglora source, sanitizes public Markdown, uses the same Rust HTML/site renderer as Studio, and deploys the generated artifact. No desktop session needs to remain running.

You can also start **Actions → Build and deploy Paglora Docs from source → Run workflow** manually. `site/` remains a legacy tracked snapshot, and the old deployment workflow becomes manual-only so stale files cannot accidentally overwrite a newer source build.

**Important:** Saving changes in Studio is still local. Copy the edited Markdown, site settings, and images back into `project/paglora-docs/` using the sync helper, then push through GitHub Desktop. Only repository source pushes trigger the unattended build. The new workflow must pass its first production run before this is considered verified.
## Legacy manual snapshot deployment (rollback only)

**Site root:** `https://m1nsook.github.io/paglora-docs/`

1. GitHub Pages is already configured to deploy via **GitHub Actions**; do not change it to branch publishing.
2. Use GitHub Desktop to update the repository to `main`. Open the full `project/paglora-docs/` project in Paglora Desktop (see [project instructions](project/README.md)).
3. In Studio choose **Website → Build static site**. Check the publishing report and test the generated site over HTTP(S). The project already configures the intended Pages URL for canonical links and sitemap.
4. In the repository's root create a folder named **`site/`**. Copy the **contents** of the generated static export into it (so `site/index.html` exists). For future builds, delete the old `site/` contents first so deleted pages don't linger.
5. In GitHub Desktop, commit those generated files on `main`, then **Push origin**. The [Pages workflow](.github/workflows/deploy-pages.yml) runs only when `site/` files change (or you start it manually under Actions).
6. Confirm deployment status in **Actions** and open your Pages URL. Test search, appearance, navigation, images, and code-copy buttons on the real site.

The workflow checks for an actual Paglora export before publishing and never deploys `project/` or `reference/`.

**Do not upload the raw editable project source to `site/`.** Project source, private drafts, and engineering notes can appear in the public repo, but should not be copied into the public website export.

## Collaboration

The primary application [m1nsook/paglora](https://github.com/m1nsook/paglora) remains the authoritative location for code, releases, and issues. For a public but maintainer-managed docs repository, use **Settings → General → Features → Pull requests → Collaborators only** and disable unnecessary repository features. This does not stop people from reading, downloading, or forking public source.

## Component gallery

Explore the [Paglora Components gallery](https://m1nsook.github.io/paglora-docs/components.html): 14 native Markdown blocks and patterns with **live previews** and **copyable code**. The gallery is part of the Paglora documentation source, and the headless workflow deploys it automatically on source pushes. It is not an additional React component dependency.
