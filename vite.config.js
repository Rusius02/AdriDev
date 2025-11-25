// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Si vos assets sont dans 'public', Vite les gère automatiquement.
  // Si vous avez des variables d'environnement (ex: process.env.REACT_APP_...),
  // vous devrez peut-être les préfixer avec VITE_ (ex: import.meta.env.VITE_APP_...)
  // et les remplacer ici si nécessaire ou directement dans le code.
});