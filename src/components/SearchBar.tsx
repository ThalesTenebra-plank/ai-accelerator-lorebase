"use client";

import { useEffect, type ComponentProps } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type SearchBarProps = Omit<
  ComponentProps<typeof Input>,
  "value" | "onChange"
> & {
  value: string;
  onChange: (value: string) => void;
  onDebouncedChange?: (value: string) => void;
  debounceMs?: number;
};

export function SearchBar({
  value,
  onChange,
  onDebouncedChange,
  debounceMs = 300,
  className,
  type = "search",
  ...rest
}: SearchBarProps) {
  useEffect(() => {
    if (!onDebouncedChange) return;
    const id = window.setTimeout(() => {
      onDebouncedChange(value);
    }, debounceMs);
    return () => window.clearTimeout(id);
  }, [value, debounceMs, onDebouncedChange]);

  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("pl-8", className)}
        {...rest}
      />
    </div>
  );
}
