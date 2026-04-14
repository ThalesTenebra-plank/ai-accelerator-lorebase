export type WikiPage = {
  /** Stable URL identifier. Used for `src/app/wiki/[slug]`. */
  slug: string
  title: string
  summary: string
  category: string
  tags: string[]
  body: string
  sources?: WikiSource[]
  createdAt?: string
  updatedAt?: string
}

export type WikiSource =
  | {
      id: string
      type: "url"
      title?: string
      url: string
      addedAt?: string
    }
  | {
      id: string
      type: "text"
      title?: string
      text: string
      addedAt?: string
    }

export type WikiLintResult = {
  status: "ok" | "warning" | "error"
  summary: string
  warnings: Array<{
    pageSlug?: string
    message: string
    suggestion?: string
  }>
}
