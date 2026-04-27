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

**Forja** — agence web sur-mesure pour artisans et commerçants, site en français, basé dans le Sud-Ouest. Single-page homepage with multiple full-screen sections.

## Brand colors

Defined as CSS variables in `:root` and registered in `@theme inline` as Tailwind utilities:

| Name       | Hex       | Usage                  |
|------------|-----------|------------------------|
| `fonderie` | `#0b1014` | Background sombre      |
| `acier`    | `#1f252b` | Background secondaire  |
| `cuivre`   | `#db640e` | Accent principal       |
| `braise`   | `#A8492B` | Accent secondaire      |
| `ivoire`   | `#ece7e1` | Texte clair            |

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts + <Navbar>
│   ├── page.tsx            # Homepage (all sections)
│   └── globals.css         # CSS vars, @theme inline, @keyframes
├── components/
│   ├── Navbar.tsx          # Fixed navbar, bg-acier (scroll effect removed)
│   ├── Footer.tsx          # Footer with logo, copyright, links
│   ├── SectionHeader.tsx   # Reusable eyebrow + h2 with copper accent
│   └── ServicesGrid.tsx    # 4 service cards, scroll-triggered animation
└── hooks/
    └── useScrollReveal.ts  # IntersectionObserver hook → { ref, visible }
```

## Key patterns

**`SectionHeader`** — used at the top of every section, accepts 3 props:
```tsx
<SectionHeader eyebrow="Ce que je créé" title="Mes" highlight="services." />
```
Renders: copper line → small eyebrow text → `h2` with highlighted word in `text-cuivre`.

**`useScrollReveal(threshold?)`** — returns `{ ref, visible }`. Attach `ref` to the container, then conditionally apply `animate-fade-up` and `opacity-0` based on `visible`. Fires once, then disconnects.

**`animate-fade-up`** — custom Tailwind animation defined in `globals.css` via `@keyframes fade-up` + `--animate-fade-up` in `@theme inline`. Use `animation-fill-mode: both` (already set) so delayed elements start invisible.

## Path alias

`@/*` resolves to `./src/*`.
