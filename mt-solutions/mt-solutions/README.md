# MT Solutions — Site Web d'entreprise

> Site vitrine et boutique en ligne pour MT Solutions, distributeur de technologies d'entreprise au Québec.

![MT Solutions Preview](https://img.shields.io/badge/Status-En%20ligne-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/Hébergé%20sur-GitHub%20Pages-181717?logo=github)

## 🌐 Démo en ligne

👉 **[Voir le site](https://VOTRE-USERNAME.github.io/mt-solutions/)**

> Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub après le déploiement.

---

## 📋 Description

MT Solutions est un site web complet pour un distributeur de technologies d'entreprise québécois. Il présente :

- **Catalogue de produits** — Ordinateurs, réseau, serveurs, logiciels, sécurité et plus
- **Services TI** — Déploiement, cybersécurité, cloud, support et conseil
- **Programme entreprise** — Devis de volume, financement, secteur public
- **Témoignages clients** — Avis de clients réels
- **Design responsive** — Adapté mobile, tablette et bureau

---

## 🗂️ Structure du projet

```
mt-solutions/
├── index.html          # Page principale (tout-en-un)
├── README.md           # Documentation du projet
├── LICENSE             # Licence MIT
└── .github/
    └── workflows/
        └── deploy.yml  # Déploiement automatique GitHub Pages
```

---

## 🚀 Déploiement sur GitHub Pages

### Méthode rapide (recommandée)

1. **Forkez ou importez** ce dépôt sur votre compte GitHub
2. Allez dans **Settings → Pages**
3. Sous *Source*, sélectionnez **`main`** et le dossier **`/ (root)`**
4. Cliquez **Save** — le site sera en ligne en quelques minutes

### Via GitHub Actions (automatique)

Le fichier `.github/workflows/deploy.yml` est inclus. Chaque `push` sur `main` redéploie le site automatiquement.

---

## 🛠️ Personnalisation

### Modifier les informations de contact
Dans `index.html`, recherchez et remplacez :
```
1-877-MT-SOLVE (687-6583)
```
par votre numéro de téléphone réel.

### Changer les couleurs
Les variables CSS se trouvent au début de `index.html` :
```css
:root {
  --navy: #0A1628;      /* Couleur principale foncée */
  --blue: #1A5CFF;      /* Couleur d'accent bleue */
  --cyan: #00D4FF;      /* Couleur cyan */
  --orange: #FF6B2B;    /* Couleur orange (promotions) */
}
```

### Ajouter de vrais produits
Repérez la section `<!-- PRODUCTS -->` dans `index.html` et modifiez les cartes produits avec vos vraies données.

### Remplacer les emojis par des images
Chaque `.product-img` et `.cat-icon` peut recevoir une balise `<img>` à la place de l'emoji.

---

## 📦 Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| HTML5 | Structure sémantique |
| CSS3 (variables, grid, flexbox) | Mise en page et animations |
| Google Fonts (Syne + DM Sans) | Typographie |
| SVG inline | Icônes vectorielles |

Aucune dépendance JavaScript externe. Aucun framework requis.

---

## 📱 Responsive Design

| Écran | Comportement |
|-------|-------------|
| Desktop (> 1100px) | Grille 4–6 colonnes, hero complet |
| Tablette (800–1100px) | Grille 3 colonnes |
| Mobile (< 800px) | 1–2 colonnes, hero simplifié |

---

## 📄 Licence

Distribué sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🤝 Contact

**MT Solutions**  
📍 Montréal, Québec, Canada  
📞 1-877-MT-SOLVE  
🌐 [mtsolutions.ca](https://mtsolutions.ca)

---

*Site développé avec ❤️ pour les entreprises québécoises*
