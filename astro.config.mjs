import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.MAIN_SITE_URL || 'https://jiese.example';
export default defineConfig({
  site, integrations: [sitemap()],
  vite: { server: { fs: { allow: ['/home/openclaw/jiese'] } } },
});
