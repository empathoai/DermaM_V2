# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-08 — Founder-spotlight copy revision from client (cont. 49, code)

- **What:** client-supplied copy swap in `src/data/aboutPage.js` `founderSpotlight` block only. `eyebrow` "FUNDADORA Y DIRECTORA DE DERMA.M" → "FUNDADORA DE DERMA.M"; `subheadline` → "Flebotomista certificada en Estados Unidos y especialista en Estética Facial, con licencia otorgada por el Estado de Florida." (drops the "Formación en Cosmetología, Cosmiatría y Dermocosmiatría en Ecuador" credential line); `body` → "Su filosofía de trabajo se basa en escuchar, educar y acompañar a cada persona, porque detrás de cada piel existe una historia única." (relational differentiator, on-brand per the 130-review analysis).
- **Why:** DERMA.M requested the exact wording for the `/nosotros` founder section.
- **Verified:** browser at desktop on `/nosotros` — three lines render, no layout shift. No banned words, no license number → `MEDICAL_COMPLIANCE` OK. Data/copy edit in `src/data/*`, single section → `test:visual` not gated (CLAUDE.md DoD).
- **Left / follow-up cycle:** same bio text still duplicated at `aboutPage.js:50` (`shortBio` team card), `aboutPage.js:186` (`attribution` "FUNDADORA Y DIRECTORA…"), `NancyNieto.jsx:30` (Person schema `description`) — client did not ask to touch these; consistency + E-E-A-T pass pending. Consider re-homing the Ecuador training credential on `/nosotros/nancy-nieto` to recover the lost author-authority signal.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
