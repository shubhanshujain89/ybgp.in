import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs/promises';
import path from 'path';
import { defineConfig } from 'vite';

import { ROUTE_METADATA, ROUTE_SLUGS } from './src/data/servicePages';

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const generateSeoRouteEntrypoints = () => ({
  name: 'generate-seo-route-entrypoints',
  async writeBundle(options: { dir?: string }) {
    const outputDirectory = options.dir ?? path.resolve(__dirname, 'dist');
    const indexPath = path.join(outputDirectory, 'index.html');
    await fs.access(indexPath);

    const buildHtmlForRoute = (html: string, slug: string) => {
      const routeMeta = ROUTE_METADATA[slug as keyof typeof ROUTE_METADATA] ?? ROUTE_METADATA.home;
      const url = slug === 'home' ? 'https://www.ybgp.in/' : `https://www.ybgp.in/${slug}/`;
      const title = escapeHtml(routeMeta.title);
      const description = escapeHtml(routeMeta.description);

      return html
        .replace(/<title>.*?<\/title>/is, `<title>${title}</title>`)
        .replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${description}" />`)
        .replace(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${description}" />`)
        .replace(/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${url}" />`)
        .replace(/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${title}" />`)
        .replace(/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${description}" />`)
        .replace(/<meta\s+name="twitter:url"[^>]*>/i, `<meta name="twitter:url" content="${url}" />`)
        .replace(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${url}" />`);
    };

    const baseIndex = await fs.readFile(indexPath, 'utf8');
    const homeHtml = buildHtmlForRoute(baseIndex, 'home');
    await fs.writeFile(indexPath, homeHtml);

    await Promise.all(
      ROUTE_SLUGS.filter((slug) => slug !== 'home').map(async (slug) => {
        const routeDirectory = path.join(outputDirectory, slug);
        await fs.mkdir(routeDirectory, { recursive: true });
        const routeHtml = buildHtmlForRoute(baseIndex, slug);
        await fs.writeFile(path.join(routeDirectory, 'index.html'), routeHtml);
      })
    );

    const lastModified = new Date().toISOString().slice(0, 10);
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://www.ybgp.in/</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n${ROUTE_SLUGS.filter((slug) => slug !== 'home').map((slug) => `  <url>\n    <loc>https://www.ybgp.in/${slug}/</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>`).join('\n')}\n</urlset>\n`;
    await fs.writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemapXml);
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), generateSeoRouteEntrypoints()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('motion')) return 'motion-vendor';
              if (id.includes('lucide-react')) return 'icon-vendor';
              if (id.includes('react')) return 'react-vendor';
              return 'vendor';
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
