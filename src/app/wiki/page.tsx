import { WikiBrowseClient } from "@/components/WikiBrowseClient";
import { mockWikiPages } from "@/lib/mock-data";

export const metadata = {
  title: "Wiki — AI Accelerator",
  description: "Browse all knowledge articles.",
};

export default function WikiPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Wiki</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {mockWikiPages.length} articles
        </p>
      </div>
      <WikiBrowseClient pages={mockWikiPages} />
    </main>
  );
}
