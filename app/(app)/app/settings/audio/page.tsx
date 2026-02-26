import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsAudioPage() {
  return (
    <>
      <PageHeader
        title="Audio settings"
        description="Configure which microphone NeuroAssist should listen to and how sensitive it should be."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This is a placeholder view. In a full version, you&apos;d be able to
          choose input devices, adjust noise reduction, and test input levels.
        </CardContent>
      </Card>
    </>
  );
}
