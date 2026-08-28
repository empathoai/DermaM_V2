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
- **Sede única: West Palm Beach.** El sitio es 100% WPB. Repo verificado limpio
  (`src/` + `public/` + `PRODUCT.md`, 2026-08-28) — no reintroducir ninguna segunda ubicación.
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
- **AUDITORÍA READ-ONLY DEL GBP — HECHA (browser, 2026-08-28), sin tocar nada:**
  - **DERMA.M** — verificada. **Rating real: 4.9 ★ · ~130 reseñas** (panel lateral dice 128).
    874 interacciones. Apertura 1 ago 2021. → **el `4.9/117` del schema viejo NO era inventado**,
    reflejaba el GBP real de entonces (117→130). El tema de 8.20 es la *curación* de qué reseñas
    se muestran on-page, no el número agregado.
  - **Categorías:** `Medical spa` (PRIMARIA ✓, ya es la correcta) + 4 secundarias: `Facial spa`,
    `Massage spa`, `Lymph drainage therapist`, `Laser hair removal service`.
  - **NAP:** `5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405` · tel `(561) 253-5384` ·
    chat `wa.me/15612535384`. **Consistente 100% con `src/data/organizationSchema.js`**
    (dirección, tel, y horario: L–S 09:00–17:00, Dom 09:00–13:00 — matchea el schema).
  - **Descripción:** ya escrita, ~700c, español, incluye West Palm Beach + servicios +
    "PRP/PRF Plasma Rico en Plaquetas y Fibrina" + bilingüe. Bastante completa.
  - **Redes en la ficha:** Instagram `/dermamskinhealth/`, TikTok `@derma.m`, Facebook
    `/DermaMskinhealth`.
  - **Special hours** (feriados) cargados: Labor Day, Thanksgiving, Christmas Eve/Day — Closed.
  - **Validación del sitio público actual (curl, 2026-08-28):** todas las variantes
    (`http://`, `www.`) hacen **301 → `https://dermamskinhealth.com/`**. Canónico live:
    `<link rel="canonical" href="https://dermamskinhealth.com/">`. Servidor `LiteSpeed`
    (WordPress) = rediseño NO deployado. → La propiedad de GSC (`https://dermamskinhealth.com`)
    y el stream de GA4 quedaron con la URL correcta. **Deploy:** Vercel debe mantener los
    mismos 301 (www→no-www, http→https) sobre el dominio.
  - **GAPS detectados (para la sesión B de optimización, con el audit de competencia del Tema 7):**
    1. **Website field = `http://www.dermamskinhealth.com/`** → 301ea al canónico, así que
       *funciona*; conviene ponerlo en la forma canónica `https://dermamskinhealth.com/`
       (cosmético, prioridad baja).
    2. **Service area: vacío.** El schema del sitio tiene `areaServed` (WPB + Palm Beach County)
       — el GBP debería espejarlo (barrios/áreas reales, "test del dolor" de Pedro).
    3. **Profile strength no 100%** ("Complete info").
    4. **Categorías secundarias:** revisar contra las del top-3 de competidores (Tema 7) antes
       de agregar/cambiar — Pedro: no tocar categorías seguido.
  - **NO se hizo ninguna edición.** Las ediciones van en una sesión B deliberada, con el audit
    de competencia hecho y aprobación por cambio.

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
  - La cuenta tiene otras propiedades verificadas de negocios ajenos — no son de Derma.M, ignorar.
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

### 7. Competencia — PARCIAL 2026-08-28

**Local pack "med spa west palm beach" (Maps, browser; geo de sesión NO es WPB → orden exacto
del 3-pack puede variar, pero la identificación de players es sólida):**

| Negocio | Rating | Reseñas | Dirección |
|---|---|---|---|
| Élévation Med Spa & Beauty | 4.7 | 810 | 1515 N Flagler Dr Ste 100 |
| Beverly Hills Wellness Center & Med Spa | 5.0 | 621 | 6905 S Dixie Hwy |
| MedClub by Dr. Jenn | 4.9 | 413 | 333 President DJT Blvd #404 |
| Beauty Within | 5.0 | 312 | 100 NE 6th St |
| Bespoke Aesthetics | 5.0 | 266 | 625 N Flagler Dr #675 |
| J&P Wellness and aesthetic | 4.9 | 184 | 2215 N Military Trl # M |
| MD Beauty Labs | 4.7 | 149 | 320 S Quadrille Blvd |
| **DERMA.M** | **4.9** | **~130** | 5707 S Dixie Hwy UNIT D |

**Takeaways:**
1. **Categoría primaria "Medical spa" es universal** en todos → la de DERMA.M está bien, NO se
   cambia.
2. **DERMA.M es el último en volumen de reseñas** (130 vs 149–810), con rating competitivo
   (4.9). La palanca nº1 = **volumen + velocidad de reseñas** (coincide con Pedro y con el
   Tema 6).
3. **Beverly Hills Wellness Center & Med Spa** (6905 S Dixie Hwy) = competidor directo de
   **proximidad** (misma calle que DERMA.M, 5707 S Dixie Hwy), 621 reseñas / 5.0.

