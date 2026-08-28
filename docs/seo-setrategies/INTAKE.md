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

## Entrante para la próxima sesión (2026-08-27)

- El usuario va a pasar **un repo nuevo + una transcripción**, aislados en una carpeta propia,
  para **evitar pagar por herramientas que podrían auto-hostearse**. → Analizarlo PRIMERO,
  aislado, antes de integrarlo a nada.
- El usuario completa los **8 temas de intake** de abajo por su cuenta; después el agente los
  integra acá y devuelve repreguntas.

---

## Temas de intake — PENDIENTE de completar

### 1. Panorama de entidades — RESPONDIDO 2026-08-27
- **Derma M Academy** (`dermamacademy.com`, tel `+1 561 817-3932`) — **misma dueña** (Nancy).
  Hay una referencia a Academy en el sitio del med spa. **NO tiene GBP.** Está en la **misma
  dirección** que el med spa, pero hoy se posiciona con **cursos online**. → entidad separada,
  no confundir con el med spa; no entra en `sameAs`/`knowsAbout` del nodo `#organization`.
- **Derma M Institute** (`dermaminstitute.com`, productos skincare) — **NO es de Derma.M.**
  Tercero que comparte el nombre. → NO enlazar, NO `sameAs`. Riesgo de confusión de entidad;
  vigilar que el sitio no lo referencie ni sugiera relación.
- **Miami** (`4960 SW Ave Ste 203, Miami`, `dermamskinhealthmiami@gmail.com`,
  WhatsApp `786 734-3748`) — era una **sucursal que abrió y se cerró**. **Debe desaparecer
  del sitio.** Ya se hizo una pasada antes pero **quedó algo residual**. El sitio nuevo es
  **100% West Palm Beach.** → **ACCIÓN Track A:** barrer el repo por referencias residuales a
  Miami (dirección, email `...miami@gmail.com`, WhatsApp `786 734-3748`, la palabra "Miami" en
  contexto de sede) y eliminarlas. Ciclo propio con aprobación.
- **Razón social:** `DERMA.M, LLC` — **confirmada como correcta.**

### 2. Google Business Profile — RESPONDIDO 2026-08-27
- **La ficha existe y está verificada.**
- **Acceso:** Nancy (dueña) + el usuario como **administrador temporal** hasta ordenar todo
  esto. El usuario puede hacer **cualquier modificación** que haga falta. → **Track B (sesión
  GBP / ítem 8.19) desbloqueado por acceso.**
- **El `4.9/117` del schema viejo lo cargó el usuario a mano.** NO está conectado en vivo con
  Google. Se hizo así a propósito: (a) para que las **reseñas negativas** (pocas) no aparezcan
  al azar, (b) para que **cada página muestre reseñas relacionadas con su tratamiento**.
  La extracción se hizo con **Apify**. → hay que **validar si ese enfoque es correcto y óptimo**
  (es el ítem **8.20**, ciclo propio con brainstorming).
  **Flag de compliance:** curar reseñas ocultando las negativas + fijar `aggregateRating` a
  mano choca con las políticas de datos estructurados de Google (rating debe reflejar reseñas
  genuinas y coincidir con lo que se muestra / con el GBP; selección sesgada = riesgo de acción
  manual). Por eso la sesión anterior **quitó** `aggregateRating 4.9/117` del nodo
  `#organization`. Reintroducirlo exige: número real del GBP como fuente, reseñas mostradas sin
  filtrar negativas, y `aggregateRating` que matchee lo visible.
  → **PENDIENTE: recuento y rating reales del GBP hoy** (fuente de verdad para 8.20).
- **Categoría primaria actual:** PENDIENTE — sale de la **auditoría completa del GBP** (sesión
  B). Objetivo declarado por el usuario: que las **señales estén alineadas en todo internet**
  (sitio ↔ GBP ↔ directorios).

### 3. Keyword research del usuario — RESPONDIDO 2026-08-28
- **No hay un doc formal de keywords.** El "research" fue un proceso de decisión de arquitectura,
  no una planilla exportable. Sirvió para definir **qué tratamientos van al sitio, con qué
  profundidad y jerarquía**, y para construirlo.
