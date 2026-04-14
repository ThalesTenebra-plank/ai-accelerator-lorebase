<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# AI Accelerator Wiki — Agent & Collaboration Guide

This file is loaded by Claude Code, Codex, and any AI agent operating in this repo.
Read it fully before making any changes.

---

## Project Overview

| | |
|---|---|
| **Framework** | Next.js 16 (App Router) + TypeScript (strict) |
| **Styling** | Tailwind CSS v4 + shadcn/ui v4 |
| **Purpose** | AI Accelerator knowledge wiki — collaborative, agent-friendly codebase |

---

## Repository Structure

```
src/
├── app/             # Routes, layouts, pages, loading/error boundaries
├── components/
│   ├── ui/          # shadcn/ui primitives — CLI-managed, do NOT hand-edit
│   └── ...          # Feature & layout components
├── lib/             # Shared utilities (utils.ts, etc.)
└── hooks/           # Custom React hooks (client-side only)
```

---

## Architecture Principles

### React Server Components (RSC)
- Default to **Server Components**. Only add `'use client'` when you need browser APIs, event handlers, or React hooks.
- Never make a Client Component async — it is invalid in React.
- Pass only **serializable** props from Server to Client components.

### Next.js 15+ async APIs
- `params` and `searchParams` are **Promises** — always `await` them.
- `cookies()` and `headers()` are async — always `await` them.

### Data fetching
- Fetch in Server Components; pass serializable data down as props.
- Use `Promise.all` to avoid sequential data waterfalls.
- Route Handlers (`src/app/api/**/route.ts`) are for external API consumers.
- Prefer **Server Actions** for mutations triggered from UI.

### shadcn/ui
- Add components via CLI: `npx shadcn@latest add <component>`
- Files under `src/components/ui/` are CLI-managed — never hand-edit them.
- Compose new components from shadcn primitives; don't re-implement from scratch.
- Merge class names with `cn()` from `@/lib/utils`.

---

## Coding Standards

### TypeScript
- Strict mode is on — no `any`, no `@ts-ignore` without a comment explaining why.
- Prefer `type` for object shapes; use `interface` only when intentional extension is needed.
- Export types alongside the components/functions that use them.

### Styling
- Tailwind utility classes only; avoid inline `style` props.
- Use `cn()` from `@/lib/utils` for conditional class merging.
- No custom CSS unless Tailwind cannot achieve the result.

### Imports
- Use the `@/*` alias for all internal imports (e.g., `@/components/ui/button`).
- Import order: external packages → `@/` paths → relative paths.

---

## Rules for AI Agents

1. **Read before writing.** Always read relevant files before editing them.
2. **Minimal blast radius.** Make the smallest change that satisfies the task. Do not refactor surrounding code, add comments, or clean up style unless explicitly asked.
3. **No speculative abstractions.** Don't create helpers, hooks, or utilities for one-off use. Three similar lines of code is better than a premature abstraction.
4. **Verify before recommending.** Confirm file paths and function names exist before suggesting them.
5. **Never skip hooks.** Do not use `--no-verify` or bypass signing without explicit user instruction.
6. **Confirm before destructive actions.** Deleting files/branches, force-pushing, or `--hard` reset requires explicit user confirmation.
7. **Do not commit unless asked.** Summarize changes and wait for the user to request a commit.
8. **Security first.** Never introduce SQL injection, XSS, command injection, or other OWASP Top 10 vulnerabilities. Fix insecure code immediately if noticed.
9. **No hallucinated APIs.** If you are unsure whether a Next.js API exists in v16, check `node_modules/next/dist/docs/` or ask rather than guessing.

---

## Running the Project

```bash
npm run dev       # Start dev server → http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint

# Type-check without emitting
npx tsc --noEmit

# Add a shadcn component
npx shadcn@latest add <component-name>
```

---

## Git Workflow

- Branch from `main` for all features/fixes.
- Branch naming: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`, `docs/<slug>`.
- Commit messages: imperative mood, under 72 chars (e.g., `add wiki article page layout`).
- PRs should be focused — one concern per PR.
- Never force-push to `main`.

---

## Environment Variables

- Local dev: `.env.local` (gitignored — never commit it).
- Prefix browser-safe vars with `NEXT_PUBLIC_` only when truly safe to expose.
- Document every variable in `.env.example` with a description and a placeholder value.
