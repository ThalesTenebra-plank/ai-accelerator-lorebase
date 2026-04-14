"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MOCK_ANSWER =
  "Based on the wiki, React Server Components let you render components on the server, reducing client-side JavaScript. They cannot use browser APIs or React hooks — add `'use client'` only when those are needed. (React Server Components)";

export default function QueryPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!question.trim()) return;
    setAnswer(MOCK_ANSWER);
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10">
      <h1 className="mb-1 text-2xl font-semibold tracking-tight">Query the Wiki</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Ask a question — answers are pulled from wiki content.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="e.g. What are React Server Components?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={!question.trim()}>
          Ask
        </Button>
      </form>

      {answer !== null && (
        <div className="mt-6 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm leading-relaxed text-foreground">
          <p className="mb-1 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Answer
          </p>
          {answer}
        </div>
      )}
    </div>
  );
}
