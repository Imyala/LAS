# LAS – Luke's Aircon Services
**Website: [lashvac.com](https://lashvac.com)**

Professional aircon cleaning for residential, commercial and industrial clients in Brisbane and surrounding regions.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | All Services |
| `residential.html` | Residential Aircon Cleaning |
| `commercial.html` | Commercial Aircon Cleaning |
| `industrial.html` | Industrial / HVACR |
| `gallery.html` | Photo Gallery |
| `about.html` | About Us |
| `contact.html` | Contact / Get a Quote |

## Files

```
/
├── index.html
├── services.html
├── residential.html
├── commercial.html
├── industrial.html
├── gallery.html
├── about.html
├── contact.html
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Navigation, lightbox, form validation, animations
└── images/
    └── README.md       ← Instructions for adding your photos
```

## Adding Your Photos

All image placeholders are clearly marked with comments like `<!-- Replace with images/filename.jpg -->`.  
See `images/README.md` for the full list of recommended file names and instructions.

## Updating Contact Details

Open `js/main.js` and find the two sections marked:
- `/* ---------- Inject shared navigation ---------- */` — update phone number and email in the topbar and navbar
- `/* ---------- Inject shared footer ---------- */` — update footer contact details

Both are near the top of the file.

## To Do (Before Launch)

- [ ] Add your real phone number (replace `0400 000 000` in `js/main.js`)
- [ ] Add your real email address (replace `info@lashvac.com` in `js/main.js`)
- [ ] Add your photos to the `/images/` folder (see `images/README.md`)
- [ ] Connect the contact form to a real backend (e.g. Netlify Forms, Formspree, or your own server)
- [ ] Add your real Google Maps embed to `contact.html`
- [ ] Update QBCC licence number and certifications in `about.html`
- [ ] Add your real Google/Facebook review links to the footer socials in `js/main.js`
