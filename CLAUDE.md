# CLAUDE.md — Site vitrine GH26

> Contrat de projet pour Claude Code. Lis ce fichier en entier avant de coder.
> La **source de vérité du design est le fichier Figma** (voir § Figma) : récupère les
> mesures, couleurs et assets exacts via le connecteur **Figma (Dev Mode / MCP)** plutôt
> que de te fier uniquement aux valeurs indicatives ci-dessous.

---

## 0. Langue de travail

- **Communique toujours en français** avec l'utilisateur.
- **Code en anglais** : noms de variables, fonctions, composants, fichiers.
- **Commentaires de code, messages de commit, textes d'interface (UI) : en français.**
- Tout le **contenu du site est en français** (c'est une entreprise française).

---

## 1. Présentation du projet

**GH26** est une entreprise française (B2B) spécialisée dans le **chauffage industriel, la
climatisation, les équipements thermiques et les solutions énergétiques** pour les
professionnels. Positionnement : expert technique, intégrateur de solutions thermiques et
climatiques — sérieux, fiabilité, performance énergétique, accompagnement de terrain.
Références visuelles d'inspiration : Daikin, Mitsubishi Electric, Viessmann.

Objectif : un **site vitrine one-page** (une seule page + ancres), rapide, bien référencé,
responsive, déployé sur **GitHub Pages**.

---

## 2. Stack technique

- **React 18 + Vite** (TypeScript bienvenu, sinon JS moderne).
- **Tailwind CSS** (utility-first, tokens dans `tailwind.config`).
- **Pas de routeur** : page unique avec navigation par ancres (`#services`, `#realisations`,
  `#a-propos`, `#contact`…). Défilement doux (smooth scroll).
- Police **Inter** (via `@fontsource/inter` ou Google Fonts) — poids 400 / 500 / 600 / 700.
- Aucune dépendance lourde inutile. Pas de back-end (voir § Formulaire = `mailto:`).

### Commandes
```bash
npm install
npm run dev        # serveur de dev
npm run build      # build de production -> dist/
npm run preview    # prévisualisation du build
```

---

## 3. Figma — source de vérité du design

- **Fichier :** `https://www.figma.com/design/7nsGbPcP6M11KXu99boIjO`
- **File key :** `7nsGbPcP6M11KXu99boIjO`
- Le fichier contient deux pages : **`Page 1`** (les maquettes) et **`assets`** (les images).

### Maquettes à reproduire (page « Page 1 »)
| Vue | Node ID | URL node | Largeur |
|---|---|---|---|
| **Desktop — Accueil** | `14:2` | `…/7nsGbPcP6M11KXu99boIjO?node-id=14-2` | 1440 px |
| **Mobile** | `22:2` | `…/7nsGbPcP6M11KXu99boIjO?node-id=22-2` | 390 px |

> Le **responsive** doit interpoler proprement entre ces deux maquettes (mobile-first),
> et rester correct au-delà de 1440 px (contenu centré, largeur max ~1200–1280 px).

### Assets / images (page « assets »)
| Rôle | Node ID | Nom dans Figma |
|---|---|---|
| Logo GH26 | `35:8` | `logo-3 1` |
| Photo hero (local technique) | `35:4` | `hero 1` |
| Réalisation 1 — chauffage (chaudières) | `35:5` | `real1 1` |
| Réalisation 2 — climatisation | `35:6` | `real2 1` |
| Réalisation 3 — solutions énergétiques | `35:7` | `real3 1` |
| À propos — technicien | `35:3` | `apropos 1` |

### Méthode recommandée pour le design→code
1. Pour chaque section, appelle `get_design_context` sur le node desktop puis mobile pour
   obtenir code de référence + **mesures, couleurs, typographies exactes** + URLs de
   téléchargement des assets.
2. Utilise `get_variable_defs` / `get_screenshot` pour vérifier les valeurs et comparer ton
   rendu à la maquette.
3. **Télécharge les images** depuis les URLs renvoyées (ou exporte les nodes `35:x`),
   convertis-les en **WebP**, place-les dans `public/img/` (ou `src/assets/`), avec
   `width`/`height` et `loading="lazy"` (sauf le hero et le logo).
4. Les valeurs de tokens ci-dessous sont **indicatives** : en cas de doute, Figma fait foi.

---

## 4. Design tokens (à mettre dans `tailwind.config`)

### Couleurs
| Token | Hex | Usage |
|---|---|---|
| `navy` | `#0B2138` | Texte titres, dark primaire |
| `navy-deep` | `#061320` | Fond footer & section Contact |
| `navy-900` | `#0A1E33` | Fond hero (dégradé navy) |
| `azure` | `#1E73E0` | Accent principal (liens, boutons, eyebrow) |
| `azure-dark` | `#1862C4` | Fin de dégradé bouton / hover |
| `copper` | `#D98A3D` | Accent secondaire (chaleur, détails) |
| `slate` | `#46566B` | Texte courant |
| `mist` | `#F4F7FA` | Fond de section claire alternée |
| `pill` | `#E4EEFB` | Fond des pastilles « eyebrow » (sur clair) |
| `border` | `#E7ECF2` | Bordures cartes & inputs |
| `input-bg` | `#F7F9FB` | Fond des champs de formulaire |
| `placeholder` | `#8C99A8` | Texte placeholder |
| `footer-muted` | `#6F93C4` | Texte secondaire sur fond navy |
| `white` | `#FFFFFF` | — |

- **Bouton primaire :** dégradé linéaire `azure → azure-dark`, texte blanc, rayon **10 px**,
  padding ~`14px 24px`, hauteur qui épouse le contenu (≈ 46 px), **texte centré**.
- **Bouton secondaire (sur fond navy) :** fond transparent, bordure `rgba(255,255,255,.2)`,
  texte blanc.
- **Eyebrow (sur fond navy) :** fond `rgba(30,115,224,.18)`, texte bleu clair `#A9C7F5`.

### Typographie (Inter — valeurs indicatives, confirmer via Figma)
| Élément | Desktop | Mobile | Poids |
|---|---|---|---|
| H1 hero | ~48–52 px | ~30–32 px | Bold (700) |
| H2 section | ~34–36 px | ~26 px | Bold (700) |
| Titre carte | 18–20 px | 18 px | Semi Bold (600) |
| Corps | 15–17 px | 15 px | Regular (400) |
| Eyebrow | 12 px, MAJUSCULES, letter-spacing ~0.08em | idem | Semi Bold (600) |
| Légende / petit | 13–14 px | 13 px | Medium (500) |

### Rayons / ombres / espacements
- Rayons : cartes **15 px**, boutons & inputs **10 px**, pastilles **999 px** (pleines).
- Ombre carte : `0 10px 24px rgba(0,0,0,.05)`.
- Section mobile : padding horizontal **24 px**, vertical **52 px**, gap ~20–24 px.
- Section desktop : conteneur centré, largeur max ~1200–1280 px, généreuses marges verticales.

> ⚠️ **Piège vu en maquette :** ne jamais figer la hauteur des boutons / pastilles — la
> hauteur doit **épouser le contenu** (en Tailwind : pas de `h-*` fixe sur ces éléments,
> laisser le padding gérer). Boutons et pastilles doivent rester compacts.

---

## 5. Structure (one-page) → composants

Ordre des sections (header → footer). Crée un composant par section (`src/components/sections/`)
et des composants UI réutilisables (`src/components/ui/` : `Button`, `Eyebrow`, `Card`,
`Field`, `SectionHeading`…).

1. **UtilityBar** — fine barre supérieure (téléphone, horaires) — placeholder.
2. **Navbar** — logo GH26 + wordmark « GH26 » + baseline « THERMIQUE & ÉNERGIE » ;
   liens : Accueil · Services · Réalisations · À propos · Contact ; bouton **Demander un devis**.
   Mobile : logo + bouton **Devis** + menu hamburger (panneau de nav).
3. **Hero** — 2 colonnes (desktop) / empilé (mobile). Titre « Solutions thermiques et
   énergétiques pour les professionnels. », paragraphe, 2 CTA (**Demander un devis**,
   **Découvrir nos services**), ligne de stats. Visuel : photo hero + carte flottante
   « **−30 %** sur la facture énergétique ». CTA mobile en **pleine largeur**.
4. **Stats** — 4 chiffres : `15+ ans d'expertise`, `400+ installations`,
   `48 h délai d'intervention`, `30 % économies moyennes`.
5. **Services** — 5 cartes (icône + titre + description + lien « En savoir plus ») :
   Chauffage industriel · Climatisation · Solutions énergétiques · Maintenance ·
   Installations techniques. + tuile CTA navy « **Un besoin spécifique ?** » → **Nous contacter**.
6. **Realisations** — 3 cartes études de cas (photo + tag catégorie + titre + métrique) :
   Réseau de chaleur — site logistique · Traitement d'air — site agroalimentaire ·
   Récupération de chaleur — atelier. Lien « Voir toutes nos réalisations ».
7. **APropos** — titre « Un partenaire technique, pas un simple fournisseur. », paragraphe,
   **photo technicien**, 4 points (Expertise terrain · Accompagnement de A à Z ·
   Performance énergétique · Conformité & sécurité), lien « Découvrir notre savoir-faire ».
8. **Contact** (fond navy) — titre « Un projet thermique ou énergétique ? Parlons-en. »,
   paragraphe, 3 infos (☎ `01 23 45 67 89` · ✉ `contact@gh26.fr` · ⌖ Intervention partout en
   France) + **carte formulaire** « Demande de devis » (voir § Formulaire).
9. **Footer** (fond navy) — pastille blanche avec logo + « GH26 / THERMIQUE & ÉNERGIE » +
   description, 3 colonnes (Services / Société / Ressources), copyright
   « © 2026 GH26 — Tous droits réservés. », liens légaux (Mentions légales · Confidentialité · CGV).

> **Marque :** le logo (image) contient déjà « GH26 ». Dans le header (fond blanc) il s'affiche
> tel quel ; dans le footer (fond navy) il est posé dans une **pastille blanche arrondie**.
> Dans les deux cas : logo + wordmark « GH26 » + baseline « THERMIQUE & ÉNERGIE ».

### Contenu : textes encore fictifs (placeholders — OK pour l'instant)
Chiffres de stats, téléphone `01 23 45 67 89`, e-mail `contact@gh26.fr`, intitulés des
études de cas. À remplacer plus tard par les vraies données fournies par le client.

---

## 6. Responsive

- **Mobile-first.** Les deux maquettes Figma (`390` mobile / `1440` desktop) sont les deux
  bornes de référence ; tout doit rester propre entre les deux et au-delà.
- Breakpoints Tailwind : viser `sm` (~640), `md` (~768, tablette — adapter les grilles
  2 colonnes), `lg` (~1024), `xl` (~1280, mise en page desktop complète).
- Grilles : services en 1 col (mobile) → 2 (md) → 3 (lg) ; réalisations idem ; hero/à-propos/
  contact passent de empilé (mobile) à 2 colonnes (lg).
- Conteneur centré, largeur max ~1200–1280 px sur grands écrans.

---

## 7. Formulaire de devis → `mailto:` (pas de back-end)

GitHub Pages est statique : pas de serveur. Le bouton **« Envoyer ma demande »** compose un
e-mail pré-rempli vers `contact@gh26.fr` et ouvre le client mail de l'utilisateur.

Champs : Nom · Société · Email professionnel · Type de besoin (select : Chauffage,
Climatisation, Maintenance, Solutions énergétiques, Autre) · Votre message.

Exemple d'implémentation :
```js
function handleSubmit(e) {
  e.preventDefault();
  const { nom, societe, email, besoin, message } = values;
  const subject = `Demande de devis — ${besoin} — ${societe || nom}`;
  const body =
    `Nom : ${nom}\n` +
    `Société : ${societe}\n` +
    `Email : ${email}\n` +
    `Type de besoin : ${besoin}\n\n` +
    `Message :\n${message}\n`;
  window.location.href =
    `mailto:contact@gh26.fr?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
}
```
Limites à garder en tête : pas de pièce jointe, dépend du client mail configuré. Garder une
validation basique (champs requis, format e-mail) et afficher l'e-mail en clair en secours.

---

## 8. Déploiement — GitHub Pages

- **Repo :** code source sur GitHub. ⚠️ **Nom du repo à confirmer** → remplacer
  `NOM_DU_REPO` ci-dessous.
- **`vite.config.js` → `base`** (essentiel, sinon les assets ne se chargent pas en prod) :
  - Repo projet servi depuis `https://<user>.github.io/NOM_DU_REPO/` → `base: '/NOM_DU_REPO/'`
  - Domaine personnalisé **ou** repo `<user>.github.io` → `base: '/'`
