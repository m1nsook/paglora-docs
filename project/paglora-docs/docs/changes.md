# What's new: October 2026

Paglora made substantial progress during October 30–31. These features describe the **current development source**, not a stable downloadable Windows installer.

## Desktop Studio 0.2.0

The `0.2.0` source milestone includes a **publishing report** after **Website → Build static site**, with:

- Counts of public pages exported and private pages excluded.
- A count of local images included in the successful export.
- Deduplicated warnings for public-page links targeting missing or private pages.
- Reminder to test browser interactions over HTTP(S) instead of `file://`.

A warning does not silently change source content or turn private pages public.

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

## Community translation infrastructure

- The separate [paglora-lang](https://github.com/m1nsook/paglora-lang) repository now accepts fork-based translation pull requests and language requests through issue forms.
- Initial catalog keys cover Studio interface elements, documentation-site chrome, and built-in callout labels, with English fallback for missing strings.
- Studio supports a local language preference in Settings; only the migrated UI surfaces are translated so far.
- Reviewed catalogs are bundled offline. Document Markdown remains user-authored and is never automatically translated.

## Public npm CLI

**`paglora@0.0.1-alpha.3`** is published under the npm `alpha` tag, with `init`, `inspect` and `validate`. It **does not build websites**; export currently requires Desktop Studio.

## What still needs work

Manual Windows UI review and deployed-website checks remain necessary. Arbitrary MDX/TSX execution, one-click hosting deployment, full freeform canvas, and a stable Windows installer are **not** delivered yet.

Next: [Design site](design.md), [Markdown building blocks](components.md), and [Publishing](publishing.md).