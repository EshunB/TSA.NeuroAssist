import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AppDashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome to NeuroAssist"
        description="Quickly start live captions and review your recent transcripts in one simple dashboard."
      />

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr),minmax(0,1.5fr)]">
        <Card className="border-slate-200 bg-white text-slate-900">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Quick start with captions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-600">
            <ol className="list-decimal space-y-2 pl-4">
              <li>
                Connect your microphone and open{" "}
                <Link href="/app/captions" className="font-medium underline">
                  Live Captions
                </Link>
                .
              </li>
              <li>Press Space to start or pause listening at any time.</li>
              <li>Press Ctrl/Cmd+S to save a captions session to your history.</li>
              <li>Visit Settings to adjust fonts, contrast, shortcuts, and more.</li>
            </ol>
          </CardContent>
        </Card>
        <Card className="border-slate-200 bg-slate-50 text-slate-900">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              Device status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-600">
            <p>
              NeuroAssist uses your browser&apos;s microphone and the Web Speech
              API. The first time you start captions, your browser will ask for
              microphone access.
            </p>
            <p>
              For the most reliable experience, we recommend using Chrome on
              desktop with a wired or high‑quality headset.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
