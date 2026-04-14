import type { WikiPage } from "@/types/wiki"

export const mockWikiPages: WikiPage[] = [
  {
    slug: "getting-started",
    title: "Getting started with the wiki",
    summary:
      "How to navigate articles, search, and contribute conventions for this knowledge base.",
    category: "Onboarding",
    tags: ["basics", "navigation"],
    body: `# Getting started

Use the sidebar to browse by category. Each article has a stable slug in the URL you can share with teammates.

When you edit locally, follow the house style in AGENTS.md: server components by default, Tailwind for layout, and shadcn primitives for UI.`,
    sources: [
      {
        id: "src-agents",
        type: "url",
        title: "AGENTS.md — agent and repo guide",
        url: "https://example.com/docs/agents",
        addedAt: "2026-04-01T12:00:00.000Z",
      },
    ],
    createdAt: "2026-04-01T12:00:00.000Z",
    updatedAt: "2026-04-10T09:30:00.000Z",
  },
  {
    slug: "nextjs-16-rsc",
    title: "Next.js 16 and React Server Components",
    summary:
      "Defaults for data fetching, async request APIs, and when to add client boundaries.",
    category: "Engineering",
    tags: ["nextjs", "rsc", "app-router"],
    body: `# Next.js 16 and RSC

Fetch in Server Components and pass serializable props to client islands. Remember that \`params\`, \`searchParams\`, \`cookies()\`, and \`headers()\` are async—await them in route handlers and pages.

Add \`'use client'\` only when you need hooks, browser APIs, or event handlers.`,
    createdAt: "2026-03-15T14:00:00.000Z",
    updatedAt: "2026-04-08T16:45:00.000Z",
  },
  {
    slug: "tailwind-shadcn-patterns",
    title: "Tailwind v4 and shadcn/ui composition",
    summary:
      "Utility-first styling, cn() for variants, and keeping ui/ primitives CLI-managed.",
    category: "Design system",
    tags: ["tailwind", "shadcn", "ui"],
    body: `# Patterns

Compose feature components from primitives under \`src/components/ui\`. Merge classes with \`cn()\` from \`@/lib/utils\`.

Avoid hand-editing generated shadcn files; re-run the CLI when you need new primitives.`,
    sources: [
      {
        id: "note-cli",
        type: "text",
        title: "Reminder",
        text: "npx shadcn@latest add <component>",
        addedAt: "2026-03-20T10:00:00.000Z",
      },
    ],
    createdAt: "2026-03-20T10:00:00.000Z",
    updatedAt: "2026-04-05T11:20:00.000Z",
  },
  {
    slug: "typescript-strict",
    title: "TypeScript strict mode in this repo",
    summary:
      "No implicit any, prefer type aliases, and export shapes next to their consumers.",
    category: "Engineering",
    tags: ["typescript", "quality"],
    body: `# Strict TypeScript

The project runs in strict mode. Prefer \`type\` for object shapes; use \`interface\` when you intentionally extend.

Reach for \`unknown\` and narrow instead of \`any\`. Document rare \`@ts-expect-error\` with a short reason.`,
    createdAt: "2026-02-28T09:00:00.000Z",
    updatedAt: "2026-04-02T13:10:00.000Z",
  },
  {
    slug: "git-workflow",
    title: "Git workflow and PR hygiene",
    summary:
      "Branch naming, focused PRs, and verification before you call a change done.",
    category: "Process",
    tags: ["git", "pr", "workflow"],
    body: `# Workflow

Branch from \`main\` using \`feat/\`, \`fix/\`, \`chore/\`, or \`docs/\` prefixes. Keep PRs single-purpose.

Run lint and typecheck locally before review. Do not force-push to \`main\`.`,
    createdAt: "2026-01-10T08:00:00.000Z",
    updatedAt: "2026-04-12T07:00:00.000Z",
  },
]
