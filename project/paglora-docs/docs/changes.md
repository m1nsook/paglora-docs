# What's new in the October 2026 development sprint

Paglora made rapid progress during the October 30–31 development sprint. These features are in the current **source** builds; the desktop app remains an early development project, not a stable installer.

## Publishing and runtime

- First-party browser scripts are now **bundled and minified** for standalone static hosting.
- Search uses bundled **MiniSearch**, with prefix and typo-tolerant matching plus CJK substring support.
- Published sites include enhanced headings, code-copy controls, task lists, disclosure blocks, and responsive navigation.
- The configured website accent is honored in light, dark, and system-dark modes.
- New **Classic / Inset / Reading** website layouts and **Original / Graphite / Lavender / Linen** coordinated light/dark palettes, selected in Design site.

## Assets and discovery

- Import PNG, JPEG, WebP and GIF images (up to 5 MiB) as project assets.
- Export only images referenced by public pages or the configured site logo.
- Select from **18 document languages**; Arabic uses RTL page layout.
- Configure an optional HTTPS site root for canonical links and a public-only sitemap.
- Pages include social sharing metadata and descriptions based on safe public content.

## Studio and reliability

- Improvements to tablet preview, stale preview handling, safe page manifests, search keyboard/focus handling, and exported links.
- **Desktop 0.2.0 development milestone** adds a publishing report with public/private page counts, local image count, and warnings for links pointing to missing or private pages. The npm CLI keeps its independent alpha version.
- Automated Windows/Ubuntu frontend and Windows Rust checks guard many regressions.
- Manual Windows Studio and browser smoke tests are still important.

## npm CLI release

**`paglora@0.0.1-alpha.3`** is published under the npm `alpha` tag. It provides `init`, `inspect`, and `validate` with stricter arguments and improved project validation. It **does not build** websites; use Studio for static exports.

The npm `latest` tag is separate from `alpha`. Explicitly install `paglora@alpha` to get the current prerelease.

Next: [CLI reference](cli.md), [Search](search.md), [Local images](images.md), and [Language and SEO](language-seo.md).
