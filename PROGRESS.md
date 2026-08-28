# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Track A #1: "deep cleansing facial" como término target EN en `/limpieza-facial-profunda`
- **Fuente:** `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` §S5.4 + Stage 3 (scrape Apify de webs de competencia). Hallazgo: "deep cleansing facial" es término de búsqueda real (variantes: with extraction / near me / price / for acne / for oily skin) y **ningún competidor de WPB titula una página con el término verbatim** → hueco competitivo. La página no tenía señal en inglés en ningún lado.
- **3 capas, aditivo, footprint mínimo** (página español-first, no se toca copy español ni above-the-fold):
  - `LimpiezaFacial.jsx`: `description`/`og:description`/`twitter:description` (×3) → "Limpieza facial profunda (deep cleansing facial) con extracción de impurezas y protocolo personalizado. Derma.M, West Palm Beach, Florida." (135c, término al frente). `<title>` **intacto** (agregar el paréntesis lo pasaba de ~60c → Google truncaría justo el término). `Service` schema: `"alternateName": "Deep Cleansing Facial"`.
  - `landingPages.js`: 6º ítem de FAQ (español, puente de equivalencia) — cubre término EN + extracción + piel grasa + acné; entra al `FAQPage` schema vía `FAQAccordion`.
  - `public/llms.txt` (protegido, 1 línea aprobada): línea 38 label `Deep Facial Cleansing` → `Deep Cleansing Facial`, URL intacta.
  - `faq-consistency.spec.js`: count esperado `/limpieza-facial-profunda` 5 → 6.
- **Verificación:** `test:visual` + `faq-consistency` **34/34** sin diffs (snapshot de la landing = solo `problemSection`). DOM renderizado: `<title>` sin cambios, 3 `description` = string nueva y coinciden, `Service.alternateName` OK, `FAQPage.mainEntity` = 6. Browser pane: 6º ítem de FAQ renderiza idéntico a los otros, expande limpio, sin overflow. Compliance OK (español, sin garantías, sin banned words, sin CTA nuevo). Commit `39a7f11`.
- Spec: `docs/superpowers/specs/2026-08-28-deep-cleansing-facial-en-term-design.md`.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
