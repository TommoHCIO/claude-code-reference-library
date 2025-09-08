import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Visual Testing
 * Comprehensive cross-browser, cross-device testing setup
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'test-results/html' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    /* Record video on failure */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    // Desktop Browsers
    {
      name: 'chromium-desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'firefox-desktop',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'webkit-desktop',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 },
      },
    },

    // Large Desktop
    {
      name: 'chromium-desktop-large',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },

    // Tablets
    {
      name: 'ipad',
      use: { ...devices['iPad'] },
    },
    {
      name: 'ipad-landscape',
      use: { 
        ...devices['iPad landscape'] 
      },
    },

    // Mobile devices
    {
      name: 'iphone-12',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'iphone-12-landscape',
      use: { 
        ...devices['iPhone 12 landscape'] 
      },
    },
    {
      name: 'pixel-5',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'galaxy-s21',
      use: {
        ...devices['Galaxy S21'],
      },
    },

    // Dark mode testing
    {
      name: 'dark-mode-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        colorScheme: 'dark',
      },
    },
    {
      name: 'dark-mode-mobile',
      use: {
        ...devices['iPhone 12'],
        colorScheme: 'dark',
      },
    },

    // High contrast mode
    {
      name: 'high-contrast',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        forcedColors: 'active',
      },
    },

    // Reduced motion preference
    {
      name: 'reduced-motion',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        reducedMotion: 'reduce',
      },
    },
  ],

  /* Visual comparison settings */
  expect: {
    // Threshold for visual comparisons (0-1, where 0.2 means 20% difference is acceptable)
    toHaveScreenshot: { threshold: 0.2, mode: 'pixel' },
    // Animation handling
    toMatchSnapshot: { threshold: 0.2 },
  },

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});