import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs/promises';
import path from 'path';
import {defineConfig} from 'vite';

const seoRouteSlugs = [
  'business-consultant-noida',
  'business-strategy-consulting',
  'business-planning',
  'business-registration-compliance',
  'website-app-development',
  'branding-digital-marketing',
  'business-growth-scaling',
];

const generateSeoRouteEntrypoints = () => ({
  name: 'generate-seo-route-entrypoints',
  async writeBundle(options: {dir?: string}) {
    const outputDirectory = options.dir ?? path.resolve(__dirname, 'dist');
    const indexPath = path.join(outputDirectory, 'index.html');

    await fs.access(indexPath);
    await Promise.all(seoRouteSlugs.map(async (slug) => {
      const routeDirectory = path.join(outputDirectory, slug);
      await fs.mkdir(routeDirectory, {recursive: true});
      await fs.copyFile(indexPath, path.join(routeDirectory, 'index.html'));
    }));
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
    server: {
      // HMR can be disabled in constrained development environments.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching with HMR when explicitly requested.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
