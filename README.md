# NEXUS - Digital Solutions

![Version](https://img.shields.io/badge/version-1.0.0-cyan)
![License](https://img.shields.io/badge/license-MIT-pink)
![HTML5](https://img.shields.io/badge/HTML5-cyan)
![CSS3](https://img.shields.io/badge/CSS3-pink)
![JavaScript](https://img.shields.io/badge/JavaScript-cyan)

Un site vitrine moderne avec une esthétique **dark mode cyberpunk**, conçu pour offrir une expérience utilisateur immersive et futuriste.

## ✨ Caractéristiques

### 🎨 Design
- **Esthétique cyberpunk** avec effets néon (cyan, magenta, bleu)
- **Typographie distinctive** : Orbitron & Rajdhani
- **Grille animée** en arrière-plan
- **Effets de glitch** et scanlines pour l'ambiance cyberpunk
- **Animations fluides** et micro-interactions

### ⚡ Fonctionnalités
- **Parallaxe** au mouvement de la souris
- **Scroll smooth** entre les sections
- **Animations au scroll** (fade-in, staggered)
- **Compteurs animés** dans la section stats
- **Effet tilt 3D** sur les projets du portfolio
- **Effets hover** avancés sur toutes les cartes
- **Responsive design** pour tous les écrans

### 📑 Sections
1. **Hero** - Introduction avec titre animé et CTA
2. **Services** - 3 cartes de services avec effets hover
3. **Stats** - Statistiques avec compteurs animés
4. **Notre Vision** - Texte descriptif + timeline interactive
5. **Portfolio** - Grille de 4 projets avec overlays
6. **Technologies** - Stack technique avec icônes
7. **Témoignages** - 3 avis clients
8. **CTA finale** - Appel à l'action avec boutons
9. **Footer** - Liens sociaux et copyright

## 📁 Structure du Projet

```
nexus-website/
├── index.html          # Structure HTML
├── style.css           # Styles CSS
├── script.js           # Interactions JavaScript
├── favicon.svg         # Icône du site
└── README.md           # Documentation
```

## 🚀 Installation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune dépendance externe (hormis Google Fonts)

### Étapes

1. **Cloner ou télécharger le projet**
```bash
git clone https://github.com/votre-username/nexus-website.git
cd nexus-website
```

2. **Ouvrir le site**
- Double-cliquer sur `index.html`
- Ou utiliser un serveur local :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve

# Avec PHP
php -S localhost:8000
```

3. **Accéder au site**
- Ouvrir `http://localhost:8000` dans votre navigateur

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies via des variables CSS dans `style.css` :

```css
:root {
    --neon-cyan: #00ffff;      /* Cyan néon */
    --neon-pink: #ff00ff;      /* Magenta néon */
    --neon-blue: #0080ff;      /* Bleu néon */
    --dark-bg: #0a0a0f;        /* Fond principal */
    --text-primary: #e0e0e0;   /* Texte principal */
    --text-secondary: #808080; /* Texte secondaire */
}
```

### Typographie
Pour changer les polices, modifiez l'import dans `index.html` :

```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice&display=swap" rel="stylesheet">
```

Et mettez à jour les références dans `style.css`.

### Contenu
- **Textes** : Modifiez directement dans `index.html`
- **Images** : Ajoutez vos images dans un dossier `/images` et référencez-les
- **Animations** : Personnalisez les timings dans `script.js`

## 🛠️ Technologies Utilisées

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure sémantique |
| **CSS3** | Styles, animations, responsive |
| **JavaScript (Vanilla)** | Interactions, animations dynamiques |
| **Google Fonts** | Typographie (Orbitron, Rajdhani) |

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :

- **Desktop** : > 768px (grilles multi-colonnes)
- **Tablet** : 768px (grilles simplifiées)
- **Mobile** : < 768px (colonnes uniques)

## ⚙️ Performances

### Optimisations
- ✅ CSS et JS externes pour le caching
- ✅ Animations CSS uniquement (hardware-accelerated)
- ✅ Lazy loading des animations au scroll
- ✅ Pas de dépendances lourdes (frameworks)
- ✅ Favicon SVG optimisé

### Lighthouse Score (estimé)
- **Performance** : 95+
- **Accessibility** : 90+
- **Best Practices** : 95+
- **SEO** : 90+

## 🎯 Compatibilité Navigateurs

| Navigateur | Version Minimale |
|------------|------------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 📝 Liste des Fonctionnalités

- [x] Design cyberpunk dark mode
- [x] Animations au scroll
- [x] Effets parallaxe
- [x] Navigation smooth
- [x] Compteurs animés
- [x] Portfolio avec effet tilt 3D
- [x] Timeline interactive
- [x] Responsive design
- [x] Effets de glitch
- [x] Favicon personnalisé
- [ ] Mode clair (optionnel)
- [ ] Formulaire de contact fonctionnel
- [ ] Intégration CMS (optionnel)
- [ ] Animations GSAP (optionnel)

## 🔧 Développement

### Ajouter une nouvelle section

1. Ajoutez le HTML dans `index.html`
2. Ajoutez les styles dans `style.css`
3. Ajoutez les interactions dans `script.js`
4. Testez le responsive

### Modifier les animations

Les animations sont gérées dans `script.js`. Exemple pour modifier la vitesse du parallaxe :

```javascript
const speed = (index + 1) * 20; // Changez la valeur 20
```

## 📄 License

MIT License - Vous êtes libre d'utiliser ce projet pour vos besoins personnels ou commerciaux.
