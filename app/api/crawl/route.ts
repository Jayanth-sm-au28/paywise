import { crawlWebsite } from '@/app/lib/crawler';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const data = await crawlWebsite(url);
  return NextResponse.json({ success: true, data });
}