```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_REPO/', // ← adapter
});
```
- **Single page + ancres** → pas besoin du hack `404.html`. (Si un jour React Router est
  ajouté, prévoir le fallback `404.html`.)
- **Déploiement via GitHub Actions** (recommandé) : créer
  `.github/workflows/deploy.yml`, puis activer *Settings → Pages → Source : GitHub Actions*.
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 9. Conventions de code & qualité

- **Composants fonctionnels + hooks.** Une section = un composant ; petits composants UI
  réutilisables. Données de contenu (services, réalisations, stats…) dans des tableaux/objets
  dédiés (`src/content/`) pour faciliter la mise à jour.
- **Tailwind utility-first** ; tokens dans `tailwind.config` ; éviter le CSS custom sauf besoin
  (dégradés, smooth scroll).
- **Accessibilité :** HTML sémantique (`header/nav/main/section/footer`), `lang="fr"`,
  `alt` descriptifs **en français**, `label` reliés aux inputs, focus visible, contraste AA.
- **SEO :** `<title>` + meta description en français, Open Graph (logo + image hero), titres
  hiérarchisés (un seul H1).
- **Performance :** images **WebP**, `loading="lazy"` (hors hero/logo), dimensions explicites,
  `prefers-reduced-motion` respecté pour les animations.
- **Smooth scroll** pour les ancres ; offset si nav fixe.

### Definition of Done
- Rendu fidèle aux deux maquettes Figma (desktop `14:2` + mobile `22:2`).
- Responsive fluide de ~360 px à ≥1440 px, sans casse ni texte tronqué dans les boutons.
- Navigation par ancres fonctionnelle (menu + CTA « devis » → section Contact).
- Formulaire `mailto:` opérationnel.
- `npm run build` OK et site déployable sur GitHub Pages (bon `base`).

---

## 10. Arborescence suggérée
```
src/
  components/
    sections/   Navbar, Hero, Stats, Services, Realisations, APropos, Contact, Footer, UtilityBar
    ui/         Button, Eyebrow, Card, Field, SectionHeading, Container
  content/      services.ts, realisations.ts, stats.ts, nav.ts  (textes FR centralisés)
  assets/ ou public/img/   logo + 5 photos (WebP)
  App.tsx, main.tsx, index.css (Tailwind)
tailwind.config.js, vite.config.js
.github/workflows/deploy.yml
```
