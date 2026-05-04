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
- **Vercel Analytics** — intégré dans le root layout

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
│   ├── layout.tsx                        # Root layout : fonts, Vercel Analytics, metadata template
│   ├── globals.css                       # CSS vars, @theme inline, @keyframes
│   ├── robots.ts                         # Robots metadata route
│   ├── sitemap.ts                        # Sitemap statique (5 routes)
│   ├── middleware.ts                     # Maintenance mode via MAINTENANCE_MODE env var
│   ├── (main)/
│   │   ├── layout.tsx                    # Layout du groupe : <Navbar> + <Footer>
│   │   ├── page.tsx                      # Homepage (hero, services, réalisations, avis)
│   │   ├── services/page.tsx             # Page Services (ServiceCard × 4 + ProcessGrid)
│   │   ├── realisations/page.tsx         # Page Réalisations (portfolio complet, limit=6)
│   │   ├── a-propos/page.tsx             # Page À propos (bio + parcours Anthony Perret)
│   │   ├── contact/page.tsx              # Page Contact (infos + ContactForm)
│   │   └── mentions-legales/page.tsx     # Mentions légales + politique de confidentialité
│   ├── maintenance/page.tsx              # Page maintenance (hors groupe, sans nav/footer)
│   └── api/
│       └── contact/route.ts              # POST handler — Resend → contact@farga.me
├── components/
│   ├── Navbar.tsx                        # Fixed navbar, bg-acier, liens vers les routes
│   ├── Footer.tsx                        # Logo, copyright, liens légaux
│   ├── HeroSection.tsx                   # Hero plein écran, grand texte FARGA en fond, 2 CTA
│   ├── Section.tsx                       # Wrapper section réutilisable (bg + SectionHeader + children)
│   ├── SectionHeader.tsx                 # Eyebrow + h2 avec accent cuivre
│   ├── Button.tsx                        # Bouton primaire/secondaire avec useScrollReveal
│   ├── Image.tsx                         # next/image avec useScrollReveal
│   ├── Paragraph.tsx                     # Bloc texte avec useScrollReveal + stagger via prop i
│   ├── SmoothHashScroll.tsx              # Scroll smooth vers ancres hash (easing custom)
│   ├── ServicesGrid.tsx                  # Grille 4 col — mappe services → ServiceItem
│   ├── ServiceItem.tsx                   # Aperçu compact d'un service (homepage)
│   ├── ServiceCard.tsx                   # Carte détaillée d'un service (page /services)
│   ├── ProcessGrid.tsx                   # Grille 4 col — 4 étapes du processus
│   ├── ProcessItem.tsx                   # Étape individuelle du processus
│   ├── ProductionsGrid.tsx               # Grille 3 col, prop limit — mappe productions → ProductionItem
│   ├── ProductionItem.tsx                # Carte réalisation avec overlay au hover
│   ├── ReviewsGrid.tsx                   # Grille 3 col — mappe reviews → ReviewItem
│   ├── ReviewItem.tsx                    # Carte avis client
│   └── ContactForm.tsx                   # Formulaire devis (nom, email, type projet, message)
├── data/
│   ├── services.ts                       # Source de vérité des offres
│   ├── productions.ts                    # Source de vérité des réalisations
│   └── reviews.ts                        # Source de vérité des avis clients
└── hooks/
    └── useScrollReveal.ts                # IntersectionObserver hook → { ref, visible }
