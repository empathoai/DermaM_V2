# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-30 — Operational docs to English + `close-cycle` skill (cont. 23, no code)

- **`NEXT.md`, `PROGRESS.md`, `MEMORY.md` + the Spanish memory files rewritten in English.** Spanish kept verbatim inside them: route paths, file/component/class names, quoted site copy, brand nouns, the mandated medical notice. No retro-translation of dated history in `DECISIONS.md` / `PROGRESS_ARCHIVE.md`.
- **New rule in `CLAUDE.md` §Memory:** operational docs + skills + auditor instructions in English; `src/data/*` + `MEDICAL_COMPLIANCE.md` + `INTAKE.md` + chat stay Spanish. Doc authoring goes through `writing-for-agents`; `NEXT.md` size cap ~110 lines; session start sanity-checks HEAD vs. the expected-HEAD line.
- **New skill `close-cycle`** (`.agents/skills/` + `.claude/skills/`, synced): deterministic session-close — PROGRESS rotation, DECISIONS/MEMORY only when warranted, NEXT refresh under the cap, clean tree, commit, push on confirmation, dev-server stop only at session end.
- `feedback_doc_language_policy.md` rewritten with the new policy.
- **Left for a follow-up pass:** verify/translate the ~13 memory files not yet read this session (most already English) + the 2 Spanish skills (`seo-checklist-65`, `seo-local`).

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
