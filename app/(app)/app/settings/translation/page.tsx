import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsTranslationPage() {
  return (
    <>
      <PageHeader
        title="Caption display"
        description="Control how captions look on screen so they’re easy for you to read."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This is a placeholder for caption display settings. A full version of
          NeuroAssist would let you choose default font sizes, line spacing,
          themes, and layout presets for live captions.
        </CardContent>
      </Card>
    </>
  );
}
