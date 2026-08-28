# Análisis — OpenSEO (repo aislado en `docs/open-seo/`)

Creado 2026-08-27. Análisis del repo + transcripción que el usuario pasó para **evitar pagar
herramientas que podrían auto-hostearse** (entrante de `INTAKE.md`). Se analiza aislado, **no se
integra nada al sitio todavía**.

Fuente: `github.com/every-app/open-seo` (HEAD `c469a48`), transcripción
`docs/open-seo/New_ your agent lands customers.md` (video "New: your agent lands customers",
The Next New Thing, 2026-08-24, entrevista a Ben Senescu).

---

## Qué es

**OpenSEO = alternativa open-source (MIT) a Semrush / Ahrefs**, pensada para usarse **desde un
agente** (Claude Code) vía un **servidor MCP**. No es una skill: es una app full-stack que se
auto-hostea y expone datos de SEO como herramientas MCP + un set de skills que guían al agente.

- Stack: TanStack Start + React + Drizzle, corre en Cloudflare Workers (D1) **o** Docker
  (SQLite/Postgres). Licencia MIT, autor Ben Senescu, proyecto joven (arrancó feb 2026).
- Interfaz doble: UI web propia **+** servidor MCP (`src/server/mcp/`). El valor para nosotros
  es el MCP — Claude Code se conecta y usa los datos directamente.

## El modelo de costos (el punto clave del encargo)

Hay **dos gastos distintos** y conviene no confundirlos:

| Concepto | Qué es | Costo | ¿Se puede evitar? |
|---|---|---|---|
| **Suscripción OpenSEO** ($10/mes) | Servicio hosteado por ellos; agregan **28% de markup** sobre cada request a DataForSEO | $10/mes + markup | **Sí** — auto-hosteando (Docker o Cloudflare). Ahí no se les paga nada. |
| **DataForSEO** (API de datos) | Proveedor 3º pay-as-you-go que provee TODOS los datos (keywords, SERP, backlinks, local/Maps, reviews) | Top-up mínimo **$50**, $1 gratis de prueba, después por uso | **No.** Es el dato en sí. Semrush/Ahrefs cobran $117–240/mes por su propio dato; esto lo reemplaza por ~$50 que, según la transcripción, "puede durar 6–12 meses" en un sitio chico. |

