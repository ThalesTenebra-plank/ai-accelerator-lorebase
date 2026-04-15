"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type QueryResponse =
  | { answer: string; question: string; source: string }
  | { error: string };

export default function QueryPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;

    setIsPending(true);
    setAnswer(null);

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = (await response.json()) as QueryResponse;
      if (!response.ok) {
        setAnswer("error" in data ? data.error : "Request failed.");
        return;
      }

      setAnswer("answer" in data ? data.answer : "No answer returned.");
    } catch {
      setAnswer("Request failed.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10">
      <PageHeader
        className="mb-6"
        title="Query the Wiki"
        description="Ask a question — answers are pulled from wiki content."
      />

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="e.g. What are React Server Components?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isPending || !question.trim()}>
          {isPending ? "Asking…" : "Ask"}
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
