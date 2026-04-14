import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  size?: "sm" | "lg";
  className?: string;
  descriptionClassName?: string;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  size = "sm",
  className,
  descriptionClassName,
}: PageHeaderProps) {
  const defaultDescriptionClass =
    size === "sm"
      ? "mt-1 text-sm text-muted-foreground"
      : "mt-2 text-muted-foreground";

  return (
    <div className={cn(className)}>
      {eyebrow ? <div>{eyebrow}</div> : null}
      <h1
        className={cn(
          "font-heading font-semibold tracking-tight text-foreground",
          size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl",
          eyebrow ? (size === "lg" ? "mt-2" : "mt-1") : null,
        )}
      >
        {title}
      </h1>
      {description != null ? (
        <div
          className={cn(
            descriptionClassName ?? defaultDescriptionClass,
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
