import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const siteOrigin = process.env.PUBLIC_SITE_ORIGIN || 'https://getnotify.org';

export default defineConfig({
  site: siteOrigin,
  output: 'static',
  server: {
    port: 4321,
    host: true, // listen on 0.0.0.0 so the site is reachable (e.g. on Windows)
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ changefreq: 'weekly', priority: 0.7 }),
  ],
  image: {
    service: { config: { limitInputPixels: false } },
    remotePatterns: [],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: { '@': '/src' },
    },
  },
});
