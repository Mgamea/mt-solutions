# MT Solutions — Bilingual Enterprise Website

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![i18n](https://img.shields.io/badge/Languages-EN%20%2F%20FR-blue)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?logo=github)

> MT Solutions — IT products, software and services for businesses in Quebec.
> Fully bilingual (English default / French toggle), zero dependencies, GitHub Pages ready.

**🌐 Live demo:** `https://YOUR-USERNAME.github.io/mt-solutions/`

---

## 📂 Project Structure

```
mt-solutions/
│
├── index.html                    ← Main page (all HTML + CSS)
│
├── assets/
│   └── js/
│       ├── translations.js       ← ✏️  ALL text content (EN + FR) — edit here
│       └── app.js                ← Language switching, cart, scroll effects
│
├── .github/
│   └── workflows/
│       └── deploy.yml            ← Auto-deploy to GitHub Pages on every push
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Deploy to GitHub Pages in 3 steps

### Step 1 — Create a GitHub repository
Go to [github.com/new](https://github.com/new), name it `mt-solutions`, set it to Public.

### Step 2 — Push the project
```bash
cd mt-solutions
git init
git add .
git commit -m "🚀 Initial commit — MT Solutions bilingual site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mt-solutions.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under *Source*, select **GitHub Actions**
3. Done ✅ — your site will be live at `https://YOUR-USERNAME.github.io/mt-solutions/`

> Every time you push to `main`, the site redeploys automatically via GitHub Actions.

---

## ✏️ How to Edit Content

### Change text (any language)
Open `assets/js/translations.js` — this file contains **every word** on the site, organized by section.

```javascript
en: {
  // Change the hero title
  hero_title_1: "The technology",
  hero_title_2: "that powers",
  hero_title_em: "your business",   // ← displayed in gradient color

  // Change the phone number (update in topbar + nav in index.html too)
  topbar_phone: "1-877-MT-SOLVE (687-6583)",

  // Change a product name
  p1_name: 'ThinkPad X1 Carbon Gen 11 — 14" Intel Core i7',
  ...
}
```

Just save the file and push — the site updates automatically.

### Change the default language
Open `assets/js/app.js`, line 5:
```javascript
const DEFAULT_LANG = 'en';   // ← Change to 'fr' to default to French
```

### Change colors / theme
Open `index.html` — all colors are CSS variables at the top:
```css
:root {
  --navy:       #0A1628;   /* Dark background color */
  --blue:       #1A5CFF;   /* Primary accent color  */
  --blue-light: #3B7BFF;   /* Hover state           */
  --cyan:       #00D4FF;   /* Highlight / gradient  */
  --orange:     #FF6B2B;   /* Promo badges          */
}
```

### Add a product card
Copy one `<div class="product-card">` block in `index.html` and modify:
- Emoji in `.product-img`
- Brand in `.product-brand`
- Name using `data-i18n="p5_name"` (add `p5_name` to translations.js too)
- Prices in `.price-main` / `.price-old`

### Add a new language (e.g. Spanish)
1. In `translations.js`, copy the `en` block, rename it `es`, translate all values
2. In `index.html`, add a button to the lang-switcher:
   ```html
   <button class="lang-btn" data-lang="es">ES</button>
   ```
3. Done — the switcher handles it automatically.

---

## 🌍 Bilingual Features

| Feature | Details |
|---------|---------|
| Default language | English (`en`) |
| Available languages | English, French |
| Language persistence | Saved in `localStorage` — remembered on return visits |
| Switching | EN / FR toggle in the top bar |
| Translation coverage | 100% — every visible text element is translated |

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|--------|--------|
| 1200px+ | 4-column products, 6-column categories, full hero |
| 900–1200px | 3-column products, 4-column categories |
| 580–900px | 2-column products & categories, services 2-col |
| < 580px | Single column, simplified header |

---

## ⚙️ No dependencies

This project uses **zero external libraries or frameworks**. Everything works with:
- Plain HTML5
- CSS3 (variables, grid, flexbox, animations)
- Vanilla JavaScript (ES6)
- Google Fonts (loaded from CDN — can be self-hosted)

---

## 📄 License

MIT — free to use and modify for commercial and personal projects.

---

*MT Solutions — Montreal, Quebec, Canada*
