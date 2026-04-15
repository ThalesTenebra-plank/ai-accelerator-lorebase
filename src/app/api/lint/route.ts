import type { WikiLintResult } from "@/types/wiki"
import { mockWikiPages } from "@/lib/mock-data"

export async function GET() {
  const result: WikiLintResult = {
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
        message: `Scanned ${mockWikiPages.length} pages from mock data — slug coverage is complete, but production lint should enforce schema categories from src/lib/schema.ts.`,
        suggestion:
          "After ingest is live, re-run lint whenever categories or required fields change.",
      },
    ],
  }

  return Response.json(result)
}