```

## Routes

| Route               | Fichier                                  | État     |
|---------------------|------------------------------------------|----------|
| `/`                 | `app/(main)/page.tsx`                    | En cours |
| `/services`         | `app/(main)/services/page.tsx`           | En cours |
| `/realisations`     | `app/(main)/realisations/page.tsx`       | En cours |
| `/a-propos`         | `app/(main)/a-propos/page.tsx`           | En cours |
| `/contact`          | `app/(main)/contact/page.tsx`            | En cours |
| `/mentions-legales` | `app/(main)/mentions-legales/page.tsx`   | Fait     |
| `/maintenance`      | `app/maintenance/page.tsx`               | Fait     |

## Metadata

Le layout exporte un `title template` : `"%s - FARGA"`. Chaque page exporte son propre `metadata` avec `title` et `description` adaptés à son contenu. Ne pas exporter de metadata depuis un `"use client"` — créer un layout intermédiaire si besoin.

## Data

### `src/data/services.ts`

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

### `src/data/productions.ts`

```ts
interface Production {
  title: string
  tagline: string  // "Métier — Ville"
  type: string     // "Vitrine" | "E-commerce" | "One-page" | "App mobile"
  url: string
}
```

6 réalisations actuelles : Ébénisterie Vidal, La Miellerie du Gers, Atelier Ferron, Boulangerie Cassan, Resto Le Calandre, Savonnerie Aumont.

### `src/data/reviews.ts`

```ts
interface Review {
  client: string
  text: string
  job: string  // "Métier — Ville"
}
```

3 avis actuels : Marc Vidal, Sophie Aumont, Pierre Cassan.

## API — formulaire de contact

`POST /api/contact` reçoit `{ name, email, projectType, message }`, envoie un email à `contact@farga.me` via Resend (reply-to = email de l'expéditeur). Variable d'environnement requise : `RESEND_API_KEY`.

## Key patterns

**`Section`** — wrapper réutilisable pour les sections homepage (bg + padding + SectionHeader + children) :
```tsx
<Section bg="acier" eyebrow="Ce que je créé" title="Mes" highlight="services.">
  <ServicesGrid />
</Section>
```
Ne pas forcer `Section` sur des pages avec une mise en page atypique (contact, à-propos) — utiliser un `<section>` classique.

**`SectionHeader`** — utilisé directement quand `Section` ne convient pas :
```tsx
<SectionHeader eyebrow="Portfolio" title="Dernières" highlight="réalisations." />
```
Rendu : trait cuivre → texte eyebrow → `h2` avec le mot `highlight` en `text-cuivre`.

**`useScrollReveal(threshold?)`** — retourne `{ ref, visible }`. Attacher `ref` à l'élément, appliquer `animate-fade-up` / `opacity-0` selon `visible`. Se déclenche une seule fois.

**`animate-fade-up`** — animation Tailwind custom définie dans `globals.css` via `@keyframes fade-up` + `--animate-fade-up` dans `@theme inline`. Le `both` en fill-mode garantit que les éléments en attente de délai démarrent invisibles.

**Pattern `XXXGrid` + `XXXItem`** — chaque grid orchestre le layout et mappe les données vers des composants Item. Chaque Item est `"use client"` et possède son propre `useScrollReveal`, ce qui permet à chaque élément de s'animer individuellement au scroll (important pour mobile vertical). Pour le stagger desktop, utiliser une CSS custom property :

```tsx
// Dans XXXItem :
<div
  ref={ref}
  className={`reveal-item ${visible ? 'animate-fade-up' : 'opacity-0'}`}
  style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
/>
```

```css
/* Dans globals.css — stagger actif uniquement desktop */
@media (min-width: 768px) {
  .reveal-item { animation-delay: var(--reveal-delay, 0ms); }
}
```

**`Button`** — composant bouton avec `useScrollReveal(1)` intégré. Props : `type` ("primary" | "secondary"), `label`, `path`.

**`Paragraph`** — bloc texte avec `useScrollReveal` + stagger via prop `i` (index). Pratique pour des sections texte multi-paragraphes comme la page à-propos.

**`ServiceCard`** — layout deux colonnes (infos/prix à gauche, description/features à droite). Le service `featured: true` reçoit un fond cuivre. `price: 0` affiche "Sur devis". Utilisé avec `id={service.number}` pour le hash linking depuis `SmoothHashScroll`.

## Path alias

`@/*` resolves to `./src/*`.
