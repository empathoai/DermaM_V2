# DEPLOY.md

Pre-deploy validation for the Hostinger/Apache cut. **Part 1 is a full-site local sanity
check** — walk every route on the local build and confirm the whole site is healthy, not just
the last diff. Part 2 is the protected-file work, done only at deploy time on the user's "go".

Run Part 1 top to bottom. Every check has an explicit expected result — if one fails, stop and
fix before deploying. Nothing here runs itself; there is no CI in this project.

---

## Part 1 — Full-site local sanity check

### 0. Clean build

```bash
rm -rf node_modules dist && npm ci && npm run build
```
Expected: build completes, no errors, no unresolved imports.

```bash
npm run test:visual
```
Expected: **33 passed, 1 failed** — the 1 failure is `Nosotros Page - Viewport` (desktop-chrome),
a known placeholder for `about/hero.jpg`. Any other diff = stop.

### 1. Route inventory — every page renders

`npm run dev` (`:3000`), then load each route in the Browser pane. For each: page renders its
`<h1>`, no error boundary, **console clean**, no failed network requests (404 assets).

**Core (4)** — `/` · `/nosotros` · `/nosotros/nancy-nieto` · `/contacto`

**Hubs (6)** — `/faciales` · `/corporales` · `/laser-y-luz` · `/dental-estetico` · `/iv-therapy` · `/capilar`

**Treatment detail (22)** — under `/faciales/`, `/corporales/`, `/laser-y-luz/`, `/dental-estetico/`, `/capilar/`:
`blanqueamiento-dental` · `carboxiterapia-corporal` · `carboxiterapia-facial` · `corrientes-rusas` ·
`depilacion-laser` · `dermabracion-facial` · `estrias-celulitis` · `hifu-corporal` · `hifu-facial` ·
`levantamiento-gluteos` · `limpieza-dental` · `lipo-360` · `maderoterapia-corporal` ·
`manchas-cicatrices` · `marcacion-abdominal` · `oxigenoterapia-facial` · `peel-coreano` ·
`plasma-frio` · `radiofrecuencia-facial` · `rejuvenecimiento-facial` · `tratamiento-acne` ·
`tratamiento-capilar`
(slug → hub mapping is keyed in `src/data/treatmentPages.js`.)

**Landings (3)** — `/limpieza-facial-profunda` · `/prf-y-fibrina` · `/tratamientos-postoperatorios`

**Legal / static (7 + aliases)** — `/politica-de-privacidad` (alias `/privacy-policy`) ·
`/terminos-de-uso` (alias `/terms-of-use`) · `/treatment-disclaimer` (alias `/tratamientos-disclaimer`) ·
`/booking-cancellation-refund-policy` · `/accessibility` · `/legal`

**Redirect** — `/notice-of-privacy-practices` → must client-redirect to `/politica-de-privacidad`.

### 2. Head / SEO tags — per page

On a sample across each page type (Home, 1 hub, 3 treatments, 1 landing, 1 legal):
- `<title>` present and unique to the page.
- `<meta name="description">` present, ~120–160 chars, matches page intent.
- `<link rel="canonical">` present and equals the page's own production URL (no localhost, no alias).
- `<meta name="robots">` = `index, follow` on public pages.
- OG (`og:title`, `og:description`, `og:url`, `og:image`) + `twitter:card` present.

### 3. JSON-LD

For Home, 1 hub, 2 treatment pages, 1 landing: copy each `<script type="application/ld+json">`
into `validator.schema.org` (or Google Rich Results Test). Expected: no errors.
`@id` references resolve to `https://dermamskinhealth.com/#organization`; `BreadcrumbList` items
have absolute URLs; per-treatment graph present (SEO-07).

### 4. Images

- No broken `<img>` on any route (check network 404s in step 1).
- Every content image has a meaningful `alt` — **no hardcoded "Before" / "After"** (audit 7.2).
- Team video posters present: `mikaela-guajardo`, `elianne-trujillo` `.jpg` posters exist
  (`nancy-nieto` done). `about/hero.jpg` is still a known placeholder — expected.