- **Criterios que guiaron la estructura (los tres, combinados):**
  1. **Qué quiere posicionar Derma.M** como tratamientos prioritarios de **alto valor y
     diferenciación** → de ahí salieron las **3 landings**.
  2. **CRO** — mejor forma de convertir → de ahí se definieron los **hubs** y los tratamientos
     "mejores"/destacados.
  3. **Qué busca más la gente + qué atiende más Derma.M** → de ahí se definió **qué tratamiento
     necesita página propia y cuál solo se refleja en el sitio** (swithout página dedicada).
- **Método acordado para validar/afinar keywords:** **búsquedas manuales en el browser pane**
  con el agente (autocomplete de Google, "People Also Ask", búsquedas relacionadas, composición
  del local pack en Maps, páginas de competidores). Da señal **cualitativa** de intención y de
  quién compite localmente; **no** da volumen numérico. Para un solo med spa local esto alcanza
  — intención y local pack pesan más que el volumen exacto. **Sin costo, sin herramienta paga.**
  → sustituye a Semrush/DataForSEO para este proyecto.

### 4. Prioridades de negocio — RESPONDIDO 2026-08-28
- **Limpiezas faciales** = el **enganche** / top del funnel. Siempre traen al cliente nuevo.
- **Plasma (PRP / PRF)** = **tratamiento estrella y must-win.** Desafío de posicionamiento:
  la gente conoce **PRP** pero **PRF poco**, y Derma.M es de los **pocos que hace PRF** → hay
  que educar y **apropiarse del término PRF**. Buscar la estrategia correcta (no está resuelta).
- **Post-operatorios** = **generan mucho dinero.** Alta prioridad comercial.
- **Resto de tratamientos** = mucha competencia, pero **estratégicos**. La palanca para
  posicionarlos es el **GBP** (categorías secundarias + servicios) más que páginas nuevas.
- **Pedido explícito del usuario:** hacer el **ejercicio que sugiere Pedro SEO** para **validar
  la competencia** — qué competidores del 3-pack rankean para lo que nosotros también hacemos,
  y **qué keywords / categorías GBP usan** para posicionarlo. → esto es el **Tema 7** de este
  intake; se ejecuta con búsquedas manuales en el browser + GMBspy / ver-código en Maps.
- **Las 3 landings (verificado en `src/routes.jsx`)** — coinciden 1:1 con las 3 prioridades:
  - `/limpieza-facial-profunda` (`LimpiezaFacial`) → el enganche
  - `/prf-y-fibrina` (`PrfYFibrina`) → el must-win, y ya es **PRF-específica** (no PRP genérico)
  - `/tratamientos-postoperatorios` (`Postoperatorios`) → el de mayor facturación

