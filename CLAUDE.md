# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site (vitrine) for **Soworks**, a French AMO (assistance à maîtrise d'ouvrage) consultancy. Content is in French. The site is one long page split into anchor sections (`#accueil`, `#a-propos`, `#portfolio`, `#contact`) — there is no multi-page routing in the user-facing app.

## Stack

- **TanStack Start** (SSR React framework) with **build-time prerendering** of `/`. The deployed artifact is a Node-compatible server that serves prerendered HTML.
- **Vite 7** + **React 19** + **TypeScript 5.8** (strict).
- **Tailwind CSS v4** (CSS-first config in `src/styles.css` via `@theme inline` — there is no `tailwind.config.*`). Custom design tokens (`--primary`, `--gold`, `--sage`) are defined as oklch values in `:root`.
- **shadcn/ui** (new-york style, slate base, lucide icons) — components live in `src/components/ui/`. Add new ones with the shadcn CLI; aliases are configured in `components.json` (`@/components`, `@/components/ui`, `@/lib/utils`, `@/hooks`).
- **npm** is the package manager for local development.

## Commands

```bash
npm install        # install deps
npm run dev        # vite dev server
npm run build      # production build (prerendered Node server)
npm run build:dev  # build with development mode
npm run preview    # preview built output
npm run lint       # eslint
npm run format     # prettier --write .
```

There is no test setup in this repo — do not invent one.

## Vite config

`vite.config.ts` wires `tanstackStart` (with `pages: [{ path: "/", prerender: { enabled: true } }]`), `viteReact`, `tailwindcss`, and `vite-tsconfig-paths`. The `@/*` path alias comes from `tsconfig.json` via `vite-tsconfig-paths`.

## Routing

- File-based routing via `@tanstack/router-plugin`. Routes live in `src/routes/` and are compiled into `src/routeTree.gen.ts` (generated — do not edit by hand).
- `src/routes/__root.tsx` defines the root shell (`<html>`/`<head>`/`<body>` via `RootShell`), the global `Header`/`Footer`, page metadata, and a French `notFoundComponent`.
- `src/router.tsx` exports `getRouter()` with a custom `defaultErrorComponent`.
- Section navigation is anchor-based (`#contact` etc.) inside `src/routes/index.tsx`, not router links. New marketing sections should be added there as `<section id="…" className="scroll-mt-24">`.

## Styling conventions

- Use the design tokens defined in `src/styles.css` (`text-primary`, `text-gold`, `bg-card`, `border-gold`, `shadow-[var(--shadow-elegant)]`, etc.) rather than introducing new colors. Headings use `font-serif` (Cormorant Garamond); body uses the default sans (Inter). Both fonts are loaded via Google Fonts `@import` in `styles.css`.
- shadcn primitives in `src/components/ui/` are the building blocks; site-specific composite components (`Header`, `Footer`, `SectionHeading`) are in `src/components/site/`.

## Lint / format

- ESLint flat config (`eslint.config.js`) with typescript-eslint, react-hooks, react-refresh, and prettier. Note: `@typescript-eslint/no-unused-vars` is **off** intentionally — don't reintroduce it.
- Prettier runs as an ESLint plugin; run `npm run format` before committing larger changes.

## Deployment

The production image is built from the project [Dockerfile](Dockerfile) (multi-stage, Node runtime) and orchestrated via [docker-compose.yaml](docker-compose.yaml). The container runs the TanStack Start Node server which serves prerendered HTML for `/`.
