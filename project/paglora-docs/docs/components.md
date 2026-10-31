# Markdown building blocks

This page is a **live showcase of Paglora's own renderer**. Everything below is written in ordinary Markdown in the source project; the same blocks render in the Studio preview and the static export.

## Documentation cards

> [!CARD] A documentation card
> Use a card for a clear next action. Try [Design site](design.md) to change the site's layout and palette.

> [!CARD] A second route
> Explore [Publishing](publishing.md) to turn local source into portable static HTML.

Cards can be inserted through the **Card** tool in Studio's block palette or authored in Markdown with a blockquote starting `[!CARD] Title`.

## Callouts

> [!NOTE]
> Notes add context without interrupting the main guide.

> [!TIP]
> Tips highlight a convenient workflow or shortcut.

> [!IMPORTANT]
> Important messages flag a required step.

> [!WARNING]
> Warnings help avoid mistakes, such as uploading raw private project files.

> [!CAUTION]
> Use caution around operations that could affect published content.

Callouts use the GitHub-style `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, and `[!CAUTION]` markers at the beginning of a blockquote.

## Code blocks with Copy

Published code blocks include a **Copy** action; the Studio canvas shows code without running browser scripts.

```powershell
bun install
bun run desktop
```

```json
{
  "name": "Example Docs",
  "themeMode": "system",
  "accentColor": "#5B9EFF"
}
```

These commands launch the development Studio from the repository root. The JSON snippet is illustrative and not a complete project manifest.

## Tables and task lists

| Feature | Exported behavior |
| --- | --- |
| Public page | Appears in navigation and search |
| Private page | Excluded from published HTML and search |
| Page headings | Shareable permalinks in published content |

- [x] Write Markdown content
- [x] Choose the website design
- [ ] Test exported search and appearance through HTTP(S)
- [ ] Upload only the generated output

Task-list checkboxes are visual indicators, not editable tasks on the public website.

## Headings and navigation

The site's **On this page** outline reads page headings, and H2–H4 headings get shareable anchors on the exported website. For internal links, use Markdown such as `[Design site](design.md)`. Paglora resolves these links to exported `.html` pages.

## Source compatibility

Paglora supports Markdown and a deliberately limited set of documented block extensions. It does **not** compile arbitrary React components, MDX or TSX in exported docs yet. Insert native blocks in the Studio editor or edit the Markdown files directly.

Next: [Design site](design.md), [Pages and navigation](pages.md), or [Search and appearance](search.md).