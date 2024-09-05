import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/user': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/session': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/expense': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
        '/category': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
    },
  },
});