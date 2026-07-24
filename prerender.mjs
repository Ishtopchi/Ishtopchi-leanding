// Static-site generation: render every route to HTML at build time so search
// engines get real content + per-page <head> without executing JS. Runs on pure
// Node (no browser) — safe for the Railpack/Dokploy build. The pages still hydrate
// into the full SPA in the browser.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

const template = fs.readFileSync(templatePath, 'utf-8');

if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  console.error('[prerender] Placeholders missing from dist/index.html — aborting.');
  process.exit(1);
}

const { render } = await import(path.join(__dirname, 'dist-server', 'entry-server.js'));

const langs = ['uz', 'en', 'ru'];
const pages = ['', '/support', '/marketing', '/privacy', '/data-security'];
const routes = langs.flatMap((l) => pages.map((p) => `/${l}${p}`));

function collectHead(helmet) {
  if (!helmet) return '';
  return [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');
}

let ok = 0;
for (const url of routes) {
  const { html, helmet } = render(url);
  const lang = url.split('/')[1];
  const page = template
    .replace('<html lang="uz"', `<html lang="${lang}"`)
    .replace('<!--app-head-->', collectHead(helmet))
    .replace('<!--app-html-->', html);

  const outDir = path.join(distDir, url);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  ok += 1;
  console.log('[prerender] ✓', url);
}

// Root (/) — no content page, it redirects to /uz on the client. Give crawlers a
// canonical to /uz plus social defaults. This file is also Caddy's SPA fallback.
const rootHead = [
  "<title>IshTopchi — O'zbekistonda ish topishning eng oson yo'li</title>",
  '<meta name="description" content="IshTopchi - O\'zbekistonda ish topishning eng oson yo\'li. 50,000+ foydalanuvchi, 10,000+ vakansiya. Bepul yuklab oling!" />',
  '<link rel="canonical" href="https://ishtopchi.uz/uz" />',
  '<meta property="og:title" content="IshTopchi — Ish topishning eng oson yo\'li" />',
  '<meta property="og:description" content="O\'zbekistonda ish topishning eng oson yo\'li. 50,000+ foydalanuvchi, 10,000+ vakansiya." />',
  '<meta property="og:url" content="https://ishtopchi.uz/" />',
  '<meta property="og:image" content="https://ishtopchi.uz/logo.jpg" />',
  '<meta name="twitter:title" content="IshTopchi — Ish topishning eng oson yo\'li" />',
  '<meta name="twitter:description" content="O\'zbekistonda ish topishning eng oson yo\'li." />',
  '<meta name="twitter:image" content="https://ishtopchi.uz/logo.jpg" />',
].join('\n    ');

const rootHtml = template.replace('<!--app-head-->', rootHead).replace('<!--app-html-->', '');
fs.writeFileSync(templatePath, rootHtml);
console.log('[prerender] ✓ / (redirect shell → /uz)');
console.log(`[prerender] done — ${ok + 1} pages`);
