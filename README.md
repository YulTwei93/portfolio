# Yuliya Tweitmann – Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat&logo=greensock&logoColor=white)

Persönliches Portfolio von **Yuliya Tweitmann** – Mediengestalterin Digital & Print in Ausbildung bei cbm Bremen. Die Website präsentiert Frontend-Entwicklungsprojekte sowie Print- und UI-Designarbeiten in einem modernen Dark-Theme mit Glassmorphism-Ästhetik.

## Live-Demo

**[yuliya.tweitmann.com](https://yuliya.tweitmann.com)**

---

> **Hinweis:** Einen Screenshot der Startseite kannst du unter `public/preview.png` ablegen, damit er hier angezeigt wird.
> `![Portfolio Preview](public/preview.png)`

---

## Features

- **Hero-Sektion** – Animiertes Profilbild, Typing-Effekt mit rotierenden Titeln, CTA-Buttons
- **Projekte** – 9 Projekte in 3 Kategorien (Frontend, UI Design, Print & Medien) mit Modal-Galerie, Videos und Links zu GitHub / Live-Demo / Figma
- **About** – Bento-Grid-Layout mit Lebenslauf-Download, Ausbildungsdetails, Skills und Sprachkenntnissen
- **Kontakt** – Kontaktformular mit EmailJS-Integration, direkter E-Mail- und LinkedIn-Link
- **Animationen** – Framer Motion, GSAP und OGL (WebGL) für flüssige Übergänge und Aurora-Hintergrund
- **Responsive** – Mobile-first Design mit Hamburger-Menü und adaptiven Layouts
- **Performance** – Code-Splitting, Lazy Loading der Sektionen mit React Suspense

## Tech Stack

| Technologie | Version | Verwendung |
|---|---|---|
| React | 19 | UI-Framework |
| Vite | 7 | Build Tool & Dev Server |
| TailwindCSS | 3 | Utility-first Styling |
| Framer Motion | 12 | Seitenanimationen & Übergänge |
| GSAP | 3 | Erweiterte Animationen |
| OGL | 1 | WebGL / Aurora-Hintergrund |
| EmailJS | 4 | Kontaktformular-Backend |
| React Icons | 5 | Icon-Bibliothek |

**Schriften:** Syne (Display) · Inter (Fließtext)

## Projektstruktur

```
yuliya-tweitmann_portfolio/
├── public/
│   ├── yt-icon.svg
│   └── lebenslauf_yuliya-tweitmann.pdf
├── src/
│   ├── assets/
│   │   ├── fonts/         # Syne & Inter
│   │   ├── icons/         # SVGs & Logo
│   │   ├── images/        # Projekt-Screenshots & Profilbild
│   │   └── videos/        # Demo-Videos
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Aurora.jsx
│   │   ├── LogoLoop.jsx
│   │   ├── MagicBento.jsx
│   │   ├── Footer.jsx
│   │   └── LegalModal.jsx
│   ├── styles/
│   │   ├── Bento.css
│   │   └── LogoLoop.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Lokale Entwicklung

**Voraussetzungen:** Node.js ≥ 18, npm

```bash
# Repository klonen
git clone https://github.com/<dein-github-name>/yuliya-tweitmann_portfolio.git
cd yuliya-tweitmann_portfolio

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen einrichten (siehe unten)
cp .env.example .env

# Entwicklungsserver starten
npm run dev
```

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Dev-Server auf `http://localhost:5173` |
| `npm run build` | Erstellt den Produktions-Build in `dist/` |
| `npm run preview` | Vorschau des Produktions-Builds |
| `npm run lint` | ESLint-Prüfung |

## Umgebungsvariablen

Erstelle eine `.env`-Datei im Stammverzeichnis mit folgendem Inhalt:

```env
VITE_EMAILJS_SERVICE_ID=dein_service_id
VITE_EMAILJS_TEMPLATE_ID=dein_template_id
VITE_EMAILJS_PUBLIC_KEY=dein_public_key
```

Die Werte erhältst du im [EmailJS Dashboard](https://www.emailjs.com/) nach dem Einrichten eines E-Mail-Services und Templates.

---

&copy; 2024 Yuliya Tweitmann. Alle Rechte vorbehalten.
