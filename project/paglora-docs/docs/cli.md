# Paglora CLI

The public npm package **`paglora@0.0.1-alpha.3`** is published under the **`alpha`** tag. It creates, inspects, and validates local documentation projects. This is **not** a Desktop installer or website builder.

## Install or run without installing

```powershell
bun add --global paglora@alpha
paglora --version
```

Or run the published alpha directly:

```powershell
bunx --bun paglora@alpha --help
```

The npm `latest` tag is separate from the prerelease channel, so use `@alpha` to get alpha.3.

## Create a project

```powershell
bunx --bun paglora@alpha init ./my-docs --name "My Docs"
```

The target directory must **not exist**. It creates `paglora.json`, `pages.json`, `docs/index.md`, and `theme/custom.css` and will not overwrite an existing folder.

## Inspect and validate

```powershell
bunx --bun paglora@alpha inspect ./my-docs --json
bunx --bun paglora@alpha validate ./my-docs
```

Inspection reports pages, layouts, visibility and navigation groups. Validation checks the canonical v1 project format, required files and other rules without rewriting content. Alpha.3 includes stricter argument handling, Unicode label validation, and enforcement that the Overview page stays public.

## Windows npm PowerShell workaround

On some Windows machines, PowerShell blocks `npm.ps1` with an execution-policy error. Use the Windows command wrapper without lowering security settings:

```powershell
npm.cmd view paglora@alpha version
npm.cmd dist-tag ls paglora
```

## What the CLI cannot do yet

The CLI cannot render or deploy a static site. Use **Website → Build static site** in Paglora Desktop. CLI-created projects outside the Studio's configured data folder do not appear on its dashboard automatically; see **Settings → Local project storage**.

The old prototype's Pageo manifest is unsupported. Never publish npm `0.0.1-alpha.3` again; future releases must have a new version.

Next: [Installation](installation.md) or [Publishing](publishing.md).
