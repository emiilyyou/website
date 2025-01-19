import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/website/',  

  plugins: [
    react(),  

    // Inject <base> tag dynamically
    {
      name: 'inject-base-tag',
      transformIndexHtml(html) {
        return html.replace(
          /<head>/,
          `<head><base href="/website/" />` 
        );
      },
    },
  ],

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

