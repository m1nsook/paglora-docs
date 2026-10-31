# Status badges

Show short, colored status labels for releases, compatibility, and feature availability using plain Markdown.

[← Components](components.md) · Feedback

## Preview

> [!BADGES] Release status
>
> - [success] Stable
> - [info] Offline ready
> - [warning] Experimental API

## Markdown

Copy this source into a Markdown page or insert **Badges** from Studio's Blocks palette or searchable component gallery.

````markdown
> [!BADGES] Release status
>
> - [success] Stable
> - [info] Offline ready
> - [warning] Experimental API
````

## Variants

Use `[neutral]`, `[info]`, `[success]`, `[warning]`, or `[danger]` before each label. A label without a variant uses the neutral style.

> [!BADGES] Platform support
>
> - [success] Windows
> - [info] Linux CLI
> - [warning] Preview build
> - [danger] Deprecated
> - [neutral] Planned

## Usage and limitations

- Add `[!BADGES]` to the first line of a blockquote, optionally followed by a plain-text heading.
- Put **1–12** list items in the blockquote. Each badge label must be plain text, at most 60 characters.
- Variants are checked rather than interpreted as HTML or custom styling. Labels wrap on small screens and respect light/dark published-site themes.
- The exported badges require no JavaScript. The ordinary Markdown source stays portable in backups.
- Invalid or unsupported badge syntax remains readable as normal Markdown rather than being silently dropped.

[All components](components.md) · [Callouts](component-callouts.md) · [Typography](component-typography.md)
