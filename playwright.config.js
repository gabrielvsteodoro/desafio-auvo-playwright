import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  timeout: 30000,
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,     // False = sempre aberto para ver (se "true" não abre)
    slowMo: 2000,        // atraso global de 2s entre todas as ações
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});
