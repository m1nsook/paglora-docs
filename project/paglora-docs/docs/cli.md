# Paglora CLI

The public `paglora` npm package provides lightweight project initialization, inspection, and validation.

The current alpha version is `0.0.1-alpha.2`. It uses the canonical `paglora.json` format; the old prototype manifest is not supported.

## Create a project

```powershell
bunx --bun paglora@alpha init .\my-docs --name "My Docs"
```

This creates a new folder with `paglora.json`, `pages.json`, `docs/index.md`, and `theme/custom.css`. The destination must not already exist.

## Inspect and validate

```powershell
bunx --bun paglora@alpha inspect .\my-docs --json
bunx --bun paglora@alpha validate .\my-docs
```

Inspection reports page titles, public/private status, layouts, and navigation groups. Validation checks the project format and required files without changing them.

## CLI limitations

The alpha CLI does **not** run the Tauri static website renderer or publish websites. Use Studio for site building.

CLI-created folders outside the Studio's configured project directory won't appear on the Studio dashboard automatically. Use **Settings → Local project storage** to locate the current project directory.

The [npm package](https://www.npmjs.com/package/paglora) and [GitHub source](https://github.com/m1nsook/paglora) contain current release information.
