# Pages and navigation

Every Paglora documentation site has an **Overview** page, stored as `docs/index.md`. Other pages are individual Markdown files under `docs/`.

## Organize your site

Use the **Pages** sidebar to create, rename, duplicate, reorder, and delete pages. You can mark pages public or private.

For each page, select a **Navigation group** in the Properties panel. Pages with matching adjacent group names appear under the same section heading in the published sidebar.

For example, this documentation uses **Getting Started**, **Studio**, and **Reference** sections.

## Page layouts

| Layout | Best for |
| --- | --- |
| Docs | Guides with sidebar navigation and table of contents |
| Wide | Documentation that needs more article width |
| Landing | Full-width introductory content |

## Private pages

Private pages are excluded from the exported website and its navigation. The Overview page always remains public.

> [!WARNING]
> Private is an export setting, not access control for arbitrary files you upload yourself. Only upload Paglora's generated static-site output.

## Link between pages

Use the source Markdown filename, such as `[Studio](studio.md)`. Paglora converts supported internal `.md` links to their exported `.html` counterparts.

Next: [Customize and publish](publishing.md).
