# Help translate Paglora

**Paglora Languages** lives in the separate [m1nsook/paglora-lang](https://github.com/m1nsook/paglora-lang) repository. Everyone can fork it and contribute translations; you do not need to join the Paglora team to propose a language.

## What can be translated?

| Translation area | Examples | Where to contribute |
| --- | --- | --- |
| Studio UI | Navigation, settings, project management | `studio.*` keys in `paglora-lang` |
| Exported website | Appearance switcher, documentation navigation and code-copy feedback | `site.*` keys |
| Built-in documentation components | Notes, tips, warnings and other callout headings | `docs.*` keys |
| Your documentation Markdown | Page titles, guides, examples, links | Directly in **your own** Paglora project |

The first three groups are localized through **reviewed interface catalogs**. Your actual Markdown documents are **not machine translated**. Write pages in your preferred language and choose their HTML language in **Design site**.

## Translate your first message

1. Open [paglora-lang](https://github.com/m1nsook/paglora-lang) and check whether your language already exists under `locales/`.
2. Select **Fork** to create your own copy of the repository.
3. In your fork, copy `locales/en.json` into a new file such as `locales/fr.json`. Set the language code and native display name.
4. Translate the **values** under `messages`. **Do not translate message keys** such as `studio.settings.title`.
5. Keep placeholders like `{date}` and `{query}` exactly unchanged. Missing entries may be omitted: Paglora falls back to English.
6. When ready, open a **pull request from your fork** into `m1nsook/paglora-lang:main`. Automated checks verify catalog structure and placeholders; maintainers review wording and merge.

> [!TIP]
> You can contribute only a few messages. You do **not** have to finish every message in a language before submitting improvements.

## Where should I submit my fork?

Use a **pull request**, not an issue comment linking the fork. GitHub will show the changed JSON files and allow feedback.

Use [language request issues](https://github.com/m1nsook/paglora-lang/issues/new/choose) to suggest a new language, coordinate native reviewers or ask terminology questions. Those issues receive automatic language and area labels.

If you can't open a pull request, you can link your fork in an issue as a fallback, but that's not the normal workflow.

## How are translations released?

The translation catalog repository is the community **source of truth**. Paglora packages reviewed snapshots for **offline** use. A merged translation can appear in a future Paglora release when its catalog is synchronized and the app is rebuilt; it does not instantly change an already installed app or exported website.

Initial translated catalogs are English, Polish and Korean. Not every Studio panel or website message has been migrated yet; missing strings still appear in English.

> [!IMPORTANT]
> Select **Studio language** in application Settings to change the editor UI. Select **Document language** in a project's Design site panel to change its generated website's language metadata and supported built-in UI. These settings are independent.

For technical catalog rules and validation, read the [paglora-lang contributor guide](https://github.com/m1nsook/paglora-lang/blob/main/CONTRIBUTING.md).
