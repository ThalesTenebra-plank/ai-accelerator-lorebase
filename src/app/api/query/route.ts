type QueryRequestBody = {
  question?: unknown
}

const MOCK_ANSWER =
  "Mock answer (Task 22): React Server Components render on the server, reducing client JS. They cannot use hooks or browser APIs — add 'use client' only when needed."

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as QueryRequestBody
  const question =
    typeof body.question === "string" ? body.question.trim() : ""

  if (!question) {
    return Response.json(
      { error: "Missing `question`." },
      { status: 400 }
    )
  }

  return Response.json(
    {
      question,
      answer: MOCK_ANSWER,
      source: "mock",
    },
    { status: 200 }
  )
}

