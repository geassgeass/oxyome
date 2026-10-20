import { defineConfig } from 'astro/config';

export default defineConfig({

  vite: {
    server: {
      watch: {
        usePolling: true, // Forces Vite to check for changes actively
      },
    },
  },
});