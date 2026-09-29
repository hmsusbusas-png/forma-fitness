# ФОРМА — лендинг сети фитнес-клубов

Одностраничный сайт вымышленной сети фитнес-клубов «ФОРМА» — три клуба в Москве. Концепт для портфолио на ванильных HTML, CSS и JavaScript, без сборки. Тёмная энергичная тема с неоново-лаймовым акцентом и лёгкой зернистой SVG-текстурой.

![Скриншот главной страницы](screenshots/desktop.png)

## Что внутри

- липкая навигация с блюром, на мобильных — бургер-меню;
- hero с бегущей строкой «Первая тренировка — бесплатно»;
- счётчики статистики заводятся при скролле через IntersectionObserver;
- 6 карточек направлений с неоновой заливкой на hover и фото-заглушками с picsum.photos;
- расписание на неделю: 7 табов по дням, рендерятся из JS-объекта (время, занятие, тренер, зал, уровень);
- блок тренеров и тарифы, средний план выделен бейджем «Популярный»;
- форма записи на пробную тренировку: маска телефона, валидация, inline-ошибки, success-состояние;
- reveal-анимации на скролле, поддержка `prefers-reduced-motion`, SEO-мета, Open Graph, SVG-favicon.

## Как посмотреть

Открой `index.html` в браузере — сборка не нужна. Или запусти локальный сервер:

```powershell
# PowerShell
cd forma-fitness
python -m http.server 8080
# открой http://localhost:8080
```

## Честно об ограничениях

- Форма записи ничего не отправляет: маска, проверки и success-сообщение работают только на клиенте.
- Фото залов и тренеров — заглушки с picsum.photos, без интернета вместо них пустые блоки.
- Названия клубов, цены и расписание — демонстрационные, придуманы для макета.

## Структура файлов

```
forma-fitness/
├── index.html        # разметка одностраничника
├── css/style.css     # тема, сетка, адаптив
├── js/main.js        # табы расписания, счётчики, валидация формы
├── favicon.svg
├── screenshots/      # desktop.png, mobile.png
└── README.md
```

## Стек

HTML5, CSS (custom properties, grid), ванильный JavaScript; шрифты Oswald и Manrope с Google Fonts, полная кириллица.

## English summary

Landing for FORMA, a fictional network of three fitness clubs in Moscow. Dark neon theme, portfolio concept in vanilla HTML/CSS/JS, no build step. Weekly schedule tabs rendered from a JS data object, scroll counters, trainers, pricing tiers, trial signup form with phone mask. Photos are picsum placeholders; the form is client-side only.
