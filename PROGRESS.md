# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Task 7: Organization entity consolidated on Nosotros (cont. 27, code)

- **`src/pages/Nosotros.jsx`:** replaced the inline 6-field `HealthAndBeautyBusiness` in the JSON-LD with the unified `@graph` pattern used by Home/Contacto — `organizationNode` (imported from `src/data/organizationSchema.js`) + an `AboutPage` node (`@id` `…/nosotros#aboutpage`) whose `mainEntity` references `…/#organization` by `@id`. No UI change.
- **Why:** the inline node had no canonical `@id`, no geo/sameAs → fragmented the brand entity in the Knowledge Graph vs. the single `#organization` node. Now one referenced entity across Home / Contacto / Nosotros / NancyNieto.
- **Verified:** `JSON.stringify` of the graph parses clean (2 nodes, org `@id` correct); pattern byte-identical to already-live Home/Contacto. Schema-only, no visual gate — `test:visual` not run per `CLAUDE.md` §DoD (no CSS / shared component / layout touched). Browser render not checked: `:3000` owned by another chat, `autoPort` off.
- Closes audit Task 7 (SEO-04). Commit `ed260de`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
