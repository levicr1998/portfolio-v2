import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@portfolio': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react'
    })
  ]
});
