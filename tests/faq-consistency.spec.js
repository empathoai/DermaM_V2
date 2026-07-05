import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const faqRoutes = [
  '/contacto',
  '/limpieza-facial-profunda',
  '/prf-y-fibrina',
  '/tratamientos-postoperatorios',
  '/faciales/hidrofacial'
];

const categorySource = readFileSync(
  new URL('../src/data/categoryPages.js', import.meta.url),
  'utf8'
);
const treatmentRoutes = [...categorySource.matchAll(
  /to:\s*['"](\/(?:faciales|corporales|laser-y-luz|dental-estetico|capilar)\/[^'"]+)['"]/g
)].map((match) => match[1]);

test.describe('FAQ consistency', () => {
  for (const route of faqRoutes) {
    test(`${route} uses the canonical accessible FAQ`, async ({ page }, testInfo) => {
      await page.goto(route);

      const heading = page.getByRole('heading', {
        level: 2,
        name: 'PREGUNTAS FRECUENTES',
        exact: true
      });
      await expect(heading).toHaveCount(1);

      const section = heading.locator('xpath=ancestor::section[1]');
      const sectionId = await section.getAttribute('aria-labelledby');
      expect(sectionId).toBe(await heading.getAttribute('id'));
      await expect(section).toHaveCSS('background-color', 'rgb(204, 201, 193)');

      const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
      const faqSchema = structuredData
        .map((entry) => JSON.parse(entry))
        .find((entry) => entry['@type'] === 'FAQPage');
      expect(faqSchema?.mainEntity).toHaveLength(5);

      const buttons = section.locator('button[aria-expanded]');
      await expect(buttons).toHaveCount(5);

      const firstButton = buttons.first();
      const buttonBox = await firstButton.boundingBox();
      expect(buttonBox?.height).toBeGreaterThanOrEqual(44);
      await expect(firstButton).toHaveAttribute('aria-expanded', 'false');

      const panelId = await firstButton.getAttribute('aria-controls');
      expect(panelId).toBeTruthy();
      await firstButton.press('Enter');
      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');

      const panel = page.locator(`[id="${panelId}"]`);
      await expect(panel).toBeVisible();
      await expect(panel).toHaveAttribute('role', 'region');
      await expect(panel).toHaveAttribute('aria-labelledby', await firstButton.getAttribute('id'));

      const faqOverflow = await section.evaluate((element) => ({
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth,
        left: element.getBoundingClientRect().left,
        right: element.getBoundingClientRect().right,
        viewportWidth: window.innerWidth
      }));
      expect(faqOverflow.scrollWidth).toBeLessThanOrEqual(faqOverflow.clientWidth);
      expect(faqOverflow.left).toBeGreaterThanOrEqual(0);
      expect(faqOverflow.right).toBeLessThanOrEqual(faqOverflow.viewportWidth);

      const wrapper = section.locator('div[class*="faqWrapper"]');
      const display = await wrapper.evaluate((element) => getComputedStyle(element).display);
      expect(display).toBe(testInfo.project.name === 'desktop-chrome' ? 'grid' : 'block');
    });
  }

  test('every treatment detail route renders the canonical FAQ', async ({ page }) => {
    for (const route of treatmentRoutes) {
      await test.step(route, async () => {
        await page.goto(route);
        const heading = page.getByRole('heading', {
          level: 2,
          name: 'PREGUNTAS FRECUENTES',
          exact: true
        });
        await expect(heading).toHaveCount(1);

        const section = heading.locator('xpath=ancestor::section[1]');
        await expect(section.locator('button[aria-expanded]')).toHaveCount(5);
        await expect(section).toHaveCSS('background-color', 'rgb(204, 201, 193)');
      });
    }
  });
});
