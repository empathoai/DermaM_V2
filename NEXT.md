# NEXT

Estado: HEAD esperado `45e7a5c`, pusheado, árbol limpio, sin servers levantados.
**Plan founder-content-architecture CERRADO** — Ciclo 1 (Home, `fd39a56`), Ciclo 2 (`5223f2d`+`c1cf90a`),
Ciclo 2b (`ad2be76`+`d2afee9`) y Ciclo 3 (`/nosotros/nancy-nieto` standalone, `45e7a5c`) hechos y pusheados.
`founderBioPage` ya es objeto standalone (sin refs a `aboutPage.*`); `/nosotros` = página del equipo;
`/nancy-nieto` = persona completa (Historia / Filosofía + cita larga / DERMA.M & Academy). Spec+plan en disco
(`docs/` gitignored): `docs/superpowers/{specs,plans}/2026-08-28-founder-content-architecture*`.
Track B GBP cerrado · cruce sitio↔GBP no-dental saldado (`DECISIONS.md`) — no re-abrir.

## Cómo retomar
1. `npm run dev` (`:3000`) → abrir el sitio en el browser pane.
2. Para `test:visual`: en otra terminal `npx vite --port=3003 --host=0.0.0.0`, luego `npx playwright test`.
3. Elegir el próximo ítem de la cola. Cada uno: brainstorm (`superpowers:brainstorming`) → aprobación
   del usuario → un cambio por ciclo → `test:visual` + cross-check `MEDICAL_COMPLIANCE.md` + WCAG AA →
   commit → ritual de docs → push confirmado.

## Próximo (en orden)
1. **Track A — ciclos de código** (cada uno brainstorm→aprobación, ver findings doc §S5):
   - naming PRF canónico en `landingPages.js`/`treatmentPages.js`/schema/`llms.txt`/metas
     (canónico = "Plasma Rico en Plaquetas y Fibrina (PRF)", matar PRPF, no targetear PRP a secas —
     `MEMORY.md` project_seo_backlog_89_810_prf_positioning);
   - ciudad en el `<h1>` de las 3 landings;
   - FAQ sembradas desde las PAA reales;
   - "deep cleansing facial" como término EN en `/limpieza-facial-profunda`;
   - página "mejores med spa de WPB".
2. **Estrategia PRF (Tema 4, must-win)** — apropiarse de "Plasma Rico en Plaquetas y Fibrina (PRF)",
   demand-gen vía ads (término real a nivel nacional, 0 competencia local). Content strategy con brainstorming.
3. **Cuña postop demand-gen** — GBP posts + FAQ + pieza "por qué el postoperatorio importa"
   (pocos proveedores, cirujanos no lo recomiendan). Audiencia real existente.

## Bloqueado (espera al usuario / terceros)
- **Yelp:** reclamarlo lo hace Nancy (dueña) — el listicle "TOP 10 BEST Medical Spas in WPB"
  domina "best med spa WPB". Rol del usuario: pasarle a Nancy el NAP + descripción optimizados.
- Tema 6 intake: **velocidad de captación de reseñas** (cadencia de respuesta ya OK, 85%).
- Tema 7 / GMBspy sobre Élévatione / Beverly Hills / Pure Skin → secundarias de competencia
  (antes de tocar más categorías del GBP — Pedro: no churnear categorías).
- C2: sign-off de compliance de la clínica por dato cuantitativo + enlace de autoridad.
- **Dental en el sitio:** `/dental-estetico` hub + blanqueamiento + limpieza dental están en vivo.
  Mismo riesgo regulatorio que motivó sacar dental del GBP — evaluar si las páginas deben salir/
  reencuadrarse. Ciclo aparte con brainstorm; decisión del usuario. No tocar sin pedido explícito.
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
