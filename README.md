# Food Supply Crisis

An evidence-led static website about food prices, crop production, supply chains and food security. Built for Cloudflare Pages using plain HTML, CSS and lightweight JavaScript. No Workers or build framework required.

## Deploy on Cloudflare Pages

1. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
2. Select `PureLight-web/WorldFoodCrisis` and the `main` branch.
3. Choose **None** for the framework preset.
4. Leave the build command empty.
5. Set the build output directory to `/` (repository root, if accepted by the Pages setup).
6. Save and deploy. Subsequent commits to `main` trigger deployments when Git integration is enabled.

All pages are static HTML under the repository root. There is no `functions/` directory, Worker entrypoint or build dependency.

## Site map

- `index.html` — homepage
- `articles/` — editorial explainers
- `data/` — key indicators and interpretation
- `sources/` — primary-source directory
- `tools/food-budget-impact/` — client-side scenario calculator
- `about/`, `methodology/`, `privacy/`, `contact/` — trust and policy pages
- `robots.txt`, `sitemap.xml` — crawl discovery
- `assets/site.css`, `assets/main.js`, `assets/tools.js` — styles and lightweight interactions

## Before monetization or AdSense review

- Replace any starter privacy/contact language with accurate information about the real owner, contact method, hosting, analytics, cookies and advertising configuration.
- Add a real, monitored editorial contact address and a transparent author/reviewer profile.
- Review every article against its primary sources; confirm dates and all changing statistics immediately before publication.
- Keep content original, useful and sufficiently detailed for the reader's intent. Do not mass-produce near-duplicate pages just to target keyword variants.
- Add original charts, reporting, interviews or transparent calculations where they materially improve the article.
- Check all internal links, mobile layouts, metadata, sitemap and production URL after the Cloudflare deployment.
- The canonical URL currently points to `https://foodsupplycrisis.pages.dev/`. Update canonical and Open Graph URLs, sitemap and structured data if the production domain changes.

## Editorial note

The FAO figures shown on the homepage are dated to the 2 October 2026 release. They should be checked and updated against the official release before each publication refresh. The Global Report on Food Crises figure refers to assessed food-crisis countries and territories, not a direct measurement of global food stocks.

## Local preview

Because this is static, serve the repository root with any basic local static-file server. No compilation is required.
