import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const routesSource = readFileSync(
  new URL('../src/routes.jsx', import.meta.url),
  'utf8'
);
const treatmentSource = readFileSync(
  new URL('../src/data/treatmentPages.js', import.meta.url),
  'utf8'
);

const staticRoutes = [...routesSource.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((route) => !route.includes(':'));

const treatmentRoutePrefixes = {
  faciales: '/faciales',
  corporales: '/corporales',
  laserYLuz: '/laser-y-luz',
  dentalEstetico: '/dental-estetico',
  capilar: '/capilar'
};

const slugsBlock = treatmentSource.match(
  /const slugsByCategory = \{([\s\S]*?)\n\s{2}\};/
)?.[1] || '';

const treatmentRoutes = [...slugsBlock.matchAll(
  /(\w+):\s*\[([\s\S]*?)\]/g
)].flatMap(([, categoryKey, slugsSource]) => {
  const prefix = treatmentRoutePrefixes[categoryKey];
  return [...slugsSource.matchAll(/'([^']+)'/g)].map((slugMatch) =>
    `${prefix}/${slugMatch[1]}`
  );
});

const siteRoutes = [...new Set([...staticRoutes, ...treatmentRoutes])];

const hubRoutes = new Set([
  '/faciales',
  '/corporales',
  '/laser-y-luz',
  '/dental-estetico',
  '/iv-therapy',
  '/capilar'
]);

test.describe('Contextual WhatsApp messages', () => {
  test('every site page configures all WhatsApp links with one contextual message', async ({ page }) => {
    test.setTimeout(120000);

    for (const route of siteRoutes) {
      await test.step(route, async () => {
        await page.goto(route);

        const whatsappLinks = page.locator('a[href*="wa.me/"]');
        await whatsappLinks.first().waitFor({ state: 'attached' });
        const hrefs = await whatsappLinks.evaluateAll((links) =>
          links.map((link) => link.href)
        );

        expect(hrefs.length).toBeGreaterThan(0);
        expect(hrefs.every((href) => href.startsWith('https://wa.me/15612535384?text='))).toBe(true);

        const messages = hrefs.map((href) => new URL(href).searchParams.get('text'));
        expect(new Set(messages).size).toBe(1);
        expect(messages[0]).toMatch(/^Hola,/);
        expect(messages[0]).not.toBe(
          'Hola, visité el sitio web de Derma.M y me gustaría recibir más información.'
        );

        if (treatmentRoutes.includes(route)) {
          expect(messages[0]).toContain('vi el tratamiento de');
        }

        if (hubRoutes.has(route)) {
          expect(messages[0]).toContain('vi la sección de');
        }
      });
    }
  });
});
