import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/website/',
  plugins: [react()],
  // Inject <base> tag dynamically
  plugins: [
    {
      name: 'inject-base-tag',
      transformIndexHtml(html) {
        // Inject the <base> tag
        return html.replace(
          /<head>/,
          `<head><base href="/website/" />` // Adjust this to match your GitHub Pages repo name
        );
      },
    },
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
