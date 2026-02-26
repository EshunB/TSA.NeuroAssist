import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bodySchema = z.object({
  fromName: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().min(1).max(2000)
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { fromName, email, message } = parsed.data;

    await prisma.contactMessage.create({
      data: {
        fromName,
        email,
        message
      }
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save contact message", err);
    return NextResponse.json(
      { error: "Failed to save message." },
      { status: 500 }
    );
  }
}
