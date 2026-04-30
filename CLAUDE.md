# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — configured via `postcss.config.mjs` with `@tailwindcss/postcss`; theme tokens declared in `src/app/globals.css` under `@theme inline`
- **next/font/google** — `Bebas_Neue` (titres) and `DM_Sans` (paragraphes/UI), instantiated in `src/app/layout.tsx`, exposed as CSS variables and Tailwind utilities: `font-bebas-neue`, `font-dm-sans`
- **Resend** — envoi des emails du formulaire de contact via `/api/contact`, clé API dans `RESEND_API_KEY`

## Project context

**Farga** — agence web sur-mesure pour artisans et commerçants, site en français, basé dans le Sud-Ouest. Fondateur : Anthony Perret, développeur web freelance basé à Tarbes.

## Brand colors

Defined as CSS variables in `:root` and registered in `@theme inline` as Tailwind utilities:

| Name       | Hex       | Usage                 |
|------------|-----------|-----------------------|
| `fonderie` | `#0b1014` | Background sombre     |
| `acier`    | `#1f252b` | Background secondaire |
| `cuivre`   | `#db640e` | Accent principal      |
| `braise`   | `#A8492B` | Accent secondaire     |
| `ivoire`   | `#ece7e1` | Texte clair           |

## Architecture

```
src/
├── app/
│   ├── layout.tsx                    # Root layout: fonts + <Navbar> + <Footer>, metadata template
│   ├── page.tsx                      # Homepage (hero, services, réalisations, avis)
│   ├── globals.css                   # CSS vars, @theme inline, @keyframes
│   ├── a-propos/page.tsx             # Page À propos (bio Anthony Perret + parcours)
│   ├── contact/page.tsx              # Page Contact (coordonnées + formulaire devis)
│   ├── services/page.tsx             # Page Services (cartes formules + processus)
│   ├── realisations/page.tsx         # Page Réalisations (portfolio)
│   ├── mentions-legales/page.tsx     # Mentions légales + politique de confidentialité
│   └── api/
│       └── contact/route.ts          # POST handler — Resend → contact@farga.me
├── components/
│   ├── Navbar.tsx                    # Fixed navbar, bg-acier, liens vers les routes
│   ├── Footer.tsx                    # Logo, copyright, liens légaux
│   ├── SectionHeader.tsx             # Eyebrow + h2 avec accent cuivre (réutilisable)
│   ├── ServiceCard.tsx               # Carte détaillée d'une offre (titre, prix, features)
│   ├── ServicesGrid.tsx              # 4 aperçus services, animation scroll
│   ├── ProductionsGrid.tsx           # 3 cartes réalisations (grid 3 col), animation scroll
│   ├── ReviewsGrid.tsx               # 3 cartes avis clients, animation scroll
│   └── ContactForm.tsx               # Formulaire devis (nom, email, type projet, message)
├── data/
│   └── services.ts                   # Source de vérité des offres (interface Service + tableau)
└── hooks/
    └── useScrollReveal.ts            # IntersectionObserver hook → { ref, visible }
```

## Routes

| Route               | Fichier                           | État     |
|---------------------|-----------------------------------|----------|
| `/`                 | `app/page.tsx`                    | En cours |
| `/services`         | `app/services/page.tsx`           | En cours |
| `/realisations`     | `app/realisations/page.tsx`       | En cours |
| `/a-propos`         | `app/a-propos/page.tsx`           | En cours |
| `/contact`          | `app/contact/page.tsx`            | En cours |
| `/mentions-legales` | `app/mentions-legales/page.tsx`   | Fait     |

## Metadata

Le layout exporte un `title template` : `"%s | FARGA"`. Chaque page exporte son propre `metadata` avec `title` et `description` adaptés à son contenu. Ne pas exporter de metadata depuis un `"use client"` — créer un layout intermédiaire si besoin.

## Data — services

`src/data/services.ts` exporte l'interface `Service` et le tableau `services`. Toutes les offres passent par ce fichier ; `ServicesGrid` (aperçu homepage) et `ServiceCard` / `services/page.tsx` (page complète) s'en servent.

```ts
interface Service {
  number: string   // "01", "02"…
  title: string
  desc1: string    // courte accroche
  desc2: string    // description longue
  price: number    // 0 = sur devis
  featured: boolean
  items: string[]  // liste de fonctionnalités
}
```

Offres actuelles : One-page (399 €), Vitrine (799 €, featured), E-commerce (1 399 €), App web/mobile (sur devis).

## API — formulaire de contact

`POST /api/contact` reçoit `{ name, email, projectType, message }`, envoie un email à `contact@farga.me` via Resend (reply-to = email de l'expéditeur). Variable d'environnement requise : `RESEND_API_KEY`.

## Key patterns

**`SectionHeader`** — utilisé en tête de chaque section, 3 props :
```tsx
<SectionHeader eyebrow="Ce que je créé" title="Mes" highlight="services." />
```
Rendu : trait cuivre → texte eyebrow → `h2` avec le mot `highlight` en `text-cuivre`.

**`useScrollReveal(threshold?)`** — retourne `{ ref, visible }`. Attacher `ref` au conteneur, appliquer `animate-fade-up` / `opacity-0` selon `visible`. Se déclenche une seule fois.

**`animate-fade-up`** — animation Tailwind custom définie dans `globals.css` via `@keyframes fade-up` + `--animate-fade-up` dans `@theme inline`. Le `both` en fill-mode garantit que les éléments en attente de délai démarrent invisibles.

**Grids animées** — `ServicesGrid`, `ProductionsGrid` et `ReviewsGrid` suivent le même pattern : `useScrollReveal` + `opacity-0` / `animate-fade-up` + `animationDelay` progressif sur chaque carte.

**`ServiceCard`** — layout deux colonnes (infos/prix à gauche, description/features à droite). Le service `featured: true` reçoit un fond cuivre. `price: 0` affiche "Sur devis".

## Path alias

`@/*` resolves to `./src/*`.
