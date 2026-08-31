# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 11: legal section label `<h3>` → `<p>` (cont. 32, code)

- **`LegalPageLayout.jsx:118`:** the `"Sección N"` eyebrow was an `<h3>` rendered immediately before the section's `<h2>` title — inverted heading tree. Changed the tag `<h3>` → `<p>`, keeping the exact same Tailwind classes (`text-xs uppercase tracking-[0.2em] text-[#666463] font-semibold mb-2`). The `<h2>` is now the only heading governing each section block.
- **Why:** UX-05 — WCAG 2.1 SC 1.3.1 (Info & Relationships): a screen reader announced a sub-heading before its parent. Zero visual change (identical classes; no UA styles apply). Coherent heading tree also helps crawler/AEO structure extraction.
- **Verified:** in-browser on `/politica-de-privacidad` — "SECCIÓN 1" eyebrow renders identically; `<main>` heading tree is now `H1 → H2 (TOC) → H2 (per section)` with no H3 skip (checked via DOM query, 14 headings). No console errors. No `test:visual` (single component, no layout/token change; no legal route in the snapshot suite).
- Closes audit Task 11 (UX-05). Commit `6fe2cfd`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
