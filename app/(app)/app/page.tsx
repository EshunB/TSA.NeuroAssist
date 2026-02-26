import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AppDashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome to NeuroAssist!"
        description="NeuroAssit allows you to quickly access live captions, see recent transcripts, and translate speech right on the web."
      />

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr),minmax(0,1.5fr)]">
        <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Quick start
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-200">
            <ol className="list-decimal space-y-2 pl-4">
              <li>
                Connect your microphone and open{" "}
                <Link href="/app/captions" className="font-medium underline">
                  Live Captions
                </Link>
                .
              </li>
              <li>You can press Space to start or pause live listening.</li>
              <li>You can press Ctrl/Cmd+S to save a live translation session.</li>
              <li>You can visit the Settings page to change fonts, contrast colors, shortcuts and more.</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Device status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-200">
            <p>
              NeuroAssist uses your browser&apos;s microphone and Web Speech API.
              You&apos;ll be asked for microphone access the first time you
              start captions.
            </p>
            <p>
              For the most reliable experience, we at NeuroAssit recommend using Chrome on
              desktop with a wired or high‑quality headset.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
