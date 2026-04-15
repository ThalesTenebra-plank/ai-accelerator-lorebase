export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ status: "error", message: "Invalid JSON body" }, { status: 400 })
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return Response.json({ status: "error", message: "Body must be a JSON object" }, { status: 400 })
  }

  const { text } = body as { text?: unknown }

  if (!text || typeof text !== "string" || text.trim() === "") {
    return Response.json({ status: "error", message: "Missing required field: text" }, { status: 400 })
  }

  return Response.json({ status: "ok", message: "LLM not configured yet" })
}
