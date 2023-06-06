import memeTemplates from "@/data/MemeTemplates"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(memeTemplates)
}
