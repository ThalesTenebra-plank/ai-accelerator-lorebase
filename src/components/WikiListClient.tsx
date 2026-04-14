"use client"

import { useCallback, useState } from "react"

import type { WikiPage } from "@/types/wiki"
import { SearchBar } from "@/components/SearchBar"
import WikiCard from "@/components/WikiCard"

type WikiListClientProps = {
  pages: WikiPage[]
}

export function WikiListClient({ pages }: WikiListClientProps) {
  const [query, setQuery] = useState("")

  const handleSearch = useCallback((q: string) => {
    setQuery(q)
  }, [])

  const filtered = query.trim()
    ? pages.filter((p) => {
        const q = query.toLowerCase()
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        )
      })
    : pages

  return (
    <>
      <SearchBar
        placeholder="Search articles…"
        onSearch={handleSearch}
        className="mb-6 max-w-sm"
      />
      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No articles match your search.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((page) => (
            <WikiCard key={page.slug} page={page} />
          ))}
        </div>
      )}
    </>
  )
}
