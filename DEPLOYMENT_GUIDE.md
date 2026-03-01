# 🚀 Guide de Déploiement Vercel — Circl Landing

## ⚡ Quickstart (5 minutes)

### 1️⃣ Prépare ton GitHub
```bash
# Initialise Git si pas déjà fait
git init
git add .
git commit -m "Initial commit: Circl landing page"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/circl.git
git push -u origin main
```

### 2️⃣ Connect Vercel
1. Va sur **https://vercel.com/new**
2. Clique "Continue with GitHub"
3. Recherche et sélectionne le repo `circl`
4. **Vercel détecte automatiquement :**
   - Framework: Next.js ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
5. Clique "Deploy"
6. **Attends 2-3 min** → Ton site est LIVE 🎉

---

## 🏗️ Architecture Modulaire Expliquée

### Avant (monolithique)
```
circl-landing.html  (1500+ lignes)
├── CSS inline
├── JS inline
└── HTML monobloc
```

### Après (modulaire)
```
Next.js App Router
├── src/app/
│   └── page.tsx (10 imports)
├── src/components/ (10 fichiers)
├── src/styles/ (10 modules CSS)
├── src/utils/ (réutilisable)
└── public/assets/ (images)
```

**Avantages :**
- ✅ Chaque composant = fichier séparé
- ✅ Styles scopés (0 conflicts CSS)
- ✅ TypeScript pour la sécurité
- ✅ Facile à maintenir et scaler
- ✅ Tree-shaking automatique
- ✅ Hot reload en dev

---

## 📚 Séparation des Langages

### 1. HTML → React/TypeScript

**Avant (HTML)**
```html
<section id="features">
  <div class="feat-card">
    <h3>Title</h3>
  </div>
</section>
```

**Après (TSX)**
```tsx
export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <FeatureCard title="Title" />
    </section>
  )
}
```

### 2. CSS Inline → CSS Modules

**Avant (inline style)**
```html
<style>
.nav { position: fixed; ... }
</style>
```

**Après (.module.css)**
```css
/* Navigation.module.css */
.nav { position: fixed; ... }
```

```tsx
import styles from '@/styles/Navigation.module.css'
<nav className={styles.nav} />
```

### 3. JavaScript → TypeScript

**Avant (vanilla JS)**
```js
document.querySelector('.btn').addEventListener('click', () => {})
```

**Après (TypeScript React)**
```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function Button() {
  const ref = useRef<HTMLButtonElement>(null)
  
  useEffect(() => {
    ref.current?.addEventListener('click', () => {})
  }, [])
}
```

---

## 🎯 Déployer des Modifications

### Workflow simple

```bash
# 1. Édite ton code localement
# Ex: modifier src/components/Hero.tsx

# 2. Test en local
npm run dev
# Ouvre http://localhost:3000

# 3. Push sur GitHub
git add .
git commit -m "Update hero section"
git push origin main

# 4. Vercel build automatiquement
# Reçois URL de preview pour tester
# Merge en production automatiquement
```

---

## 🔧 Configuration Fichiers Clés

### `vercel.json` — Config Vercel
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### `next.config.js` — Build Next.js
```js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}
```

### `tsconfig.json` — Paths alias
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Permet : `import styles from '@/styles/Hero.module.css'`  
Au lieu : `import styles from '../../../../styles/Hero.module.css'`

---

## 📊 Optimisations Vercel Incluses

| Feature | Status | Bénéfice |
|---------|--------|----------|
| Static Generation | ✅ Auto | Pages pré-rendues |
| Image Optimization | ✅ Auto | Format AVIF/WebP |
| Compression | ✅ Auto | Gzip + Brotli |
| Edge Functions | ✅ Possible | API routes ultra-fast |
| Global CDN | ✅ Auto | Contenu servi monde entier |
| SSL/HTTPS | ✅ Auto | Certificat Let's Encrypt |

---

## 📱 Ajouter une Fonctionnalité

### Exemple : Ajouter section "Pricing"

