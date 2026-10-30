# Publishing a static website

Paglora exports HTML and CSS that you can upload to a static website host. The published site doesn't need a Paglora subscription, account, or server runtime.

## Build from Studio

1. Save your documentation content.
2. Open **Design site** to check your header, navigation, theme, and footer.
3. Use **Preview site** for a final review.
4. Select **Website → Build static site**.

Paglora shows the local export folder. The output contains files such as:

```text
index.html
studio.html
publishing.html
styles.css
custom.css
fonts/
```

## Host the exported site

Upload the **contents of the export folder** to your chosen host. Supported options include GitHub Pages and ordinary static hosting. Host-specific deployment configuration is up to you.

> [!NOTE]
> Paglora does not currently publish to GitHub Pages automatically. The planned official documentation website will eventually use GitHub Pages, but publishing remains a separate step.

## Fonts, images, and CSS

Built sites may use remotely hosted images or optional Google Fonts. The default font assets are bundled. Custom CSS is included when a project contains `theme/custom.css`.

## What not to upload

Avoid publishing your entire project source directory: it can contain private pages and unpublished drafts. Upload only the generated website files.

See [Troubleshooting](troubleshooting.md) for common export issues.
