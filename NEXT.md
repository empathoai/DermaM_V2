# NEXT

Estado: validación del mapa de redirects cerrada · Track B gaps 1-2 guardados (pending en Google) ·
árbol limpio tras commit de cierre · docs/ gitignored, en disco · dev server `:3000` a apagar al cerrar

## Próximo (en orden)
1. **Track B — sesión GBP** (usuario logueado, aprobación por guardado): cargar los 3 GBP Services
   Tier 1 + reemplazar la descripción del profile. Drafts listos en
   `docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md` §S2/S3. Agregar `Skin care clinic` como
   categoría secundaria (4/4 líderes la tienen). Cierra 8.19 → desbloquea 8.20.
2. **Batch-draft Tier 2 + Tier 3 GBP Services** (~22): descripción ≤300c derivada del `whatIsBody`
   de cada tratamiento en `treatmentPages.js`, sin inventar, compliance-check. Tiers en el
   findings doc §S2 / `DECISIONS.md` 2026-08-28 "GBP Services portafolio".
3. **`/nosotros` — coherencia de trato.** La página debe reflejar explícitamente el diferenciador
   relacional (te escuchan/explican/acompañan, en español, lugar seguro) — evidencia: 53/130
   reseñas. Cross-check contra `DECISIONS.md` 2026-08-28 "diferenciador relacional".
4. **Track A — ciclos de código** (cada uno brainstorm→aprobación, ver findings doc §S5):
   naming PRF canónico en `landingPages.js`/`treatmentPages.js`/schema/`llms.txt`/metas;
   ciudad en el `<h1>` de las 3 landings; FAQ sembradas desde las PAA reales; "deep cleansing
   facial" como término EN en `/limpieza-facial-profunda`; página "mejores med spa de WPB".
5. **Estrategia PRF (Tema 4, must-win)** — ya informada por el research: apropiarse de
   "Plasma Rico en Plaquetas y Fibrina (PRF)", demand-gen vía ads (término real a nivel nacional,
   0 competencia local). Content strategy con brainstorming.
6. **Cuña postop demand-gen** — GBP posts + FAQ + pieza "por qué el postoperatorio importa"
   (pocos proveedores, cirujanos no lo recomiendan). Audiencia real existente.

## Bloqueado (espera al usuario / terceros)
- **Yelp:** reclamarlo lo hace Nancy (dueña) — el listicle "TOP 10 BEST Medical Spas in WPB"
  domina "best med spa WPB". Rol del usuario: pasarle a Nancy el NAP + descripción optimizados.
- Tema 6 intake: **velocidad de captación de reseñas** (cadencia de respuesta ya OK, 85%).
- Tema 7 / GMBspy sobre Élévatione / Beverly Hills / Pure Skin → secundarias de competencia
  (antes de tocar más categorías del GBP — Pedro: no churnear categorías).
- C2: sign-off de compliance de la clínica por dato cuantitativo + enlace de autoridad.
- Deploy: fecha y quién deploya (Hostinger/Apache + DNS) — condiciona verificación GSC por Dominio.
  Al deployar: reemplazar `public/.htaccess` con el bloque de `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md`
  §8 (reordenado + 27 reglas nuevas), luego verificar con el script `curl -I` del mismo doc.
- Doc-hygiene: `docs/seo-setrategies/INTAKE.md:56` dice "deploy en Vercel" — es Hostinger/Apache, corregir.
- Nota operativa para la clínica: servicio postop tiene punto débil documentado (ayuda con
  la faja + protección ocular en luz LED) — de las 2 reseñas negativas.

## Infra resuelta (no rehacer)
graphify fuera del workflow · engram off · GSC prefijo creado sin verificar
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` en index.html · Apify token en
`.env.local` raíz (`APIFY_API_KEY`, formato `KEY: valor`)

## Contexto por área — grep, no full-read
PROGRESS.md = log · DECISIONS.md = por qué · docs/seo-setrategies/INTAKE.md = proyecto SEO local ·
docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md = research competencia/servicios + reseñas
