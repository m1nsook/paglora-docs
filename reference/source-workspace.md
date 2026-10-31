# Project source editing — project Markdown and CSS

Paglora projects are **source-owned**. The visual website designer does not own or replace your source code.

## Working today: CSS cascade and Markdown

Open a project and choose **Source** in the editor toolbar. Paglora opens a split view with **Monaco Editor** (the editor engine used by VS Code) on the left and the actual published-site preview on the right. Monaco provides CSS syntax highlighting, folding, completion and diagnostics; Ctrl+S saves the real project file. Its language workers are built by Vite as part of the app instead of relying on a CDN.

The file is stored in the project's local data directory:

```text
<project-directory>/
├── paglora.json           (Paglora project metadata)
├── docs/
│   └── index.md
├── pages.json
├── site.json
└── theme/
    ├── custom.css         (your initial source stylesheet)
    ├── styles.json        (optional, explicit ordering)
    ├── typography.css     (example additional stylesheet)
    └── components.css     (example additional stylesheet)
```

New projects contain `theme/custom.css` with commented examples. New Paglora projects contain a starter stylesheet. Missing CSS is treated as optional until you save from Source.

CSS is applied after the generated `styles.css`, so the user project overrides default selectors. In **Source → Theme**, use **Add CSS** to add up to 12 named files. The arrow buttons reorder additional stylesheets; the base `custom.css` stays first for legacy compatibility.

Order in `theme/styles.json` is authoritative for both preview and export. Files that are not registered in this manifest are not loaded. A changed CSS file must be explicitly saved to update the preview; Markdown saved in Source is rehydrated into the visual editor. Source's `pages.json` and `site.json` Monaco snapshots remain read-only. For schema-safe edits, use the **Structured metadata** form displayed below the current JSON: choose a page and update its title, visibility, layout and navigation group, or edit supported site title/description/footer/HTTPS root fields. **Apply metadata** runs a validated native transaction, updates the current editor/outline and refreshes the JSON and preview. The home page cannot be made private and IDs/URLs are never edited through this form.

The static export contains:

```text
site-exports/<project-id>/
├── index.html
├── <page-id>.html
├── styles.css
└── custom.css
```

Every exported HTML page links to a generated `custom.css` when the project contains any registered stylesheet. This output concatenates the source styles in declared order, with source-file comments between them; separate CSS authoring files never become publicly accessible filenames. Do not edit `site-exports` as the source of truth: it is recreated at each build.

## Permissions and security

File operations use dedicated Rust Tauri commands restricted to the selected project and a closed set of registered stylesheets. The frontend cannot provide arbitrary output paths. A project ID must match its existing local `paglora.json` file. Extra CSS file names use lowercase letters, digits and hyphens with a `.css` extension and no path segments. Each stylesheet is limited to 256 KB; the combined cascade is limited to 512 KB. Symlinks, special files, duplicated or missing entries, and malformed order manifests are rejected.

The live preview is a script-disabled iframe. Custom CSS may import external fonts or images just as normal CSS can. Keep a project's source code trusted, and do not execute user-authored JavaScript/TSX in Paglora's privileged desktop WebView.

## Planned next

This milestone **does not** compile React/TSX themes yet. The full source workspace will add a project file tree, Markdown/MDX/TSX file editing with this existing Monaco component, TSX component overrides, a safely isolated Vite build pipeline, and synchronized visual/source editing. We deliberately avoid shipping pretend TSX overrides that have no effect on output.

Monaco is an embedded source **editor**, not a full VS Code installation. This milestone edits registered Markdown and CSS files; installing Monaco does **not** automatically enable importing or compiling custom TSX site components. Built sites may continue loading Google Fonts, HTTPS images and other user-selected hosted resources.

## Portable backups and image recovery

Portable `.paglora` archives retain `theme/styles.json`, every registered extra CSS file, and the full stylesheet ordering. Import validation rejects missing, duplicated or unsafe named sources instead of silently dropping them. Legacy single-CSS projects are still valid.

The Images drawer can move conservatively verified unused assets into a project-local `removed-assets/` folder. This is recovery storage, not part of a published static website; the directory is included in portable project backups so imported projects can still restore their images. The final move is revalidated against saved sources and requires exact-filename confirmation.
