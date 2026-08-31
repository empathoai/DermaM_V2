# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 10: English mirror for the 911 emergency-exclusion clause (cont. 34, code)

- **`TreatmentDisclaimer.jsx` §8 ("emergency", inline JSX, not from `legalPages.js`):** the two ES paragraphs (digital channels not monitored / call 911 for a severe allergic reaction) had no English version, unlike the sibling "Nota Clínica" and "Fotos Antes y Después" sections. Added an EN mirror `<p>` right after each ES paragraph, inside the same red box, matching the italic/weight of its pair (`font-light text-[#363633]/80`, `italic` on the second).
- **Why:** CPY-06 — West Palm Beach has a large English-speaking population; an emergency-exclusion clause readable only in Spanish is a civil-liability gap. ES text left untouched (the "usted" register is Task 15's scope).
- **Verified:** cross-checked `docs/MEDICAL_COMPLIANCE.md` (no banned words, no guarantee/cure claims). In-browser `/treatment-disclaimer` §8 — both EN paragraphs render alternating with the ES ones, red box intact, no console errors. No `test:visual` (single-document content; route not in the snapshot suite).
- **SEO/GEO/AEO:** minor — reinforces E-E-A-T / trustworthiness signals for LLMs on health content; no indexing effect.
- Closes audit Task 10 (CPY-06).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
