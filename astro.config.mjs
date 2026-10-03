// astro.config.mjs

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; 

// https://astro.build/config
export default defineConfig({
  site: 'https://brink-thomas.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: false, // Prevents undefined devSourcemap error
    },
  },
});