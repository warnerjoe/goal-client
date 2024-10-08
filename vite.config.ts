// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Set this to your backend server's URL
        changeOrigin: true,
        secure: false, // Use false if your backend is not using HTTPS
        // Optionally, if your backend does not include the '/api' prefix, uncomment the line below
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
