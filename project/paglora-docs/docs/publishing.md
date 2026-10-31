# Publishing a static website

Paglora produces portable HTML, CSS, fonts, local images, and minified browser JavaScript. Visitors do not need a Paglora account or server.

## Build from Studio

1. Save your documentation.
2. In **Pages**, confirm which pages are **Public**.
3. Open **Design site** to set navigation, appearance, accent, language, and optionally a published HTTPS site URL.
4. Review the layout in **Preview site**.
5. Choose **Website → Build static site**.

While building, Studio first reports actual counts of parsed public Markdown pages, then measured native progress as Rust validates HTML, verifies/copies public images, generates the search index, and writes static pages. Final atomic installation stays indeterminate; Paglora does not invent overall percentages. Project open and backup import/export similarly show a busy state instead of implying completion prematurely.

A generated directory can contain:

```text
index.html
studio.html
publishing.html
styles.css
paglora.js
paglora-search.js
search-index.json
sitemap.xml          (only if a published site URL is configured)
custom.css           (if configured)
assets/              (if a public page, published CSS or logo uses local images)
fonts/               (default Geist font and license)
licenses/            (bundled MiniSearch MIT notice)
```

Exact page HTML filenames follow your public page IDs. The exporter includes **only public pages**; private pages are also omitted from site navigation, search and the sitemap.

## Host the generated files

Upload the **contents of the generated export folder**, not the original project source. Keep the scripts, JSON, fonts, licenses, and any generated `assets/` together with the pages.

GitHub Pages and other ordinary static hosts work. Serve through **HTTP(S)**: browser restrictions on `file://` can block loading `search-index.json`.

> [!IMPORTANT]
> A private page's Markdown may still exist in your **local project**. Never publish the entire project or the engineering `reference/` directory.

## GitHub Pages project sites

If your Pages URL is `https://yourname.github.io/repository/`, include **`/repository/`** when configuring **Published site URL**. Paglora uses this root for canonical links and the optional `sitemap.xml`. Rebuild after changing the URL.

Publishing remains a separate step; Paglora does not automatically commit or deploy your output to GitHub Pages.

## Test the real website

Studio's canvas disables runtime scripts. Before announcing a deployment, verify the hosted website's Search button and Ctrl+K, appearance switching, code-copy controls, images, mobile navigation, and internal links. Check that private pages do not appear in the generated output.

See [Local images](images.md), [Language and SEO](language-seo.md), and [Troubleshooting](troubleshooting.md).
