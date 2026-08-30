# NEXT

Estado: HEAD esperado = `9d341cd` (+ commit docs de esta línea). Árbol limpio. Dev server `:3000` = de otro chat (no tocar).

Sesión 2026-08-30 (cont. 16) — CERRADO:
- **`/nosotros` hero: placeholder interino.** `aboutPage.js:11` `hero.backgroundImage`
  `about/hero.jpg` (no existía → caía a `og-default.webp` stock) → `contact/hero.jpg` (recepción
  real, cross-ref, no se copia). Data-only, 1 string. Sin `test:visual`. Pendiente: foto propia de
  equipo para `about/hero.jpg` (usuario la va a conseguir; tarea en hold hasta entonces).

Sesión 2026-08-30 (cont. 15) — CERRADO:
- **JSON-LD de Nancy: `image` de Persona → foto real** (`NancyNieto.jsx:32`, 1 línea). Mapa de
  imágenes de Nancy **4/4 — COMPLETO**. `home/founder.jpg` + `.webp` **ya borrados** en `fa791b2`
  (`chore(assets)`). Sin `test:visual`.

Sesión 2026-08-30 (cont. 14) — CERRADO:
- **`/nosotros` `founderSpotlight`: foto real de Nancy.** `founderSpotlight.image` en `aboutPage.js`:
  `home/founder.jpg` (modelo stock) → `about/nancy-nieto-fundadora.jpg` (retrato real, 1000×1200,
  110 KB) + `.webp`. Alt → "Retrato de Nancy Nieto…". La sección se conserva tal cual (NO se redujo a
  primer compacto — sin aprobación). `test:visual` re-baseline `nosotros-founder-with-link` desktop +
  mobile (único diff). Mapa de imágenes de Nancy 3/4. Ver DECISIONS.

Sesión 2026-08-30 (cont. 13) — CERRADO:
- **`/nosotros/nancy-nieto` §2 "Historia": sin imagen, layout tipo Filosofía + credenciales en `<dl>`.**
  Se elimina el `MediaBlock` con la modelo stock; §2 pasa al esqueleto de §3 sobre canvas claro.
  Clases `.historia*` nuevas. `.spotlight*` intactas (§4 Academy). `test:visual` 34/34. Ver DECISIONS.

**Nota de ritmo:** cambios chicos llevan varias vueltas de `test:visual`. Ver `feedback_pacing_small_changes`.

Sesión 2026-08-30 (cont. 12) — CERRADO:
- **`/nosotros/nancy-nieto` hero enfocado en ella.** Imagen propia (`about/nancy-nieto/nancy-nieto-hero.jpg`,
  `bd43ced`); body → cita corta de Nancy + sin CTAs + texto anima tras la imagen (`c7df424`); eyebrow →
  prop nueva `attribution` de `PageHero` que pinta la firma "FUNDADORA Y DIRECTORA DE DERMA.M" debajo de
  la cita (este commit). `PageHero` gana guard `{eyebrow && …}` + prop `attribution` (Nancy-only). Ver DECISIONS.
- **Mapa de imágenes de Nancy — 2/4** (Home + bio hero). Faltan: `/nosotros` `founderSpotlight.image`
  (`about/nancy-nieto-fundadora.jpg`, ref `aboutPage.js:19`), retrato del bio + schema
  (`about/nancy-nieto/nancy-nieto-retrato.jpg`, refs `FounderBioPage.jsx:49` + `NancyNieto.jsx:32`).
  `home/founder.jpg` viejo se borra recién cuando migren esos 2.

Sesión 2026-08-30 (cont. 11) — CERRADO:
- **Home `FounderSection`: imagen propia de Nancy + saca logo mobile.** `home/nancy-nieto-fundadora.jpg`
  (1000×1200, 5:6, mobile-first) reemplaza `home/founder.jpg` en el componente; se elimina
  `.mobileLogoContainer` (JSX+CSS). `test:visual` re-baseline `home-founder` (desktop+mobile). Ver DECISIONS.
