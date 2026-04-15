# AI Accelerator LoreBase

A collaborative knowledge wiki powered by LLMs — built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Inspired by [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui v4 |
| Package Manager | pnpm |

## Features

- **Wiki** — Browse and read knowledge articles in a responsive card grid
- **Ingest** — Submit text to be processed and added to the wiki (LLM stub)
- **Query** — Ask questions and get answers from the wiki (LLM stub)
- **Lint** — View a health report of wiki content with warnings and suggestions

## Folder Structure

```
src/
├── app/                  # Routes, layouts, pages
│   ├── api/              # API route handlers
│   │   ├── ingest/       # POST /api/ingest
│   │   ├── lint/         # GET /api/lint
│   │   ├── query/        # POST /api/query
│   │   └── wiki/         # GET /api/wiki, POST /api/wiki
│   ├── ingest/           # Ingest page
│   ├── lint/             # Lint page
│   ├── query/            # Query page
│   ├── wiki/             # Wiki list + detail pages
│   │   └── [slug]/       # Individual wiki article
│   ├── globals.css
│   ├── layout.tsx        # Root layout with navbar and Toaster
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui primitives (CLI-managed, do not hand-edit)
│   ├── CategoryBadge.tsx
│   ├── EmptyState.tsx
│   ├── Layout.tsx        # Top navbar
│   ├── PageHeader.tsx
│   ├── SearchBar.tsx
│   └── WikiCard.tsx
├── lib/
│   ├── mock-data.ts      # Hardcoded WikiPage objects for development
│   ├── prompts.ts        # Prompt templates for ingest, query, lint
│   ├── schema.ts         # Wiki schema config (categories, page template)
│   └── utils.ts          # cn() and shared utilities
├── hooks/                # Custom React hooks (client-side)
└── types/
    └── wiki.ts           # WikiPage, WikiSource, WikiLintResult types
```

## Running Locally

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in any required values (see `.env.example` for documentation).

3. **Start the dev server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**

   ```bash
   pnpm build
   pnpm start
   ```

## Other Commands

```bash
pnpm lint          # Run ESLint
npx tsc --noEmit   # Type-check without emitting
npx shadcn@latest add <component>   # Add a shadcn/ui component
```

## Environment Variables

See `.env.example` for all supported variables. The main ones needed for LLM integration (not yet wired up):

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | API key for Anthropic Claude |
| `OPENAI_API_KEY` | API key for OpenAI |

> LLM integration is intentionally out of scope for the current milestone. All AI routes return stubs. Wiring an API key is the only remaining step.
