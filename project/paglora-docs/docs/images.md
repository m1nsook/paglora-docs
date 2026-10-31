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

Studio's **Images** drawer offers a searchable project media browser with previews, alt text, reuse, import, Copy Markdown and Insert. Use **Edit** or **Split** mode to insert an image at the current cursor; Copy Markdown remains available separately.

## CSS background images

Use the actual imported asset path inside a project stylesheet:

```css
.docs .hero { background-image: url("assets/my-diagram.png"); }
```

Images referenced by a published stylesheet are packaged with the site just like public-page images. The script-disabled preview inlines validated images so the CSS background appears even without a local HTTP server. Other asset paths, unsafe traversal paths, and executable SVG imports are not supported.

## What gets published?

The static exporter copies only images referenced by **public pages**, **published CSS**, or the configured **logo**. Unreferenced images and images referenced only by private Markdown are left inside the project. This keeps static exports smaller and avoids including draft media.

## Reference audit and recoverable cleanup

From **Images**, use **Audit image references** to see textual references across saved public/private Markdown, registered theme CSS and the configured logo. This is a read-only report; a missing reference is **not proof that an image can be removed**.

Choose **Review unused images** for a stricter native check. Paglora flushes the active editor's autosave, scans current saved project sources and candidate image contents, and refuses cleanup if required source files are missing or unsafe. The review is intentionally conservative: it may retain an image rather than risk an incorrect removal.

To move a candidate, select **Move to recovery** and type its *exact filename*. Rust repeats the source scan and file verification at confirmation. The image moves into the same project's `removed-assets/` directory; it is **not permanently deleted**. Select **Restore** to move it back. Restoration refuses to overwrite an image with the same name.

Portable `.paglora` project backups include both registered source stylesheets and recoverable images. Recoverable images are never published. This cleanup checks supported saved Paglora sources, not arbitrary external app files or uncommitted changes made outside Studio.

> [!CAUTION]
> Check the candidate list before confirming. Do not treat a cleanup suggestion as a guarantee for undocumented external references. Never delete `removed-assets/` manually if you might want to restore an image.

> [!WARNING]
> Don't publish the entire Paglora project folder. It can contain private Markdown and unused assets. Publish only the generated website output.

## If an image is missing

Check that the filename matches the imported path exactly, that the page is public, and that you rebuilt the website after changing it. Upload the entire `assets/` folder from the latest **generated export** along with the HTML, CSS, and scripts.

Next: [Publishing a website](publishing.md) or [Troubleshooting](troubleshooting.md).
