# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 15: unify legal-doc address register to `tú` (cont. 38, code)

- **`Accessibility.jsx` / `TreatmentDisclaimer.jsx` / `NoticePrivacyPractices.jsx`:** 13 inline-copy edits flipping every direct 2nd-person address from `usted` to respectful `tú` (`usted`→`tú`, courtesy imperatives `contáctenos`→`contáctanos` / `escríbanos`→`escríbenos` / `comuníquese`→`comunícate` / `llame`→`llama` / `acuda`→`acude`, reflexive `Se le guiará`→`Te guiaremos`, and `su`/`sus` meaning "your" when it addresses the reader). Third-person legal nouns (`el paciente`, `el cliente`) and the `su` that agrees with them, quoted bilingual `"…"` clauses and their English mirrors, and `su sitio web` on `Accessibility.jsx` (possessive of DERMA.M) left untouched.
- **Why:** CPY-03. Privacy + Cancellation policies (`legalPages.js`) already tutean; these three still used `usted` → split institutional voice. Register rule: respectful `tú` for all customer-facing legal docs, no reserved-`usted` exception (grammatical person doesn't change legal meaning). See `DECISIONS.md` 2026-08-31. Spec: `docs/superpowers/specs/2026-08-31-tu-usted-registro-legal-cpy-03-design.md`.
- **Verified:** grep `\busted\b` + courtesy imperatives across the 3 files = 0. Browser `:3000` at 375px + desktop — `/accessibility`, `/treatment-disclaimer`, `/notice-of-privacy-practices` read in full: no broken sentence, verbs agree (`obtendrás`, `navegas`, `estás experimentando`), quoted clauses + English mirrors intact. `MEDICAL_COMPLIANCE.md` — no grammatical-person rule, no banned word introduced, legal sense preserved. **`test:visual` skipped** per `CLAUDE.md` §DoD — data-only edits inside one component per page, outside every snapshot viewport.
- Closes audit Task 15 (CPY-03). Commit `<HASH>`.
- **Note:** user then expanded scope into a full legal-pages overhaul (med-spa≠clínica nouns, dead contact-form copy, company-data congruence, tech-accuracy, niche best-practices, hide legal-review callouts) — tracked as the next cycle in `NEXT.md`, not part of this commit.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
