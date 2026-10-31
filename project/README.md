# Paglora-authored documentation project

`project/paglora-docs/` is the **real Paglora v1 project** powering the official docs. Its Markdown pages and `pages.json` drive navigation; `site.json` and `theme/custom.css` control the website.

The source repository is **public** and the generated website is [live on GitHub Pages](https://m1nsook.github.io/paglora-docs/). Changes to this source project will not appear on the live site until you rebuild and commit the generated `site/` export.

## Validate with the released CLI

From the repository root:

```powershell
bunx --bun paglora@0.0.1-alpha.3 validate ./project/paglora-docs
bunx --bun paglora@0.0.1-alpha.3 inspect ./project/paglora-docs
```

These commands do not build or publish a website. The [validation workflow](../.github/workflows/validate-project.yml) runs the pinned CLI automatically.

## Synchronize the repo, Studio, and generated export

The project saved in local Paglora Studio is **not** automatically connected to GitHub. Never copy an older Studio project over newer documentation without checking its changes. Use GitHub Desktop to update this repository first.

From the docs repository's root in **Windows PowerShell**:

```powershell
# Before editing: back up your local Studio project and import current repository source
powershell -ExecutionPolicy Bypass -File .\\scripts\\sync-from-studio.ps1 -Mode Install

# After editing and choosing Website -> Build static site:
powershell -ExecutionPolicy Bypass -File .\\scripts\\sync-from-studio.ps1 -Mode Collect -ExportPath "C:\\path\\to\\your\\export"
```

The second command requires the actual generated export path shown by Paglora Desktop. It backs up and replaces both the repository source `project/paglora-docs/` and the complete `site/` export. Review the changes in GitHub Desktop, commit and **Push origin**. GitHub Actions then deploys `site/`.

## Open in Studio

The current desktop build discovers projects under its own app data `projects/` folder. Open **Settings → Local project storage** and copy the entire `project/paglora-docs/` directory there, preserving its name and subdirectories. Open **Paglora Docs** from Studio.

## Source-based automatic GitHub Pages builds

After the headless workflow is enabled, updating `project/paglora-docs/` on `main` **builds and publishes the website in GitHub Actions**, without a running Studio. The runner uses the shared Paglora Rust site renderer rather than reimplementing layouts and palettes. You can also use Actions → **Build and deploy Paglora Docs from source** to run it manually.

Tracked `site/` is a legacy snapshot and is no longer the normal CI deployment source. The old `deploy-pages.yml` workflow remains manual-only for rollback. When editing through Studio, you still need to synchronize the saved project back to `project/paglora-docs/` before GitHub can rebuild it.

## Build and deploy

1. Open the latest Paglora Desktop source, select **Website → Build static site** in Studio, and review the publishing report.
2. Confirm the publishing report, check links, and test the generated HTML/CSS/JavaScript via HTTP(S).
3. The default `siteUrl` in `site.json` is `https://m1nsook.github.io/paglora-docs/`, including the repository path. If the official domain changes, update the setting in **Design site** before rebuilding.
4. Update both the edited source project and the static website export. The `Collect` command above performs both copies with backups; for a manual update, replace both `project/paglora-docs/` and `site/`.
5. Commit and push the generated files with GitHub Desktop. The Pages workflow publishes the `site/` directory, provided **Settings → Pages → Source** is set to **GitHub Actions**.

Never copy the editable `project/` or engineering `reference/` directories into `site/`.

## Related files

The [`reference/`](../reference/) directory contains engineering history. It is visible in this **public repository** but intentionally excluded from the deployed docs website.
