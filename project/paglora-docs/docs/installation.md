# Installation and setup

Paglora Desktop is currently a **Tauri 2 early-development application** with no stable Windows installer release. Run the Studio from the [official source repository](https://github.com/m1nsook/paglora).

## Windows prerequisites

- Windows 11 with WebView2 and the Tauri 2 Windows C++ build prerequisites.
- [Bun](https://bun.sh/) for the workspace and development commands.
- [Rust](https://rustup.rs/) and the appropriate Windows toolchain.
- Node.js 20 or newer for running standalone Node test commands.

See the [official Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for the current setup.

## Launch the Studio

Open the Paglora repository in GitHub Desktop, update to the current `main`, and run from its **repository root**:

```powershell
bun install
bun run desktop
```

The frontend-only `bun run dev` mode cannot access local project folders through Tauri.

You can find the Studio project directory under **Settings → Local project storage**. Projects are stored locally, without an account.

## Public npm CLI

The **`paglora@0.0.1-alpha.3`** CLI is independently available:

```powershell
bunx --bun paglora@alpha --help
bunx --bun paglora@alpha --version
```

It can create, inspect and validate project folders. It **cannot** run the Desktop application or export websites.

> [!TIP]
> If Windows PowerShell blocks `npm.ps1`, invoke **`npm.cmd`** instead (for example, `npm.cmd view paglora@alpha version`). You do not need to change the execution policy.

Next: [Create your first project](first-project.md) or [CLI reference](cli.md).
