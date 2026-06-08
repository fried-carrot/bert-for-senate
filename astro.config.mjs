import { defineConfig } from 'astro/config';

// Project page on GitHub Pages is served from /<repo>/, so base must match.
export default defineConfig({
  site: 'https://fried-carrot.github.io',
  base: '/bert-for-senate/',
});
