# Phase 0 — Persist plan + git baseline

**Outcome:** Absolute plan on disk + safe `.gitignore`. No Next.js app yet.

**Depends on:** Nothing (start here).

See [README.md](./README.md) for locked decisions.

---

## Batch 0.1 — Write plan file + init repo

**Goal:** Persist this absolute plan and initialize git if missing.

### Prompt (copy-paste)

```text
You are implementing Samundra’s portfolio per IMPLEMENTATION_PLAN.md (absolute plan). 

TASK — Batch 0.1 only:
1. Write the full absolute implementation plan content into IMPLEMENTATION_PLAN.md at the repo root (phases, batches, locked decisions, prompts, acceptance). Mirror what was approved in the Cursor plan.
2. If git is not initialized, run git init. Do not create commits unless I ask.
3. Ensure .gitignore covers node_modules, .next, .env, .env.local.
4. Do not scaffold Next.js yet.

Acceptance: IMPLEMENTATION_PLAN.md exists; .gitignore present; no Next.js app yet.
```

### Acceptance

- `IMPLEMENTATION_PLAN.md` on disk
- Safe `.gitignore` present
- No Next.js app scaffold yet

---

## Phase exit

Phase 0 complete when Batch 0.1 acceptance passes. No `npm run build` required (no app yet).
