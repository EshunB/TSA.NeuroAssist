import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Pricing"
        description="The local demo of NeuroAssist is free to run on your own machine. A future Pro plan is planned for power users."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-emerald-300 bg-white text-slate-900">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Free demo (local)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-700">
            <p>
              Run NeuroAssist on your own laptop using your browser&apos;s built-in
              speech recognition. No account, no cloud upload, and no API keys.
            </p>
            <ul className="space-y-1">
              <li>✓ Live captions from your microphone</li>
              <li>✓ Mock translation for testing the workflow</li>
              <li>✓ Local SQLite database for transcripts</li>
              <li>✓ Basic settings and keyboard shortcuts</li>
            </ul>
            <Button asChild size="sm" className="mt-2">
              <Link href="/docs/getting-started">Set up on your laptop</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white text-slate-900">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Pro (coming later)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-700">
            <p>
              A future Pro edition is planned for people who rely on captions
              every day, with deeper customization and optional cloud sync.
            </p>
            <ul className="space-y-1">
              <li>• Advanced theming and profiles</li>
              <li>• Real translation providers (bring your own key)</li>
              <li>• Multi-device sync and backup</li>
            </ul>
            <p className="text-slate-400">
              For now, everything in this repository is focused on the
              accessible, local-first experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
