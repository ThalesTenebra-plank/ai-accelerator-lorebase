import { describe, it, expect } from "vitest"
import { mockWikiPages } from "@/lib/mock-data"

describe("mockWikiPages", () => {
  it("is an array", () => {
    expect(Array.isArray(mockWikiPages)).toBe(true)
  })

  it("has 5 entries", () => {
    expect(mockWikiPages).toHaveLength(5)
  })

  it("each page has required string fields", () => {
    for (const page of mockWikiPages) {
      expect(typeof page.slug).toBe("string")
      expect(page.slug.length).toBeGreaterThan(0)
      expect(typeof page.title).toBe("string")
      expect(page.title.length).toBeGreaterThan(0)
      expect(typeof page.summary).toBe("string")
      expect(page.summary.length).toBeGreaterThan(0)
      expect(typeof page.category).toBe("string")
      expect(page.category.length).toBeGreaterThan(0)
      expect(typeof page.body).toBe("string")
      expect(page.body.length).toBeGreaterThan(0)
    }
  })

  it("each page has a tags array", () => {
    for (const page of mockWikiPages) {
      expect(Array.isArray(page.tags)).toBe(true)
      expect(page.tags.length).toBeGreaterThan(0)
    }
  })

  it("slugs are unique", () => {
    const slugs = mockWikiPages.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("optional createdAt/updatedAt are ISO strings when present", () => {
    for (const page of mockWikiPages) {
      if (page.createdAt) {
        expect(() => new Date(page.createdAt!)).not.toThrow()
        expect(new Date(page.createdAt!).toISOString()).toBe(page.createdAt)
      }
      if (page.updatedAt) {
        expect(() => new Date(page.updatedAt!)).not.toThrow()
        expect(new Date(page.updatedAt!).toISOString()).toBe(page.updatedAt)
      }
    }
  })

  it("optional sources have required id and type fields", () => {
    for (const page of mockWikiPages) {
      if (page.sources) {
        for (const source of page.sources) {
          expect(typeof source.id).toBe("string")
          expect(["url", "text"]).toContain(source.type)
        }
      }
    }
  })
})
