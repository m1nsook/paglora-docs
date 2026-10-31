# Build documentation with Paglora

Paglora is a **free, open-source, local-first documentation studio**. Write Markdown, shape your website visually, and export static files to host anywhere without running a Paglora server.

**This documentation is itself a Paglora project.** The pages, navigation and stylesheet in this private repository will become the public Paglora docs and live demo when GitHub Pages is ready.

> [!NOTE]
> The Windows Desktop Studio is in active development and currently runs from source. The separate npm CLI is available as **`paglora@0.0.1-alpha.3`**; it manages local projects but does not build sites.

## Start here

- [Install and run Paglora Desktop](installation.md)
- [Create your first project](first-project.md)
- [What's new in the October development sprint](changes.md)
- [Explore the Studio canvas](studio.md)
- [Organize pages and navigation](pages.md)

## Site features

- [Search, light/dark appearance and reading controls](search.md)
- [Import local images and logos](images.md)
- [Configure document language and SEO](language-seo.md)
- [Build and publish a static website](publishing.md)

## What Paglora offers today

- **Local editing:** Tiptap for Markdown, a visual canvas, and Monaco for project-owned CSS.
- **Portable output:** HTML, CSS, bundled fonts, and minified interactive scripts.
- **Document navigation:** collapsible sidebar groups, table of contents, breadcrumbs and page links.
- **Offline browser search:** bundled MiniSearch, typo-tolerant matching and CJK substring support.
- **Site design:** responsive widths, light/dark/system modes, a custom accent, and a document-language setting.
- **Selective publishing:** only public pages, their referenced local assets, and public metadata are exported.

## Reference and support

The [CLI guide](cli.md) explains `init`, `inspect`, and `validate`. Use [Troubleshooting](troubleshooting.md) for common export and preview problems.

Planned features such as a full drag-and-drop website builder, user-authored TSX/MDX compilation, and one-click deployment are **not yet implemented**.
