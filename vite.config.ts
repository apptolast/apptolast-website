import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/ads.txt',
          dest: '.'
        },
        {
          src: 'public/robots.txt',
          dest: '.'
        }
      ]
    })
  ],
  root: './',
  build: {
    outDir: './dist',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',
  resolve: {
    alias: {
      '@': './src',
    },
  },
});