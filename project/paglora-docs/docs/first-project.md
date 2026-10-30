# Your first project

Create a documentation website from the Studio dashboard.

## 1. Create

Open Paglora Desktop and select **New project**. Give it a name such as *My Docs*. Paglora creates an Overview page and stores the project in its local project directory.

## 2. Edit the page

Select the **Edit** mode to write and format Markdown using the rich-text editor. Your changes are automatically saved locally.

Use **Canvas** to see the generated website; use **Split** for the editor and website side by side.

## 3. Add pages

In the **Pages** sidebar, add additional pages for installation, features, guides, and troubleshooting. Configure each page's navigation group and layout in its **Properties** panel.

## 4. Customize

Use **Design site** for the website's theme and layout settings. Open **Source** to edit `theme/custom.css` with Monaco. Your CSS affects the preview and exported website.

## 5. Export

Select **Website → Build static site**. Paglora saves a folder with the generated HTML, CSS, and required font assets. Upload the **contents** of that folder to your static host.

> [!IMPORTANT]
> The project's `docs/*.md` files are source content. The generated website is separate and will be replaced by the next build.

Next: [Working with Studio](studio.md) and [Publishing](publishing.md).
