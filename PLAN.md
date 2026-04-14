# LLM Wiki — Day 1 Challenge Plan

> Inspired by [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).
> Build the foundation of a personal knowledge wiki powered by LLMs — UI-first, LLM integration comes next.
> Stack: Next.js · TypeScript · Tailwind CSS · shadcn/ui

---

## Rules

- Each task = 1 PR (merged into `main`)
- When you pick a task, assign yourself in the PR description
- Mark the checkbox below only after the PR is merged
- 6 devs / 25 tasks / 1 hour

---

## Setup & Foundation

- [x] **Task 01** -- Install and init shadcn/ui (`npx shadcn@latest init`) and configure `components.json`
- [ ] **Task 02** -- Create `.env.example` documenting future vars (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`) — no real keys needed yet
- [x] **Task 03** -- Create `src/components/Layout.tsx` with a top navbar (logo + nav links: Wiki, Ingest, Query, Lint) using shadcn `Button` and `Separator`
- [x] **Task 04** -- Apply the layout in `src/app/layout.tsx` and set a global font + base Tailwind styles

---

## Types & Mock Data

- [x] **Task 05** -- Create `src/types/wiki.ts` with TypeScript types: `WikiPage`, `WikiSource`, `WikiLintResult`
- [x] **Task 06** -- Create `src/lib/mock-data.ts` with 5 hardcoded `WikiPage` objects to use as placeholder data across all pages
- [x] **Task 07** -- Create `src/lib/schema.ts` with a wiki schema config (categories list, page template shape, metadata fields)
- [x] **Task 08** -- Create `src/lib/prompts.ts` with prompt template strings for `ingest`, `query`, and `lint` — no LLM calls, just the text templates

---

## UI Pages

- [x] **Task 09** -- Build the home page `src/app/page.tsx` with a hero section, tagline, and cards linking to Wiki, Ingest, Query, and Lint
- [x] **Task 10** -- Build the Wiki list page `src/app/wiki/page.tsx` listing all mock wiki pages using `WikiCard` in a responsive grid
- [x] **Task 11** -- Build the Wiki detail page `src/app/wiki/[slug]/page.tsx` rendering a single mock page (title, tags, markdown body as plain text for now)
- [x] **Task 12** -- Build the Ingest page `src/app/ingest/page.tsx` with a `Textarea` and `Button` (shadcn) — form submits but shows a "LLM not configured" toast for now
- [x] **Task 13** -- Build the Query page `src/app/query/page.tsx` with an `Input` + `Button` and a mocked response bubble — no real LLM call
- [x] **Task 14** -- Build the Lint page `src/app/lint/page.tsx` showing a mocked health report (hardcoded warnings and suggestions using mock data)

---

## Components

- [x] **Task 15** -- Create `src/components/WikiCard.tsx` using shadcn `Card` — shows title, category badge, and short summary
- [x] **Task 16** -- Create `src/components/SearchBar.tsx` using shadcn `Input` with a search icon, controlled state, and debounce (no backend needed)
- [x] **Task 17** -- Create `src/components/CategoryBadge.tsx` using shadcn `Badge` with a color per category
- [ ] **Task 18** -- Create `src/components/EmptyState.tsx` — a reusable empty state illustration + message component
- [ ] **Task 19** -- Create `src/components/PageHeader.tsx` — reusable page title + subtitle header used across all pages

---

## API Routes (stub, no LLM)

- [x] **Task 20** -- Create `src/app/api/wiki/route.ts` — GET returns mock wiki pages as JSON, POST accepts body and echoes it back (stub)
- [ ] **Task 21** -- Create `src/app/api/ingest/route.ts` — accepts `{ text }`, returns `{ status: "ok", message: "LLM not configured yet" }`
- [ ] **Task 22** -- Create `src/app/api/query/route.ts` — accepts `{ question }`, returns a hardcoded mock answer
- [ ] **Task 23** -- Create `src/app/api/lint/route.ts` — returns a hardcoded `WikiLintResult` with mock warnings

---

## Polish

- [ ] **Task 24** -- Add shadcn `Toaster` globally and wire up toast feedback on Ingest and Query form submissions
- [ ] **Task 25** -- Update `README.md` with project overview, stack, folder structure, and instructions to run locally

---

> Total: 25 tasks | 6 devs | 1 hour
> LLM integration is intentionally out of scope — these tasks build everything needed so wiring the API key is the only step left.
