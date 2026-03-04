/**
 * MT Solutions — Main App Script
 * ================================
 * Handles: language switching, cart badge, search UX
 */

// ── CONFIG ────────────────────────────────────────────────
const DEFAULT_LANG = 'en';   // ← Change to 'fr' to default to French
const STORAGE_KEY  = 'mts_lang';

// ── LANGUAGE ENGINE ───────────────────────────────────────
function getLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

function updateLangToggle(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── CART / WISHLIST BADGES ────────────────────────────────
function updateBadge(id, count) {
  const el = document.getElementById(id);
  if (el) el.textContent = count;
}

let cartCount = 3;
let wishlistCount = 2;

function addToCart(productName) {
  cartCount++;
  updateBadge('cart-badge', cartCount);
  showToast(`✓ Added to cart`);
}

// ── TOAST NOTIFICATION ────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── STICKY HEADER SHADOW ──────────────────────────────────
function handleScroll() {
  const header = document.querySelector('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved/default language
  const lang = getLang();
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang;

  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Add to cart buttons
  document.querySelectorAll('.btn-add-cart').forEach((btn, i) => {
    btn.addEventListener('click', () => addToCart(`Product ${i+1}`));
  });

  // Scroll handler
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Animate sections on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
});
