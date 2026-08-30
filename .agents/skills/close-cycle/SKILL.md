---
name: close-cycle
description: Use at the end of a working session — after the user approves a change, or when wrapping up — to persist state deterministically so the next session resumes from NEXT.md alone. Rotates PROGRESS into the archive, updates DECISIONS/MEMORY only when warranted, refreshes NEXT under its size cap, verifies a clean tree, commits, pushes on confirmation, and stops the dev server only when the session itself is ending.
---

# close-cycle

Close one working cycle. Makes session state survive a cold start with `NEXT.md` alone, and keeps
`NEXT.md` from accreting closed work.

**Announce:** "Using close-cycle to persist this cycle."

## Preconditions

- The change is approved by the user. No approval → stop and report what is pending.
- One logical change this cycle. Several unrelated changes → close them one at a time.
- `main` has not diverged since session start (`git log --oneline -3` vs. `NEXT.md`'s State line;
  HEAD at or one doc-fixup ahead of the named commit is fine). Diverged → another session moved it;
  reconcile before committing.

## Steps

- [ ] **1. PROGRESS.md — rotate.** Prepend the current top entry into `docs/PROGRESS_ARCHIVE.md`
  (newest-first, same format; `docs/` is gitignored but the file is tracked — stage it with
  `git add -f`). Write the new top entry: `## YYYY-MM-DD — <title> (cont. N, no code | code)`,
  ≤4 bullets — what changed, files, how verified, commit hash (filled in step 6). PROGRESS.md ends
  with one live entry + the archive pointer line.
- [ ] **2. DECISIONS.md — append only if non-obvious.** A trade-off, or a choice a fresh reader
  would question → one dated entry (absolute date), English, stating the why. Mechanical change → skip.
- [ ] **3. MEMORY.md — update only if a durable constraint changed.** Edit the memory file and its
  `MEMORY.md` pointer line. Otherwise skip.
- [ ] **4. NEXT.md — refresh.** Update the `State` block (new expected HEAD). Mark the finished task
  done, set the next. Delete every line this cycle closed. Then: line count over ~110 → prune
  closed/stale lines until under.
- [ ] **5. Working tree — clean.** No half-edits, no debug code, no stray scratch files in the repo.
  `git status` shows only the intended change plus these doc updates.
- [ ] **6. Commit.** Conventional message, scope prefix, present tense. End with
  `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`. Write the hash back into the step-1
  PROGRESS entry (amend, or a follow-up doc-only commit).
- [ ] **7. Push — after the user confirms.** Ask, wait for yes, `git push`, report the new HEAD.
- [ ] **8. Dev server — stop only if the session is ending.** Stop the preview tab/process this
  session started. Mid-session cycle close → leave it running. A server owned by another chat →
  never touch.

## Done when

Every box checked, `git status` clean, branch pushed, `NEXT.md` under ~110 lines. State the new HEAD
in one line.

## Notes

- Docs written here follow `writing-for-agents`: single source of truth, no sediment, progressive
  disclosure. Closed work is reference (`PROGRESS_ARCHIVE.md`, `DECISIONS.md`), never loaded at
  session start.
- Language: `NEXT.md`, `PROGRESS.md`, `PROGRESS_ARCHIVE.md`, `DECISIONS.md`, `MEMORY.md` → English.
  Spanish route names, paths, and quoted site copy stay verbatim inside them. Site content
  (`src/data/*`, `docs/MEDICAL_COMPLIANCE.md`, `docs/seo-setrategies/INTAKE.md`) and chat stay Spanish.
- If the change was code, `DECISIONS.md`/`PROGRESS.md` also record whether `test:visual` ran or was
  skipped per the `CLAUDE.md` §DoD gate.
