# Installation and setup

Paglora Desktop is currently an early-development Tauri 2 application. For now, use the application source repository to run the Studio on Windows.

## Requirements

- Windows with the Tauri 2 / WebView2 prerequisites installed
- [Bun](https://bun.sh/) and a compatible Node.js toolchain
- Rust and the Windows build tools required by Tauri

See the [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for current platform setup.

## Run Studio

Open the [Paglora source repository](https://github.com/m1nsook/paglora) in GitHub Desktop. From the repository root, run:

```powershell
bun install
bun run desktop
```

The Studio stores its projects locally. You can see the folder under **Settings → Local project storage**.

## Using the CLI

You can try the independent npm CLI without building the desktop app:

```powershell
bunx --bun paglora@alpha --help
```

The CLI currently creates and validates projects. It does not build static sites yet; exporting remains a Studio feature.

Next: [Create your first project](first-project.md).
