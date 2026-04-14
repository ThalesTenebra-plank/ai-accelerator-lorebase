"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/sonner"

export default function IngestPage() {
  const [text, setText] = useState("")
  const [isPending, setIsPending] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return

    setIsPending(true)
    // Simulate async work; LLM integration comes later
    setTimeout(() => {
      toast.warning("LLM not configured", {
        description: "Set ANTHROPIC_API_KEY in .env.local to enable ingest.",
      })
      setIsPending(false)
    }, 400)
  }

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-12 sm:px-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Ingest</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Paste any raw text and an LLM will extract a structured wiki article.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="Paste your source text here…"
            className="min-h-64 resize-y"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <Button type="submit" disabled={isPending || !text.trim()} className="self-end">
            {isPending ? "Processing…" : "Ingest"}
          </Button>
        </form>
      </div>
    </>
  )
}
