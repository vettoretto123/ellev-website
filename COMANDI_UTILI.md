# Comandi Utili - Portfolio V2

Quick reference per gestione e manutenzione del portfolio.

---

## Sviluppo Locale

```bash
# Avvia server di sviluppo
npm start
# URL: http://localhost:8080
# Hot reload automatico

# Avvia con porta specifica
npx @11ty/eleventy --serve --port=3000
```

---

## Build

```bash
# Build produzione
npm run build

# Output in: _site/

# Build verbose (mostra dettagli)
npx @11ty/eleventy --config=.eleventy.js --quiet=false

# Dry run (test senza build)
npx @11ty/eleventy --dryrun
```

---

## Pulizia Cache

```bash
# Windows
rmdir /s /q _site
npm run build

# Git Bash / WSL
rm -rf _site/
npm run build
```

---

## Attivazione V2

### Opzione 1: Sostituzione Completa

```bash
# Backup V1
mv src/index.njk src/index-v1-backup.njk
mv src/_includes/layouts/base.njk src/_includes/layouts/base-v1-backup.njk

# Attiva V2
mv src/index-v2.njk src/index.njk
mv src/_includes/layouts/base-v2.njk src/_includes/layouts/base.njk

# Verifica
npm start
```

### Opzione 2: Ripristino V1

```bash
# Ripristina V1
mv src/index.njk src/index-v2.njk
mv src/index-v1-backup.njk src/index.njk
mv src/_includes/layouts/base.njk src/_includes/layouts/base-v2.njk
mv src/_includes/layouts/base-v1-backup.njk src/_includes/layouts/base.njk

# Verifica
npm start
```

---

## Git

```bash
# Status
git status

# Add tutti i cambiamenti
git add .

# Commit
git commit -m "Messaggio descrittivo"

# Push
git push origin main

# Nuovo branch per V2
git checkout -b portfolio-v2
git add .
git commit -m "Implementato Portfolio V2 completo"
git push origin portfolio-v2

# Merge V2 in main (dopo test)
git checkout main
git merge portfolio-v2
git push origin main
```

---

## Ricerca e Sostituzione

### Cercare testo nei file

```bash
# Cerca email placeholder
grep -r "nome@dominio.com" src/

# Cerca LinkedIn placeholder
grep -r "tuoprofilo" src/

# Cerca TODO
grep -r "TODO:" src/
```

### Sostituire testo (Git Bash / WSL)

```bash
# Sostituisci email in tutti i file
find src/ -type f -name "*.njk" -exec sed -i 's/nome@dominio.com/emanuele@tuo-dominio.com/g' {} +

# Sostituisci LinkedIn
find src/ -type f -name "*.njk" -exec sed -i 's/tuoprofilo/emanuele-furlan/g' {} +
```

### Sostituire testo (PowerShell Windows)

```powershell
# Sostituisci email
Get-ChildItem -Path src -Filter *.njk -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'nome@dominio.com', 'emanuele@tuo-dominio.com' | Set-Content $_.FullName
}

# Sostituisci LinkedIn
Get-ChildItem -Path src -Filter *.njk -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'tuoprofilo', 'emanuele-furlan' | Set-Content $_.FullName
}
```

---

## Asset Management

### Trovare placeholder

```bash
# Lista tutti i placeholder
grep -r "TODO:" src/ | grep -E "(njk|html|css)"
grep -r "INSERIRE" src/
grep -r "placeholder" src/ | grep -i "photo"
```

### Verifica link rotti

```bash
# Cerca href vuoti o placeholder
grep -r 'href="#"' src/
grep -r 'href="https://linkedin.com/in/tuoprofilo"' src/
```

---

## Deploy

### Netlify (Automatico via Git)

```bash
# Push trigger deploy automatico
git add .
git commit -m "Deploy Portfolio V2"
git push origin main

# Netlify farà build automatico
```

### Deploy Manuale

```bash
# Build
npm run build

# Verifica contenuto
ls _site/

# Deploy cartella _site/ tramite:
# - Netlify Drop (drag & drop)
# - FTP/SFTP al tuo hosting
# - Vercel CLI
# - GitHub Pages
```

---

## Testing

### Test Browser Locale

```bash
# Avvia server
npm start

# Testa:
# - http://localhost:8080 (V1 o V2 a seconda di quale è index.njk)
# - http://localhost:8080/index-v2.html (se V2 è ancora -v2)
```

### Test Responsive

```bash
# Chrome DevTools
# F12 → Toggle Device Toolbar (Ctrl+Shift+M)

# Test breakpoint:
# - Mobile: 375px, 414px (iPhone)
# - Tablet: 768px, 1024px (iPad)
# - Desktop: 1280px, 1920px
```

### Test Accessibilità

