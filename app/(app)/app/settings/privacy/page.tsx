import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy settings"
        description="Decide how long transcripts are kept and whether to run in local-only mode."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This placeholder explains that, in a full version, you could configure
          data retention policies (for example, auto-deleting transcripts after
          a number of days) and toggle a strict local-only mode with no network
          calls.
        </CardContent>
      </Card>
    </>
  );
}
