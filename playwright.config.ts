import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/app/tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
});
