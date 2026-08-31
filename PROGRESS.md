# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 16: unify primary-CTA vocabulary (cont. 40, code)

- **Booking action → one label `Agenda tu valoración`** (data files `AGENDA TU VALORACIÓN`): `Hero.jsx`, `sections/FinalCTA/FinalCTA.jsx`, `Contacto.jsx` (×2), `aboutPage.js` cta (×2), `categoryPages.js` (×6), `landingPages.js` (×3), `treatmentPages.js` — replaced `Reservar` / `Agenda en línea` / `AGENDAR VALORACIÓN` / `RESERVAR`.
- **WhatsApp channel → one label `WhatsApp`** (`WHATSAPP`): `Contacto.jsx` (×2), `aboutPage.js` cta (×2) — replaced `Escríbenos por WhatsApp` / `Consultar primero por WhatsApp` / `CONSULTAR POR WHATSAPP`. **`landingPages.js` `relatedLinks`** "Agenda una valoración" → `Contáctanos` (×3, it is a nav link). Navbar / component defaults / `secondaryCta: 'WHATSAPP'` lines were already canonical — untouched. No `bookingUrl`/`whatsappUrl` changes.
- **Why:** audit CPY-04 — 7 wordings for one action, user couldn't tell calendar vs form vs chat. `Agenda tu valoración` chosen over `Reservar` (Navbar incumbent, aligns with the "valoración previa" framing, AEO anchor). Plain `WhatsApp` chosen over relational `Escríbenos por WhatsApp` (majority label + layout-safe). Spec `docs/superpowers/specs/2026-08-31-cta-taxonomy-cpy-04-design.md`, plan `docs/superpowers/plans/2026-08-31-cta-taxonomy-cpy-04.md`. See `DECISIONS.md` 2026-08-31.
- **Verified:** browser `:3000` 375px + desktop — Home, `/contacto`, `/prf-y-fibrina`, `/faciales`: every primary CTA `AGENDA TU VALORACIÓN` → Square, every channel `WHATSAPP` → wa.me, `relatedLinks` `Contáctanos` → `/contacto`; longer label fits one line at 375px. `git grep` for the 6 retired strings = 0. **`test:visual` ran** (shared Hero/FinalCTA) — 31 passed; 2 failures both pre-existing/unrelated: `Nosotros Page - Viewport` (standing `about/hero.jpg` placeholder) and `/faciales/hidrofacial` FAQ-consistency (**confirmed** failing on base `228da1d`). CTA text stayed within the 2% tolerance / outside snapshot viewports → no baselines updated. `MEDICAL_COMPLIANCE.md` — no banned word; `valoración` matches the mandatory-notice framing; `tú` intact.
- Commit `4572f98`.
- **New finding (not in scope, flag for its own cycle):** `/faciales/hidrofacial` fails `faq-consistency.spec.js` (`faqSchema.mainEntity` length vs rendered `button[aria-expanded]` count) on the base commit — pre-dates this cycle.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