- **Mapa de imágenes de Nancy — 1/4 hecho (Home).** Faltan: `/nosotros` `founderSpotlight.image`
  (`about/nancy-nieto-fundadora.jpg`), bio hero (`about/nancy-nieto/nancy-nieto-hero.jpg`), bio retrato
  + schema (`about/nancy-nieto/nancy-nieto-retrato.jpg`). Refs: `aboutPage.js:19`,
  `founderBioPage.hero.backgroundImage`, `FounderBioPage.jsx:49`, `NancyNieto.jsx:32` (JSON-LD).
  `home/founder.jpg` viejo se borra recién cuando migren esos 3.

Sesión 2026-08-30 (cont. 10) — CERRADO:
- **`/nosotros` hero: copy recortado.** `aboutPage.js` → `hero.title` de frase entera (58 ch/6 líneas)
  a `CRITERIO, EXPERIENCIA Y ATENCIÓN PERSONAL` (40 ch); `hero.body` reescrito hacia la escucha
  ("cada plan empieza por entender tus objetivos…"). Data-only, 2 strings. `test:visual` re-baseline
  intencional de `nosotros-viewport` (desktop) + `nosotros-founder-with-link` (mobile). Ver DECISIONS.

Sesión 2026-08-30 (cont. 9) — CERRADO:
- **`/nosotros`: sección de equipo aplanada en grid único.** `TeamMemberCard` gana slot `specialtyLabel`
  (eyebrow) + nombre `h4`→`h3` (`0bdd848`). `TeamBySpecialty` deja de agrupar → un solo `.grid`
  (`837bd1d`); CSS de grupos borrado; `SectionHeader` con `titleId="team-heading"` (arreglo del
  `aria-labelledby` que apuntaba a nada). `aboutPage.js`: `teamBySpecialty` → `team` plano, 7 miembros
  en orden estratégico (Nancy→Mikaela→Daniela→Elianne→Tony→Miguel→Melisa). **Samantha eliminada** de la
  data. **Nancy** como 1ª card, `Fundadora & CEO · Faciales`, **sin media** (`mediaType: "image"`,
  `mediaSrc: null` → panel `.fallback`) por decisión del usuario. `test:visual` 34/34. Ver DECISIONS.
  Spec/plan: `docs/superpowers/{specs,plans}/2026-08-30-nosotros-team-grid-flatten*` (gitignored).
- **Cerrado (mini-ciclo):** card de Nancy con `nancy-nieto.mp4` (optimizado 2.48 MB → 424 KB, poster + webp);
  entry a `mediaType: "video"` + `mediaPosition: "center top"`.
- **No urgente:** la sección `founderSpotlight` de arriba y la card de Nancy en la grilla son 2 bloques
  de Nancy cerca; posible dedupe futuro (no pedido).

Sesión 2026-08-30 (cont. 8) — CERRADO:
- **`/nosotros`: videos de Tony Díaz y Miguel Ramos (2 slots, 1 ciclo).** Por pedido explícito del
  usuario: ambos en un commit + hold dental omitido para Miguel. Tony = rename `dr-tony-diaz.mp4` →
  `tony-diaz.mp4` (slot ya cableado, sin cambio de data). Miguel = `aboutPage.js` `mediaType`
  `image`→`video` + `videoSrc` nuevo + `mediaSrc` (poster). `optimize.js` (1.31 MB → ~295 KB),
  posters frame-0 + `.webp`. `TeamMemberCard` sin tocar. `test:visual` 34/34. Ver DECISIONS 2026-08-30.

Sesión 2026-08-30 (cont. 7) — CERRADO:
- **`/faciales/rejuvenecimiento-facial`: sección antes/después con labels custom.** `beforeAfter` (1 item):
  slot `before` = collage antes/después del cliente (label `ANTES - DESPUÉS`), slot `after` = collage de
  progresión de 3 paneles (label `RESULTADOS`). Data-only — la sección no tiene slot de imagen suelta,
  todo es por pares; labels custom fue la salida sin tocar componente. `test:visual` skip. `ddfa331`.

Sesión 2026-08-30 (cont. 6) — CERRADO:
- **`/faciales/peel-coreano`: 2do par antes/después.** Se agrega 1 `item` a `beforeAfter.items` del
  entry (queda 2 filas). Imágenes separadas del cliente, `-antes-2`/`-despues-2` (par 1 del 27/08 sin
  tocar). Data-only, `test:visual` skip. `4f51fe9`.

