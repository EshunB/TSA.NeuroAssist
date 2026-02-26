import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Privacy"
        description="This demo is designed to run locally and give you control over your transcripts."
      />

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardContent className="space-y-3 p-4 text-sm text-slate-700">
          <p>
            NeuroAssist&apos;s local demo uses your browser&apos;s microphone and
            processes audio via the Web Speech API. Transcripts are stored in a
            local SQLite database on your machine.
          </p>
          <p>
            In this demo, there is no remote server collecting or analyzing your
            data. If you delete the database file or clear sessions from the
            app, those transcripts are removed from your machine.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
