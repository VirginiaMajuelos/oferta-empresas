// vitest.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '/src/setupTests.ts', 
    include: ['src/**/*.test.{ts,tsx}'],
    css: true,
  },
});
