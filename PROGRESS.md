# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Audit UI/UX review: UX-03 + UX-06 declined, DESIGN.md exception recorded (cont. 31, docs)

- **Full 12-item UI/UX audit list reviewed with the user.** Status: UX-01/02/04 already shipped (Tasks 1/5/9); UX-05/07/08/09/10/11/12 remain queued; **UX-03 and UX-06 declined by product**.
- **`DESIGN.md`:** §4 Geometry gains a dated "Documented exception" note — `MethodProcess` step markers keep `border-radius: 50%`, scoped to that component only; §11 point 7 amended to point at it. No other file touched — UX-03's `TreatmentHero` stays as-is and `DESIGN.md` §7 knowingly diverges.
- **`DECISIONS.md`:** appended 2026-08-30 entry recording both declines and the rationale (owner overriding the spec — dramatic media hero is intentional; circular step index is intentional).
- **`NEXT.md`:** Tasks 8 and 17 dropped from the queue + table; order line now `11 → 18 → 10 → 12 → 13 → 20 → 21 → 14 → 15 → 16 → 19 → 22`; next = Task 11 (UX-05, XS).
- **Next: Task 11** — `LegalPageLayout.jsx:118-123`, "Sección X" `<h3>` → `<p>`/`<span>` so the `<h2>` governs the block (WCAG 1.3.1). No `test:visual` (single component, no layout/token change) — browser verify + heading-order check.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