### 5. Internal links

- Navbar + footer: every link resolves to a real route (no 404, no `#`).
- `/nosotros/nancy-nieto` is reachable by a contextual link from Home (near-orphan — no navbar link
  by design; memory `project_nav_orphan_bio_page`).
- Spot-check in-body links on 3 treatment pages and 1 landing.

### 6. CTAs

- Booking button → Square URL (`bookingUrl` / `VITE_SQUARE_BOOKING_URL`), opens new tab.
- WhatsApp → `https://wa.me/15612535384?text=...`, new tab.
- Phone → `tel:+15612535384`, same tab.
- Labels follow the taxonomy (memory `project_cta_taxonomy`): booking = **"Agenda tu valoración"**,
  channel = **"WhatsApp"**, inquiry = **"Consultar disponibilidad"**. No `Reservar` / `Agenda en línea`
  / `Escríbenos por WhatsApp` as button labels.
- `GoogleReviewsLink` renders on Home, `/nosotros`, all 6 hubs, all 3 landings, footer — opens the
  live GBP panel in a new tab.

### 7. Mobile — 375px (HARD gate, memory `feedback_mobile_first_ui_changes`)

`resize_window` mobile preset, reload. Check: Home, 1 hub, 1 treatment, `/nosotros`, `/contacto`,
1 legal page.
- No horizontal scroll on `<body>`.
- Hero text legible, CTAs stacked and tappable (≥44px targets).
- Navbar collapses correctly; menu opens/closes.
- Testimonials = vertical stack.

### 8. Accessibility — WCAG 2.1 AA

- Keyboard: Tab from top runs navbar → main → footer in visual order; focus ring visible on every
  interactive element; skip-link works.
- `/contacto` form: every field has an associated `<label>`; error states announced.
- Contrast spot-check on hero, buttons, footer (light and dark surfaces).
- All icon-only controls have `aria-label`.

### 9. Medical / legal compliance (memory + `docs/MEDICAL_COMPLIANCE.md`)

- Mandatory notice present where required:
  `"Requiere valoración médica previa para garantizar tu seguridad y resultados."`
- Grep treatment + landing copy for banned words (see `MEDICAL_COMPLIANCE.md` list); no
  guarantees / "permanente" / diagnosis language.
- Legal pages address the reader as `tú`, never `usted` (memory `project_legal_docs_tu_register`).
- No self-description as "clínica"; no practitioner license numbers anywhere.

### 10. Analytics

- GA4 `G-9272VHFT03` tag present in `index.html`, fires a `page_view` on route change
  (Network → `google-analytics.com/g/collect`).

---

## Part 2 — At deploy time only (PROTECTED files — one explicit "go" per file)

Do **not** touch these until the user says "let's do the Hostinger deploy".

1. **`public/.htaccess`** — replace with the block from
   `docs/seo-setrategies/REDIRECT-MAP-VALIDATION-2026.md` §8. This puts the SPA catch-all
   **after** the 301s (resolves Task 2 / SEO-01) and adds
   `301 /notice-of-privacy-practices → /politica-de-privacidad`.
2. **`public/robots.txt`** — remove the 7× `Disallow: /notice-of-privacy-practices` lines.
3. Verify `/nosotros/nancy-nieto` is present in `public/sitemap.xml`, `public/robots.txt`,
   `public/llms.txt`.
4. Fix `docs/seo-setrategies/INTAKE.md:56` — "Vercel" → Hostinger/Apache.
5. **Post-deploy on prod:** run the `curl -I` redirect script from `REDIRECT-MAP-VALIDATION-2026.md`
   §8; confirm key routes 200 over HTTPS with no mixed content; GA4 fires; then GSC verify by
   Domain + submit `sitemap.xml`.
6. Keep a backup of the previous `public_html` + `.htaccess` for rollback.
