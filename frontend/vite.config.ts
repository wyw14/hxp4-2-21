import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42040,
    proxy: {
      '/api': {
        target: 'http://localhost:42041',
        changeOrigin: true,
      },
    },
  },
});
