import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Security"
        description="The local demo of NeuroAssist keeps your data on your machine by default."
      />

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardContent className="space-y-3 p-4 text-sm text-slate-700">
          <p>
            In this demo, transcripts are stored in a local SQLite database
            bundled with the app. There is no built-in cloud sync or data
            export to remote servers.
          </p>
          <p>
            If you adapt this project into a hosted product, you can layer on
            proper authentication, encryption at rest, and network-level
            protections. The codebase is structured so you can swap providers
            and infrastructure later.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
