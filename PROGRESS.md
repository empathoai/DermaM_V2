# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-09-11 — Install SlopMonster skill (cont. 64, tooling only, no site code)

- **What:** copied the `SlopMonster` skill (github.com/ItsssssJack/SlopMonster) into `.claude/skills/slopmonster/` and `.agents/skills/slopmonster/` — an AI-writing-tell linter (`tools/deslop.py`, stdlib Python, no new deps) plus rival-model cleanse script. Files copied verbatim, no source edits.
- **Why:** user is watching Google's tightening stance on AI-sounding copy and wants a tool to catch AI "tells" (vocabulary, rule-of-three, unfalsifiable proof claims) in site copy before it ships.
- **Mode:** no Codex CLI installed → `cleanse.sh` falls back to printing the rewrite prompt for manual paste into ChatGPT (confirmed with user, avoids adding a new CLI/account dependency this cycle).
- **Verified:** `python3 tools/deslop.py --text "..."` runs clean (stdlib only) and correctly flags a seeded AI-tell sentence (score 3/5, exit 1).
- **Not done this cycle (deferred, no request yet):** running the scorer against `src/data/*`, installing `openai/codex-plugin-cc` to automate the cleanse step.
- Commit `1eee3ff`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
