# PROGRESS.md

Running log of work in this repo. Newest entries on top. One entry per session/task — what was done, what's left.

## 2026-08-28 — Validación del mapa de redirects viejo→nuevo contra el `.htaccess`
- **Inventario autoritativo del sitio viejo:** `wp-sitemap.xml` (58 URLs) + `site:` de Google (~32 indexadas) + `curl -L` con `<title>` real (el WP sirve 200 en páginas inexistentes → soft-404, no se valida por status). Todas las indexadas resuelven.
- **2 fallas en el `.htaccess` existente:** (1) el bloque de 301s legacy estaba **debajo** del fallback SPA `RewriteRule . /index.html [L]` → ningún 301 se ejecutaba; (2) 27 URLs vivas sin regla (23 páginas de tratamiento + 4 posts lorem ipsum).
- **Deliverable:** `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` — inventario, mapa old→new reconciliado (§5), 7 decisiones de mapeo (§7), y el `.htaccess` **completo listo para aplicar** (§8, reordenado + 27 reglas nuevas) + script `curl -I` de verificación post-deploy. `public/.htaccess` NO se tocó (protegido, se aplica el día del deploy).
- **Host confirmado:** Hostinger/Apache (no Vercel). `INTAKE.md:56` quedó stale → corregir en próximo pase de doc-hygiene. `DECISIONS.md` +1 entrada.

---

**Historia anterior:** ver [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md) (entradas de sesiones cerradas hasta 2026-08-28).
