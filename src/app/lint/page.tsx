import Link from "next/link";
import { AlertTriangle, ListChecks } from "lucide-react";

import { CategoryBadge } from "@/components/CategoryBadge";
import { mockWikiPages } from "@/lib/mock-data";
import type { WikiLintResult } from "@/types/wiki";

const mockCategories = [...new Set(mockWikiPages.map((p) => p.category))];

const MOCK_LINT_RESULT = {
  status: "warning",
  summary:
    "Mock scan of all placeholder wiki pages: 4 notices tied to real slugs from mock data plus 1 wiki-wide suggestion. Wire Task 23 to replace this stub.",
  warnings: [
    {
      pageSlug: "getting-started",
      message:
        "Primary source URL uses example.com — likely a placeholder that should be updated or removed before publish.",
      suggestion:
        "Swap in the real AGENTS.md or internal doc URL, or mark the page as draft until sources resolve.",
    },
    {
      pageSlug: "nextjs-16-rsc",
      message:
        "Engineering article has no attached sources while adjacent pages cite references.",
      suggestion:
        "Add at least one canonical link (e.g. Next.js docs) in `sources` for traceability.",
    },
    {
      pageSlug: "tailwind-shadcn-patterns",
      message:
        "Body mentions CLI-managed `ui/` files but lint metadata does not record a verification date.",
      suggestion:
        "Set `updatedAt` when you bump shadcn versions so readers know the guidance is current.",
    },
    {
      pageSlug: "typescript-strict",
      message:
        "Tags include both `typescript` and `quality`; consider normalizing tag vocabulary across Engineering pages.",
      suggestion:
        "Align with the tag set used on `nextjs-16-rsc` for cross-linking and search consistency.",
    },
    {
      message:
        `Scanned ${mockWikiPages.length} pages from mock data — slug coverage is complete, but production lint should enforce schema categories from src/lib/schema.ts.`,
      suggestion:
        "After ingest is live, re-run lint whenever categories or required fields change.",
    },
  ],
} satisfies WikiLintResult;

function pageTitle(slug: string): string {
  return mockWikiPages.find((p) => p.slug === slug)?.title ?? slug;
}

export default function LintPage() {
  const result = MOCK_LINT_RESULT;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ListChecks className="size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm font-medium uppercase tracking-wide">
                Health check
              </span>
            </div>
            <h1 className="font-heading mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Lint
            </h1>
            <p className="mt-2 text-muted-foreground">
              Static mock report derived from{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                mockWikiPages
              </code>
              . No API or LLM calls yet.
            </p>
          </div>
          <div
            className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-card-foreground shadow-sm"
            role="status"
            aria-label={`Overall status: ${result.status}`}
          >
            <AlertTriangle
              className="size-8 text-amber-600 dark:text-amber-500"
              aria-hidden
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Status
              </p>
              <p className="text-lg font-semibold capitalize text-foreground">
                {result.status}
              </p>
            </div>
          </div>
        </header>

        <section
          className="mb-10 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-6"
          aria-labelledby="lint-summary-heading"
        >
          <h2
            id="lint-summary-heading"
            className="text-sm font-semibold text-foreground"
          >
            Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {result.summary}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              Categories in dataset:
            </span>
            {mockCategories.map((category) => (
              <CategoryBadge key={category} category={category} />
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Pages in mock dataset:{" "}
            {mockWikiPages.map((p) => p.slug).join(", ")}
          </p>
        </section>

        <section aria-labelledby="lint-warnings-heading">
          <h2
            id="lint-warnings-heading"
            className="mb-4 text-lg font-semibold text-foreground"
          >
            Warnings &amp; suggestions
          </h2>
          <ul className="flex flex-col gap-4">
            {result.warnings.map((w, i) => (
              <li
                key={i}
                className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  {w.pageSlug ? (
                    <>
                      <Link
                        href={`/wiki/${w.pageSlug}`}
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {pageTitle(w.pageSlug)}
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        ({w.pageSlug})
                      </span>
                    </>
                  ) : (
                    <span className="font-medium text-foreground">
                      Wiki-wide
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-foreground">{w.message}</p>
                {w.suggestion ? (
                  <p className="mt-3 border-l-2 border-primary/40 pl-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Suggestion:{" "}
                    </span>
                    {w.suggestion}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
