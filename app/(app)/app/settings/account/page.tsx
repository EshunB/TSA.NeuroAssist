import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsAccountPage() {
  return (
    <>
      <PageHeader
        title="Account"
        description="Demo profile information for the local NeuroAssist user."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This demo uses a single local &quot;Demo User&quot; behind the
          scenes. A production setup would connect this page to a real
          authentication system and user profile settings.
        </CardContent>
      </Card>
    </>
  );
}
