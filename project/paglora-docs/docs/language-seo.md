# Language and search-engine metadata

Paglora can mark published documents with their language and generate useful discovery metadata for static hosting.

## Choose a document language

In **Design site**, choose **Document language**. Current builds support 18 language options: English, Korean, Polish, German, French, Spanish, Japanese, Simplified Chinese, Traditional Chinese, Brazilian Portuguese, Russian, Ukrainian, Arabic, Turkish, Italian, Czech, Hungarian, and Thai.

This sets the HTML `lang` attribute and locale-aware social metadata. **Arabic** uses right-to-left document layout and adjusted navigation, lists, and tables.

> [!NOTE]
> Language selection **does not translate** Markdown, create translated copies of pages, or add an automatic language switcher. Write your content in the selected language yourself.

## Set a published site URL

**Published site URL** is optional in **Design site**. For production, enter the full HTTPS root with a **trailing slash**.

For a GitHub Pages project site, include the repository subpath:

```text
https://yourname.github.io/your-repository/
```

For a custom domain, use the final HTTPS site root:

```text
https://docs.example.com/
```

Paglora uses this root to generate canonical URLs for each **public** page and a public-page-only `sitemap.xml`. If left blank, it does not emit canonical URLs or a sitemap. Incorrect roots produce incorrect URLs, so verify before deploying.

## Social previews and descriptions

Published pages include title and description tags plus Open Graph and Twitter-card metadata. Paglora uses the configured site description and sanitized public-page content to provide useful page-specific descriptions.

These are static tags, not a guarantee of search-engine indexing or rich previews. Search engines and social platforms decide how to display them.

## Deploying to GitHub Pages

1. Build the site from Paglora Desktop.
2. Upload or deploy **only the generated export**, keeping all page, CSS, JS, font, asset, and license files.
3. Set the correct Pages path in **Published site URL**, then rebuild if the URL changes.
4. Check `sitemap.xml` and a page's canonical link on the deployed site.

There is no built-in automatic Pages deployment yet. The official `paglora-docs` project is still private and not publicly hosted.

Next: [Publishing a website](publishing.md) or [Search and appearance](search.md).

## Language packages versus Markdown content

**The website language setting does not translate your writing.** Your Markdown pages, page titles, descriptions, and navigation groups are authored separately by you.

Paglora now uses [paglora-lang](https://github.com/m1nsook/paglora-lang) catalogs for reviewed interface messages. English is the fallback where a language pack is incomplete. Initial catalogs are English, Polish and Korean; translating the full Studio and website interface is ongoing.

The Studio's own language preference is configured independently under **Settings → Studio language**. See [Translate Paglora](translations.md) for community contributions.
