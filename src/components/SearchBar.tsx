"use client"

import { useEffect, useRef, useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SearchBarProps = {
  placeholder?: string
  onSearch: (query: string) => void
  className?: string
}

export function SearchBar({ placeholder = "Search…", onSearch, className }: SearchBarProps) {
  const [value, setValue] = useState("")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      onSearch(value)
    }, 300)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [value, onSearch])

  return (
    <div className={cn("relative w-full", className)}>
      <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-8"
      />
    </div>
  )
}
