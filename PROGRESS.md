# PROGRESS.md

Running log of work in this repo. Newest entry on top. One entry per session/task — what was done, what's left.

## 2026-08-31 — Task 12: AI-crawler directives in robots.txt (cont. 35, no code)

- **`public/robots.txt` (PROTECTED — nominal go given):** appended 6 dedicated user-agent groups before the `Sitemap:` line. AI search: `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`. AI training: `GPTBot`, `ClaudeBot`, `Google-Extended`. Each = `Allow: /` plus the same `Disallow` set already applied to `User-agent: *` (non-canonical language variants `/privacy-policy` · `/terms-of-use` · `/tratamientos-disclaimer`, draft `/notice-of-privacy-practices`, `/_audit/`).
- **Why:** SEO-06. Policy call (user, cont. 35): allow BOTH search and training — public copy is marketing content we want surfaced/cited; no sensitive IP to protect by blocking training bots, and an explicit `Allow` for the SearchBots prevents accidental perimeter blocks. Same crawl scope as `*` so duplicate legal pages don't pollute AI citations.
- **Verified:** robots.txt syntax valid (well-formed `User-agent` groups + rules; global `Sitemap:` intact at EOF). No `test:visual` (static file, not in snapshot suite). No browser check (not a rendered route).
- **SEO/GEO/AEO:** direct GEO/AEO — controls/blinds citability in ChatGPT Search and Perplexity. No traditional-SEO indexing effect.
- Closes audit Task 12 (SEO-06). Commit `<hash>`.

---

**Earlier history:** see [docs/PROGRESS_ARCHIVE.md](docs/PROGRESS_ARCHIVE.md).
