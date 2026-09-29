'use strict';

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const nav = $('#nav');
const burger = $('#burger');

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('nav--open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});

$$('.nav__links a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

const SCHEDULE = {
  mon: [
    { time: '07:30', name: 'Сайкл-интенсив', trainer: 'Ольга Лапина', hall: 'Сайкл-студия', level: 'Средний' },
    { time: '10:00', name: 'Пилатес', trainer: 'Анна Соколова', hall: 'Зал групповых программ', level: 'Новичок' },
    { time: '12:00', name: 'Плавание, взрослые', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '18:00', name: 'Силовой класс', trainer: 'Дмитрий Орлов', hall: 'Тренажёрный зал', level: 'Средний' },
    { time: '19:00', name: 'Бокс, базовая техника', trainer: 'Игорь Савин', hall: 'Зал единоборств', level: 'Новичок' },
    { time: '20:00', name: 'HIIT 45', trainer: 'Павел Кузнецов', hall: 'Зал групповых программ', level: 'Продвинутый' }
  ],
  tue: [
    { time: '08:00', name: 'Йога', trainer: 'Анна Соколова', hall: 'Зал групповых программ', level: 'Все уровни' },
    { time: '11:00', name: 'Аквааэробика', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '17:00', name: 'Стретчинг', trainer: 'Елена Громова', hall: 'Зал групповых программ', level: 'Новичок' },
    { time: '18:30', name: 'Кроссфит', trainer: 'Павел Кузнецов', hall: 'Тренажёрный зал', level: 'Продвинутый' },
    { time: '19:30', name: 'ММА, ОФП', trainer: 'Игорь Савин', hall: 'Зал единоборств', level: 'Средний' },
    { time: '20:30', name: 'Сайкл', trainer: 'Ольга Лапина', hall: 'Сайкл-студия', level: 'Все уровни' }
  ],
  wed: [
    { time: '07:30', name: 'Функциональный тренинг', trainer: 'Артём Белов', hall: 'Тренажёрный зал', level: 'Средний' },
    { time: '10:00', name: 'Здоровая спина', trainer: 'Елена Громова', hall: 'Зал групповых программ', level: 'Новичок' },
    { time: '12:30', name: 'Плавание, взрослые', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '18:00', name: 'Сайкл-интенсив', trainer: 'Ольга Лапина', hall: 'Сайкл-студия', level: 'Продвинутый' },
    { time: '19:00', name: 'Бокс, работа на мешках', trainer: 'Игорь Савин', hall: 'Зал единоборств', level: 'Средний' },
    { time: '20:00', name: 'Пилатес', trainer: 'Анна Соколова', hall: 'Зал групповых программ', level: 'Все уровни' }
  ],
  thu: [
    { time: '08:00', name: 'Йога', trainer: 'Анна Соколова', hall: 'Зал групповых программ', level: 'Все уровни' },
    { time: '11:00', name: 'Аквааэробика', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '17:30', name: 'HIIT 45', trainer: 'Павел Кузнецов', hall: 'Зал групповых программ', level: 'Продвинутый' },
    { time: '18:30', name: 'Силовой класс', trainer: 'Дмитрий Орлов', hall: 'Тренажёрный зал', level: 'Средний' },
    { time: '19:30', name: 'ММА, ОФП', trainer: 'Игорь Савин', hall: 'Зал единоборств', level: 'Средний' },
    { time: '20:30', name: 'Стретчинг', trainer: 'Елена Громова', hall: 'Зал групповых программ', level: 'Все уровни' }
  ],
  fri: [
    { time: '07:30', name: 'Сайкл', trainer: 'Ольга Лапина', hall: 'Сайкл-студия', level: 'Все уровни' },
    { time: '10:00', name: 'Пилатес', trainer: 'Анна Соколова', hall: 'Зал групповых программ', level: 'Новичок' },
    { time: '12:00', name: 'Плавание, взрослые', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '18:00', name: 'Кроссфит', trainer: 'Артём Белов', hall: 'Тренажёрный зал', level: 'Продвинутый' },
    { time: '19:00', name: 'Бокс, спарринг-класс', trainer: 'Игорь Савин', hall: 'Зал единоборств', level: 'Продвинутый' }
  ],
  sat: [
    { time: '10:00', name: 'Функциональный тренинг', trainer: 'Артём Белов', hall: 'Тренажёрный зал', level: 'Средний' },
    { time: '11:00', name: 'Здоровая спина', trainer: 'Елена Громова', hall: 'Зал групповых программ', level: 'Новичок' },
    { time: '12:00', name: 'Семейное плавание', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '13:00', name: 'Бокс, базовая техника', trainer: 'Игорь Савин', hall: 'Зал единоборств', level: 'Новичок' },
    { time: '16:00', name: 'Сайкл-интенсив', trainer: 'Ольга Лапина', hall: 'Сайкл-студия', level: 'Средний' }
  ],
  sun: [
    { time: '10:00', name: 'Йога', trainer: 'Анна Соколова', hall: 'Зал групповых программ', level: 'Все уровни' },
    { time: '11:30', name: 'Аквааэробика', trainer: 'Мария Ветрова', hall: 'Бассейн', level: 'Все уровни' },
    { time: '12:30', name: 'Стретчинг', trainer: 'Елена Громова', hall: 'Зал групповых программ', level: 'Новичок' },
    { time: '17:00', name: 'Силовой класс', trainer: 'Дмитрий Орлов', hall: 'Тренажёрный зал', level: 'Средний' }
  ]
};

const LEVEL_CLASS = {
  'Новичок': 's-level--1',
  'Средний': 's-level--2',
  'Продвинутый': 's-level--3',
  'Все уровни': 's-level--2'
};

const scheduleGrid = $('#schedule-grid');

function renderDay(day) {
  const classes = SCHEDULE[day] || [];
  if (!classes.length) {
    scheduleGrid.innerHTML = '<p class="schedule__empty">В этот день групповых занятий нет. Зал свободен для индивидуальных тренировок.</p>';
    return;
  }
  scheduleGrid.innerHTML = classes.map((c) => `
    <div class="schedule__row">
      <span class="s-time">${c.time}</span>
      <span class="s-name">${c.name}</span>
      <span class="s-trainer">${c.trainer}</span>
      <span class="s-hall">${c.hall}</span>
      <span class="s-level ${LEVEL_CLASS[c.level] || ''}">${c.level}</span>
    </div>
  `).join('');
}

const dayTabs = $$('#schedule-tabs .tab');

function activateDay(tab, moveFocus) {
  dayTabs.forEach((t) => {
    const active = t === tab;
    t.classList.toggle('is-active', active);
    t.setAttribute('aria-selected', String(active));
    t.setAttribute('tabindex', active ? '0' : '-1');
  });
  if (moveFocus) tab.focus();
  renderDay(tab.dataset.day);
}

dayTabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => activateDay(tab, false));
  tab.addEventListener('keydown', (e) => {
    let next = null;
    if (e.key === 'ArrowRight') next = dayTabs[(idx + 1) % dayTabs.length];
    else if (e.key === 'ArrowLeft') next = dayTabs[(idx - 1 + dayTabs.length) % dayTabs.length];
    else if (e.key === 'Home') next = dayTabs[0];
    else if (e.key === 'End') next = dayTabs[dayTabs.length - 1];
    if (next) {
      e.preventDefault();
      activateDay(next, true);
    }
  });
});

