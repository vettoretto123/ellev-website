# VOICE – Link in Bio

Pagina link-in-bio per il profilo VOICE. Zero dipendenze esterne, nessun cookie.

---

## Come aggiungere il logo

1. Copia il tuo file logo nella cartella `assets/images/`
2. Rinominalo `logo.png`  
   (se usi `.jpg` o `.svg`, aggiorna la riga `"logo"` in `links.json`)

---

## Come modificare i link — solo `links.json`

Apri il file `links.json` con qualsiasi editor di testo (anche Blocco Note su Windows).

### Attivare / disattivare un link

Cambia `"attivo": true` in `"attivo": false` per nasconderlo:

```json
{
  "attivo": false,    ← questo link NON appare
  "etichetta": "LinkedIn",
  ...
}
```

### Cambiare l'URL

Sostituisci il testo dopo `"url":` tra le virgolette:

```json
"url": "https://instagram.com/MIOPROFILO"
```

### Cambiare l'etichetta (testo del bottone)

```json
"etichetta": "Seguimi su Instagram"
```

### Mettere un bottone in evidenza (dorato / colorato)

```json
"evidenziato": true
```

### Aggiungere un nuovo link

Copia e incolla uno dei blocchi esistenti e modifica i valori:

```json
{
  "attivo": true,
  "etichetta": "Il mio nuovo link",
  "url": "https://esempio.com",
  "icona": "website",
  "evidenziato": false
}
```

### Icone disponibili

| Valore da usare | Social / servizio  |
|-----------------|--------------------|
| `instagram`     | Instagram          |
| `facebook`      | Facebook           |
| `tiktok`        | TikTok             |
| `youtube`       | YouTube            |
| `spotify`       | Spotify            |
| `linkedin`      | LinkedIn           |
| `whatsapp`      | WhatsApp           |
| `telegram`      | Telegram           |
| `email`         | Email              |
| `calendar`      | Prenotazione/Call  |
| `website`       | Sito generico      |

---

## Struttura cartella

```
voice-linkinbio/
├── index.html          ← la pagina web
├── links.json          ← ← ← il file che modifichi tu
├── assets/
│   └── images/
│       └── logo.png    ← ← ← il tuo logo qui
└── README.md           ← questo file
```

---

## Come pubblicare su Netlify

### Opzione A — Drag & Drop (la più semplice)
1. Vai su [app.netlify.com/drop](https://app.netlify.com/drop)
2. Trascina l'intera cartella `voice-linkinbio/`
3. Netlify genera un URL — fatto!

### Opzione B — Git
1. Push su GitHub
2. Collega il repo su Netlify
3. Ogni volta che modifichi `links.json` e fai push, il sito si aggiorna

---

## Note tecniche

- Nessuna libreria esterna
- Nessun Google Fonts (zero cookie da font)
- Font system: usa i font del sistema operativo
- Funziona su tutti i browser moderni
- **Attenzione**: in locale (aprendo `index.html` direttamente dal file system) il browser blocca il caricamento di `links.json` per motivi di sicurezza. Usa sempre un server locale (`npx serve .`) o pubblica su Netlify per testare.
