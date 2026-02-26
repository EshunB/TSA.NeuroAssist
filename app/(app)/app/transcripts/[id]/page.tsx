import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

type Props = {
  params: { id: string };
};

export default async function TranscriptDetailPage({ params }: Props) {
  const session = await prisma.transcriptSession.findUnique({
    where: { id: params.id },
    include: { segments: { orderBy: { startTimeMs: "asc" } } }
  });

  if (!session) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={session.title}
        description={`${session.mode} • ${session.languageSource}${
          session.languageTarget ? ` → ${session.languageTarget}` : ""
        }`}
      />

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-slate-900">
            Transcript
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-4 text-xs text-slate-700">
          {session.segments.length === 0 ? (
            <p className="text-slate-600">
              This transcript has no segments yet.
            </p>
          ) : (
            <ul className="space-y-1">
              {session.segments.map((segment) => (
                <li
                  key={segment.id}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5"
                >
                  <p className="text-[10px] text-slate-500">
                    {segment.startTimeMs}–{segment.endTimeMs} ms
                  </p>
                  <p className="text-slate-900">{segment.originalText}</p>
                  {segment.translatedText && (
                    <p className="mt-0.5 text-[11px] text-emerald-800">
                      {segment.translatedText}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </>
  );
}
