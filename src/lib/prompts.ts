/**
 * Prompt templates for LLM integration.
 * These are plain text templates — no LLM calls are made here.
 * Replace {{PLACEHOLDERS}} with real values before sending to a model.
 */

// ---------------------------------------------------------------------------
// Ingest
// ---------------------------------------------------------------------------

/**
 * Used to extract structured wiki content from a raw text source.
 *
 * Placeholders:
 *   {{SOURCE_TEXT}}   — the raw text submitted by the user
 *   {{CATEGORIES}}    — comma-separated list of valid category labels
 */
export const INGEST_PROMPT = `You are a knowledge-base curator. Given the raw source text below, extract a structured wiki article.

Return a JSON object matching this shape (no markdown fences, raw JSON only):
{
  "slug": string,         // URL-safe identifier derived from the title: lowercase, hyphens instead of spaces, no special chars
  "title": string,        // concise, title-cased
  "summary": string,      // one or two sentences, plain text
  "category": string,     // must be one of: {{CATEGORIES}}
  "tags": string[],       // 3–7 lowercase keywords
  "body": string          // full article in Markdown
}

Rules:
- Do not fabricate facts not present in the source text.
- Keep the body under 600 words unless the source is significantly longer.
- Choose the single most appropriate category.

Source text:
"""
{{SOURCE_TEXT}}
"""`;

// ---------------------------------------------------------------------------
// Query
// ---------------------------------------------------------------------------

/**
 * Used to answer a natural-language question against wiki context.
 *
 * Placeholders:
 *   {{QUESTION}}      — the user's question
 *   {{WIKI_CONTEXT}}  — concatenated relevant wiki page bodies
 */
export const QUERY_PROMPT = `You are a helpful assistant for an internal knowledge wiki. Answer the question below using only the provided wiki context. If the context does not contain enough information, say so honestly — do not guess.

Question:
{{QUESTION}}

Wiki context:
"""
{{WIKI_CONTEXT}}
"""

Answer concisely in plain text. Cite the relevant article title(s) in parentheses at the end of your answer if applicable.`;

// ---------------------------------------------------------------------------
// Lint
// ---------------------------------------------------------------------------

/**
 * Used to health-check a collection of wiki pages and surface quality issues.
 *
 * Placeholders:
 *   {{WIKI_PAGES_JSON}} — JSON array of WikiPage objects (slug, title, summary, body, category, tags)
 */
export const LINT_PROMPT = `You are a wiki quality auditor. Review the wiki pages provided below and return a JSON object matching this TypeScript type (no markdown fences, raw JSON only):
{
  "status": "ok" | "warning" | "error",
  "summary": string,
  "warnings": Array<{
    "pageSlug": string | undefined,   // omit if the issue is not tied to a specific page
    "message": string,
    "suggestion": string | undefined  // omit if no specific fix can be suggested
  }>
}

Check for:
- Missing or too-short summaries (under 20 characters)
- Bodies under 50 words
- Pages with no tags
- Duplicate or near-duplicate titles
- Categories that do not match any known category

Set "status" to "error" if any critical issue is found, "warning" for minor issues, and "ok" if everything looks healthy.

Wiki pages (JSON):
{{WIKI_PAGES_JSON}}`;
