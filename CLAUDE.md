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

## Project context

**Forja** — agence web sur-mesure pour artisans et commerçants, site en français, basé dans le Sud-Ouest.

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
│   ├── layout.tsx               # Root layout: fonts + <Navbar>
│   ├── page.tsx                 # Homepage (hero, services, réalisations, avis)
│   ├── globals.css              # CSS vars, @theme inline, @keyframes
│   └── realisations/page.tsx   # Page réalisations (en cours)
├── components/
│   ├── Navbar.tsx               # Fixed navbar, bg-acier, liens vers les routes
│   ├── Footer.tsx               # Logo, copyright, liens légaux
│   ├── SectionHeader.tsx        # Eyebrow + h2 avec accent cuivre (réutilisable)
│   ├── ServicesGrid.tsx         # 4 cartes services, animation scroll
│   ├── ProductionsGrid.tsx      # 6 cartes réalisations (grid 3 col), animation scroll
│   ├── ReviewsGrid.tsx          # 3 cartes avis clients, animation scroll
│   └── ContactForm.tsx          # Formulaire devis (nom, email, type projet, message)
└── hooks/
    └── useScrollReveal.ts       # IntersectionObserver hook → { ref, visible }
```

## Routes

| Route          | Fichier                        | État        |
|----------------|--------------------------------|-------------|
| `/`            | `app/page.tsx`                 | En cours    |
| `/realisations`| `app/realisations/page.tsx`    | En cours    |
| `/services`    | —                              | À créer     |
| `/a-propos`    | —                              | À créer     |
| `/contact`     | —                              | À créer     |

## Key patterns

**`SectionHeader`** — utilisé en tête de chaque section, 3 props :
```tsx
<SectionHeader eyebrow="Ce que je créé" title="Mes" highlight="services." />
```
Rendu : trait cuivre → texte eyebrow → `h2` avec le mot `highlight` en `text-cuivre`.

**`useScrollReveal(threshold?)`** — retourne `{ ref, visible }`. Attacher `ref` au conteneur, appliquer `animate-fade-up` / `opacity-0` selon `visible`. Se déclenche une seule fois.

**`animate-fade-up`** — animation Tailwind custom définie dans `globals.css` via `@keyframes fade-up` + `--animate-fade-up` dans `@theme inline`. Le `both` en fill-mode garantit que les éléments en attente de délai démarrent invisibles.

**Grids animées** — `ServicesGrid`, `ProductionsGrid` et `ReviewsGrid` suivent le même pattern : `useScrollReveal` + `opacity-0` / `animate-fade-up` + `animationDelay` progressif sur chaque carte.

## Path alias

`@/*` resolves to `./src/*`.
