import type { WikiPage } from "@/types/wiki"

export const WIKI_CATEGORIES = [
  "Playbook",
  "Reference",
  "Guide",
  "Meeting notes",
  "Decision log",
] as const

export type WikiCategory = (typeof WIKI_CATEGORIES)[number]

export type WikiPageTemplateKey = Extract<
  keyof WikiPage,
  "slug" | "title" | "summary" | "category" | "tags" | "body"
>

export type WikiPageTemplateField = {
  key: WikiPageTemplateKey
  label: string
  description?: string
  required: boolean
}

export const WIKI_PAGE_TEMPLATE: readonly WikiPageTemplateField[] = [
  {
    key: "slug",
    label: "Slug",
    description: "Stable URL segment (e.g. wiki/[slug]).",
    required: true,
  },
  { key: "title", label: "Title", required: true },
  {
    key: "summary",
    label: "Summary",
    description: "Short blurb for cards and search previews.",
    required: true,
  },
  {
    key: "category",
    label: "Category",
    description: "Must be one of the configured wiki categories.",
    required: true,
  },
  {
    key: "tags",
    label: "Tags",
    description: "Free-form labels for discovery.",
    required: true,
  },
  {
    key: "body",
    label: "Body",
    description: "Main page content (markdown).",
    required: true,
  },
]

export type WikiMetadataKey = Extract<
  keyof WikiPage,
  "sources" | "createdAt" | "updatedAt"
>

export type WikiMetadataField = {
  key: WikiMetadataKey
  label: string
  description?: string
}

export const WIKI_METADATA_FIELDS: readonly WikiMetadataField[] = [
  {
    key: "sources",
    label: "Sources",
    description: "URLs or pasted excerpts supporting the page.",
  },
  {
    key: "createdAt",
    label: "Created at",
    description: "ISO-8601 timestamp when the page was first captured.",
  },
  {
    key: "updatedAt",
    label: "Updated at",
    description: "ISO-8601 timestamp of the last substantive edit.",
  },
]

export const wikiSchema = {
  categories: WIKI_CATEGORIES,
  pageTemplate: WIKI_PAGE_TEMPLATE,
  metadataFields: WIKI_METADATA_FIELDS,
} as const
