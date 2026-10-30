# Troubleshooting

## My page doesn't appear in the published website

Check that its visibility is set to **Public**, then rebuild the static website. The Overview page always remains public.

## My CLI project doesn't appear in Studio

The CLI can create projects anywhere. Studio currently discovers only the projects stored in its configured local application data directory. Check **Settings → Local project storage**.

## Preview doesn't match the hosted site

Confirm that you uploaded the entire generated site folder and included `styles.css`, `custom.css` (if present), and bundled font assets. Check whether your custom CSS references external resources that require an internet connection.

## My page layout is too narrow

Try the **Wide** layout for the page, or change the site's content width in **Design site**.

## Text editing on the canvas is limited

Use **Edit** for nested lists, links, rich formatting, and unsupported structures. Canvas editing is intentionally conservative to keep the underlying Markdown intact.

## Something seems broken

Open a report in the [Paglora issue tracker](https://github.com/m1nsook/paglora/issues). Include your operating system, the steps to reproduce the behavior, and a screenshot or relevant logs.

> [!TIP]
> Before testing a new development branch, keep a copy of any project files you care about. Paglora is still in active development.
