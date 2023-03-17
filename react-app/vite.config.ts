/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})
