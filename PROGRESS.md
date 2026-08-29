# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Track A #3: naming PRF canónico "(PRF)" + reescritura de la FAQ del PRF landing
- **Naming (delta sobre lo propagado el 2026-08-27):** se agrega el paréntesis "(PRF)" a la forma canónica en superficies de contenido/structured data — `PrfYFibrina.jsx` `<title>`/`og:title`/`twitter:title` ("Plasma Rico en Plaquetas y Fibrina (PRF) | Derma.M", ~48c), `Service` schema `name` + nuevo `alternateName: ["PRF", "Platelet-Rich Plasma & Fibrin (PRF)"]`, `BreadcrumbList` pos 3; `landingPages.js` `hero.title` (H1) → "…Y FIBRINA (PRF)"; `organizationSchema.js` `knowsAbout` "(PRP y PRF)" → "(PRF)"; `public/llms.txt:39` (protegido, línea aprobada) "PRP & Fibrin" → "Platelet-Rich Plasma & Fibrin (PRF)". Nav/footer/`FeaturedServices`/card de `categoryPages` quedan con el nombre ES completo **limpio** (sin paréntesis) — best practice: el paréntesis se gana su lugar en H1/title/schema, no en el chrome.
- **"PRPF":** verificado ausente de `src/` y `llms.txt` — nada que matar on-site. **"PRP" pelado:** se mantiene solo en las 2 FAQ que explican la diferencia PRP/PRF (prosa técnica legítima) y en el disclaimer legal.
- **FAQ del PRF landing reescrita** (pedido del usuario, mismo ciclo): 7 → 8 ítems. Voz de búsqueda (no voz de marca), respuesta directa en la 1ª frase, cada Q→A autocontenida. Fusionados los 2 ítems casi-duplicados de comparación; `#1` compuesto → dividido en "¿Qué es?" + "¿PRP vs PRF?". Nuevos ítems de intención alta (PAA findings doc §189): "¿El PRF es lo mismo que los rellenos (fillers)?", "¿Cuánto tardan en verse los resultados y cuánto duran?", "¿Qué efectos secundarios puede tener?" (consolida el ítem suelto de hematomas). 1ª mención del bloque con la forma canónica completa "Plasma Rico en Plaquetas y Fibrina (PRF)". Copy derivada de las respuestas vetadas existentes — sin claims nuevos, sin banned words, sin garantías, sin listar contraindicaciones específicas. `faq-consistency.spec.js` count `/prf-y-fibrina` 7 → 8.
- **Verificación:** `test:visual` + `faq-consistency` **34/34 sin diffs** (el snapshot de la landing es el `problemSection`, no el hero ni la FAQ). DOM: 6 superficies de naming con "(PRF)", `FAQPage.mainEntity` = 8, 8 preguntas nuevas renderizando. Screenshot hero: "(PRF)" cae en la 3ª línea del H1, sin romper layout. Commit `<pending>`.
- Spec: `docs/superpowers/specs/2026-08-28-prf-canonical-naming-design.md`. Cierra el ítem #3 de la cola; el #4 (FAQ desde PAA) queda hecho para el PRF landing, pendiente para limpieza + postop.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
