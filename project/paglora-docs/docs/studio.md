# Working in Studio

Paglora Studio combines a local Markdown editor with a canvas-first website preview.

## The workspace

- **Pages (left):** select, create, reorder and organize documentation pages.
- **Canvas (center):** inspect the website's current rendering and selected content blocks.
- **Properties (right):** update page title, layout, navigation group and visibility.

Switch between **Edit**, **Split**, and **Canvas** from the toolbar.

## Responsive preview

Choose **Desktop**, **Tablet**, or **Phone** to check page layouts. Use the zoom controls and **Fit** to adjust the artboard to your workspace. The preview represents the generated HTML and CSS, not a separate mockup.

## Editing

Select a supported block on the canvas. Simple unformatted headings and paragraphs support contextual or inline editing. Use **Edit** for nested lists, rich text, and links; Paglora avoids silently flattening unsupported formatting.

The source files remain local and edits are automatically saved. Recent builds include safeguards against stale preview responses replacing a different selected page.

## Design site and local images

Use **Design site** to manage header/footer links, content width, appearance, website accent, document language, optional published site URL, and logo images. The local logo import supports PNG, JPEG, WebP, and GIF files up to 5 MiB.

Use **Source** to edit your project's Markdown and CSS in Monaco. The Theme section shows `custom.css` and any additional registered stylesheets, with an ordered cascade you can change using the Up/Down controls. **Add CSS** creates a new named stylesheet; all files are local to the project.

Styles apply in the same order in Preview and static Build: Paglora's built-in CSS, then `custom.css`, then extra files listed in `theme/styles.json` (last declaration wins). The generated `custom.css` export contains the combined source, with source comments showing the original file boundaries.

Select a plain heading or paragraph on the canvas to open the anchored **Edit text** control. The draft previews in the iframe without saving to the Markdown source; **Save** commits through the editor, and **Cancel** restores the previous preview. Styled, linked, ambiguous, and private text intentionally cannot be changed by this shortcut.

TSX/MDX component compilation is **not** supported.

## Preview versus published interactions

For security, the inline canvas disables exported-site JavaScript. Search, appearance switching, code copying, and live TOC behavior should be tested on the built HTML served over HTTP(S). Site CSS and page structure remain visible in the canvas.

Next: [Pages and navigation](pages.md), [Search and appearance](search.md), or [Local images](images.md).
