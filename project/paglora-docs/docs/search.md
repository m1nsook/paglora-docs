# Search and appearance

Paglora-generated static websites include interactive features while keeping their content as ordinary HTML and CSS.

## Search your documentation

Open the command-style search dialog using **Ctrl+K** (or **Cmd+K** on macOS). Type words from a public page's title or body, then use the **Up** and **Down** keys to choose a result and **Enter** to open it.

The search system uses `search-index.json` generated during **Build static site**. The index contains only pages configured as **Public**. Search runs in the visitor's browser; there is no requirement for a third-party search account or a backend.

> [!NOTE]
> The current release uses basic text matching and title-aware ranking. Full fuzzy matching, language-specific ranking and advanced indexing are planned improvements.

## Light, dark and system appearance

Use the **Appearance** control in the published website header to cycle between Light, Dark, and System modes. The chosen appearance is stored in the visitor's browser where browser storage is available.

This is independent of the Studio's appearance. Site colors and typography are still configurable in **Design site** and your project's `theme/custom.css`.

## Active table of contents

The **On this page** navigation highlights the active section as the reader scrolls. The underlying heading links keep working even if JavaScript is disabled.

## Why these features aren't in the Studio canvas

For safety, Paglora's current editor canvas disables scripts from the generated page. Site runtime interactions therefore need to be tested in the exported website served through HTTP(S), not in the edit canvas.

## Which files should I upload?

Keep `index.html`, other page HTML files, `styles.css`, `paglora.js`, `paglora-search.js`, and `search-index.json` together on your static host. Missing runtime files won't stop people reading the content, but they will disable their corresponding interactive features.

Next: [Publishing a website](publishing.md) or [Troubleshooting](troubleshooting.md).
