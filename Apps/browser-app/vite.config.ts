import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    ...(process.env.BROWSER_CRT_FILE && process.env.BROWSER_KEY_FILE ? {
      https: {
        cert: fs.readFileSync(process.env.BROWSER_CRT_FILE),
        key: fs.readFileSync(process.env.BROWSER_KEY_FILE)
      }
    } : {}),
    port: parseInt(process.env.BROWSER_PORT || '4080'),
    proxy: {
      '/api': {
        target: process.env.SERVER_URL,
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  plugins: [
    react()
  ],
  envPrefix: [
    'SERVER'
  ],
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1024
  }
});
