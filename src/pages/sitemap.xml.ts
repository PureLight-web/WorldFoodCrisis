import type { APIRoute } from 'astro';

// Canonical public routes listed in one place so the XML stays consistent.
// Add each new indexable route here when publishing a page.
const siteUrl = 'https://worldfoodcrisis.pages.dev';
const lastModified = '2026-10-15';
const paths = [
  "/",
  "/about/",
  "/methodology/",
  "/privacy/",
  "/contact/",
  "/sources/",
  "/data/",
  "/tools/food-budget-impact/",
  "/articles/food-prices-vs-shortages/",
  "/articles/global-cereal-outlook-2026/",
  "/articles/fertilizer-and-food-supply/",
  "/articles/food-security-vs-availability/",
  "/articles/food-crisis-warning-signs/",
  "/articles/how-food-supply-chains-work/",
  "/articles/household-food-resilience/",
  "/articles/what-grain-reserves-mean/",
  "/articles/how-food-export-bans-affect-food-prices/",
  "/articles/food-loss-vs-food-waste/",
  "/articles/can-hackers-spoil-supermarket-food/",
  "/articles/should-you-stockpile-food-shortage-rumours/",
  "/food-crisis-by-country/",
  "/food-crisis-by-country/india/",
  "/food-crisis-by-country/pakistan/",
  "/food-crisis-by-country/nigeria/",
  "/food-crisis-by-country/sudan/",
  "/food-crisis-by-country/yemen/",
  "/food-crisis-by-country/gaza/",
  "/food-crisis-by-country/united-states/",
  "/food-crisis-by-country/united-kingdom/",
  "/food-crisis-by-country/canada/",
  "/food-crisis-by-country/australia/"
];

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map((path) => '  <url>\n    <loc>' + escapeXml(new URL(path, siteUrl).href) + '</loc>\n    <lastmod>' + lastModified + '</lastmod>\n  </url>'),
  '</urlset>',
].join('\n') + '\n';

export const prerender = true;

export const GET: APIRoute = () => new Response(xml, {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  },
});
