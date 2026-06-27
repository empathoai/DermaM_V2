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

  test('Limpieza Facial Landing - Viewport', async ({ page }) => {
    await page.goto('/limpieza-facial-profunda');
    await page.waitForTimeout(3000);
    
    // Check hero and scroll to problem/diagnosis section
    const problemSection = page.locator('section[class*="problem"]');
    await problemSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(problemSection).toHaveScreenshot('limpieza-problem.png');
  });

  test('PRP y Fibrina Landing - Viewport', async ({ page }) => {
    await page.goto('/prf-y-fibrina');
    await page.waitForTimeout(3000);
    
    const problemSection = page.locator('section[class*="problem"]');
    await problemSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(problemSection).toHaveScreenshot('prf-problem.png');
  });

  test('Postoperatorios Landing - Viewport', async ({ page }) => {
    await page.goto('/tratamientos-postoperatorios');
    await page.waitForTimeout(3000);
    
    const problemSection = page.locator('section[class*="problem"]');
    await problemSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(problemSection).toHaveScreenshot('postoperatorios-problem.png');
  });

  test('Hidrofacial Detail Page - Viewport', async ({ page }) => {
    await page.goto('/faciales/hidrofacial');
    await page.waitForTimeout(3000);
    
    const whatIsSection = page.locator('section[class*="whatIsSection"]');
    await whatIsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(whatIsSection).toHaveScreenshot('hidrofacial-whatis.png');
    
    const problemSection = page.locator('section[class*="problemSection"]');
    await problemSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(problemSection).toHaveScreenshot('hidrofacial-problem.png');
    
    const whoForSection = page.locator('section[class*="whoForSection"]');
    await whoForSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(whoForSection).toHaveScreenshot('hidrofacial-whofor.png');
  });
});