Sesión 2026-08-30 (cont. 5) — CERRADO:
- **`/faciales/manchas-cicatrices`: sección antes/después (2 pares).** `beforeAfter` con 2 `items` en el
  entry. Fotos del cliente venían como collage vertical (antes/después en la misma imagen) → partidas y
  recortadas a 4:5 con ffmpeg, sin costura. 4 JPG + `.webp`, collages originales no versionados. Sin
  cambio de componente (encabezado de resultados sí corresponde acá). `test:visual` skip. `e1f9c29`.

Sesión 2026-08-30 (cont. 4) — CERRADO:
- **`/corporales`: imagen en la card complementaria de maderoterapia.** `categoryPages.js`, objeto
  `corporales` → `complementaryTreatments.treatments[0]`: `image: null` → ruta real + `imagePosition:
  'center 80%'`. Era la única card complementaria del hub (tarjeta de texto huérfana). Sin cambio de
  componente (`showMedia={true}` ya se pasa). Otros 5 hubs sin tocar. faciales/iv-therapy complementarias
  quedan con `image: null` a propósito (6–11 cards se leen bien; ver DECISIONS 2026-08-30). `test:visual`
  skip. `acb0d06`.

Sesión 2026-08-30 (cont. 3) — CERRADO:
- **`/faciales/plasma-frio`: bloque de procedimiento (video + still).** Mismo patrón que oxigenoterapia,
  data-only (el override de `eyebrow`/`headline` ya estaba shippeado). Entry `plasma-frio`: `beforeAfter`
  con video del electrodo de gas ionizado (H.264, `-an`, 18 s recortados, 2.78 MB) + still, labels
  `EN CABINA`/`EQUIPO`. `test:visual` 34/34 sin diffs. `8f83c2d`.

Sesión 2026-08-30 (cont. 2) — CERRADO:
- **`/faciales/oxigenoterapia-facial`: copy a modalidad cápsula.** `heroDescription`, `whatIsBody`,
  `application` ("Nebulización" → "Cápsula de oxígeno") y `faq[0]` del entry `oxigenoterapia-facial`
  describían una pistola de O2 a presión; reescritos a la cápsula real (cúpula transparente + bruma de
  activos + luz LED, sin chorro). Data-only, sin banned words, sin `test:visual`. Cierra el pendiente
  del ciclo anterior. `03eeb0e`.

Sesión 2026-08-30 (cont.) — CERRADO:
- **`/faciales/oxigenoterapia-facial`: bloque de procedimiento (video + still).** `TreatmentDetailPage.jsx`
  (2 líneas): `eyebrow`/`headline` de `BeforeAfterGrid` aceptan override desde `customDetails.beforeAfter`
  (fallback = strings actuales → capilar/acné/PRF intactos, verificado). Entry `oxigenoterapia-facial`:
  `beforeAfter` con `eyebrow: 'EL PROCEDIMIENTO'`, slot `before` = video `.mp4` (cápsula O2 + panel LED,
  H.264, `-an`, 2.6 MB), slot `after` = still de detalle, labels `EN CABINA`/`EQUIPO`, disclaimer de
  procedimiento. `BeforeAfterGrid` sin tocar. `test:visual` 34/34 sin diffs. Ver DECISIONS 2026-08-30.

Sesión 2026-08-30 — CERRADO:
- **`/faciales/tratamiento-acne`: sección antes/después.** `beforeAfter: { items: [...] }` (1 par) en
  el entry `tratamiento-acne` de `treatmentPages.js` — mismo patrón que capilar, sin cambio de
  componente. Imágenes del usuario en `public/assets/images/treatments/faciales/tratamiento-acne/`
  optimizadas (116/131 KB, 1000×1250) + `.webp` sibling. Alt español trazable al entry. `test:visual`
  omitido (data-only, gate DoD). Render verificado en `:3000`.

