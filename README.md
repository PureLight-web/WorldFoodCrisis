# World Food Crisis

An evidence-led, fully static website about food prices, crop production, supply chains and food security. Built with Astro, HTML, CSS and lightweight JavaScript for GitHub + Cloudflare Pages. No Cloudflare Workers or server runtime is required.

## Local development

Requirements: Node.js 22.12.0 or newer in the Node 22 line.

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Astro generates the complete static site in `dist/`.

## Cloudflare Pages settings

Connect `PureLight-web/WorldFoodCrisis` to Cloudflare Pages and use:

- **Framework preset:** Astro
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`

The repository includes a `.node-version` file so the build uses Node 22.12.0. This is a static Astro site; do not add the Cloudflare adapter and do not configure Workers.

## Project structure

- `src/pages/` — static routes. Directory `index.astro` files preserve the site's trailing-slash URLs.
- `public/assets/` — shared CSS and browser JavaScript, copied directly to the build output.
- `public/robots.txt`, `public/sitemap.xml`, `public/_headers` — crawler guidance, sitemap and Cloudflare response headers.
- `dist/` — generated site (not committed).

## Publishing changes

Commit page updates to `src/pages/` and assets to `public/`. When Cloudflare Pages is connected to the `main` branch, every successful push triggers a new build and deployment.

## Editorial principles

Prioritize original explanation, source links, dates and context. Distinguish global production from local access and affordability. Explain uncertainty, avoid sensational claims, and treat figures as time-sensitive when appropriate.
