# Déployer sur Vercel

Instructions rapides pour déployer ce site statique sur Vercel.

1. Installer la CLI Vercel (optionnel) :

```bash
npm install -g vercel
```

2. Se connecter :

```bash
vercel login
```

3. Déployer (depuis le dossier du projet) :

```bash
vercel
# ou pour déployer en production directement
vercel --prod
```

Remarques:
- Le fichier `index.html` est la page d'accueil (copie de `circl-landing.html`).
- `vercel.json` force le routage vers `index.html` pour les routes SPA.
- Assets (dossier `assets/`) sont servis tels quels.

Si vous préférez l'interface web : connectez-vous sur https://vercel.com, créez un nouveau projet, importez ce dépôt (ou téléversez les fichiers), et Vercel détectera le site statique.
