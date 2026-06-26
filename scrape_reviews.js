import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'es-ES',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  const url = 'https://www.google.com/maps/place/DERMA.M/@26.6627718,-80.058463,17z/data=!4m8!3m7!1s0x88d8d7a4252e99f3:0x1b35234db1ddfa5c!8m2!3d26.6627718!4d-80.0558881!9m1!1b1!16s%2Fg%2F11qh1lr84l?entry=ttu';
  
  console.log('Navegando a Google Maps...');
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Aceptar cookies si aparece (en Europa suele aparecer, por si acaso)
  try {
    const acceptBtn = page.locator('button:has-text("Aceptar todo")');
    if (await acceptBtn.count() > 0) {
      await acceptBtn.first().click();
    }
  } catch (e) {}

  console.log('Esperando a que carguen las reseñas...');
  // Esperar a que el contenedor principal de reseñas o texto de reseñas aparezca
  await page.waitForTimeout(5000); // Dar un poco de tiempo para carga dinámica

  // Bajar un poco el scroll en el panel de reseñas para cargar más
  console.log('Haciendo scroll para cargar reseñas...');
  const scrollablePanel = page.locator('div[role="main"]'); // Ajustar si es necesario
  await page.mouse.wheel(0, 10000);
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0, 10000);
  await page.waitForTimeout(2000);

  // Extraer las reseñas. La clase "wiI7pd" suele ser el texto principal,
  // y podemos buscar los nombres de los autores en elementos cercanos.
  const reviews = await page.evaluate(() => {
    // Buscar todos los bloques de reseña
    const reviewElements = Array.from(document.querySelectorAll('.jftiEf'));
    
    return reviewElements.map(el => {
      // El autor suele estar en un div con aria-label o texto destacado
      const authorEl = el.querySelector('.d4r55'); 
      const textEl = el.querySelector('.wiI7pd');
      const ratingEl = el.querySelector('[aria-label*="estrellas"]');
      
      return {
        author: authorEl ? authorEl.textContent.trim() : 'Anónimo',
        text: textEl ? textEl.textContent.trim() : '',
        rating: ratingEl ? ratingEl.getAttribute('aria-label') : ''
      };
    }).filter(r => r.text !== ''); // Solo reseñas con texto
  });

  console.log(`Se encontraron ${reviews.length} reseñas con texto.`);
  
  fs.writeFileSync('reviews_extracted.json', JSON.stringify(reviews, null, 2));
  console.log('Reseñas guardadas en reviews_extracted.json');

  await browser.close();
})();