dayTabs.forEach((t, i) => t.setAttribute('tabindex', i === 0 ? '0' : '-1'));

renderDay('mon');

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value.toLocaleString('ru-RU');
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (reduceMotion) entry.target.textContent = Number(entry.target.dataset.target).toLocaleString('ru-RU');
      else animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

$$('.stat__value').forEach((el) => counterObserver.observe(el));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

$$('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  revealObserver.observe(el);
});

const form = $('#trial-form');
const success = $('#trial-success');

function setError(input, message) {
  const field = input.closest('.field');
  const error = $(`[data-error-for="${input.id}"]`);
  field.classList.toggle('is-invalid', Boolean(message));
  if (message) {
    input.setAttribute('aria-invalid', 'true');
  } else {
    input.removeAttribute('aria-invalid');
  }
  if (error) error.textContent = message || '';
}

function validateName() {
  const input = $('#f-name');
  const value = input.value.trim();
  if (value.length < 2) {
    setError(input, 'Укажите имя: минимум 2 символа');
    return false;
  }
  setError(input, '');
  return true;
}

function getDigits(phone) {
  return phone.replace(/\D/g, '');
}

function validatePhone() {
  const input = $('#f-phone');
  let digits = getDigits(input.value);
  if (digits.startsWith('8') && digits.length === 11) {
    digits = '7' + digits.slice(1);
  }
  if (digits.length === 10 && digits.startsWith('9')) {
    digits = '7' + digits;
  }
  const valid = digits.length === 11 && digits.startsWith('7');
  setError(input, valid ? '' : 'Введите телефон в формате +7 (999) 123-45-67');
  return valid;
}

function validateClub() {
  const select = $('#f-club');
  const valid = select.value !== '';
  setError(select, valid ? '' : 'Выберите клуб');
  return valid;
}

function validateAgree() {
  const checkbox = $('#f-agree');
  const valid = checkbox.checked;
  setError(checkbox, valid ? '' : 'Нужно согласие на обработку данных');
  return valid;
}

$('#f-phone').addEventListener('input', (e) => {
  let digits = getDigits(e.target.value);
  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
  if (digits.startsWith('9') && digits.length === 10) digits = '7' + digits;
  digits = digits.slice(0, 11);
  if (digits && !digits.startsWith('7')) digits = '7' + digits.slice(0, 10);

  let out = '';
  if (digits.length > 0) out = '+7';
  if (digits.length > 1) out += ' (' + digits.slice(1, 4);
  if (digits.length >= 4) out += ') ' + digits.slice(4, 7);
  if (digits.length >= 7) out += '-' + digits.slice(7, 9);
  if (digits.length >= 9) out += '-' + digits.slice(9, 11);
  e.target.value = out;
  setError(e.target, '');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = [validateName(), validatePhone(), validateClub(), validateAgree()].every(Boolean);
  if (!ok) {
    const firstInvalid = $('.field.is-invalid input, .field.is-invalid select', form);
    if (firstInvalid) firstInvalid.focus();
    return;
  }
  form.hidden = true;
  success.hidden = false;
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

$$('#trial-form input, #trial-form select').forEach((el) =>
  el.addEventListener('input', () => setError(el, ''))
);
$('#f-agree').addEventListener('change', () => setError($('#f-agree'), ''));

$('#year').textContent = new Date().getFullYear();
