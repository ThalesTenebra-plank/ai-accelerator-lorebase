import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categoryTone: Record<string, string> = {
  Onboarding: "border-transparent bg-chart-5/25 text-foreground",
  Engineering: "border-transparent bg-chart-1/20 text-foreground",
  "Design system": "border-transparent bg-chart-2/20 text-foreground",
  Process: "border-transparent bg-chart-3/20 text-foreground",
  Playbook: "border-transparent bg-chart-1/18 text-foreground",
  Reference: "border-transparent bg-chart-2/18 text-foreground",
  Guide: "border-transparent bg-chart-3/18 text-foreground",
  "Meeting notes": "border-transparent bg-chart-4/22 text-foreground",
  "Decision log": "border-transparent bg-chart-5/22 text-foreground",
};

const fallback = "border-border bg-muted text-muted-foreground";

export type CategoryBadgeProps = Omit<
  React.ComponentProps<typeof Badge>,
  "children"
> & {
  category: string;
};

export function CategoryBadge({
  category,
  className,
  ...props
}: CategoryBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(categoryTone[category] ?? fallback, className)}
      {...props}
    >
      {category}
    </Badge>
  );
}
