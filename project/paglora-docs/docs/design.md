# Design site: layouts, palettes and CSS

Paglora's **Design site** panel changes the real documentation renderer used for both the Studio preview and the exported HTML. It is not a screenshot-only mockup.

## Localized design controls

The **Design site** panel now uses community translation catalogs for its visual controls, including theme and palette presets, layout choices, navigation, headers, footers, link editing, save feedback, accessibility labels, and the responsive preview. Select **Settings → Studio language** to choose a reviewed interface translation such as Polish or Korean; English is the fallback for missing messages.

The labels change, but the settings stored in `site.json` remain stable values such as `"siteLayout": "inset"`. This never translates user-authored page titles, links, Markdown or CSS.

## Choose your site layout

Open a project in Desktop Studio, select **Design site**, and find the website layout choices:

| Layout | Description | When to use it |
| --- | --- | --- |
| **Classic** | Familiar edge-to-edge documentation | Existing projects and traditional navigation |
| **Inset** | Floating header and framed content | A modern docs website with more separation |
| **Reading** | Quieter chrome and spacious typography | Long-form guides and tutorials |

Changes appear in the Studio preview. Select **Save layout** to persist them to `site.json`.

> [!NOTE]
> Website layout is different from **per-page layout**. In **Pages**, each page can still choose **Docs**, **Wide**, or **Landing**. The website layout controls the surrounding site shell.

## Coordinated light and dark palettes

The palette presets are **Original**, **Graphite**, **Lavender**, and **Linen**. Each adjusts surfaces, text, borders and code blocks together for a cohesive site.

Choose **Light**, **Dark**, or **System** for the default appearance, then adjust **Website accent color** independently. Your accent applies to links and active navigation in light and dark modes, including system-dark mode.

> [!TIP]
> If an accent appears to stay blue in dark mode, inspect `theme/custom.css`. A declaration such as `--brand: #72baff;` inside a dark-mode rule overrides the picker. Remove that override to let the site accent work in both modes.

## Card layout and translated design tools

**Stacked** (used by the official docs theme) keeps one card per row. **Responsive grid** arranges neighboring `[!CARD]` components in columns and stacks them on smaller screens.

The Design site interface now uses reviewed English, Polish and Korean [translation packages](https://github.com/m1nsook/paglora-lang) for tabs, presets, fonts, links and preview controls. Studio language does not translate your Markdown.

## Edit the actual project source

Site settings live in `site.json`. New fields are optional and default to Classic/Original for existing projects:

```json
{
  "siteLayout": "inset",
  "sitePalette": "graphite",
  "themeMode": "system",
  "accentColor": "#5B9EFF"
}
```

The snippet shows the relevant fields only, **not** a complete replacement for your existing `site.json`.

To apply extra polish, open **Source** and edit your project's `theme/custom.css`:

```css
/* Keep the accent and palette driven by Design site. */
.docs h1 { letter-spacing: -0.045em; }
.docs a { text-underline-offset: 3px; }
.docs pre { border: 1px solid var(--line); }
```

Use palette variables such as `var(--bg)`, `var(--fg)`, `var(--line)` and `var(--brand)` rather than hard-coding one mode's color. Custom CSS is project-owned and exported with your site.

## Preview and verify

1. Check **Desktop**, **Tablet**, and **Mobile** widths.
2. Compare Light and Dark; switch System while testing your OS preference.
3. **Save layout**, then choose **Website → Build static site**.
4. Open the exported website through HTTP(S) and test its appearance switcher.

The Studio preview intentionally disables the site's JavaScript. Appearance persistence, search and other browser interactions must be tested on the published output.

Next: [Markdown building blocks](components.md), [Studio canvas](studio.md), and [Publishing](publishing.md).