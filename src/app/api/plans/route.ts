import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.fojiai.com";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/plans`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Plans API error:", res.status, res.statusText);
      return NextResponse.json([], { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Plans fetch failed:", err);
    return NextResponse.json([], { status: 502 });
  }
}
