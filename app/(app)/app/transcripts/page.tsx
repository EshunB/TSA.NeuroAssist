"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Session = {
  id: string;
  title: string;
  createdAt: string;
  languageSource: string;
  languageTarget: string | null;
  mode: string;
};

function useTranscripts() {
  return useQuery<{ sessions: Session[] }>({
    queryKey: ["transcripts"],
    queryFn: async () => {
      const res = await fetch("/api/transcripts/list");
      if (!res.ok) {
        throw new Error("Failed to load transcripts");
      }
      return res.json();
    }
  });
}

export default function TranscriptsPage() {
  const { data, isLoading, error } = useTranscripts();

  const sessions = data?.sessions ?? [];

  return (
    <>
      <PageHeader
        title="Transcripts"
        description="Browse your saved sessions. Click a transcript to see its details."
      />

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-slate-900">
            Saved sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 p-4 text-xs text-slate-700">
          {isLoading && <p>Loading transcripts…</p>}
          {error && (
            <p className="rounded-md border border-red-700 bg-red-900/40 px-2 py-1.5 text-red-100">
              {(error as Error).message}
            </p>
          )}
          {!isLoading && !error && sessions.length === 0 && (
            <p className="text-slate-600">
              No transcripts yet. Save a session from Live Captions or Live
              Translate to see it here.
            </p>
          )}
          <ul className="space-y-2">
            {sessions.map((session) => (
              <li key={session.id}>
                <Link
                  href={`/app/transcripts/${session.id}`}
                  className="block rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/70 hover:bg-slate-50"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-900">
                      {session.title}
                    </p>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-700">
                      {session.mode}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    {new Date(session.createdAt).toLocaleString()} •{" "}
                    {session.languageSource}
                    {session.languageTarget
                      ? ` → ${session.languageTarget}`
                      : ""}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
