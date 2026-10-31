# Callouts

Note, Tip, Important, Warning and Caution messages.

[← Components](components.md) · Feedback

## Preview

> [!NOTE]
> Additional context for your reader.

> [!TIP]
> Save a project before publishing.

> [!IMPORTANT]
> Only public pages are exported.

> [!WARNING]
> Never publish private backup files.

> [!CAUTION]
> Review links before sharing.

## Markdown

Copy the source below into any Paglora Markdown page. Published code blocks include a **Copy** control.

````markdown
> [!NOTE]
> Additional context for your reader.

> [!TIP]
> Save a project before publishing.

> [!IMPORTANT]
> Only public pages are exported.

> [!WARNING]
> Never publish private backup files.

> [!CAUTION]
> Review links before sharing.
````

## Usage

Start a blockquote with the marker, then write the message below it. Paglora provides the title, icon and theme colors.

In **Studio → Edit**, open the **Visual editor** block tools or **Library** to insert ready-made **Note**, **Tip**, **Important**, **Warning**, and **Caution** blocks. The saved source remains the same portable Markdown shown above; these are not executable React or HTML widgets.

> [!IMPORTANT]
> The marker is part of the Markdown source. Avoid escaping it as `\\[!NOTE]`, which would render the block as an ordinary quote.

[All components](components.md) · [Markdown guide](component-typography.md)
