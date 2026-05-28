import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Le chemin de base correspond au nom du repo GitHub pour le déploiement Pages.
// À adapter si l'on bascule sur un domaine personnalisé (mettre '/').
export default defineConfig({
  plugins: [react()],
  base: '/gh26/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