Sesión 2026-08-29 (cont. 16) — CERRADO:
- **`/capilar/tratamiento-capilar`: sección antes/después.** `beforeAfter: { items: [...] }` en
  `treatmentPages.js` (el template ya lo renderiza, sin cambio de componente). Imágenes del usuario
  optimizadas + `.webp` en `public/assets/images/treatments/capilar/tratamiento-capilar/`. `test:visual`
  34/34 sin diffs (ruta no snapshoteada). Ver DECISIONS 2026-08-29.
- **Skill `add-media` ajustada tras primer uso real** (ambas copias): Locate distingue data-only vs
  ciclo de componente; recepción = dar nombres+ruta y parar si el usuario solo pide nombres; sin `find`
  recursivo; gotcha de `generate-webp.js` (siblings no relacionados → reportar aparte). Ver DECISIONS.
- **Side-effect:** `generate-webp.js` creó el `.webp` faltante de `plasma-rico-en-plaquetas-procedimiento`
  (`/prf-y-fibrina`) — commit `chore(assets)` aparte, no revertido (sibling legítimo).

Sesión 2026-08-29 (cont. 15) — CERRADO:
- **Heroes `/nosotros` + `/nancy-nieto`: CTA primario → "AGENDA TU VALORACIÓN"** (`aboutPage.js`, 2
  líneas). Eran los únicos 2 heroes en "RESERVAR"; ahora todos los heroes con CTA + navbar unifican
  string. Supersede el ruling del mismo día que los puso en "RESERVAR" (premisa equivocada).
  `test:visual` 22/22 sin diffs. `a25e317`. Ver DECISIONS 2026-08-29.
- **Descartado (sin cambio):** bloque Academy en `/nosotros` (vive en `/nancy-nieto`); spec reviews 8.20
  → backlog; CTA sticky en mobile (FAB + hero CTA ya cubren; retomar solo si analytics muestra caída).

Sesión 2026-08-29 (cont. 14) — CERRADO:
- **FloatingWhatsApp mobile-first.** Helper bubble: no se renderiza en mobile; en desktop trigger por
  intención (scroll ≥40% o 15s) + auto-hide 6s. FAB: énfasis de entrada + ring de 3 pulsos que se
  detiene, guard `prefers-reduced-motion`. `test:visual` 34/34 (re-baseline `home-hero` mobile-safari,
  intencional). `ba4e4bc`. Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 13) — CERRADO:
- **Navbar top info bar mobile-first.** Mobile (<768px): se oculta el label "West Palm Beach", se
  muestran teléfono + WhatsApp (antes desktop-only). Ícono `Phone` + `aria-label` para que el número
  se lea como teléfono (no nº de licencia). Tap target 15→27px. `test:visual` 34/34. `22507ae`.
  Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 12) — CERRADO:
- **Fix: el botón flotante de WhatsApp tapaba el footer.** `FloatingWhatsApp` se oculta cuando el
  `<footer>` entra en viewport (`IntersectionObserver`, re-adquirido por ruta) y reaparece al subir.
  `test:visual` 34/34. `d357419`. Ver DECISIONS 2026-08-29.
- **Evaluado (sin cambio):** el CTA del navbar ("AGENDA TU VALORACIÓN") NO es redundante — navbar
  `sticky` = única acción de reserva persistente en desktop. Mantener. Posible mejora futura: CTA
  sticky en mobile (el booking primario está detrás del hamburger). Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 11) — CERRADO:
- **Footer pulido (ítem 1d) — CIERRA la auditoría del footer.** `Footer.jsx`: blurb → "medical spa
  en West Palm Beach, Florida…"; se quita "Tratamientos" (→`/faciales`) de la col. Navegación; +IV
  Therapy +Capilar en la col. Tratamientos; `© {getFullYear()}`. 1 componente, sin `test:visual`.
  Compliance OK. `6392595`. Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 10) — CERRADO:
- **Footer bottom bar: +Accesibilidad + Recursos legales** (`/accessibility`, `/legal`). Cierra **ítem 1c**.
  1 componente, sin `test:visual` (4 links: ok desktop, wrap en mobile). `ffc0e0f`.

Sesión 2026-08-29 (cont. 9) — CERRADO:
- **Footer: horario en la columna Contacto** ("Lun–Sáb 9:00 AM – 5:00 PM · Dom 9:00 AM – 1:00 PM",
  = `Contacto.jsx` + schema). Cierra **ítem 1b**. Contenido de 1 componente, sin `test:visual`. `2269fd9`.

