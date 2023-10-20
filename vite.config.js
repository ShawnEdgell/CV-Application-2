import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'public', // Specify the output directory for build files
  },
  server: {
    // Set the root directory to 'public' for the development server
    // This tells Vite to serve the files from the 'public' folder
    root: 'public',
  },
});
