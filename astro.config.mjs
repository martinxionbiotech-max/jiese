import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.MAIN_SITE_URL || 'https://selfcontrolatlas.com';
export default defineConfig({
  site, integrations: [sitemap({
    filter: (page) => !page.includes('/experiences/synthetic-'),
  })],
  vite: { server: { fs: { allow: ['/home/openclaw/jiese'] } } },
});
