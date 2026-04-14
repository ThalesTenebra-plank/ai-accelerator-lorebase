import {
  BookOpen,
  FileSearch,
  ListChecks,
  Upload,
} from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";

const features = [
  {
    href: "/wiki",
    title: "Wiki",
    description: "Browse and read curated accelerator knowledge.",
    Icon: BookOpen,
  },
  {
    href: "/ingest",
    title: "Ingest",
    description: "Add sources and material into the knowledge base.",
    Icon: Upload,
  },
  {
    href: "/query",
    title: "Query",
    description: "Search and ask across ingested content.",
    Icon: FileSearch,
  },
  {
    href: "/lint",
    title: "Lint",
    description: "Validate wiki pages and catch issues early.",
    Icon: ListChecks,
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-12 max-w-2xl">
          <PageHeader
            size="lg"
            title="Lorebase"
            description="The AI Accelerator knowledge wiki — collaborative, agent-friendly, and built for teams who ship with AI."
            descriptionClassName="mt-3 text-lg text-muted-foreground"
          />
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ href, title, description, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm outline-none transition-colors hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon
                  className="mb-3 size-8 text-primary"
                  aria-hidden
                />
                <span className="font-semibold text-foreground group-hover:underline">
                  {title}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
