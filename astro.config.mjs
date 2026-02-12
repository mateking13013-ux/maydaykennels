import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pawshappiness.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
