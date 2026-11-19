import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work on both the Cloudflare root URL and
  // the GitHub Pages project subpath.
  base: './',
});