**Step 1: Créer le composant**
```tsx
// src/components/Pricing.tsx
'use client'

import styles from '@/styles/Pricing.module.css'

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2>Plans de tarification</h2>
      {/* Content */}
    </section>
  )
}
```

**Step 2: Créer les styles**
```css
/* src/styles/Pricing.module.css */
.pricing {
  position: relative;
  z-index: 2;
  padding: 120px 48px;
}
```

**Step 3: Importer dans page.tsx**
```tsx
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* ... autres sections */}
      <Pricing />  {/* ← New! */}
      <CTA />
      <Footer />
    </main>
  )
}
```

**Step 4: Deploy 🚀**
```bash
git add .
git commit -m "Add pricing section"
git push origin main
```

---

## 🔐 Variables Secrètes

### Ajouter une API key sécurisée

**Local development (`...env.local`)**
```
NEXT_PUBLIC_API_URL=http://localhost:3000
SECRET_API_KEY=xxx
```

**Production (Vercel Dashboard)**
1. Project Settings → Environment Variables
2. Add: `SECRET_API_KEY = xxx`
3. Rédeploie

**Utiliser en code**
```tsx
// Public (visible au client)
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Secret (server only)
const apiKey = process.env.SECRET_API_KEY
```

---

## 🚨 Troubleshooting

### ❌ Vercel build fails
```
Solution:
1. Vérifie package.json dependencies
2. npm install et npm run build en local
3. Check console output in Vercel
```

### ❌ Images ne s'affichent pas
```
Solution:
1. Images dans public/assets/, pas ailleurs
2. Chemins relatifs: /assets/logo.png
```

### ❌ Styles ne s'appliquent pas
```
Solution:
1. Import from '@/styles/File.module.css'
2. Utilise className={styles.className}
3. Pas d'inline styles (sauf inline-css)
```

### ❌ Cursor custom ne fonctionne pas
```
Solution:
1. Scripts dans public/scripts/
2. Import dans layout.tsx
3. Document doit avoir id="cursor"
```

---

## 📊 Monitoring

### Vercel Analytics (Dashboard)
- Performance metrics
- Page load times
- Core Web Vitals

### Ajouter Custom Analytics
```tsx
// src/utils/analytics.ts
export const trackEvent = (name: string, data?: any) => {
  if (typeof window !== 'undefined') {
    console.log(`Event: ${name}`, data)
    // Envoyer à Vercel Analytics, Google Analytics, etc.
  }
}
```

---

## 🎓 Concepts Clés Next.js

### App Router vs Pages Router
- ✅ Utilisé ici: **App Router** (moderne, `src/app/`)
- ⌛ Ancien: Pages Router (`pages/`)

### Server vs Client Components
```tsx
// Server component (défaut)
export default function Page() {
  const data = await fetch('...') // OK au server
  return <div>{data}</div>
}

// Client component
'use client'
import { useState } from 'react'
export default function Interactive() {
  const [count, setCount] = useState(0) // Besoin useEffect
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Layouts
```
app/
├── layout.tsx (root, chargé 1x)
├── page.tsx (home page)
└── blog/
    ├── layout.tsx (spécifique blog)
    ├── page.tsx (/blog)
    └── [slug]/
        └── page.tsx (/blog/article-title)
```

---

## ✨ Prochaines Étapes

1. **Domaine personnalisé** : Domain Settings → Custom Domain
2. **Email* : Configurer contact@circlapp.com
3. **Analytics** : Vercel Analytics ou Google Analytics
4. **Database** : Ajouter Supabase, Prisma pour données
5. **Authentication** : NextAuth pour user accounts
6. **API Routes** : Créer endpoints `/api/*` selon besoin

---

## 📞 Support

- **Vercel Docs** : https://vercel.com/docs
- **Next.js Docs** : https://nextjs.org/docs
- **Issues ?** : Vérifie le terminal build Vercel

---

**C'est parti ! 🚀 Ton site est sur internet en < 5 min**
