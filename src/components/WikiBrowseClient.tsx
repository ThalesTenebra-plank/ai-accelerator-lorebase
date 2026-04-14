"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";

import WikiCard from "@/components/WikiCard";
import { SearchBar } from "@/components/SearchBar";
import type { WikiPage } from "@/types/wiki";

type WikiBrowseClientProps = {
  pages: WikiPage[];
};

export function WikiBrowseClient({ pages }: WikiBrowseClientProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return pages;
    return pages.filter((p) => {
      const haystack = [p.title, p.summary, p.category, p.tags.join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [pages, debouncedQuery]);

  const searchTerm = debouncedQuery.trim();
  const hasActiveSearch = searchTerm.length > 0;

  return (
    <>
      <div className="mb-6 max-w-md">
        <SearchBar
          value={query}
          onChange={setQuery}
          onDebouncedChange={setDebouncedQuery}
          placeholder="Search articles…"
          aria-label="Search articles"
        />
      </div>
      {filtered.length === 0 ? (
        <div
          role="status"
          className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-muted/30 px-6 py-14 text-center sm:px-10 sm:py-16"
        >
          <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border/60">
            <SearchX
              className="size-7 text-muted-foreground"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
            {hasActiveSearch ? "No matching articles" : "No articles yet"}
          </h2>
          <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {hasActiveSearch ? (
              <>
                Nothing matches{" "}
                <span className="font-medium text-foreground">
                  &ldquo;{searchTerm}&rdquo;
                </span>
                . Try another keyword or clear the search box.
              </>
            ) : (
              "Articles you add will show up in this grid."
            )}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((page) => (
            <WikiCard key={page.slug} page={page} />
          ))}
        </div>
      )}
    </>
  );
}
