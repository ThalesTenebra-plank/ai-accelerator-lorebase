import { describe, it, expect } from "vitest"
import {
  WIKI_CATEGORIES,
  WIKI_PAGE_TEMPLATE,
  WIKI_METADATA_FIELDS,
  wikiSchema,
} from "@/lib/schema"

describe("WIKI_CATEGORIES", () => {
  it("is non-empty", () => {
    expect(WIKI_CATEGORIES.length).toBeGreaterThan(0)
  })

  it("contains expected values", () => {
    expect(WIKI_CATEGORIES).toContain("Playbook")
    expect(WIKI_CATEGORIES).toContain("Reference")
    expect(WIKI_CATEGORIES).toContain("Guide")
    expect(WIKI_CATEGORIES).toContain("Meeting notes")
    expect(WIKI_CATEGORIES).toContain("Decision log")
  })

  it("has exactly 5 categories", () => {
    expect(WIKI_CATEGORIES).toHaveLength(5)
  })
})

describe("WIKI_PAGE_TEMPLATE", () => {
  it("has exactly 6 fields", () => {
    expect(WIKI_PAGE_TEMPLATE).toHaveLength(6)
  })

  it("all fields have key and label", () => {
    for (const field of WIKI_PAGE_TEMPLATE) {
      expect(field.key).toBeTruthy()
      expect(field.label).toBeTruthy()
    }
  })

  it("all fields are required", () => {
    for (const field of WIKI_PAGE_TEMPLATE) {
      expect(field.required).toBe(true)
    }
  })

  it("contains slug, title, summary, category, tags, body keys", () => {
    const keys = WIKI_PAGE_TEMPLATE.map((f) => f.key)
    expect(keys).toContain("slug")
    expect(keys).toContain("title")
    expect(keys).toContain("summary")
    expect(keys).toContain("category")
    expect(keys).toContain("tags")
    expect(keys).toContain("body")
  })
})

describe("WIKI_METADATA_FIELDS", () => {
  it("has exactly 3 fields", () => {
    expect(WIKI_METADATA_FIELDS).toHaveLength(3)
  })

  it("contains sources, createdAt, updatedAt keys", () => {
    const keys = WIKI_METADATA_FIELDS.map((f) => f.key)
    expect(keys).toContain("sources")
    expect(keys).toContain("createdAt")
    expect(keys).toContain("updatedAt")
  })

  it("all fields have key and label", () => {
    for (const field of WIKI_METADATA_FIELDS) {
      expect(field.key).toBeTruthy()
      expect(field.label).toBeTruthy()
    }
  })
})

describe("wikiSchema", () => {
  it("exposes categories", () => {
    expect(wikiSchema.categories).toBe(WIKI_CATEGORIES)
  })

  it("exposes pageTemplate", () => {
    expect(wikiSchema.pageTemplate).toBe(WIKI_PAGE_TEMPLATE)
  })

  it("exposes metadataFields", () => {
    expect(wikiSchema.metadataFields).toBe(WIKI_METADATA_FIELDS)
  })
})
