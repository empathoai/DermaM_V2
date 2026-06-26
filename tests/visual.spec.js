import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('Home Page - Hero Viewport', async ({ page }) => {
    await page.goto('/');
    // Wait 3 seconds to let video and layout render fully
    await page.waitForTimeout(3000);
    // Take viewport screenshot for above-the-fold verification
    await expect(page).toHaveScreenshot('home-hero.png');
  });

  test('Nosotros Page - Viewport', async ({ page }, testInfo) => {
    // Only run on desktop viewport
    if (testInfo.project.name === 'mobile-safari') return;
    await page.goto('/nosotros');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('nosotros-viewport.png');
  });

  test('Contacto Page - Viewport', async ({ page }, testInfo) => {
    if (testInfo.project.name === 'mobile-safari') return;
    await page.goto('/contacto');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('contacto-viewport.png');
  });
});
