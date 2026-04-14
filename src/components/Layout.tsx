import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/wiki", label: "Wiki" },
  { href: "/ingest", label: "Ingest" },
  { href: "/query", label: "Query" },
  { href: "/lint", label: "Lint" },
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="shrink-0 border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <Button
            variant="ghost"
            className="px-2 font-semibold"
            nativeButton={false}
            render={<Link href="/" />}
          >
            Lorebase
          </Button>
          <Separator orientation="vertical" />
          <nav
            className="flex flex-1 items-center gap-1"
            aria-label="Primary"
          >
            {navItems.map(({ href, label }) => (
              <Button
                key={href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<Link href={href} />}
              >
                {label}
              </Button>
            ))}
          </nav>
        </div>
      </header>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
