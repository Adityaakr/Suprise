// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Update to match your Vercel deployment path
  build: {
    outDir: 'dist',
  },
});
