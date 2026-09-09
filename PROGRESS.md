# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-08 — Nancy Nieto bio page: FORMACIÓN + FILOSOFÍA revision from client (cont. 50, code)

- **What:** client-supplied rewrite of the `founderBioPage` FORMACIÓN Y TRAYECTORIA and FILOSOFÍA blocks in `src/data/aboutPage.js`.
  - `historia.headline` → "UNA TRAYECTORIA CONSTRUIDA EN VARIOS PAÍSES" (client sent "EN TRES PAÍSES"; user approved the evergreen "VARIOS" to kill the hardcoded country counter — it already went stale 2→3 this cycle).
  - `historia.credentials`: 4 items now — Estados Unidos / Ecuador / **Argentina (new)** / Formación continua, all reworded to the client's copy. Spelling per client: "Dermatocosmiatría" (site elsewhere still uses "Dermocosmiatría" — see follow-up).
  - `historia.body` (single string) → `historia.paragraphs` (array of 3): passion/actualización · "+4,000 procedimientos hasta 2026" · team-training. Template `FounderBioPage.jsx` now renders `historia.paragraphs` as mapped `<p>` inside a new `.historiaBodyGroup` (gap 16px); falls back to `historia.body` string if no array.
  - `filosofia.body` / `secondaryBody` → the two new paragraphs. `quote.text` → new quote ("…observar cambios reales en la piel…"). `hero.body` (page pull-quote) synced to the new quote's first sentence so the page is internally consistent.
- **Why:** DERMA.M change-request batch (2026-09-08), executed one section per cycle.
- **Compliance:** "+4,000 procedimientos hasta 2026" = quantitative practitioner-experience claim, client-supplied in writing → meets the "confirmed in writing" bar; lowest-risk claim category (not efficacy/FDA/comparative). This resolves the `NEXT.md` "C2 quantitative datapoint" blocker note. "cambios reales y visibles" covered by the page's existing variability disclaimer in the final CTA. No banned words.
- **Verified:** browser desktop + 375px on `/nosotros/nancy-nieto` — 4 credentials, 3 body paragraphs with clean rhythm, filosofía + quote + hero subtitle all render, no layout shift, console clean. `npm run test:visual` (server on :3003): **32 passed, 2 failed** — (1) `Nosotros Page - Founder Cross-link` mobile-safari: 4px text reflow from the cont. 49 subheadline change → baseline regenerated (`nosotros-founder-with-link-mobile-safari-win32.png`); (2) `Nosotros Page - Viewport` desktop-chrome: pre-existing known failure (`about/hero.jpg` placeholder, awaiting team photo — `NEXT.md`). `/nosotros/nancy-nieto` itself has no snapshot test; template change covered by browser check.
- **SEO/AEO/GEO:** strong positive — third country + per-country credentials + a hard citable stat ("+4,000 procedimientos hasta 2026", GEO statistics tactic) + team-training authority angle. Recovers and exceeds the E-E-A-T credential detail dropped from the `/nosotros` spotlight in cont. 49. Nil ranking risk.
- **Left / follow-up cycle (unchanged from cont. 49, now also spelling):** old bio string + "FUNDADORA Y DIRECTORA" still at `aboutPage.js:50` `shortBio`, `aboutPage.js:186` `attribution`, `NancyNieto.jsx:30` Person schema `description`; normalize "Dermocosmiatría" → "Dermatocosmiatría" site-wide if aligning. Client did not ask to touch these.
- Commit `PENDING`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
