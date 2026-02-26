import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const sessions = await prisma.transcriptSession.findMany({
      orderBy: { createdAt: "desc" },
      take: 50
    });
    return NextResponse.json({ sessions });
  } catch (err) {
    console.error("Failed to list transcripts", err);
    return NextResponse.json(
      { error: "Failed to load transcripts." },
      { status: 500 }
    );
  }
}

