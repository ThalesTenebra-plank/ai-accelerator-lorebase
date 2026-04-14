import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { mockWikiPages } from "@/lib/mock-data";

type WikiDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mockWikiPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WikiDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = mockWikiPages.find((p) => p.slug === slug);
  if (!page) {
    return { title: "Not found" };
  }
  return { title: `${page.title} · Lorebase` };
}

export default async function WikiDetailPage({ params }: WikiDetailPageProps) {
  const { slug } = await params;
  const page = mockWikiPages.find((p) => p.slug === slug);
  if (!page) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <header className="mb-8">
        <p className="text-sm text-muted-foreground">{page.category}</p>
        <h1 className="mt-1 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {page.title}
        </h1>
        {page.tags.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.tags.map((tag) => (
              <li key={tag}>
                <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </header>
      <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
        {page.body}
      </div>
    </div>
  );
}
