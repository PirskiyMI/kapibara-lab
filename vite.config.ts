import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), svgr()],
   base: '/kapibara-lab/',
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: '@import "./src/styles/mixins.scss";',
         },
      },
   },
   resolve: {
      alias: {
         src: '/src',
      },
   },
});
