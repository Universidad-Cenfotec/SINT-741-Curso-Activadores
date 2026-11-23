# ==========================================================
# VisualNotes AI - Captura de pantallas para el video de publicidad
# Uso:  powershell -ExecutionPolicy Bypass -File marketing\capture_screenshots.ps1
# Requiere el servidor corriendo en http://127.0.0.1:8000
# ==========================================================

param(
    [string]$BaseUrl = "http://127.0.0.1:8000",
    [string]$OutDir  = "$PSScriptRoot\screenshots",
    [string]$Edge    = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
)

$ErrorActionPreference = "Continue"
Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
Get-ChildItem $OutDir -Filter *.png -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue

function Invoke-EdgeShot {
    param([string]$Url, [string]$Out, [int]$W, [int]$H)
    $prof = Join-Path $env:TEMP ("edge_vn_" + [guid]::NewGuid().ToString("N"))
    New-Item -ItemType Directory -Force -Path $prof | Out-Null
    if (Test-Path $Out) { Remove-Item $Out -Force -ErrorAction SilentlyContinue }
    & $Edge --headless=new --disable-gpu --no-sandbox --no-first-run --hide-scrollbars `
        --user-data-dir="$prof" --window-size="$W,$H" `
        --virtual-time-budget=6000 --screenshot="$Out" "$Url" *> $null
    # Esperar a que Edge termine y escriba el archivo antes de borrar el perfil
    $wait = 0
    while (-not (Test-Path $Out) -and $wait -lt 60) { Start-Sleep -Milliseconds 250; $wait++ }
    Start-Sleep -Milliseconds 400
    Remove-Item -Recurse -Force $prof -ErrorAction SilentlyContinue
    if (-not (Test-Path $Out)) { Write-Host "  (aviso: no se generó $([System.IO.Path]::GetFileName($Out)))" }
}

function Get-EdgeDom {
    param([string]$Url, [int]$W, [int]$H)
    $prof = Join-Path $env:TEMP ("edge_dom_" + [guid]::NewGuid().ToString("N"))
    New-Item -ItemType Directory -Force -Path $prof | Out-Null
    $dom = & $Edge --headless=new --disable-gpu --no-sandbox --no-first-run `
        --user-data-dir="$prof" --window-size="$W,$H" `
        --virtual-time-budget=6000 --dump-dom $Url 2>$null | Out-String
    Remove-Item -Recurse -Force $prof -ErrorAction SilentlyContinue
    return $dom
}

function Crop-Image {
    param([string]$Src, [string]$Dest, [int]$X, [int]$Y, [int]$W, [int]$H)
    $img = [System.Drawing.Image]::FromFile($Src)
    $h = [Math]::Min($H, $img.Height - $Y)
    if ($h -le 0) { $img.Dispose(); return }
    $rect = New-Object System.Drawing.Rectangle($X, $Y, $W, $h)
    $bmp = New-Object System.Drawing.Bitmap($W, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $W, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save($Dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose(); $img.Dispose()
}

# ----------------------------------------------------------
# 1) APLICACIÓN (vistas vía enlaces profundos)
# ----------------------------------------------------------
$appShots = @(
    @{ n = "10_app_crear";         u = "/app?view=create";                    w = 1440; h = 1000 },
    @{ n = "11_app_mapa";          u = "/app?view=concept-map&load=latest";   w = 1440; h = 1000 },
    @{ n = "12_app_guias";         u = "/app?view=visual-guides&load=latest"; w = 1440; h = 1000 },
    @{ n = "13_app_resumen";       u = "/app?view=summary-quiz&load=latest";  w = 1440; h = 1100 },
    @{ n = "14_app_transcripcion"; u = "/app?view=transcription&load=latest"; w = 1440; h = 1200 },
    @{ n = "15_app_markdown";      u = "/app?view=markdown-doc&load=latest";  w = 1440; h = 1100 },
    @{ n = "16_app_recursos";      u = "/app?view=web-resources&load=latest"; w = 1440; h = 1000 },
    @{ n = "17_app_biblioteca";    u = "/app?view=library";                   w = 1440; h = 1000 }
)
foreach ($s in $appShots) {
    Write-Host "Capturando $($s.n) -> $($s.u)"
    Invoke-EdgeShot -Url "$BaseUrl$($s.u)" -Out (Join-Path $OutDir ($s.n + ".png")) -W $s.w -H $s.h
}

# ----------------------------------------------------------
# 2) LANDING: hero + página completa (modo captura)
# ----------------------------------------------------------
Write-Host "Capturando 01_landing_hero"
Invoke-EdgeShot -Url "$BaseUrl/landing?capture=1" -Out (Join-Path $OutDir "01_landing_hero.png") -W 1440 -H 900

# Offsets de cada sección (usando el MISMO alto de ventana que la captura,
# para que el diseño y las fuentes coincidan exactamente)
$probeH = 6400
$dom = Get-EdgeDom -Url "$BaseUrl/landing?capture=1" -W 1440 -H $probeH
$m = [regex]::Match($dom, 'id="capture-offsets"[^>]*>([^<]*)<')
$offs = @{}
if ($m.Success) { $offs = $m.Groups[1].Value | ConvertFrom-Json }
$total = if ($offs._total) { [int]$offs._total } else { $probeH }
$fullH = [Math]::Max([Math]::Min($total + 60, 8000), 900)

Write-Host "Capturando 02_landing_full (alto $fullH)"
Invoke-EdgeShot -Url "$BaseUrl/landing?capture=1" -Out (Join-Path $OutDir "02_landing_full.png") -W 1440 -H $fullH

# Esperar a que el archivo completo esté escrito en disco (evita condición de carrera)
$full = Join-Path $OutDir "02_landing_full.png"
$wait = 0
while (-not (Test-Path $full) -and $wait -lt 20) { Start-Sleep -Milliseconds 250; $wait++ }

# ----------------------------------------------------------
# 3) Recorte de secciones a partir de la captura completa
# ----------------------------------------------------------
if (Test-Path $full) {
    Write-Host "Offsets detectados: $($m.Groups[1].Value)"
    $sections = @(
        @{ n = "03_landing_features";    key = "features" },
        @{ n = "04_landing_como";        key = "como-funciona" },
        @{ n = "05_landing_estudiantes"; key = "estudiantes" },
        @{ n = "06_landing_contribuir";  key = "contribuir" },
        @{ n = "07_landing_cta";         key = "empezar" }
    )
    $keys = @("features", "como-funciona", "estudiantes", "contribuir", "empezar", "_total")
    for ($i = 0; $i -lt $sections.Count; $i++) {
        $key = $sections[$i].key
        $nextKey = $keys[$i + 1]
        $y = [int]$offs.$key
        $nextY = [int]$offs.$nextKey
        $h = [Math]::Max($nextY - $y, 300)
        Write-Host "Recortando $($sections[$i].n) (y=$y h=$h)"
        Crop-Image -Src $full -Dest (Join-Path $OutDir ($sections[$i].n + ".png")) -X 0 -Y $y -W 1440 -H $h
    }
} else {
    Write-Host "ADVERTENCIA: no se encontró la captura completa; se omite el recorte."
}

Write-Host ""
Write-Host "Listo. Capturas en: $OutDir"
Get-ChildItem $OutDir -Filter *.png | Sort-Object Name | Select-Object Name, @{N = 'KB'; E = { [math]::Round($_.Length / 1KB) } } | Format-Table -AutoSize
