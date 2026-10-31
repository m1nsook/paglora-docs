# Documentation that looks as good as it reads

**Build beautiful documentation locally with Paglora.** Write in Markdown, design your website on a responsive canvas, and export portable static HTML for any host. No visitor account, subscription, or Paglora backend.

> [!NOTE]
> **This is a Paglora-built website, not a separate docs framework.** Its navigation, cards, callouts, site theme, and content are authored in the same Paglora project described here. The official documentation is public and deployed on GitHub Pages. The source project uses the same features available to other Paglora authors.

## Start building

> [!CARD] Get started
> [Install Paglora Desktop](installation.md) and [create your first project](first-project.md). The Windows Studio currently runs from source.

> [!CARD] Design your documentation
> [Explore the visual Studio](studio.md), [choose website layouts and palettes](design.md), and [organize your pages](pages.md).

> [!CARD] See what you can publish
> [Try the native Markdown building blocks](components.md), [search and appearance](search.md), and [static publishing](publishing.md).

The three cards above are rendered as a **responsive grid** by Paglora's built-in card layout setting. Narrow reading areas automatically show fewer columns; no custom CSS grid is required.

## A real documentation website, not a screenshot

This project demonstrates the same features that your own documentation can use:

| In the editor | On the published website |
| --- | --- |
| Markdown content and page groups | Responsive sidebar and table of contents |
| Cards, callouts, tables, tasks and code blocks | Rendered, accessible reading components |
| Website layout and color choices | Coordinated light, dark and system appearance |
| Public/private page controls | Public-page-only navigation, search and export |
| Local image imports | Referenced images copied into static assets |

## Choose your path

- **Writing your first documentation project?** Go to [Your first project](first-project.md).
- **Customizing a website?** Read [Design site](design.md) and [Pages and navigation](pages.md).
- **Testing actual rendered features?** Visit [Markdown building blocks](components.md).
- **Publishing to GitHub Pages?** Start with [Publishing a static website](publishing.md).
- **Automating project setup?** Use the [npm CLI reference](cli.md).
- **Want Paglora in your language?** [Contribute translations](translations.md) through the community language repository.
- **Following development?** Read [What's new](changes.md).

> [!IMPORTANT]
> The separately published `paglora@0.0.1-alpha.3` npm package manages projects with `init`, `inspect` and `validate`. It **does not export websites or install Desktop**. Static export is currently performed by the desktop Studio.

Paglora is open source under MIT. Find the [source repository](https://github.com/m1nsook/paglora) and [report an issue](https://github.com/m1nsook/paglora/issues).