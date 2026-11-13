# Gibiesse · Le nostre sedi

Pagina "link in bio" per Instagram: mostra i punti vendita Gibiesse, Niky Scuderi e Marella
(con link a Google Maps) e porta i visitatori allo shop online **gibiessestore.it**.

È un sito statico (HTML + CSS + un po' di JavaScript), **senza dipendenze npm** e senza chiavi API.

## Struttura

```
public/
  index.html               pagina completa (stile e script inclusi)
  assets/logo-gibiesse.png logo esteso nell'intestazione
  assets/logo-gb.webp      monogramma GB (schede Gibiesse / Niky Scuderi, favicon)
scripts/
  build.mjs                copia public/ in dist/
  serve.mjs                server locale per l'anteprima
vercel.json                impostazioni di build e header per Vercel
```

Il logo Marella è disegnato in SVG direttamente in `index.html`.
I font (Cormorant Garamond e Lato) vengono caricati da Google Fonts.

## Provarlo sul computer

Serve Node.js 18 o superiore.

```bash
npm run dev        # anteprima su http://localhost:3000
npm run build      # crea la cartella dist/
npm run preview    # build + anteprima di dist/
```

## Pubblicare su GitHub

1. Crea un nuovo repository vuoto su GitHub (es. `gibiesse-sedi`).
2. Carica il contenuto di questa cartella (trascinando i file da "Add file → Upload files" oppure con git):

```bash
git init
git add .
git commit -m "Pagina sedi Gibiesse"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/gibiesse-sedi.git
git push -u origin main
```

## Pubblicare su Vercel

1. Su vercel.com → **Add New… → Project** → importa il repository GitHub.
2. Impostazioni (sono già in `vercel.json`, Vercel le legge da solo):

| Impostazione        | Valore           |
|---------------------|------------------|
| Framework Preset    | **Other**        |
| Root Directory      | `./`             |
| Build Command       | `npm run build`  |
| Output Directory    | `dist`           |
| Install Command     | `npm install`    |
| Environment Variables | nessuna        |

3. **Deploy**. Otterrai un indirizzo tipo `gibiesse-sedi.vercel.app`, da mettere nella bio di Instagram.
   Da *Settings → Domains* puoi collegare un sottodominio tuo (es. `sedi.gibiessestore.it`).

Ogni modifica caricata su GitHub viene ripubblicata in automatico.

## Modificare i punti vendita

In `public/index.html` cerca `const stores = [` e aggiungi/modifica una riga:

```js
{ brand:"Niky Scuderi", addr:"Via Esempio 1", city:"Viterbo" },
```

`brand` può essere `Gibiesse`, `Niky Scuderi` o `Marella` (determina il logo mostrato).
Le città e i filtri si aggiornano da soli.

> Attenzione: il testo in alto dice "8 punti vendita" ma l'elenco ne contiene 7.
> Aggiungi l'ottavo oppure correggi il numero (cerca `8 punti vendita`).

Tutti i link verso lo shop hanno `utm_source=instagram&utm_medium=bio`, così in Shopify /
Google Analytics si vedono le visite arrivate dalla bio.
