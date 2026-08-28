# INTAKE — SEO local / GEO de Derma.M

Contexto vivo del proyecto de posicionamiento. Se lee al inicio de cada sesión de SEO/GEO.
Creado 2026-08-27. Se completa por temas; lo `PENDIENTE` se llena en sesiones de intake con el usuario.

---

## Objetivo (confirmado con el usuario, 2026-08-27)

**Posicionar el nuevo sitio de Derma.M como el mejor medical spa de West Palm Beach, de forma
efectiva y sustanciada**, y que sus servicios sean accesibles y citables desde:
- buscadores tradicionales (Google, Bing) — orgánico + **local pack / Google Maps**;
- plataformas de IA (ChatGPT, Perplexity, Gemini, Claude, AI Overviews).

"El mejor" tiene que ser **defendible con evidencia real**, no declarado. Lo que lo sostiene:
recuento + rating reales de Google visibles en el sitio, ganar el 3-pack de verdad para los
términos que facturan, credenciales verificables, antes/después reales, placements de fuentes
reales (revista/cámara/prensa local) si existen.

### Métricas de éxito (a afinar con el usuario)
- Posición en el local pack para "med spa West Palm Beach" / "medical spa WPB" + términos de
  tratamiento (medición: geo-grid — herramienta pendiente).
