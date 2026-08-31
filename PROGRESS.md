# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 6: visible breadcrumbs to match `BreadcrumbList` JSON-LD (cont. 29, code)

- **`CategoryPage.jsx` + `LandingPage.jsx` (+ their `.module.css`):** render the shipped `<Breadcrumb>` component in a `.breadcrumbBg` bar (`#F2F0F1`, `padding: clamp(20px,4vw,32px) 0 16px`) above the hero — the same surface `TreatmentDetailPage` already uses (`DESIGN.md` §7, surface 2). Hubs render the full 2-level trail from `data.breadcrumb`; landings render **ancestors only** (`breadcrumb.slice(0,-1)`) so the long PRF/Postop leaf doesn't wrap 2 lines on 375px above the fold — the leaf is the H1 right below anyway.
- **`landingPages.js`:** added a 3-level `breadcrumb` array to `prfYFibrina` / `limpiezaFacial` / `postoperatorios`. The 3 landing page files (`PrfYFibrina.jsx`, `LimpiezaFacial.jsx`, `Postoperatorios.jsx`) now derive their inline `BreadcrumbList` JSON-LD from that array — one source, visible trail and markup can't drift.
- **Why:** SEO-03 — `BreadcrumbList` was emitted with no visible trail (Google manual-action risk, lost breadcrumb rich snippet). Option B (add UI) over Option A (delete markup) because `DESIGN.md` already specs the trail. JSON-LD keeps all 3 levels with the canonical PRF name; visible ancestor-only trail still satisfies "reflects visible content" (penalty case is *zero* visible breadcrumbs). See `DECISIONS.md` 2026-08-30.
- **Verified:** mobile-first — 375px viewport checked in-browser on `/faciales` + all 3 landings (trail on 1 line), then desktop. DOM confirmed PRF JSON-LD = 3 `ListItem` intact. `npm run test:visual` full suite 33/34 (both projects); the 1 fail is the standing unrelated `nosotros-viewport`. Suite has no coverage of the breadcrumb area — no re-baseline. No console errors; contrast/focus/aria from the existing component.
- Closes audit Task 6 (SEO-03). Commit `cecc39e`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
