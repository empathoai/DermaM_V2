# NEXT

Estado: Track B GBP cerrado (12 servicios + `Skin care clinic` + descripción del profile, todo
pending review en Google) · cruce sitio↔GBP no-dental **saldado por completo** con esos 12 gaps
(`DECISIONS.md:215-217`) — no re-abrir · árbol limpio tras commit de cierre · docs/ gitignored,
en disco · dev server `:3000` a apagar al cerrar

## Próximo (en orden)
1. **`/nosotros` — coherencia de trato.** La página debe reflejar explícitamente el diferenciador
   relacional (te escuchan/explican/acompañan, en español, lugar seguro) — evidencia: 53/130
   reseñas. Cross-check contra `DECISIONS.md` 2026-08-28 "diferenciador relacional".
2. **Track A — ciclos de código** (cada uno brainstorm→aprobación, ver findings doc §S5):
   naming PRF canónico en `landingPages.js`/`treatmentPages.js`/schema/`llms.txt`/metas;
   ciudad en el `<h1>` de las 3 landings; FAQ sembradas desde las PAA reales; "deep cleansing
   facial" como término EN en `/limpieza-facial-profunda`; página "mejores med spa de WPB".
3. **Estrategia PRF (Tema 4, must-win)** — ya informada por el research: apropiarse de
   "Plasma Rico en Plaquetas y Fibrina (PRF)", demand-gen vía ads (término real a nivel nacional,
   0 competencia local). Content strategy con brainstorming.
4. **Cuña postop demand-gen** — GBP posts + FAQ + pieza "por qué el postoperatorio importa"
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