Sesión 2026-08-29 (cont. 8) — CERRADO:
- **Footer: fila de redes** (Instagram · TikTok · Facebook) en la columna de marca, debajo de la
  descripción. IG/FB de lucide; TikTok `<svg>` inline (lucide no lo trae). +`tiktok.com/@derma.m`
  en `sameAs` de `organizationSchema.js`. Cierra **ítem 1a** de la auditoría del footer.
  3 archivos. `test:visual` 34/34 — el footer no está en ningún snapshot. Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 7) — CERRADO:
- **Home `FounderSection` → link a la bio de Nancy.** `founderPrimer` (`aboutPage.js`): `linkTo`
  `/nosotros` → `/nosotros/nancy-nieto`, label "Conoce a Nancy y al equipo" → "Conoce a Nancy Nieto".
  `/nosotros/nancy-nieto` pasa de 1 a 2 links internos entrantes. Data-only, sin `test:visual`.
- **Workflow: `test:visual` ahora gateado por tipo de cambio** (CSS/compartido/layout → correr;
  data/copy/1-componente ya visto en browser → skip). Registrado en `CLAUDE.md` §DoD + DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 6) — CERRADO:
- **BUG fix — CTAs del hero del Home no navegaban.** `Hero.jsx`: "Reservar"/"Contacto" eran `<button>`
  sin handler (scaffold AI Studio). Ahora "Reservar" → `<a href={bookingUrl} target="_blank">`,
  "Contacto" → `<Link to="/contacto">`. `test:visual` 34/34 sin diffs. Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 5) — CERRADO:
- **Heroes `/nosotros` + `/nancy-nieto`: CTAs → `RESERVAR` / `WHATSAPP`** (antes labels verbosos que
  ensanchaban el botón vs. los 10+ hero estándar). Solo data (`aboutPage.js`), 2 botones se mantienen.
  `test:visual` 34/34 sin diffs. Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 4) — CERRADO:
- **`.spotlightTitle` desktop 56px → 44px** en `FounderBioPage.module.css` — jerarquía vs H1 de hero
  (64px), títulos largos de Historia/Academy pasan de 4 a 3 líneas. Base 40px intacto.
  `test:visual` 34/34 (el H2 está fuera del viewport del snapshot). Ver DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 3) — CERRADO:
- **Home CTA: contenedor alineado a `shared/FinalCTA`** — `.container` de `sections/FinalCTA.module.css`
  pierde `min-height: 75vh` y el override de padding; queda `clamp(80px,12vw,160px) clamp(24px,4vw,64px)`.
  Sección 990px → 763px, sin efecto "zoom" en la imagen. Los 2 componentes `FinalCTA` NO se unificaron
  (blast radius de `shared`). Ver DECISIONS 2026-08-29.
- **Línea `supportingInfo` fuera** del CTA del Home ("West Palm Beach · 561 253 5384"). Commit `29e48aa`.
  `test:visual` 34/34 (el CTA del Home es below-the-fold en los snapshots).
- **Auditoría del footer** (read-only, sin código) — 7 hallazgos → cola de pulido abajo. DECISIONS 2026-08-29.

Sesión 2026-08-29 (cont. 2) — CERRADO:
- **`/nancy-nieto` sección Academy → 2 columnas** (formato `.spotlight*` de "Historia", imagen a la
  **derecha**) + **link saliente seguido** a `dermamacademy.com` ("Conoce DERMA.M Academy ↗",
  refuerza audit 8.19). Data `href`/`linkLabel` en `dermamYAcademy` (`aboutPage.js`).
- **`.spotlightRow` desktop: `height` fijo → `min-height`** — arregla clipping de texto en
  secciones 2 y 4. Commits `f357fc4`→`b4c354e`. `test:visual` 34/34 (2×), sin diffs.
- **Evaluado y descartado:** link a `/nosotros/nancy-nieto` en el navbar (costo > ganancia blanda).
  Fix de orfandad queda como 2 ítems abajo. Ver DECISIONS 2026-08-29.
