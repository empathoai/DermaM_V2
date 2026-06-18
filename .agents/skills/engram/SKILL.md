---
name: engram
description: Save current project status to Engram and produce a next-session continuation prompt. Use when the user writes "$engram", asks to register/save session status, wants a handoff prompt, or says to prepare the next session.
---

# Engram Status Handoff

## Purpose

Create a reliable end-of-session checkpoint: inspect the current repo state, save the status to Engram, and return a copy-paste prompt the user can use to continue in the next session.

## Trigger

When the user writes `$engram`, do this workflow immediately.

Do not ask clarifying questions unless the repository cannot be inspected or Engram tools are unavailable.

## Workflow

1. **Inspect current state**
   - Run:
     ```powershell
     git status --short
     git branch --show-current
     git log -1 --oneline
     ```
   - If relevant to recent work, inspect a compact diff:
     ```powershell
     git diff --stat
     ```
   - Do not run builds unless the user explicitly asks.

2. **Summarize status**
   - Current branch.
   - Latest commit.
   - Dirty/clean worktree.
   - Modified/untracked files, if any.
   - Any known blocked work, failed commands, or pending push/commit.

3. **Save to Engram**
   - Call `mem_save` for important project state using:
     - `project: "DermaM-WebSite"`
     - `scope: "project"`
     - `type: "config"` for repo/session status, or `type: "discovery"` for noteworthy findings.
     - A stable `topic_key`, preferably `handoff/current-status`.
   - Content format:
     ```markdown
     **What**: Current project status snapshot.
     **Why**: User invoked `$engram` to preserve status for the next session.
     **Where**: Repo status, branch, latest commit, and relevant files.
     **Learned**: Pending work, blockers, or gotchas.
     ```

4. **Save session summary**
   - Call `mem_session_summary` with:
     ```markdown
     ## Goal
     [What this session was trying to accomplish]

     ## Instructions
     [User constraints/preferences that matter next time]

     ## Discoveries
     - [Non-obvious findings]

     ## Accomplished
     - DONE: [Completed items]
     - TODO: [Pending items]

     ## Next Steps
     - [Specific next actions]

     ## Relevant Files
     - path/to/file - [why it matters]
     ```

5. **Return a next-session prompt**
   - Give the user a concise copy-paste prompt in Spanish.
   - Include enough context to resume without re-explaining.
   - Include concrete file paths, branch, latest commit, and pending actions.

## Output Format

Respond in Rioplatense Spanish:

```markdown
Listo, guarde el estado en Engram.

Estado:
- Branch: ...
- Ultimo commit: ...
- Worktree: limpio / con cambios
- Pendiente: ...

Prompt para la proxima sesion:

```text
Continua en D:\Derma_Content\DermaM-WebSite.
Primero lee AGENTS.md y recupera Engram del proyecto DermaM-WebSite.
Estado guardado: ...
Proximo paso: ...
No corras build salvo pedido explicito.
```
```

## Rules

- Never include `Co-Authored-By` or AI attribution.
- Never run production build unless the user explicitly asks.
- Preserve `DESIGN.md` as the source of truth for visual work.
- If the repo has uncommitted changes, mention them explicitly instead of implying the repo is clean.
- If push failed or is pending, say so clearly with the remote/branch.
