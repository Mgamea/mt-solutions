# MT Solutions — Website

![Status](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![Bilingual](https://img.shields.io/badge/Bilingual-EN%20%7C%20FR-blue) ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-181717?logo=github)

> Enterprise IT distributor website — bilingual EN/FR, single-file, zero dependencies.

## 🌐 Live Demo

**[https://YOUR-USERNAME.github.io/mt-solutions/](https://YOUR-USERNAME.github.io/mt-solutions/)**

---

## 🚀 Deploy to GitHub Pages (3 steps)

```bash
# 1. Upload to GitHub
git init && git add . && git commit -m "🚀 Launch MT Solutions"
git remote add origin https://github.com/YOUR-USERNAME/mt-solutions.git
git push -u origin main

# 2. In GitHub → Settings → Pages → Source: main / root → Save
# 3. Your site is live in ~60 seconds ✅
```

---

## ✏️ How to Edit Content

Everything is in **`index.html`** — no build tools, no framework.

### Change displayed language (default)
Find this line in the `<script>` at the bottom:
```js
let lang = localStorage.getItem('mt-lang') || 'en';
//                                              ^^^^ change to 'fr' for French default
```

### Edit English text
Find the `en: { ... }` block in the `<script>` and update any value:
```js
"hero.h1": "The technology<br>that powers <em>your<br>business</em>",
// Change to whatever you want ↑
```

### Edit French text
Same thing in the `fr: { ... }` block.

### Change phone number
Search for `1-877-MT-SOLVE` (appears 3 times) and replace.

### Change colors
Edit CSS variables at the top of `<style>`:
```css
:root {
  --navy:  #0A1628;   /* dark background */
  --blue:  #1A5CFF;   /* primary accent  */
  --cyan:  #00D4FF;   /* secondary accent */
  --orange:#FF6B2B;   /* promotions/badges */
}
```

### Add a product card
Copy a `<div class="product-card">` block in the Products section and edit the content.

### Add a category
Copy a `<a href="#" class="cat-card">` block in the Categories section.

---

## 📁 Project Structure

```
mt-solutions/
├── index.html          ← Entire site (HTML + CSS + JS + translations)
├── README.md           ← This file
├── LICENSE
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy on every git push
```

---

## 🌍 Bilingual System

The EN/FR switcher is built-in. Every text element has a `data-i18n="key"` attribute.  
The translations live in the `T` object at the bottom of `index.html`.

To add a **third language** (e.g. Spanish):
1. Copy the `fr: { ... }` block
2. Rename it `es: { ... }`
3. Translate all values
4. Add a button: `<button class="lang-btn" onclick="setLang('es')" id="btn-es">ES</button>`

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|--------|--------|
| > 1100px | Full desktop, 4–6 column grids |
| 800–1100px | 3 columns |
| < 800px | 1–2 columns, hero simplified |
| < 520px | Single column |

---

## 🛠️ Tech Stack

Pure HTML + CSS + Vanilla JS. No npm, no build step, no dependencies.  
Google Fonts loaded via CDN (Syne + DM Sans).

---

© 2026 MT Solutions Inc. — Montreal, Quebec, Canada
