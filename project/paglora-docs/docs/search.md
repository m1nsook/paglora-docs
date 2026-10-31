# Search and appearance

Paglora exports readable static HTML plus two small, minified JavaScript files for client-side enhancements. No hosted search service or visitor account is required.

## Offline search with MiniSearch

On a published site, select **Search** or press **Ctrl+K** (on macOS, **Cmd+K**). Enter a title, phrase, or word from a public page. Search supports prefix matches, typo-tolerant fallback, and substring matching for Korean, Japanese, and Chinese text.

Use **Up/Down** to navigate results, **Home/End** to jump between results, **Enter** to open a page, and **Escape** to close. Keyboard selection and loading/error messages are announced accessibly. The dialog can retry if loading fails.

The static export contains `search-index.json` with **only public pages**. The `paglora-search.js` browser bundle includes MiniSearch; no external CDN is needed. Search runs in the visitor's browser. The package's MIT notice is included in the exported `licenses/` folder.

> [!IMPORTANT]
> A page marked private is excluded from navigation, search, the sitemap, and published HTML. This does not make project files safe to upload: only deploy the **generated export**, not the editable project directory.

## Appearance and accent

The published header's **Appearance** control cycles through **Light**, **Dark**, and **System**. The preference is remembered where browser storage permits and can synchronize between open tabs on the same site.

Choose your site's default appearance and **Website accent color** in **Design site**. The custom accent applies to both light and dark palettes, including system-dark mode, in current source builds. Project-owned `theme/custom.css` can override the built-in styles.

The published site's appearance is independent of the desktop app's appearance.

## Page reading improvements

- The **On this page** outline tracks nearby headings in desktop and mobile views.
- H2, H3 and H4 headings offer shareable `#` permalinks, including Unicode headings.
- Code blocks have **Copy** controls with accessible progress and success/failure feedback.
- Markdown task lists and collapsible disclosure blocks render without an additional website framework.
- Callouts support `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, and `CAUTION`.

## Preview versus published website

Studio's inline canvas deliberately disables browser scripts for safety. The static HTML and CSS are previewed, but live search, appearance switching, and code-copy controls must be tested in the **exported** website served over HTTP(S). Opening `index.html` through `file://` can prevent the search index from loading.

Keep `paglora.js`, `paglora-search.js`, `search-index.json`, `styles.css`, and the rest of the export together. Do not upload just the HTML files.

Next: [Local images](images.md), [Language and SEO](language-seo.md), or [Publishing](publishing.md).
