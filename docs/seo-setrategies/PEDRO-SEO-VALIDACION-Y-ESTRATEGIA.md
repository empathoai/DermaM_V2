# Pedro SEO — validación del material + estrategia de ejecución (autonomía vs. dependencias)

Creado 2026-08-28. Analiza `docs/pedro-seo/` (5 transcripciones de cursos de Pedro SEO / Palo
Seco) y define **qué puede hacer el agente solo y qué necesita del usuario** (accesos, browser).
Material de referencia; nada se aplica al sitio sin aprobación.

Archivos: `Curso SEO Local para ser el #1 en Google Maps`, `El sistema de SEO Local con Claude
que usamos en agencia`, `Curso GEO 2026: Cómo hacer que la IA cite tu web`, `Las nuevas reglas
(Muchos negocios desaparecerán de Google)`, `✅ Curso SEO Para Posicionar tu web TOP 1 en Google`.

---

## 1. ¿Nos sirve? — Sí, con matices

**Sí.** Es coherente con la dirección que ya veníamos tomando (gratis/manual, "poseé tu marca",
medir negocio y no tráfico). Las dos transcripciones de SEO local son **la misma fuente que la
skill `seo-local` ya instalada** (confirmado en el handoff previo); los cursos de GEO y "nuevas
reglas" agregan la capa de citación por IA y demanda de marca.

### Conceptos accionables que tomamos

**Ranking local — 3 factores:**
- **Proximidad** — no se controla.
- **Relevancia** — categorías del GBP + keywords en la descripción + **cohesión sitio ↔ GBP**.
- **Prominencia** — reseñas (cantidad + nota + **velocidad**), citaciones en directorios,
  autoridad del sitio. Es la palanca más grande y la que más trabajo lleva.

**GBP:**
- **1 categoría primaria** (la que más pesa) + secundarias (hasta 9–15 según la fuente).
  Elegir la primaria = **la que usan los competidores del top-3**; las secundarias abren
  conjuntos de búsqueda adicionales.
- **No cambiar la ficha seguido** — Google desconfía de ediciones frecuentes de
  nombre/categorías. Horarios y fotos sí se pueden tocar sin problema.
- **Áreas de servicio** solo donde se opera de verdad ("test del dolor" — fichas infladas =
  suspensión). Con local físico, **la dirección visible manda**; las áreas son secundarias.
- **Descripción** ~700–750 caracteres, con keywords pero humana: propuesta de valor +
  especialidades estrella + CTA.

**Reseñas (el factor nº1 de prominencia):**
- **Velocidad > cantidad.** Flujo constante (~1–2/semana). **Picos = filtro/suspensión**
  (30 en una semana te tumba la ficha). ~10 para arrancar.
- Pedir en el **pico emocional** (justo post-servicio). **WhatsApp post-servicio** es lo que
  más convierte. **Dejar la reseña pre-escrita** para que el cliente solo pegue.
- **Responder TODAS** (positivas y negativas) con variación semántica / keywords — las
  respuestas indexan.
- Negativas: reconocer → empatizar → llevar fuera de Google → cierre profesional. Mejor
  defensa contra una negativa real = **60 positivas que la diluyan**.
- **PROHIBIDO (riesgo de cierre de cuenta):** comprar reseñas, incentivarlas (descuento/regalo
  a cambio), pedirlas en masa desde el mismo dispositivo/red, reseñas de empleados, pedir solo
  a quien sabés que pone 5★.

**Sitio web = el diferencial local** (pocos competidores lo hacen bien): **H1 con intención
local**, páginas por ciudad/servicio, cohesión sitio↔GBP, reseñas on-page.

**GeoGrid:** medir el rank en una grilla de puntos alrededor de una coordenada (3×3 / 5×5) y
ver quién gana donde vos no aparecés.

**GEO / AEO (curso GEO 2026):**
- **Query fan-out** — las sub-preguntas ocultas que hace la IA. Detectarlas y usarlas como
  FAQ / contenido.
- Formato **pregunta → respuesta**; **respuesta directa en la primera oración/párrafo**
  (~50 palabras, autónoma y citable) y recién después el desarrollo.
- **Datos propios / estadísticas / estudios originales** = lo más citable. Contenido genérico
  que dicen otras 100 webs → la IA lo reemplaza con un párrafo.
- **Directorios / rankings / comparativas** ("mejores med spa de WPB", incluso citando
  competidores) — los LLM se apoyan en esos listados.
- **JSON-LD schema** bien hecho le dice al LLM quién sos, qué hacés, dónde y qué respondés.
- **Brand queries** — lograr que la gente busque tu marca por nombre = señal de E-E-A-T.

**Reencuadre estratégico ("Las nuevas reglas"):** tráfico ≠ negocio; los clics caen pero la
demanda queda. Medir **% de búsquedas de marca en GSC** (consultas que contienen la marca ÷
total; <2,5% = nadie te conoce). "Search Everywhere Optimization".

### Matices / lo que NO tomamos