- Spec/plan: `docs/superpowers/{specs,plans}/2026-08-29-nancy-academy-two-column*` (gitignored).

Sesión 2026-08-29 (cont.):
- **Skill `add-media` creada** — `.agents/skills/add-media/SKILL.md` + copia en `.claude/skills/`.
  3 acciones: A (rellenar slot existente), B (slot nuevo, gate brainstorming), C (video de hero).
  Envuelve `assets-optimizer`. Handoff de archivos crudos = `scratchpad/media-in/`.
  Spec: `docs/superpowers/specs/2026-08-29-add-media-skill-design.md`.
- **2 specs draft escritos, PENDIENTES de revisión del usuario** (no implementar sin "go"):
  - `2026-08-29-nosotros-academy-link-block-design.md` — restaurar bloque Academy compacto en
    `/nosotros` (imagen + link a `dermamacademy.com`), entre equipo y reseñas. **Revierte
    decisión del 2026-08-28** (el usuario lo pidió explícito); mitigado con prosa mínima + link
    followed explícito (ayuda a 8.19). CSS `.academy*` sigue intacto; `dermam-academy.jpg` en disco.
  - `2026-08-29-reviews-alignment-8.20-rescope-design.md` — rescope de 8.20: sin integración
    online (Apify descartado), reseñas curadas estáticas, relevancia por página (postop→postop),
    link saliente a Google reviews para confianza, **sin `aggregateRating`**. Cycle 1 = link +
    curación Opción A; Cycle 2 opcional = unificar en `src/data/reviews.js` con tags de tema.

Sesión 2026-08-29 (3 ciclos previos):
- **Ítem #5b CERRADO** (`293f8d2`) — 4 FAQ comparativas en `/prf-y-fibrina` (count 8→12). Ítem #5a DESCARTADO.
- **Ítem #6 CERRADO** — cuña postop demand-gen: 3 FAQ en `/tratamientos-postoperatorios` (count 9→12).
- **Ítem "mejores med spa de WPB" [XL] DESCARTADO** → resuelto como 1 FAQ en `/contacto` (`contactFaq`
  5→6, `faq-consistency` count 5→6): "¿Cómo elijo un buen med spa en West Palm Beach?", criterios de
  decisión, sin claim de superioridad. Premio BusinessRate ya descartado (`INTAKE.md:66`); la palanca
  del término es off-site (Yelp/reseñas). `test:visual` 34/34 sin diffs.
  Spec: `docs/superpowers/specs/2026-08-29-contacto-faq-med-spa-eleccion-design.md`.
  Detalle del descarte y cómo/cuándo reconsiderar: DECISIONS 2026-08-29.

Contexto vigente de sesiones previas (no re-abrir):
- Ítem #5 (estrategia PRF) cerrado como spec 2026-08-28. Ítem #4 (FAQ PAA) cerrado.

## Cómo retomar
1. `npm run dev` (`:3000`) → abrir el sitio en el browser pane.
2. Para `test:visual`: en otra terminal `npx vite --port=3003 --host=0.0.0.0`, luego `npx playwright test`.
   (Git Bash: prefijar `MSYS_NO_PATHCONV=1` si se usa `-g` con un patrón que empiece por `/`.)
3. Elegir el próximo ítem de la cola. Cada uno: brainstorm (`superpowers:brainstorming`) → aprobación
   del usuario → un cambio por ciclo → **verificación** → commit → ritual de docs → push confirmado.
   Verificación: siempre cross-check `MEDICAL_COMPLIANCE.md` (copy) + WCAG AA + browser `:3000`.
   `test:visual` **solo** si el cambio toca CSS / componente-template compartido / layout / clase
   reusada; data/copy/1-componente ya visto en browser → skip. Ver `CLAUDE.md` §DoD + DECISIONS 2026-08-29.

## Lógica de esfuerzo (t-shirt sizing)

Se ataca en orden de size ascendente (XS→XL) salvo que el usuario diga otra cosa. No re-preguntar
"¿por dónde empezamos?". Cada ciclo mantiene su gate: brainstorm → aprobación → 1 cambio.
Escala: **XS** copy 1 sitio · **S** 1–3 archivos mecánico · **M** multi-archivo con criterio ·
**L** multi-fase o captura de data previa · **XL** página/feature nueva entera.

