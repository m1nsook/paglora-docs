# Your first project

Use the Paglora Desktop dashboard to create and publish a local documentation project.

## 1. Create

Select **New project** in Paglora Desktop and name it (for example, *My Docs*). Paglora creates a public Overview page and stores the project under its local application data directory.

## 2. Write Markdown

Use **Edit** for the rich-text editor and automatically saved local content. Switch to **Split** for an editor-and-site view or **Canvas** to focus on the rendered website.

Add ordinary Markdown, tables, supported callouts, code blocks and links. Public websites also enhance code blocks with copy buttons and headings with permalinks.

## 3. Organize pages

In **Pages**, create additional guides. Assign a navigation group, choose a **Docs**, **Wide**, or **Landing** layout, and mark draft pages **Private**. Overview must remain public.

## 4. Design the website

Open **Design site** to set the header, navigation, links, accent, default appearance, document language, and optional published site URL. Import a local PNG/JPEG/WebP/GIF **logo** if needed. Use **Source** to customize `theme/custom.css` through Monaco.

## 5. Export and test

Choose **Website → Build static site**. Paglora creates HTML, CSS, runtime JavaScript, `search-index.json`, fonts, and any referenced public local assets. If you configured a published HTTPS root, it also generates canonical links and a public-only sitemap.

Serve the export through HTTP(S) to test search, appearance and code-copy interactions; the Studio canvas intentionally runs without site JavaScript.

> [!IMPORTANT]
> Your original `docs/*.md` files are **source**, not the upload destination. Only publish the generated website files; the project folder can contain private drafts.

Next: [Studio](studio.md), [Local images](images.md), and [Publishing](publishing.md).
