import { NextRequest, NextResponse } from "next/server";

import { askAI } from "@/app/lib/ai";
import { Content } from "@/app/models/Content";

export async function POST(req: NextRequest) {
  const { query, website } = await req.json();
  // const content = await Content.findOne({ url: website });
  const response = await askAI(query);
  return NextResponse.json({ answer: response });
}
