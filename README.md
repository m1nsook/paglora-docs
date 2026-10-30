# Paglora documentation

This repository will host the **official Paglora documentation website** on GitHub Pages. The website will be **built using [Paglora](https://github.com/m1nsook/paglora) itself**, so visitors can learn to use the app while exploring a real site created with it.

## Goals

- **User documentation:** getting started, the editor, pages, visual layouts, site themes, project files, static exporting, troubleshooting and future CLI capabilities.
- **Live product demo:** the published documentation site demonstrates Paglora's actual output, layout options, navigation, responsive behavior and styling.
- **Dogfooding:** author and maintain this website as a Paglora project, rather than building it with an unrelated documentation framework.

## Current status

The repository is **private during development**. Its initial [`reference/`](reference/) directory contains the latest engineering notes synchronized from the application repository. These are historical/technical references, **not** the finished public documentation pages.

The Paglora project source and its generated static site will be added when ready. Keep them distinct from the reference notes; do not publish private source material accidentally.

## Publication plan

1. Create and maintain the documentation content in Paglora Desktop.
2. Preview the site in Paglora and verify that published pages and the real static export match.
3. Publish the generated output on GitHub Pages, not the raw reference notes. Deployment automation can follow once Paglora's build workflow supports it.
4. Make the documentation publicly accessible when ready.

The core [Paglora application repository](https://github.com/m1nsook/paglora) remains the source of truth for application code, issues, discussions and compatibility contracts. In particular, individual Paglora projects still use their **own** `docs/*.md` directories: those project storage files are not related to the old repository documentation directory.