## Próximo (en orden de size)

**Specs draft resueltos por el usuario (no en la cola activa):**
1. ~~`2026-08-29-nosotros-academy-link-block-design.md`~~ — **DESCARTADO 2026-08-29** por el usuario:
   la sección de Academy ya vive en `/nosotros/nancy-nieto` (`#academy-spotlight`) y ahí se queda; no
   se duplica en `/nosotros`. Ver DECISIONS 2026-08-29. No re-proponer sin pedido explícito.
2. `docs/superpowers/specs/2026-08-29-reviews-alignment-8.20-rescope-design.md` — [M]. **EN BACKLOG
   por decisión del usuario 2026-08-29** — no se ejecuta por ahora. El spec queda como está; retomar
   solo si el usuario lo pide. Pendiente cuando se retome: Opción A vs B de curación, confirmar "sin
   aggregateRating".

**Integración de media faltante — usar la skill `add-media`, un slot por ciclo.**
Flujo (post-ajuste cont. 16): la skill da nombre(s) SEO + ruta exacta; el usuario coloca los archivos
(ruta final ya nombrada o `scratchpad/media-in/`) y confirma el mapeo 1 archivo ↔ 1 slot. Slots vacíos
hoy (todos `/nosotros`):
- **Mapa de imágenes de Nancy — COMPLETO (4/4).** `home/founder.jpg` + `.webp` borrados (`fa791b2`).
- `/assets/images/about/hero.jpg` (hero de `/nosotros`) — **placeholder interino puesto (cont. 16)**:
  `aboutPage.js:11` apunta a `contact/hero.jpg` por cross-ref. Falta la foto propia: composición de
  **equipo** que el usuario va a conseguir. Al llegar → `add-media` a `about/hero.jpg` (+ `.webp`) y
  revertir la línea a `about/hero.jpg`. **EN HOLD** hasta que el usuario tenga la imagen.
- Posters `.jpg` de `mikaela-guajardo` / `elianne-trujillo` podrían faltar (el video igual corre sin
  ellos); verificar con `ls public/assets/images/about/team/*.jpg` antes de darlo por pendiente.
