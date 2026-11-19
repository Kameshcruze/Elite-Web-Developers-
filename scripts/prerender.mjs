import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrEntryPath = path.join(rootDir, 'dist-ssr', 'entry-server.js');

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const { render, PRERENDER_ROUTES, PAGE_SEO, SITE_URL } = await import(
  pathToFileURL(ssrEntryPath).href
);

function injectHtml(baseTemplate, html, headTags) {
  let output = baseTemplate.replace('<!--app-html-->', html);
  output = output.replace(
    /<!--head-tags-start-->[\s\S]*?<!--head-tags-end-->/,
    `<!--head-tags-start-->\n    ${headTags}\n    <!--head-tags-end-->`
  );
  return output;
}

// 1. Pre-render all canonical routes into dist/<route>/index.html
for (const route of PRERENDER_ROUTES) {
  const { html, headTags } = render(route);
  const fullHtml = injectHtml(template, html, headTags);

  if (route === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), fullHtml, 'utf-8');
  } else {
    const routeDir = path.join(distDir, route.replace(/^\/+/, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), fullHtml, 'utf-8');
  }
}

// 2. Pre-render custom 404 page to dist/404.html
{
  const { html, headTags } = render('/404');
  const fullHtml = injectHtml(template, html, headTags);
  fs.writeFileSync(path.join(distDir, '404.html'), fullHtml, 'utf-8');
}

// 3. Generate sitemap.xml listing all canonical routes
const lastmod = new Date().toISOString().split('T')[0];
const sitemapUrls = PRERENDER_ROUTES.map((route) => {
  const meta = PAGE_SEO[route] || {};
  const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const changefreq = meta.changefreq || 'monthly';
  const priority = (meta.priority ?? 0.7).toFixed(2);
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}).join('\n');

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapUrls,
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

// 4. Generate robots.txt
const robotsTxt = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  '',
].join('\n');

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');

console.log(
  `Prerendered ${PRERENDER_ROUTES.length} routes + 404.html, generated sitemap.xml & robots.txt (SITE_URL=${SITE_URL})`
);
