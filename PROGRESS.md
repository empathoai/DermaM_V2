# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-08 — Nancy Nieto identity: unify title + bio blurb site-wide (cont. 55, copy)

- **What:** resolved the founder-title inconsistency (three forms in use) + the bio-blurb drift from the surgical cont. 49–50 edits. All in `src/data/aboutPage.js` + `src/pages/NancyNieto.jsx`.
  - **Title → `FUNDADORA Y DIRECTORA DE DERMA.M` everywhere.** `founderSpotlight.eyebrow` (`aboutPage.js:15`) and `founderPrimer.eyebrow` (`:174`) were `"FUNDADORA DE DERMA.M"` (client's cont. 49 copy) → reverted to the long form, which the schema `jobTitle`, page `<title>`, all meta, team `role`, quote titles and prose already use. `team[0].specialtyLabel` `"Fundadora & CEO · Faciales"` (`:49`, a 3rd variant + redundant with the `role` line right below) → `"Faciales"`, matching the other team cards.
  - **Bio blurb → one canonical sentence.** `team[0].shortBio` (`:50`, old wording + old spelling "Dermocosmiatría") and the `NancyNieto.jsx` Person-schema `description` (old wording) → both aligned to the cont. 49 spotlight subheadline: "Flebotomista certificada en Estados Unidos y especialista en Estética Facial, con licencia otorgada por el Estado de Florida." (schema keeps its "Fundadora y directora de DERMA.M." tail). The card blurb drops the "Formación … en Ecuador" line as the client did in the spotlight; the bio page still carries the full 3-country credentials.
- **Why:** user asked to unify after it was flagged. The client's own cont. 49 message used both title forms, so this resolves their inconsistency toward the site-wide majority, not a deliberate client decision. Unifying "up" keeps `jobTitle`/`<title>`/meta untouched (lower blast radius than stripping "Directora" from the SEO surfaces).
- **Not touched:** `founderPrimer.credentialLine` on Home is a distinct title-case teaser string ("…con licencia del Estado de Florida.") — close but not identical; left as a known minor residual. `aboutPage.js:214` / `contactPage.js:26` lowercase "fundadora …" prose is natural, left.
- **Verified:** browser desktop on `/nosotros` (spotlight eyebrow + team card now identical wording, no "& CEO") and Home (`founderPrimer` eyebrow one line, no wrap); console clean. `npm run test:visual` (server :3003): **33 passed, 1 failed** = pre-existing `Nosotros Page - Viewport` desktop-chrome (`about/hero.jpg` placeholder). No new diffs — the eyebrow/label text changes reflow within tolerance; no baseline update. Founder spotlight is covered by `Nosotros Page - Founder Cross-link` (passed).
- **SEO/AEO/GEO:** positive — one consistent identity for Nancy across the visible page, the team card and the Person schema; nothing an LLM reads now contradicts another surface. No ranking-surface change.
- Commit `ca612d9`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