### 5. Analítica y herramientas — PARCIAL 2026-08-28
- GSC / GA4 / Bing WT — **NINGUNO configurado hoy** (respuesta usuario 2026-08-28).
  → **ACCIÓN Track C (usuario):** al lanzar / antes de lanzar, dar de alta **GSC + GA4 + Bing
  Webmaster a nombre del usuario**, sobre `dermamskinhealth.com` (sitio nuevo), y **subir el
  sitemap**. Es el desbloqueo (a) del handoff: no toca código, habilita toda la medición
  (queries, posición, striking distance, % de brand queries — acción nº1 de "Las nuevas
  reglas" —, errores de indexación).
  Nota: el usuario dudaba del valor "porque quiere borrar el rastro del sitio viejo" — aclarado:
  GSC mide el sitio **nuevo**, no preserva el viejo. El **mapa de redirects 301** viejo→nuevo
  (ya iniciado con el análisis de URLs actuales) es un tema aparte y también hay que cerrarlo
  antes del deploy.
- **Sesión GSC 2026-08-28 (browser):** el usuario se logueó. Estado:
  - Dominio confirmado por el repo: **`dermamskinhealth.com`** (237 ocurrencias, sin variantes).
    Hay una propiedad ajena sin verificar `dermamskinhelth.com` (typo) — ignorar.
  - Propiedades verificadas existentes en la cuenta: `empathoai.com`, `legacymd.org` (ajenas).
  - **El usuario NO tiene acceso al DNS del dominio** → no se puede hacer propiedad de Dominio.
  - Sitio nuevo **no deployado** → no se puede verificar hoy por ningún método.
  - **HECHO (browser, 2026-08-28):** propiedad de **prefijo de URL** `https://dermamskinhealth.com/`
    creada en la cuenta `empathoai@gmail.com`, estado **sin verificar** (correcto: sitio nuevo
    no deployado). Se retoma desde "Already started? finish verification".
  - **Token de verificación capturado (método HTML tag):**
    `<meta name="google-site-verification" content="M8yHH7yF8s5wO1AOTLzruE3HwjMiGW4hxeBgLlM9oIk" />`
    (método archivo HTML alternativo: `google2f0ede1a410e8a22.html`).
  - **PENDIENTE (cambio Track A, ciclo propio):** agregar ese `<meta>` al `<head>` de
    `index.html` del repo. Verificación real = después del deploy (darle a "Verify" en GSC).
  - **Bing Webmaster Tools — DIFERIDO (2026-08-28):** el login de Microsoft/Bing bloquea el
    browser automatizado ("Microsoft account is unavailable from this site"). No se puede hacer
    en la sesión. Se hace **post-deploy importando desde el GSC verificado** (1 clic) — es el
    de menor valor de los tres, no se pelea ahora.
  - **Ruta alternativa mejor:** quien deploya a Vercel controla el DNS → puede hacer la
    propiedad de **Dominio**. Ligado al punto "quién deploya" (PENDIENTE, sección Deploy).
- **GA4 — HECHO (browser, 2026-08-28):** property **"Derma.M"** creada en la cuenta
  `empathoai@gmail.com` (cuenta "Default Account for Firebase", ID 356181125). Zona Eastern
  (New York Time), USD, industria "Beauty & Fitness", tamaño Small, objetivos "Generate leads"
  + "Understand web/app traffic". Data stream **"Derma.M Web"** → `https://dermamskinhealth.com`,
  Stream ID `15515945803`, **Measurement ID `G-9272VHFT03`**, Enhanced measurement ON.
  La property vieja de Firebase (`emphatoai-payroll`, `G-NV1WD4F9BN`) queda **intacta, sin usar**.
  - **PENDIENTE (cambio Track A, ciclo propio):** instalar el snippet `gtag.js` de `G-9272VHFT03`.
    Considerar SPA page_view en cambios de ruta (React Router) — el Enhanced measurement de GA4
    captura "page changes based on browser history events" por default, así que puede alcanzar
    con el snippet en `index.html`; a evaluar en el ciclo.
  - **Bonus:** con GA4 en el sitio live, GSC se puede verificar también por el método "Google
    Analytics" (además del archivo HTML).
- **Herramientas de datos — DECIDIDO: sin herramienta paga.** Método = browser pane (manual:
  autocomplete, PAA, local pack, GMBspy, ver-código en Maps) + skills SEO/GEO/Local ya
  instaladas + `docs/pedro-seo/` y `docs/open-seo/` como referencia. **Descartados:**
  OpenSEO / DataForSEO (auto-host ahorra el $10/mes pero el piso es $50 de datos; prematuro
  para un sitio no lanzado), Semrush (trial de 7 días o cuenta free posible más adelante para
  el slice de keyword/competidores, pero no se activa ahora), pipeline de agente con la API de
  Gemini (redundante: Claude Code ya tiene acceso al filesystem; Gemini no aporta datos que no
  tenga yo — sin volumen, rank, backlinks, GSC/GA4/GBP nativos).
- **Usos marginales de la API de Gemini reservados para la fase de medición (NO ahora):**
  (a) **Search Grounding** — chequear si el grounding de Google cita nuestro dominio para
  consultas del sector (~$0.014–0.035/consulta; solo Google, no ChatGPT/Perplexity);
  (b) **embeddings** — similitud coseno entre las 40 URLs para detectar canibalización
  semántica entre páginas de tratamiento (script de una pasada).
- `@google/genai` ya es dependencia y `.env.example` referencia `GEMINI_API_KEY`, pero ninguna
  feature del sitio lo usa en runtime. No se agrega ninguna.

### 6. Operación de reseñas y contenido
- ¿Sistema para pedir reseñas? ¿Cadencia? ¿Quién responde? ¿Fotos reales del local disponibles? → PENDIENTE

### 7. Competencia
- Competidores del 3-pack en WPB para los términos money (para auditar sus categorías GBP con
  GMBspy / ver-código-fuente en Maps) → PENDIENTE

### 8. Compliance / legal
- Director médico (nombre) — para un posible nodo `Physician` a futuro. Nancy pidió NO publicar
  nº de licencia. → PENDIENTE
- Registro del med spa en Florida → PENDIENTE
