import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import ViteSvg from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [svelte(), ViteSvg()],
  build: {
    outDir: 'public',
  },
  server: {
    root: 'public',
  },
});
