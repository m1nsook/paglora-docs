# What's new: October 2026

Paglora made substantial progress during October 30–31. These features describe the **current development source**, not a stable downloadable Windows installer.

## Desktop Studio 0.2.0

The `0.2.0` source milestone includes a **publishing report** after **Website → Build static site**, with:

- Counts of public pages exported and private pages excluded.
- A count of local images included in the successful export.
- Deduplicated warnings for public-page links targeting missing or private pages.
- Reminder to test browser interactions over HTTP(S) instead of `file://`.

A warning does not silently change source content or turn private pages public.

## Studio authoring and reliability

- Monaco Source workspace supports multiple project-owned CSS files, their explicit preview/export order, and safe page/site metadata edit forms.
- Canvas supports verified duplicate plain-text heading/paragraph edits; uncertain complex structures are not automatically rewritten.
- The component library has Note, Tip, Important, Warning, Caution and Heading 3 plus drag-to-editor insertion.
- The image drawer can review and move unused images to recoverable project storage with exact typed confirmation and Restore; portable backups retain CSS sources and recovery images.
- Live Theme Designer, Monaco Source preview and public Preview use persistent buffers rather than exposing a white iframe during document refresh.
- Build stages show real native validation, asset and file counts, not estimated installation percentages.
- Richer authoring has a References builder producing editable Markdown from a small set of basic web bibliography styles.

## Website design

- Classic, Inset and Reading site layouts, with compatibility defaults for existing projects.
- Original, Graphite, Lavender and Linen site palettes for light/dark/system appearance.
- Independent accent selection in all modes and optional project-owned CSS.
- Docs, Wide and Landing layouts remain available per page.

## Publishing and runtime

- Bundled, minified browser scripts and **MiniSearch**, with prefix and typo-tolerant matching plus CJK substring support.
- Cards, callouts, code-copy controls, task lists, collapsible disclosures and responsive navigation.
- Import of PNG, JPEG, WebP and GIF files (up to 5 MiB).
- Public-page-only image inclusion and search index generation.
- Document-language options (including Arabic RTL) and optional canonical URLs and sitemap.

## Community translation and design

- Community language packs are developed openly in [paglora-lang](https://github.com/m1nsook/paglora-lang), with English fallback and automated validation.
- Initial English, Polish and Korean translations cover Studio settings, page management, editor controls and the visual Design site panel.
- The generated website's navigation, appearance/copy controls and callout headings can use reviewed translation messages.
- Newly bundled reviewed language packs automatically join the existing document-language options, including RTL direction metadata.
- Contributors can generate an empty locale catalog and report translation key coverage.

## Public npm CLI

**`paglora@0.0.1-alpha.3`** is published under the npm `alpha` tag, with `init`, `inspect` and `validate`. It **does not build websites**; export currently requires Desktop Studio.

## What still needs work

Manual Windows UI review and deployed-website checks remain necessary. Arbitrary MDX/TSX execution, one-click hosting deployment, full freeform canvas, and a stable Windows installer are **not** delivered yet.

Next: [Design site](design.md), [Markdown building blocks](components.md), and [Publishing](publishing.md).