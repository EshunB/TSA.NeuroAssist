import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  return (
    <>
      <PageHeader
        title="Onboarding"
        description="A simple first-run checklist to get you comfortable with NeuroAssist."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="space-y-3 p-4 text-xs text-slate-300">
          <ol className="list-decimal space-y-1 pl-4">
            <li>Confirm your microphone is connected and working.</li>
            <li>
              Visit the{" "}
              <Link href="/app/captions" className="underline">
                Live Captions
              </Link>{" "}
              page.
            </li>
            <li>Allow microphone access when your browser asks.</li>
            <li>Say a sentence out loud and watch it appear on screen.</li>
            <li>Press Ctrl / Cmd + S to save a test session.</li>
          </ol>
          <Button asChild size="sm" className="mt-2">
            <Link href="/app/captions">Start Live Captions</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