**Conclusión del encargo:** auto-hostear **sí ahorra** (evita el $10/mes + 28% markup de
OpenSEO), pero **no elimina el gasto de datos**. El piso real es **una carga de $50 en
DataForSEO** ([app.dataforseo.com/api-access](https://app.dataforseo.com/api-access), credencial
"Base64" = `email:password` en base64 → var `DATAFORSEO_API_KEY`). Para el volumen de este
proyecto (un solo negocio local), $50 alcanzan para toda la contratación con margen.

## Opciones de auto-hosteo

1. **Docker, local** (`docs/SELF_HOSTING_DOCKER.md`) — `cp .env.example .env`, poner
   `DATAFORSEO_API_KEY`, `docker compose up -d`, abre en `localhost:3001`. Imagen publicada
   `ghcr.io/every-app/open-seo:latest`. **Sin auth** (`AUTH_MODE=local_noauth`, admin
   `admin@localhost`) — no exponer a internet. Ideal para "lo prendo cuando hago SEO".
2. **Cloudflare** (`docs/SELF_HOSTING_CLOUDFLARE.md`) — internet-facing, multi-dispositivo/equipo,
   plan gratis de Cloudflare, con login gate (Cloudflare Access). Requiere activar R2 (pide
   método de pago aunque el tier sea gratis). Más setup; sólo si hace falta acceso compartido.

Para Derma.M la opción 1 (Docker local) es suficiente: lo usa el agente en la máquina del
usuario durante las sesiones de SEO.

## Skills incluidas (en `.agents/skills/` del repo — NO instalarlas en este proyecto)

`local-seo`, `keyword-research`, `keyword-clustering`, `competitor-analysis`,
`competitive-landscape`, `link-prospecting`, `seo-audit`, `seo-coach`, `seo-project-setup`.
Más integraciones MCP de **Google Search Console** y **Google Analytics 4** (specs 0003 / 0007;
lectura en vivo sin CSV, sin gastar créditos).

### Herramientas MCP relevantes para nuestro plan

- **`local-seo`** (Track B / medición): `get_local_rank_grid` = **geo-grid** de rank alrededor
  de un punto (3×3 = 9 búsquedas; 5×5 sólo si el área es amplia) → esto es la "herramienta
  pendiente" que `INTAKE.md` línea 21 marcaba para medir posición en el local pack.
  `search_local_businesses` + `get_local_serp_results` devuelven categoría, rating, nº reseñas,
  estado de reclamo y `cid`/`place_id` de cada competidor → **reemplaza GMBspy / ver-código en
  Maps** del intake tema 7. `get_business_reviews` (reseñas con texto + si el dueño respondió)
  → **alternativa a APIFY** para el ítem 8.20 (`ReviewsSection`). `get_business_profile`,
  `get_google_business_questions`, `get_business_updates`, `list_business_categories`.
- **`keyword-research`**: `research_keywords`, `get_keyword_metrics` (volumen, KD, intención,
  CPC, tendencia), `get_ranked_keywords`, `get_serp_results` → sustituye la decisión "conector
  Ahrefs vs trial Semrush" del handoff (3er desbloqueo). Aterriza el research con dato real en
  vez de best-practice a ciegas.
- **`seo-audit`** / **`competitor-analysis`** / **`competitive-landscape`**: auditoría de
  dominio, keywords rankeadas de competidores, backlinks (`get_backlinks_overview`),
  `find_serp_competitors`.
- **GSC MCP** (`get_search_console_performance`): datos propios de clicks/impresiones/posición
  en vivo → encaja con el ítem 8.17 del Track C (una vez que GSC esté configurado).

## Encaje con el proyecto de SEO local de Derma.M

| Necesidad del plan | Qué aporta OpenSEO | Track |
|---|---|---|
| Medir posición en local pack / Maps (geo-grid) | `get_local_rank_grid` | Medición |
| Auditar categorías GBP de competidores del 3-pack (tema 7 intake) | `search_local_businesses` / `get_local_serp_results` | B / research |
| Reseñas reales para `ReviewsSection` + `aggregateRating` (8.20) | `get_business_reviews` | A (dato) |
| Keyword research aterrizado (temas 3–5 intake) | `research_keywords` + `get_keyword_metrics` | research |
| "Decidir UNA herramienta de datos" (3er desbloqueo del handoff) | DataForSEO vía OpenSEO self-host la cubre entera | C |
| Datos GSC/GA4 en vivo una vez configurados (8.17) | MCP GSC + GA4 | C |

### Lo que OpenSEO NO hace (no cambia el plan)

- **No gestiona el GBP.** La sesión B (verificar ficha, categorías, descripción, fotos, posts)
  sigue siendo con el usuario logueado en el browser. OpenSEO sólo **audita/lee** perfiles.
- **No toca el código del sitio.** Schema, H1 locales, NAP, `llms.txt`, `CollectionPage`,
  embed de mapa — todo el Track A queda igual, bajo las reglas de `CLAUDE.md`.
- **No es un scraper de reseñas on-page listo.** `get_business_reviews` da el dato; meterlo al
  sitio como `Review`/`aggregateRating` es trabajo de Track A con su propio ciclo de aprobación
  y compliance.

## Riesgos / cautelas

- **Proyecto joven** (feb 2026), superficie de API en movimiento (66+ PRs abiertos, features
  que "van a llegar"). Tratar como herramienta de research, no como infraestructura crítica.
- **MCP apunta por defecto a `https://app.openseo.so/mcp`** (`plugins/openseo/mcp.json`). Para
  self-host hay que configurar un MCP server propio apuntando al `localhost` del Docker.
- **Docker mode sin auth** — sólo local, nunca expuesto.
- **Cada llamada de datos se factura a DataForSEO** (geo-grid 3×3 = 9 búsquedas; profundidades
  10–20). Hay que llevar la cuenta del gasto; las skills tienen "research log" para no
  recomprar research repetido dentro de 30 días.
- **Telemetría anónima on por defecto** (heartbeats con counts agregados; sin URLs/keywords/
  emails). Se apaga con `OPENSEO_TELEMETRY_DISABLED=1` en `.env`.
- **Nada de este repo entra al repo de Derma.M.** Queda aislado en `docs/open-seo/` (que ya
  está en `.gitignore` vía `docs/`). Es referencia + herramienta externa.

## Recomendación

1. **Auto-hostear con Docker en local** y **sacar API key propia de DataForSEO** ($50 de
   top-up). Con eso se evita el $10/mes + 28% de OpenSEO y se cubre toda la contratación.
2. **Configurar el MCP de OpenSEO self-host como server aparte** en Claude Code (apuntando al
   `localhost` del contenedor), no como parte de este proyecto.
3. **Usarlo primero para:** (a) geo-grid baseline de "med spa West Palm Beach" + Plasma/PRP-PRF
   antes del deploy; (b) auditar categorías GBP de los competidores del 3-pack (alimenta el
   tema 7 del intake y la sesión B); (c) keyword research aterrizado para validar el research
   propio del usuario (temas 3–5).
4. **Cerrar en el `INTAKE.md`** el tema 5 (herramientas de pago) y el 3er desbloqueo del
   handoff: la herramienta de datos ya está decidida → **DataForSEO vía OpenSEO self-host**.
   Baja: conector Ahrefs / trial Semrush.
5. Mantener el repo **aislado y sólo-lectura** como el resto de `docs/open-seo/`.

**Pendiente de aprobación del usuario** antes de: cargar los $50 en DataForSEO, levantar el
Docker, y agregar el MCP server a la config de Claude Code.
