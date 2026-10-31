# Pages and navigation

A Paglora project has an **Overview** page at `docs/index.md`. Additional pages live under `docs/`, with their IDs, order, layout and visibility defined in `pages.json`.

## Organize pages

Use the **Pages** sidebar to create, rename, duplicate, reorder, and delete pages. Set each page's navigation group and visibility in its Properties panel. Adjacent pages in the same group are displayed together in a collapsible published sidebar.

This documentation groups topics under **Getting Started**, **Studio**, **Features**, **Publishing**, and **Reference**.

## Page layouts

| Layout | Best for |
| --- | --- |
| Docs | Guides with sidebar navigation and a table of contents |
| Wide | Wider documentation content |
| Landing | Full-width introductory or overview pages |

## Public and private

A private page is omitted from exported HTML, sidebar links, local search and generated `sitemap.xml`. **Overview always remains public**, even if a manually edited manifest tries to make it private.

> [!WARNING]
> Privacy is a rule for Paglora's **generated export**. A raw project upload can still expose private Markdown and unreferenced assets. Do not deploy your project source folder.

## Links

Link to other project pages using their Markdown filenames, such as `[Studio](studio.md)`. Paglora rewrites supported `.md` links and extensionless internal Markdown links to the corresponding exported `.html` pages.

For published headings, H2/H3/H4 anchors are shareable and support Unicode text.

Next: [Studio](studio.md) or [Publishing](publishing.md).
