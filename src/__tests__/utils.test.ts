import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn", () => {
  it("returns empty string with no args", () => {
    expect(cn()).toBe("")
  })

  it("returns single class unchanged", () => {
    expect(cn("foo")).toBe("foo")
  })

  it("joins multiple classes", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("skips falsy values", () => {
    expect(cn("foo", false, undefined, null, "bar")).toBe("foo bar")
  })

  it("skips conditional false expression", () => {
    const active = false
    expect(cn("base", active && "active")).toBe("base")
  })

  it("includes conditional true expression", () => {
    const active = true
    expect(cn("base", active && "active")).toBe("base active")
  })

  it("merges conflicting tailwind utilities — last wins", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("merges conflicting padding utilities — last wins", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4")
  })

  it("handles object syntax from clsx", () => {
    expect(cn({ foo: true, bar: false })).toBe("foo")
  })

  it("handles array syntax from clsx", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar")
  })
})
