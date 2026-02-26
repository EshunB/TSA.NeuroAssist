import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HelpPage() {
  return (
    <>
      <PageHeader
        title="Help & FAQ"
        description="Quick answers to common questions, with links into the docs."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="space-y-3 p-4 text-xs text-slate-300">
          <p>
            For detailed setup instructions, see{" "}
            <Link href="/docs/getting-started" className="underline">
              Getting started
            </Link>
            . To learn how captions work, visit{" "}
            <Link href="/docs/how-live-captions-work" className="underline">
              How live captions work
            </Link>
            .
          </p>
          <p>
            If speech recognition is not working or your browser says it&apos;s
            unsupported, check{" "}
            <Link href="/docs/troubleshooting" className="underline">
              Troubleshooting
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </>
  );
}
