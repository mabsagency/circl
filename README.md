# Circl Landing Page — Deployed on Vercel

Architecture moderne et modulaire avec **Next.js 14** + **TypeScript** + **CSS Modules**

## 📁 Structure du Projet

```
circl/
├── public/
│   ├── assets/              # Images et ressources
│   └── scripts/             # Scripts client
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Page principale
│   │   └── globals.css      # Styles globaux
│   ├── components/          # Composants React
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Features.tsx
│   │   ├── Showcase.tsx
│   │   ├── Community.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── Canvas.tsx
│   ├── styles/              # CSS Modules
│   │   ├── Navigation.module.css
│   │   ├── Hero.module.css
│   │   ├── Stats.module.css
│   │   ├── Features.module.css
│   │   ├── Showcase.module.css
│   │   ├── Community.module.css
│   │   ├── CTA.module.css
│   │   └── Footer.module.css
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utilitaires
│   └── types/               # Types TypeScript
├── package.json
├── tsconfig.json
├── next.config.js
├── vercel.json              # Configuration Vercel
└── .gitignore
```

## 🚀 Déploiement Vercel

### Prérequis
- Node.js 18+ installé
- Compte GitHub / Vercel

### Installation locale

```bash
# Install dependencies
npm install

# Développement
npm run dev

# Build
npm run build

# Production
npm start
```

### Déployer sur Vercel

#### Option 1 : GitHub (Recommandé)
1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Clique "New Project"
4. Sélectionne ton repo GitHub
5. Vercel détecte automatiquement Next.js
6. Clique "Deploy"

#### Option 2 : Vercel CLI
```bash
npm install -g vercel
vercel
# Follow the prompts
```

## 🎨 Architecture

### Séparation des langages

- **TypeScript/React** : Logique métier, composants, state management
- **CSS Modules** : Styles scopés par composant (zéro conflit)
- **JavaScript vanille** : Interactions client (cursor, parallax)

### Composants modulaires

Chaque section est un composant React indépendant :
- `Navigation` — Barre de navigation sticky
- `Hero` — Section titre + CTA
- `Stats` — Statistiques avec animations
- `Features` — Grille de features avec 3D tilt
- `Showcase` — Mockups téléphone + description
- `Community` — Avatars + testimonials
- `CTA` — Call-to-action final
- `Footer` — Liens et copyright
- `Canvas` — Particules animées

### Optimisations Vercel

✅ **Static Generation** : Pages pré-rendues au build  
✅ **Image Optimization** : Format moderne (AVIF/WebP)  
✅ **Edge Functions** : Possibilité des API routes  
✅ **Zero-Config** : next.config.js minimaliste  
✅ **Domain Mapping** : CDN global Vercel  

## 🛠️ Customisation

### Ajouter une nouvelle section

```tsx
// src/components/NewSection.tsx
'use client'

import styles from '@/styles/NewSection.module.css'

export default function NewSection() {
  return (
    <section id="new-section" className={styles.section}>
      {/* Content */}
    </section>
  )
}
```

```css
/* src/styles/NewSection.module.css */
.section {
  position: relative;
  z-index: 2;
  padding: 120px 48px;
}
```

Puis importer dans `src/app/page.tsx`

### Modifier les couleurs

Édite les variables CSS dans `src/app/globals.css` :

```css
:root {
  --purple: #9333EA;
  --cyan: #00CFFF;
  /* ... */
}
```

## 📊 Performance

- **Lighthouse Score** : ~95+ (après déploiement)
- **Core Web Vitals** : Optimisé
- **Bundle Size** : ~150KB gzipped
- **Animations** : GPU-accelerated

## 🔄 CI/CD Vercel

À chaque push GitHub :
1. Vercel détecte le changement
2. Build automatique
3. Déploiement en preview
4. Production version déployée en main

## 📝 Variables d'environnement

Ajoute dans le dashboard Vercel :

```
# .env.local (local development)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🎯 À faire après déploiement

- [ ] Configurer domaine personnalisé
- [ ] Ajouter analytics (Vercel Analytics)
- [ ] Configurer emails (Sendgrid/Resend)
- [ ] Sauvegardes des données utilisateur
- [ ] Monitoring avec Sentry ou similar

## 📱 Responsive

- Desktop : ✅ Optimisé
- Tablet : ✅ Grille adaptée
- Mobile : ✅ Stack vertical

@media (max-width: 900px) s'applique automatiquement

## 🔒 Sécurité

- CSP headers (géré par Vercel)
- CORS configuré si API externe
- Pas de secrets en clair
- Validation des inputs

---

**Prêt à déployer ? Pousse sur GitHub et connecte à Vercel dans 2 minutes ! 🚀**