- Es un **funnel de venta** (comunidad Palo Seco, afiliado de Semrush, su herramienta propia de
  GeoGrid/reseñas). La herramienta propia **no está disponible** para nosotros → GeoGrid y
  análisis de reseñas los hacemos **manualmente** o los salteamos.
- **El "hack" del nombre del negocio** (meter keywords en el nombre del GBP) está
  **explícitamente prohibido por Google** y es riesgo de denuncia + acción manual. Para un med
  spa, además, choca con `MEDICAL_COMPLIANCE.md`. **Derma.M NO lo hace.**
- El curso "TOP 1 web" es SEO on-page/técnico/off-page estándar — ya cubierto por
  `docs/TECHNICAL_SEO_GEO_AUDIT_2026.md` y `docs/SEO_AUDIT_2026.md`. Sin novedad.

**Cierra la pregunta de herramientas:** el método de Pedro es *Claude + manual + herramientas
gratis + (opcional) una herramienta de datos barata*. Confirma la dirección del usuario: **sin
herramienta paga; browser + skills actuales**.

---

## 2. Estrategia de ejecución — qué hago solo, qué necesito de vos

### A. Autónomo — el agente, sin login, en este repo

**Track A (código, ciclo propio con aprobación por `CLAUDE.md`):**
- #5 H1 con intención local (Home + 6 hubs).
- Hubs → `CollectionPage` + `BreadcrumbList`.
- NAP y **horario visibles** en `/contacto` (hoy el horario solo está en el schema).
- Schema que matchee texto visible; `llms.txt`; internal linking.
- Formato **respuesta directa + Q&A** en páginas de tratamiento/landings; bloques FAQ
  sembrados desde **query fan-out**.
- Consolidación a sede única West Palm Beach (Tema 1 del intake) — HECHA 2026-08-28, repo limpio.

**Entregables de research/preparación (docs, sin tocar el sitio):**
- Recomendación de **categoría primaria + secundarias** del GBP, derivada de inspección de
  competidores.
- Borrador de **descripción del GBP** (~700c).
- **Plantillas de respuesta a reseñas** (positivas/negativas) con variación de keywords.
- **Plan de 30 días de posts** para el GBP.
- **Plantillas de pedido de reseña** (WhatsApp / email), pre-escritas.
- **Checklist de directorios / citaciones** (NAP consistente).
- Plan de contenido tipo **"mejor med spa de West Palm Beach"** (comparativa/listado) para AEO.

### B. Requiere el browser pane con vos logueado (yo hago clics, **cada guardado lo aprobás vos**)

- **Sesión de auditoría + optimización del GBP** (categorías, descripción, áreas, horarios,
  atributos, fotos, posts) — ítem **8.19**, palanca nº1.
- Dentro de esa sesión, **inspección gratis de competidores**: buscar en Maps, ver el local
  pack, GMBspy / ver-código-fuente para las categorías de competidores, leer sus reseñas para
  detectar patrones. (Esto es el "ejercicio de Pedro SEO" que pediste en el Tema 4.)
- **Chequear el rating y nº de reseñas reales del GBP** (o me lo pasás y listo).

### B′. Browser sin login (cuando quieras, no bloquea)

- **Validación manual de keywords/intención**: autocomplete de Google, "People Also Ask",
  búsquedas relacionadas, composición del local pack. Ideal hacerlo **antes de redactar los H1
  del #5**.
- Aproximación manual de **GeoGrid** (requiere simular ubicación; opcional, menor prioridad).

### C. Solo vos — cuentas, externos, operación (yo asesoro y preparo material)

- **GSC + GA4 + Bing Webmaster** — alta / propiedad de las cuentas (ítem 8.17, desbloquea
  medición, incluido el % de brand queries).
- **Bing Places, Apple Maps, reclamar Yelp.**
- **Sistema de captación de reseñas** operativo en el med spa (regla ~18 días / cadencia
  semanal, quién pide, en qué momento).
- **Publicar** las respuestas a reseñas (yo redacto, vos pegás) de forma continua.
- **Prensa local / cámara / "best of"** de fuente real.
- **Corregir el listado de CareCredit** (dominio `dermamskincare.com` erróneo).
- **Fotos reales del local / equipo** (Pedro: real > IA).

---

## 3. Qué necesito de vos para avanzar

1. **Rating + nº de reseñas reales del GBP hoy** (fuente de verdad para 8.20).
2. **¿Hacemos la sesión de GBP en el browser?** ¿Cuándo? (necesito que estés logueado).
3. **Terminar el intake** (Temas 5–8 pendientes).
4. **¿Cuándo hacemos el ejercicio de búsquedas manuales** de keywords/competencia en el
   browser? (idealmente antes del #5).

**Propuesta de respuesta al Tema 5 (herramientas):** sin herramienta paga. Método = browser
pane (manual) + skills SEO/GEO/Local ya instaladas + material de `docs/pedro-seo/` como
referencia. Baja: OpenSEO/DataForSEO, Semrush.
