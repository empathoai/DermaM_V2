import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('Home Page - Hero Viewport', async ({ page }) => {
    await page.goto('/');
    // Wait 3 seconds to let video and layout render fully
    await page.waitForTimeout(3000);
    // Take viewport screenshot for above-the-fold verification
    await expect(page).toHaveScreenshot('home-hero.png');
  });

  test('Home Page - Founder & Featured Services', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000);
    
    // Scroll to Nancy Nieto profile
    const founderSection = page.locator('section[aria-labelledby="founder-heading"]');
    await founderSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(founderSection).toHaveScreenshot('home-founder.png');

    // Scroll to Featured Services section
    const featuredSection = page.locator('section[aria-label="Tratamientos destacados"]');
    await featuredSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(featuredSection).toHaveScreenshot('home-featured-services.png');
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
