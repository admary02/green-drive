# Adam Maricel – Driving School Website

Website for **Adam Maricel PFA**, a category B driving school in Bucharest (Șoseaua Olteniței 252, Sector 4).

A one-page site in Romanian and English, with prices, enrollment steps, study resources, the school's cars and contact details, plus a separate photo gallery.

## Tech stack

- React 18 (Create React App)
- Tailwind CSS 3
- React Router 6

## Run locally

Requires Node.js 22 LTS.

```bash
npm install   # first time only
npm start     # opens http://localhost:3000
```

Build for production:

```bash
npm run build # output in /build
```

## Where to change things

| What | File |
|---|---|
| Phone, WhatsApp, email, address, map, social links, Google reviews, resource links | `src/siteConfig.js` |
| All texts and prices (RO and EN) | `src/translations.js` |
| Home page sections | `src/pages/HomePage.js` |
| Gallery page | `src/pages/CarsPage.js` |
| Colors and font | `tailwind.config.js` |
| Navigation and footer | `src/components/common/` |

**Adding photos to the gallery:** drop the image into `src/components/assets/cars/kia`, `hyundai` or `both`. It appears automatically, with no code changes.

**Documents (PDF):** stored in `public/documente/` and linked from `src/siteConfig.js`.
