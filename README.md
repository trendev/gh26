# GH26 - Site vitrine

Site vitrine one-page pour **GH26**, entreprise B2B spécialisée dans le chauffage industriel, la climatisation, la maintenance d'installations techniques et les solutions énergétiques pour les professionnels.

Le projet est construit avec **React 18**, **Vite**, **TypeScript** et **Tailwind CSS**. Il est prévu pour un déploiement statique sur **GitHub Pages**.

## Aperçu

Le site présente :

- une navigation par ancres sans routeur ;
- un hero avec CTA et chiffres clés ;
- une section statistiques ;
- une grille de services ;
- des réalisations / cas clients ;
- un bloc à propos ;
- une section contact avec formulaire de demande de devis ;
- un footer complet.

Le formulaire ne dépend d'aucun back-end : il génère un e-mail pré-rempli via `mailto:contact@gh26.fr`.

## Design

La source de vérité du design est le fichier Figma :

- Fichier : <https://www.figma.com/design/7nsGbPcP6M11KXu99boIjO>
- Desktop : node `14:2`, largeur 1440 px
- Mobile : node `22:2`, largeur 390 px

Les assets issus de la maquette sont placés dans `gh26-images/` en PNG source, puis convertis en WebP dans `public/img/`.

## Stack

- React `18`
- Vite `5`
- TypeScript
- Tailwind CSS `3`
- Inter via `@fontsource/inter`
- Sharp pour la conversion des images

## Prérequis

- Node.js récent compatible avec Vite 5
- npm

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev
```

Lance le serveur de développement Vite.

```bash
npm run build
```

Compile TypeScript puis génère le build de production dans `dist/`.

```bash
npm run preview
```

Prévisualise le build de production localement.

```bash
npm run lint
```

Lance la vérification TypeScript sans générer de fichiers.

```bash
npm run convert-images
```

Convertit les PNG de `gh26-images/` en WebP optimisés dans `public/img/`.

## Structure

```text
.
├── public/img/              # Images WebP servies statiquement
├── gh26-images/             # Images PNG sources extraites de Figma
├── scripts/
│   └── convert-images.mjs   # Conversion PNG -> WebP
├── src/
│   ├── components/
│   │   ├── sections/        # Sections principales de la page
│   │   └── ui/              # Composants UI réutilisables
│   ├── content/             # Textes, liens, données et coordonnées
│   ├── App.tsx              # Composition de la page
│   ├── index.css            # Tailwind + styles globaux
│   └── main.tsx             # Entrée React
├── tailwind.config.ts       # Tokens de design
├── vite.config.ts           # Config Vite et base GitHub Pages
└── CLAUDE.md                # Brief projet détaillé
```

## Sections

Les sections sont composées dans `src/App.tsx` :

1. `UtilityBar`
2. `Navbar`
3. `Hero`
4. `Stats`
5. `Services`
6. `Realisations`
7. `APropos`
8. `Contact`
9. `Footer`

La page utilise des ancres HTML (`#accueil`, `#services`, `#realisations`, `#a-propos`, `#contact`) et un scroll fluide configuré dans `src/index.css`.

## Modifier le contenu

La majorité des textes et données sont centralisés dans `src/content/` :

- `nav.ts` : navigation, marque, logo
- `stats.ts` : chiffres clés
- `services.ts` : cartes services et CTA
- `realisations.ts` : réalisations et métriques
- `apropos.ts` : texte, image et points différenciants
- `contact.ts` : téléphone, e-mail, couverture et options du formulaire
- `footer.ts` : colonnes de liens et mentions

Pour remplacer les coordonnées client, modifier principalement :

```ts
// src/content/contact.ts
export const contact = {
  phone: '01 23 45 67 89',
  phoneHref: 'tel:+33123456789',
  email: 'contact@gh26.fr',
  emailHref: 'mailto:contact@gh26.fr',
  coverage: 'Intervention partout en France',
};
```

## Images

Les images utilisées par l'application sont :

- `public/img/logo.webp`
- `public/img/hero.webp`
- `public/img/real1.webp`
- `public/img/real2.webp`
- `public/img/real3.webp`
- `public/img/apropos.webp`

Pour mettre à jour les images :

1. remplacer les PNG sources dans `gh26-images/` ;
2. vérifier le mapping dans `scripts/convert-images.mjs` ;
3. lancer `npm run convert-images` ;
4. contrôler le rendu en local.

Attention : le projet est configuré avec `base: '/gh26/'`, donc les chemins d'images dans `src/content/*` et certains composants pointent vers `/gh26/img/...`.

## Formulaire de devis

Le formulaire de contact est implémenté dans `src/components/sections/Contact.tsx`.

Au submit, il construit :

- un sujet d'e-mail avec le type de besoin ;
- un corps contenant nom, société, e-mail, besoin et message ;
- une URL `mailto:` vers l'adresse définie dans `src/content/contact.ts`.

Cette approche est compatible avec GitHub Pages, mais dépend du client mail configuré sur le poste de l'utilisateur.

## Tokens de design

Les principaux tokens sont définis dans `tailwind.config.ts` :

- `navy`, `navy-deep`, `navy-900`
- `azure`, `azure-dark`
- `copper`
- `slate`, `mist`, `pill`, `border`
- rayons `card`, `btn`, `pill`
- ombres `card`, `float`
- gradients `btn-primary`, `hero-navy`
- largeur max de contenu `1200px`

Le design doit rester aligné avec Figma. En cas d'écart, la maquette Figma prévaut.

## Déploiement GitHub Pages

La configuration Vite actuelle cible un dépôt publié sous :

```ts
// vite.config.ts
base: '/gh26/'
```

Ce réglage correspond à une URL de type :

```text
https://<user>.github.io/gh26/
```

Si le site passe sur un domaine personnalisé ou un dépôt `<user>.github.io`, remplacer la base par :

```ts
base: '/'
```

Avant déploiement :

```bash
npm run build
```

Le dossier généré est `dist/`.

## Points à confirmer côté client

- coordonnées définitives ;
- textes définitifs ;
- mentions légales, confidentialité et CGV ;
- chiffres clés réels ;
- métriques des réalisations ;
- éventuel domaine personnalisé ;
- mode de déploiement GitHub Pages ou autre hébergeur statique.

