import { mockWikiPages } from "@/lib/mock-data"

export async function GET() {
  return Response.json(mockWikiPages)
}

export async function POST(request: Request) {
  const body = await request.json()
  return Response.json(body, { status: 200 })
}