- Slot de retrato de §2 del bio **ya no existe** (cont. 13, §2 quedó sin imagen).
- **Follow-up opcional NO pedido:** reducir el bloque `founderSpotlight` de `/nosotros` a founder-primer
  compacto (dedupe vs. card #1 del grid de equipo + página dedicada). Solo si el usuario lo pide;
  brainstorm propio. Ver DECISIONS 2026-08-30.
Cada ciclo: `add-media` A (localizar → optimizar → webp → alt español → render `:3000` →
`test:visual` re-baseline → WCAG → ritual).
(Tony Díaz, Miguel Ramos, Daniela, Melisa: videos CERRADOS. Samantha: eliminada del equipo en cont. 9.)

Otras secciones "con media faltante" fuera de `/nosotros`: identificar con
`grep -rhoE '/assets/images/[^"]+\.(jpg|mp4|webp)' src | while read p; do [ -f public$p ] || echo $p; done`
antes de cada tanda.

**Cola de código no bloqueada:** vacía.
- ~~CTA sticky en mobile~~ — **DESCARTADO 2026-08-29** por el usuario: el hero mobile ya tiene CTA de
  reserva + el FAB de WhatsApp es persistente; un 2º elemento fijo = clutter y riesgo de overlap
  (ver fix del footer). Retomar solo si analytics muestra caída de conversión en mobile. Ver DECISIONS.

- **Auditoría del footer: CERRADA** — 1a redes (`b30f01a`), 1b horario (`2269fd9`), 1c legal/accessibility
  (`ffc0e0f`), 1d pulido (`6392595`). Lo único de footer pendiente: link a Dental (condicional al hold
  regulatorio dental, §Bloqueado) y entrada de `/nancy-nieto` en `sitemap.xml` (atada al deploy Hostinger).
- Fix de orfandad de `/nancy-nieto`: hecho el link contextual desde Home (`43dc34b`); falta el sitemap (deploy).

Sin ítem de doc-hygiene pendiente por ahora.

**Para cerrar el proyecto solo falta (NO es código, NO es este workflow):**
1. Subir el sitio a **Hostinger/Apache** (prod real; Vercel es solo demo para el cliente).
2. Verificar **GSC** por Dominio una vez en Hostinger + DNS.
Ver §Bloqueado para el detalle de `.htaccess` y el orden de pasos.

Condicionales (no ejecutar sin que se cumpla la condición):
- **Pieza/sección "por qué el postoperatorio importa"** — sección nueva en `LandingPage` (+ baseline visual)
  o ruta nueva. Solo si `/tratamientos-postoperatorios` gana tracción. Material ya vetado en el spec de #6.
- PRF §8.3 página EN — solo si el tráfico EN de ads convierte.
- PRF §8.4 guía pilar "Qué es el PRF" — solo si el landing enriquecido rankea para el cluster.

## Backlog off-site (NO es parte del sitio — no consume ciclo de código)
Trabajo de GBP / ads / listings. Vive en specs y research; se ejecuta en sesiones aparte
con el usuario logueado, no toca `src/`. Sin prioridad asignada.
- Posts de GBP + copy base de Facebook ads para postop — `docs/superpowers/specs/2026-08-29-postop-demand-gen-wedge-design.md` §"Specified, NOT executed".
- Servicios 1–3 + descripción de GBP — `COMPETENCIA-SERVICIOS-2026.md` §S1–S3.
- Ads de PRF (canales/ángulos/términos) — `2026-08-28-prf-content-strategy-design.md`.

## Bloqueado (espera al usuario / terceros)
- **Yelp:** reclamarlo lo hace Nancy (dueña). Rol del usuario: pasarle el NAP + descripción optimizados.
- Tema 6 intake: velocidad de captación de reseñas (cadencia de respuesta ya OK, 85%).
- Tema 7 / GMBspy sobre Élévatione / Beverly Hills / Pure Skin → secundarias de competencia.
- C2: sign-off de compliance de la clínica por dato cuantitativo + enlace de autoridad.
- **Dental en el sitio:** `/dental-estetico` hub + blanqueamiento + limpieza dental en vivo. Mismo riesgo
  regulatorio que sacó dental del GBP — evaluar si las páginas deben salir/reencuadrarse. Ciclo aparte,
  decisión del usuario. No tocar sin pedido explícito.
- Deploy: **estado actual** = Vercel auto en cada push, **solo como demo para el cliente**.
  **Prod real = Hostinger/Apache, pendiente de implementar.** No tocar nada de Hostinger (ni `.htaccess`,
  ni corregir refs de docs que digan "Vercel") hasta que el usuario diga explícitamente "vamos a hacer el
  deploy en Hostinger".
  Al deployar en Hostinger: reemplazar `public/.htaccess` con el bloque de
  `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` §8, verificar con el script `curl -I` del mismo doc,
  y recién ahí corregir `docs/seo-setrategies/INTAKE.md:56` ("deploy en Vercel" → Hostinger/Apache).
  **Aprovechar la tanda para agregar `/nosotros/nancy-nieto` a `public/sitemap.xml`** (priority ~0.6):
  hoy está ausente y es casi huérfana (1 solo link entrante). `sitemap.xml` es archivo protegido → no
  tocar antes del deploy. Ver DECISIONS 2026-08-29.
  Condiciona la verificación GSC por Dominio.
- Nota operativa para la clínica: servicio postop tiene punto débil documentado (ayuda con la faja +
  protección ocular en luz LED) — de las 2 reseñas negativas.

## Infra resuelta (no rehacer)
graphify fuera del workflow · engram off · GSC prefijo creado sin verificar
(`public/google2f0ede1a410e8a22.html`) · GA4 `G-9272VHFT03` en index.html · Apify token en
`.env.local` raíz (`APIFY_API_KEY`, formato `KEY: valor`)

## Contexto por área — grep, no full-read
PROGRESS.md = log · DECISIONS.md = por qué · docs/seo-setrategies/INTAKE.md = proyecto SEO local ·
docs/seo-setrategies/COMPETENCIA-SERVICIOS-2026.md = research competencia/servicios + reseñas
