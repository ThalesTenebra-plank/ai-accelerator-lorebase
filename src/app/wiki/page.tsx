import { PageHeader } from "@/components/PageHeader";
import { WikiBrowseClient } from "@/components/WikiBrowseClient";
import { mockWikiPages } from "@/lib/mock-data";

export const metadata = {
  title: "Wiki — AI Accelerator",
  description: "Browse all knowledge articles.",
};

export default function WikiPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <PageHeader
        className="mb-8"
        title="Wiki"
        description={`${mockWikiPages.length} articles`}
      />
      <WikiBrowseClient pages={mockWikiPages} />
    </main>
  );
}