**PENDIENTE del Tema 7:**
- **Categorías secundarias de los competidores:** la extracción confiable necesita **GMBspy**
  (extensión de Chrome) — no se puede desde el browser pane (habría que parsear el protobuf de
  Maps a mano). Opciones: (a) el usuario corre GMBspy en su Chrome sobre las fichas de
  Élévation / Beverly Hills / MedClub y pasa la lista; (b) se decide "best effort" en la sesión
  de optimización cruzando servicios reales del sitio + lo visible en 2–3 fichas.
  DERMA.M hoy tiene 4 secundarias (Facial spa, Massage spa, Lymph drainage therapist, Laser
  hair removal service); candidatas a evaluar según el mix real: "Skin care clinic",
  "Medical clinic" (PRP/PRF/Botox/IV), "Weight loss service" (si hay body contouring),
  "Tattoo removal service" (si IPL).
- Geo-grid real (opcional, manual) para el orden del 3-pack desde WPB.
- Auditar el sitio web de 1–2 competidores fuertes (Élévation `elevationewestpalmbeach.com` en
  Squarespace, Beverly Hills) — H1 local, páginas de servicio, reseñas on-page.

### 8. Compliance / legal — RESPONDIDO (parcial) 2026-08-28

- **Director médico: Tony Diaz, D.O.** (Doctor of Osteopathic Medicine). Es el mismo "Tony Díaz DO"
  que ya figura como team member en `src/data/aboutPage.js`. Fuente que pasó el usuario:
  `https://www.orthopedicsurgeonsouthflorida.com/our-providers/tony-diaz-do/`.
  - Perfil en esa fuente: **Orthopedic Specialists of South Florida**, Hialeah FL — especialidad
    **General Orthopedics / Orthopedic Surgery / Arthroscopic & Reconstructive Surgery**. Nova
    Southeastern (med school), residencia en cirugía ortopédica (Michigan), ex Flight Surgeon US Navy.
    Boards/membresías: American Osteopathic Academy of Orthopedic Surgeons, AOA, AMA. **Sin nº de
    licencia FL en la página.** La página **no menciona Derma.M**.
  - **⚠ Flag para el nodo `Physician` / `sameAs`:** esa URL es de otra práctica (ortopedia, otra
    ciudad) y no corrobora el rol de director médico de un med spa ni la relación con Derma.M.
    Usarla como `sameAs` del med spa es débil / potencialmente confuso para entidad y E-E-A-T.
    Antes de publicar cualquier cosa sobre el director médico hace falta: (a) confirmar con
    Nancy/Tony qué se puede decir públicamente, (b) idealmente una fuente que ligue a Tony Diaz DO
    con Derma.M (no solo con la clínica de ortopedia). Nancy ya pidió **NO** publicar nº de licencia
    — se respeta.
- **Registro en Florida (Sunbiz) — DERMA.M, LLC:**
  - Document Number **L21000435735** · FEI/EIN **87-3024328**
  - Filed **10/05/2021** · Effective **10/10/2021** · State **FL** · Status **ACTIVE**
  - Principal & Mailing Address: **5707 S Dixie Hwy, Unit D, West Palm Beach, FL 33405** (changed 06/20/2022)
    → **coincide 100% con el NAP** de `organizationSchema.js` y del GBP.
  - Registered Agent + Authorized Person (Title AMBR): **Nieto Vasconez, Nancy M**, misma dirección.
  - Uso posible: número de documento / fecha de constitución / razón social como señal verificable
    de legitimidad del negocio (p. ej. en `/nosotros` o footer legal). No expone datos sensibles.
    A decidir en su propio ciclo si se muestra y dónde.
- **Certificaciones / afiliaciones publicables (cámara de comercio WPB, BBB, asociación de med spas,
  etc.):** el usuario **no sabe** hoy si existen. → PENDIENTE (revisar en la sesión Track B/GBP o
  preguntar a Nancy).

#### Preguntas abiertas para Nancy — director médico (NO re-mostrar cada sesión; solo si el usuario retoma el tema del director médico o el nodo `Physician`)
Impacto evaluado: NO es palanca de ranking. Señal de confianza / E-E-A-T / citación IA. Con la
info actual (perfil de ortopedista sin vínculo público con Derma.M) el costo/beneficio NO cierra
para publicar todavía. Publicar solo si las respuestas 1–4 son sólidas.
1. ¿Tony Diaz D.O. es hoy el director médico / physician of record de Derma.M? ¿Relación activa y
   documentada (contrato de supervisión / delegación médica de FL)?
2. ¿Hay autorización de él para nombrarlo públicamente como director médico en el sitio?
3. ¿Qué exactamente se puede publicar? (solo nombre / + "D.O." / + título "Director Médico" / bio).
   Confirmado: NO va nº de licencia. ¿Algo más fuera?
4. ¿Existe página/directorio/prensa/listado oficial que vincule a Tony Diaz D.O. con Derma.M
   específicamente (no con la clínica de ortopedia)? — requisito para un `sameAs` creíble.
5. ¿Supervisa todos los servicios o algunos (inyectables / PRP-PRF / IV)? Define si se lo presenta
   como director médico general o acotado.
