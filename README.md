# FORMA — Fitness Club Network Landing Page

Marketing landing page for **FORMA**, a fictional network of three fitness clubs in Moscow. Built with vanilla HTML, CSS and JavaScript — no frameworks, no build step.

## Quick start

```bash
git clone <repo-url>
cd forma-fitness
# open index.html in a browser, or serve locally:
npx serve .
```

## Features

- Dark energetic theme with neon lime accent and subtle SVG grain texture
- Google Fonts: Oswald (display) + Manrope (body), full Cyrillic support
- Sticky blurred navigation with mobile burger menu
- Hero with animated marquee ("First workout is free")
- Animated stat counters triggered on scroll (IntersectionObserver)
- 6 activity cards with neon hover fill and placeholder photos
- Weekly schedule: 7 day tabs rendered from a JS data object (time, class, trainer, hall, level)
- Trainers, pricing tiers (featured plan highlighted)
- Trial workout signup form: phone mask + validation, inline errors, success state
- Reveal-on-scroll animations, `prefers-reduced-motion` support
- Responsive layout (desktop / tablet / mobile)
- SEO meta tags, Open Graph, SVG favicon

## Screenshots

- `screenshots/desktop.png` — desktop view (coming soon)
- `screenshots/mobile.png` — mobile view (coming soon)

## Project structure

```
forma-fitness/
├── index.html        # single-page markup
├── css/style.css     # theme, layout, responsive styles
├── js/main.js        # schedule tabs, counters, form validation
├── favicon.svg
└── README.md
```

---

## RU: ФОРМА — лендинг сети фитнес-клубов

Одностраничный сайт сети фитнес-клубов «ФОРМА» (Москва, 3 клуба). Ванильные HTML/CSS/JS, без сборки.

**Быстрый старт:** откройте `index.html` в браузере или выполните `npx serve .`

**Возможности:** тёмная неоновая тема с зернистой текстурой, бегущая строка, счётчики на скролле, направления с hover-заливкой, расписание с табами по дням недели, тарифы, форма записи с маской телефона и валидацией, адаптив, SEO и Open Graph.
