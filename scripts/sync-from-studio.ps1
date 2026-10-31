# Windows PowerShell 5.1+. Keeps backups of overwritten folders.
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [ValidateSet("Install","Collect")]
  [string]$Mode,
  [string]$StudioPath = "",
  [string]$ExportPath = ""
)
$ErrorActionPreference = "Stop"
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$projectRepo = Join-Path $root "project\paglora-docs"
$siteRepo = Join-Path $root "site"
if (-not $StudioPath) {
  if (-not $env:APPDATA) { throw "APPDATA missing. Supply -StudioPath from Studio Settings." }
  $StudioPath = Join-Path $env:APPDATA "com.m1nsook.paglora\projects\paglora-docs"
}
$backup = Join-Path $env:TEMP ("paglora-docs-sync-" + (Get-Date -Format "yyyyMMdd-HHmmss") + "-" + [guid]::NewGuid().ToString("N").Substring(0,8))
function Test-Project([string]$path) {
  foreach ($file in @("paglora.json", "pages.json", "site.json", "docs\index.md")) {
    if (-not (Test-Path -LiteralPath (Join-Path $path $file) -PathType Leaf)) { throw "Missing project file: $file ($path)" }
  }
  $manifest = Get-Content -LiteralPath (Join-Path $path "paglora.json") -Raw | ConvertFrom-Json
  if ($manifest.id -ne "paglora-docs") { throw "Wrong project ID, expected paglora-docs." }
}
function Test-Export([string]$path) {
  foreach ($file in @("index.html","styles.css","paglora.js","paglora-search.js","search-index.json")) {
    if (-not (Test-Path -LiteralPath (Join-Path $path $file) -PathType Leaf)) { throw "Missing export file: $file" }
  }
  foreach ($bad in @("project","docs","reference")) {
    if (Test-Path -LiteralPath (Join-Path $path $bad)) { throw "Export contains raw editable sources: $bad" }
  }
}
function Replace-Folder([string]$source,[string]$destination,[string]$name) {
  $source = (Resolve-Path -LiteralPath $source).Path
  if ([IO.Path]::GetFullPath($source).TrimEnd('\') -ieq [IO.Path]::GetFullPath($destination).TrimEnd('\')) {
    throw "Source and destination paths are equal."
  }
  New-Item -ItemType Directory -Force -Path $backup | Out-Null
  if (Test-Path -LiteralPath $destination) {
    Copy-Item -LiteralPath $destination -Destination (Join-Path $backup $name) -Recurse -Force
    Remove-Item -LiteralPath $destination -Recurse -Force
  }
  New-Item -ItemType Directory -Force -Path (Split-Path -Parent $destination) | Out-Null
  Copy-Item -LiteralPath $source -Destination $destination -Recurse -Force
  Write-Host "Updated: $destination"
}
if ($Mode -eq "Install") {
  Test-Project $projectRepo
  Write-Host "Loading the latest repository source into Studio; previous project is backed up."
  Replace-Folder $projectRepo $StudioPath "previous-studio-project"
} else {
  Test-Project $StudioPath
  if (-not $ExportPath) { throw "Collect requires -ExportPath with the generated website folder." }
  $ExportPath = (Resolve-Path -LiteralPath $ExportPath).Path
  Test-Export $ExportPath
  if ($ExportPath.TrimEnd('\') -ieq $siteRepo.TrimEnd('\')) { throw "Select the Studio export, not the repository site/ folder." }
  Write-Host "Collecting edited project and complete static site; previous repository folders are backed up."
  Replace-Folder $StudioPath $projectRepo "previous-checkout-project"
  Replace-Folder $ExportPath $siteRepo "previous-checkout-site"
  Write-Host "Review changes to project/ and site/ in GitHub Desktop, commit and Push origin."
}
Write-Host "Backup folder: $backup"
