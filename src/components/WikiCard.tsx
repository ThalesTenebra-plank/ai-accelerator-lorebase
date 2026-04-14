import Link from "next/link";

import type { WikiPage } from "@/types/wiki";
import { cn } from "@/lib/utils";

type WikiCardProps = {
  page: WikiPage;
};

export default function WikiCard({ page }: WikiCardProps) {
  return (
    <Link
      href={`/wiki/${page.slug}`}
      className={cn(
        "group flex flex-col gap-2 rounded-lg border border-border bg-card p-5",
        "transition-shadow hover:shadow-md"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold leading-snug text-card-foreground group-hover:underline">
          {page.title}
        </h2>
        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          {page.category}
        </span>
      </div>
      <p className="line-clamp-2 text-sm text-muted-foreground">{page.summary}</p>
    </Link>
  );
}
