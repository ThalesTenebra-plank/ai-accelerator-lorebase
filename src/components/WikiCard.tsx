import Link from "next/link";

import type { WikiPage } from "@/types/wiki";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type WikiCardProps = {
  page: WikiPage;
};

export default function WikiCard({ page }: WikiCardProps) {
  return (
    <Link
      href={`/wiki/${page.slug}`}
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <Badge variant="secondary" className="w-fit">
            {page.category}
          </Badge>
          <CardTitle>{page.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">{page.summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