- **Plasma (PRP/PRF) es un must-win** explícito del usuario.
- Citación en respuestas de IA para consultas de "med spa west palm beach" y tratamientos.
- (traducción de negocio: más valoraciones agendadas desde canal orgánico/local — el
  transcript de Pedro SEO estima +200% en ventas para un negocio local que llega al #1 del map pack.)

---

## Alcance

### Track A — On-site (código, este repo `F:\EmpathoAI-projects\DermaM_Website`)
Bajo control total del agente. Reglas de `CLAUDE.md` (near-final, un cambio por ciclo,
brainstorming + aprobación). Cubre: schema/entity, NAP visible, `<title>`/H1 locales, páginas
de servicio, `llms.txt`, HTML semántico, CWV, internal linking, structured data que matchea
texto visible, `ReviewsSection` (8.20).

### Track B — Google Business Profile (consola de Google, browser)
Sesión con el usuario logueado en el pane del browser; el agente hace clics, **cada guardado
lo aprueba el usuario** (cambiar settings de cuenta / publicar = aprobación por acción).
Cubre: verificar/crear la ficha, categoría primaria + secundarias, descripción 700c, áreas de
servicio, servicios, fotos, plan de posts, auditoría de la ficha.

### Track C — Off-site / operativo (del usuario)
Citas en directorios nivel 1, Bing Places, Apple Maps, cadencia de captación de reseñas
(regla 18 días), respuestas a reseñas, membresías (cámara/BBB), PR local / listas "best of".
El agente asesora y prepara materiales; la ejecución es del usuario.

### Fuera de alcance
Rebuild del sitio, rediseño visual, campañas de ads, el sitio viejo actualmente en producción.

---

## Deploy / infraestructura

- Sitio nuevo: **Vite + React SPA**, deploy en **Vercel**, mismo dominio `dermamskinhealth.com`.
- Reemplaza al sitio viejo. Timing: "para ayer" / inminente. **Fecha concreta: PENDIENTE.**
- Quién deploya: **PENDIENTE.**
- El Track A tiene que estar listo antes/con el deploy (lo que tenga el sitio nuevo al salir
  es lo que Google indexa).

---

## Decisiones registradas

### 2026-08-27 — Reconocimiento "Best of 2026" de BusinessRate.com: NO se usa en el sitio
El usuario recibió un gráfico de placa ("DERMA.M is ranked #1 in West Palm Beach — Best of
2026 — BusinessRate — Powered by Google Reviews", con watermark "SAMPLE DO NOT COPY").
**Descartado.** Motivo: BusinessRate.com sigue el patrón conocido de reconocimiento
pay-to-display (te notifican que "fuiste seleccionado", el premio es una placa que se compra,
sin metodología auditada; "Powered by Google Reviews" = agregaron reseñas públicas, no aval de
Google). Mostrarlo en un sitio de med spa es riesgo de publicidad engañosa (FTC ha sancionado
badges/premios de pago presentados como logros) y choca con `docs/MEDICAL_COMPLIANCE.md` (sin
claims de superioridad sin sustanciar). Además le resta credibilidad al trabajo de
entidad/E-E-A-T en vez de sumarle. El usuario no tiene evidencia de haber pagado por una placa;
igual se descarta su uso. Si aparece un "best of" de fuente real (revista/cámara/prensa de
Palm Beach), ese sí se evalúa.

---

## Estado de las 3 fases (del análisis `LOCAL-SEO-ANALYSIS-dermam-redesign.md`, score 48/100)

- **Sub-proyecto A / cluster de schema `#organization`** — HECHO (2026-08-27). `src/data/organizationSchema.js`
  fuente única; `sameAs` real, `knowsAbout` 37 (Plasma #4), `alternateName`, `keywords`,
  `areaServed`, `hasMap`; sin `aggregateRating` (→ 8.20) ni `medicalSpecialty`. Ver `PROGRESS.md`.
- **8.19 — GBP** — PENDIENTE (Track B, sesión con el usuario).
- **8.20 — `ReviewsSection` + APIFY** — PENDIENTE (depende de 8.19).
- **#5 — H1 con intención local (Home + 6 hubs)** — PENDIENTE (Track A).
- **Task 4 — embed del mapa de `/contacto` vía Place ID** — diferida por el usuario.
- **8.17 — GSC / GA4 / Bing Webmaster** — PENDIENTE (Track C, desbloquea medición).

---

## Temas de intake — PENDIENTE de completar

### 1. Panorama de entidades
- Derma M Academy (`dermamacademy.com`, tel `+1 561 817-3932`) — ¿misma dueña? ¿misma
  dirección? ¿GBP propio? → PENDIENTE
- Derma M Institute (`dermaminstitute.com`, productos skincare) — ¿propia / línea de producto /
  empresa ajena que comparte nombre? → PENDIENTE
- Miami (`4960 SW Ave Ste 203, Miami`, `dermamskinhealthmiami@gmail.com`, WhatsApp `786 734-3748`) —
  ¿operación real? ¿GBP propio? ¿el sitio nuevo la cubre o es 100% WPB? → PENDIENTE
- Razón social exacta ("DERMA.M, LLC"?) + figura de registro en Florida → PENDIENTE

### 2. Google Business Profile
- ¿Existe la ficha? ¿Verificada? ¿Quién tiene acceso? → PENDIENTE
- Recuento y rating reales de reseñas (el `4.9/117` del schema viejo, ¿de dónde salió?) → PENDIENTE
- Categoría primaria actual → PENDIENTE

### 3. Keyword research del usuario
- El usuario armó el contenido del sitio "en base a un research de lo que más busca la gente".
  ¿Tiene ese doc? ¿Se puede sumar al repo? Keywords/tratamientos prioritarios. → PENDIENTE

### 4. Prioridades de negocio
- Plasma = must-win (confirmado). ¿Qué otros tratamientos/categorías son los que facturan? → PENDIENTE

### 5. Analítica y herramientas
- GSC / GA4 / Bing WT — ¿configurados? ¿quién es dueño de las cuentas? → PENDIENTE
- Presupuesto para herramientas de pago (Semrush / BrightLocal / APIFY / Ahrefs) → PENDIENTE

### 6. Operación de reseñas y contenido
- ¿Sistema para pedir reseñas? ¿Cadencia? ¿Quién responde? ¿Fotos reales del local disponibles? → PENDIENTE

### 7. Competencia
- Competidores del 3-pack en WPB para los términos money (para auditar sus categorías GBP con
  GMBspy / ver-código-fuente en Maps) → PENDIENTE

### 8. Compliance / legal
- Director médico (nombre) — para un posible nodo `Physician` a futuro. Nancy pidió NO publicar
  nº de licencia. → PENDIENTE
- Registro del med spa en Florida → PENDIENTE
