import { describe, it, expect } from "vitest"
import { INGEST_PROMPT, QUERY_PROMPT, LINT_PROMPT } from "@/lib/prompts"

describe("INGEST_PROMPT", () => {
  it("is a non-empty string", () => {
    expect(typeof INGEST_PROMPT).toBe("string")
    expect(INGEST_PROMPT.length).toBeGreaterThan(0)
  })

  it("contains {{SOURCE_TEXT}} placeholder", () => {
    expect(INGEST_PROMPT).toContain("{{SOURCE_TEXT}}")
  })

  it("contains {{CATEGORIES}} placeholder", () => {
    expect(INGEST_PROMPT).toContain("{{CATEGORIES}}")
  })
})

describe("QUERY_PROMPT", () => {
  it("is a non-empty string", () => {
    expect(typeof QUERY_PROMPT).toBe("string")
    expect(QUERY_PROMPT.length).toBeGreaterThan(0)
  })

  it("contains {{QUESTION}} placeholder", () => {
    expect(QUERY_PROMPT).toContain("{{QUESTION}}")
  })

  it("contains {{WIKI_CONTEXT}} placeholder", () => {
    expect(QUERY_PROMPT).toContain("{{WIKI_CONTEXT}}")
  })
})

describe("LINT_PROMPT", () => {
  it("is a non-empty string", () => {
    expect(typeof LINT_PROMPT).toBe("string")
    expect(LINT_PROMPT.length).toBeGreaterThan(0)
  })

  it("contains {{WIKI_PAGES_JSON}} placeholder", () => {
    expect(LINT_PROMPT).toContain("{{WIKI_PAGES_JSON}}")
  })
})
