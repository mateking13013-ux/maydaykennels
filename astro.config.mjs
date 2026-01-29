import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maydaykennels.co.za',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