```bash
# Lighthouse in Chrome DevTools
# F12 → Lighthouse tab → Generate Report

# Metriche target:
# - Performance: >90
# - Accessibility: >95
# - Best Practices: >90
# - SEO: >95
```

---

## Manutenzione

### Aggiornare Disponibilità (FAQ)

```bash
# File da modificare
# src/_includes/partials/sections/section_07_faq/faq.njk

# Cerca FAQ #6 e aggiorna:
# [ho/non ho] → "ho" o "non ho"
# [mese/anno] → "Febbraio 2025"
```

### Aggiornare Colori Brand

```bash
# File: src/assets/css/portfolio-v2.css
# Righe: ~42-50

# Modifica CSS variables:
# --color-primary: #TUO_COLORE;
# --color-accent: #TUO_COLORE;
```

### Aggiungere Nuova Conferenza

```bash
# File: src/_includes/partials/sections/section_06_chi_sono/chi-sono.njk

# Cerca: <ul class="conferenze-list">
# Aggiungi: <li>Nome Conferenza - Data</li>
```

---

## Debug

### Eleventy non builda

```bash
# Controlla sintassi
npx @11ty/eleventy --dryrun

# Build verbose per vedere errori
npx @11ty/eleventy --quiet=false

# Pulisci cache e riprova
rm -rf _site/
rm -rf node_modules/.cache/
npm run build
```

### JavaScript non funziona

```bash
# Controlla console browser
# F12 → Console tab

# Verifica che main.js sia caricato:
# Network tab → cerca main.js

# Verifica errori sintassi:
# npx eslint src/assets/js/main.js
```

### CSS non applicato

```bash
# Forza refresh browser
# Ctrl + F5 (Windows)
# Cmd + Shift + R (Mac)

# Verifica che file CSS esista in build
ls _site/assets/css/

# Verifica che Eleventy copi assets
# Controlla .eleventy.js
# Deve contenere: eleventyConfig.addPassthroughCopy("src/assets");
```

---

## Backup e Versioning

### Creare backup completo

```bash
# Commit tutto
git add .
git commit -m "Backup completo - $(date)"
git push origin main

# O crea archivio ZIP
# Windows PowerShell
Compress-Archive -Path C:\Work\EmanueleSito -DestinationPath C:\Work\backup-portfolio-$(Get-Date -Format 'yyyy-MM-dd').zip

# Git Bash / WSL
tar -czf ../backup-portfolio-$(date +%Y-%m-%d).tar.gz .
```

### Creare tag versione

```bash
# Tag versione V2.0
git tag -a v2.0 -m "Portfolio V2.0 - Versione completa"
git push origin v2.0

# Lista tag
git tag -l

# Checkout tag specifico
git checkout v2.0
```

---

## Performance Optimization

### Minify CSS

```bash
# Installa minificatore
npm install --save-dev cssnano postcss postcss-cli

# Minify
npx postcss src/assets/css/portfolio-v2.css --use cssnano -o _site/assets/css/portfolio-v2.min.css
```

### Ottimizzare Immagini

```bash
# Installa sharp (ottimizzatore immagini)
npm install --save-dev @11ty/eleventy-img

# Poi configura in .eleventy.js per ottimizzazione automatica
```

---

## Useful Links

### Documentazione
- Eleventy Docs: https://www.11ty.dev/docs/
- Nunjucks Docs: https://mozilla.github.io/nunjucks/templating.html

### Tools
- Google Fonts Helper: https://google-webfonts-helper.herokuapp.com
- Favicon Generator: https://realfavicongenerator.net
- Image Optimizer: https://squoosh.app
- Color Palette: https://coolors.co

### Testing
- Lighthouse: Chrome DevTools → F12 → Lighthouse
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev

---

## Quick Reference Paths

```
Homepage V2:       src/index-v2.njk
Layout V2:         src/_includes/layouts/base-v2.njk
CSS V2:            src/assets/css/portfolio-v2.css
JavaScript:        src/assets/js/main.js
Navigazione:       src/_includes/partials/nav.njk
CTA riutilizzabile: src/_includes/partials/cta-intermedia.njk

Sezioni:
Hero:        src/_includes/partials/sections/section_01_hero/hero.njk
Problemi:    src/_includes/partials/sections/section_02_problemi/problemi.njk
Servizi:     src/_includes/partials/sections/section_03_servizi/servizi.njk
Risultati:   src/_includes/partials/sections/section_04_risultati/risultati.njk
Approccio:   src/_includes/partials/sections/section_05_approccio/approccio.njk
Chi Sono:    src/_includes/partials/sections/section_06_chi_sono/chi-sono.njk
FAQ:         src/_includes/partials/sections/section_07_faq/faq.njk
CTA Finale:  src/_includes/partials/sections/section_08_cta_finale/cta-finale.njk
Footer:      src/_includes/partials/sections/section_09_footer/footer.njk
```

---

**Salva questo file nei preferiti per quick reference!**
