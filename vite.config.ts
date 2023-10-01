import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: ['tailwind-config']
  },
  resolve: {
    alias: {
      '@portfolio': path.resolve(__dirname, './src'),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.cjs'),

    }
  },
  base: '/portfolio-v2/',
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react'
    })
  ]
});
