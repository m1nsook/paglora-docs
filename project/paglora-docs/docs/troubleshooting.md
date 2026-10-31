# Troubleshooting

## My page does not appear after publishing

Check that it is **Public**, then rebuild and redeploy the export. Overview stays public. Private pages are excluded from HTML, navigation, `search-index.json` and the sitemap.

## My CLI project does not appear in Studio

The CLI can create a project in any new folder. Studio currently discovers local projects only under its configured application data `projects/` directory, displayed at **Settings → Local project storage**. Importing external project folders is not automatic yet.

## I changed the accent but dark mode still looks blue

Update to a current Paglora source build. An earlier exported-site stylesheet overrode user accents with blue in dark and system-dark mode. The newer renderer applies the selected **Design site → Website accent color** to light, dark and system appearances.

Save the site design, rebuild, and redeploy. If a custom `theme/custom.css` overrides `--brand`, check that CSS as well. Updating the app alone will not alter an already hosted export.

## Search is missing or shows no results

Make sure you uploaded `paglora-search.js` and `search-index.json` alongside the HTML. Only **public** pages are indexed. Search needs an HTTP(S) origin; opening the HTML via `file://` can block requests for its JSON index.

The search dialog offers a retry when loading fails. Korean, Japanese and Chinese queries have substring matching support; other languages use bundled MiniSearch with prefix and typo-tolerant matching.

## Search and appearance do not work inside Studio

The inline canvas intentionally disables generated-site JavaScript. To test interactive features, **build the site** and serve the exported output over HTTP(S). The visible canvas layout is not a substitute for browser interaction testing.

## A local image or logo is missing

Local imports accept **PNG, JPEG, WebP, and GIF** up to **5 MiB**. Check the `assets/...` filename, whether the page is public, and whether the latest generated `assets/` directory was uploaded. Unused or private-only images are intentionally omitted.

## My sitemap is missing or contains the wrong URL

Set **Published site URL** to the full HTTPS root **ending in a slash**. For GitHub Pages project hosting, include the repository segment (for example, `https://example.github.io/docs/`). Rebuild after changing the URL. Without a configured root, Paglora intentionally skips `sitemap.xml`.

## The exported website does not match the preview

Upload the entire latest export: page HTML files, `styles.css`, optional `custom.css`, scripts, JSON index, generated images, fonts and licenses. External Google Fonts or HTTPS images need network access. Test on the real deployed URL.

## npm commands fail in Windows PowerShell

If you see a message about `npm.ps1` being blocked by execution policy, use **`npm.cmd`** instead of `npm`. You do not need to disable PowerShell security.

## Text editing on the canvas is limited

Use **Edit** for links, lists and rich or nested Markdown. Canvas inline editing intentionally handles only supported simple blocks so it does not corrupt formatted source.

## Report an issue

Use the [Paglora issue tracker](https://github.com/m1nsook/paglora/issues). Include your build/version, OS, reproduction steps and relevant logs. Back up development projects before trying new builds.
