# Local images and logos

Paglora supports project-owned images for published documentation, without requiring a third-party image host.

## Import a local logo

1. Open your project and choose **Design site**.
2. Find **Logo image URL** and **Import a local logo image**.
3. Select a **PNG, JPEG, WebP, or GIF** file (up to **5 MiB**).
4. Save the site settings. The logo URL will point into your project's `assets/` folder.

You can also use a valid HTTPS image URL for the logo, but an externally hosted image requires the visitor's network to reach that host.

## Use local images in Markdown

Imported images live under your project's `assets/` folder. You can reference their returned path from a Markdown document:

```markdown
![Diagram of the documentation workflow](assets/my-diagram.png)
```

Use the actual `assets/...` path returned when you import the file. Paglora accepts flat, safe filenames and the supported PNG/JPEG/WebP/GIF image formats. SVG and arbitrary executable files are **not supported** as local imports.

The current UI exposes a local image importer for the **site logo**. A broader image library and drag-and-drop media workflow are still future improvements.

## What gets published?

The static exporter copies only local images referenced by **public pages** or the configured logo. Unreferenced local images and images referenced only by private pages are left in the project. This keeps static exports smaller and avoids accidentally including unused draft media.

> [!WARNING]
> Don't publish the entire Paglora project folder. It can contain private Markdown and unused assets. Publish only the generated website output.

## If an image is missing

Check that the filename matches the imported path exactly, that the page is public, and that you rebuilt the website after changing it. Upload the entire `assets/` folder from the latest **generated export** along with the HTML, CSS, and scripts.

Next: [Publishing a website](publishing.md) or [Troubleshooting](troubleshooting.md).
