// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ernests-smalikis.com',
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
    })
  ],
  build: {
    // Enable inlining of critical CSS
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  experimental: {
    clientPrerender: true
  }
});
