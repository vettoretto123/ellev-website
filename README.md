# VOICE – Unlock Your Art

Sito statico bilingue (IT/EN) generato con [Eleventy (11ty)](https://www.11ty.dev/).

## Struttura cartella

```
voice-site/
├── src/
│   ├── _data/
│   │   ├── it.json          ← tutti i testi in italiano
│   │   └── en.json          ← tutti i testi in inglese
│   ├── _includes/
│   │   └── layouts/
│   │       ├── base.njk     ← layout HTML (navbar, footer, head)
│   │       └── page.njk     ← contenuto pagina (sezioni)
│   ├── it/
│   │   ├── it.11tydata.js   ← inietta traduzioni IT nelle pagine IT
│   │   └── index.njk        ← homepage italiana → genera /index.html
│   ├── en/
│   │   ├── en.11tydata.js   ← inietta traduzioni EN nelle pagine EN
│   │   └── index.njk        ← homepage inglese  → genera /en/index.html
│   └── assets/
│       ├── css/style.css
│       ├── js/main.js
│       └── images/
│           └── logo.png     ← ← ← METTI QUI IL TUO LOGO
├── eleventy.config.js
├── netlify.toml
└── package.json
```

## Aggiungere il logo

1. Rinomina il tuo file logo in `logo.png` (o `.jpg`, `.svg`)
2. Copialo in `src/assets/images/`
3. Se usi un'estensione diversa da `.png`, aggiorna i riferimenti in:
   - `src/_includes/layouts/base.njk`  → `<img src="/assets/images/logo.png" ...>`
   - `src/_includes/layouts/page.njk`  → stessa cosa in hero e footer

## Sviluppo locale

```bash
npm install
npm start
# → http://localhost:8080       (IT)
# → http://localhost:8080/en/   (EN)
```

## Build per produzione

```bash
npm run build
# Output in _site/
```

## Deploy su Netlify

### Opzione A — Drag & Drop
1. Fai `npm run build` in locale
2. Trascina la cartella `_site/` su [app.netlify.com/drop](https://app.netlify.com/drop)

### Opzione B — Git + Netlify CI (consigliata)
1. Push su GitHub/GitLab
2. Collega il repo su Netlify
3. Il `netlify.toml` configura automaticamente build command e publish dir

## Aggiornare i testi

Modifica solo i file JSON in `src/_data/`:
- `it.json` → testi italiani
- `en.json` → testi inglesi

Non toccare i file `.njk` se vuoi solo cambiare copy.

## Aggiungere una nuova lingua (es. FR)

1. Crea `src/_data/fr.json` (copia e traduci `it.json`)
2. Crea cartella `src/fr/` con `fr.11tydata.js` e `index.njk`
3. Aggiorna il switcher in `base.njk`
