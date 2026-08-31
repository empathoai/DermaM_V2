# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 18: `bg-white` → `#EFEFEB` in LegalResources cards (cont. 33, code)

- **`LegalResources.jsx:78`:** the 5 legal-doc link cards used `bg-white` (`#FFFFFF`), forbidden by `DESIGN.md` §2/§10 (warm palette, no pure white). Swapped the single inline Tailwind utility `bg-white` → `bg-[#EFEFEB]` (Parchment). Border `border-[#363633]/15` and all other classes unchanged.
- **Why:** UX-07. `#EFEFEB` chosen over `#F2F0F1` to match the sibling "Aviso Clínico" block at `LegalResources.jsx:103`, which already uses `border border-[#363633]/15 bg-[#EFEFEB]` — fixes an in-file inconsistency, not just the design-system one. Contrast of card text (`#141313`/`#4E4D4D`/`#363633`) on `#EFEFEB` stays ≥ AA (identical to that disclaimer block).
- **Verified:** in-browser on `/legal` — computed `background-color: rgb(239, 239, 235)`, border intact, content renders, no console errors. No `test:visual`: inline utility on one element in one file (not a shared class), and `/legal` has no snapshot in `tests/visual.spec.js`.
- **SEO/GEO/AEO:** none — background color token only.
- Closes audit Task 18 (UX-07).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
