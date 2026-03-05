import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsAccountPage() {
  return (
    <>
      <PageHeader
        title="Account"
        description="Profile information for your local NeuroAssist account."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This workspace uses a local-first profile. Your data is stored
          securely in your local instance.
        </CardContent>
      </Card>
    </>
  );
}
