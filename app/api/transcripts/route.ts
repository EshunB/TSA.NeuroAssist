import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const segmentSchema = z.object({
  startTimeMs: z.number().int().nonnegative(),
  endTimeMs: z.number().int().nonnegative(),
  speakerLabel: z.string().nullable(),
  originalText: z.string().min(1),
  translatedText: z.string().nullable(),
  confidence: z.number().min(0).max(1).nullable()
});

const bodySchema = z.object({
  title: z.string().min(1).max(200),
  languageSource: z.string().min(2),
  languageTarget: z.string().min(2).nullable(),
  mode: z.enum(["captions", "translate"]),
  segments: z.array(segmentSchema).min(1)
});

// For MVP we use a single demo user so the app runs without auth.
const DEMO_USER_EMAIL = "demo@neuroassist.local";

async function getOrCreateDemoUser() {
  const existing = await prisma.user.findUnique({
    where: { email: DEMO_USER_EMAIL }
  });
  if (existing) return existing;
  return prisma.user.create({
    data: {
      email: DEMO_USER_EMAIL,
      name: "Demo User"
    }
  });
}

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

    const { title, languageSource, languageTarget, mode, segments } =
      parsed.data;

    const user = await getOrCreateDemoUser();

    const durationMs =
      segments.length > 0
        ? segments[segments.length - 1]!.endTimeMs
        : null;

    const session = await prisma.transcriptSession.create({
      data: {
        title,
        languageSource,
        languageTarget: languageTarget ?? undefined,
        mode,
        durationMs: durationMs ?? undefined,
        userId: user.id,
        segments: {
          createMany: {
            data: segments.map((s) => ({
              startTimeMs: s.startTimeMs,
              endTimeMs: s.endTimeMs,
              speakerLabel: s.speakerLabel ?? undefined,
              originalText: s.originalText,
              translatedText: s.translatedText ?? undefined,
              confidence: s.confidence ?? undefined
            }))
          }
        }
      }
    });

    return NextResponse.json({ id: session.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to save transcript", err);
    return NextResponse.json(
      { error: "Failed to save transcript." },
      { status: 500 }
    );
  }
}
