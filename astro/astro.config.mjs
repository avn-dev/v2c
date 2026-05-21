import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://vision2co.de',

  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') &&
        !page.includes('/datenschutz') &&
        !page.includes('/agb') &&
        !page.includes('/widerruf') &&
        !page.includes('/imprint') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms') &&
        !page.includes('/cancellation'),
    }),
  ],

  output: "hybrid",

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  adapter: cloudflare()
});