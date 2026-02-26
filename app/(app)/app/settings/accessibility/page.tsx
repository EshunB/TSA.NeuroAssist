import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsAccessibilityPage() {
  return (
    <>
      <PageHeader
        title="Accessibility settings"
        description="Adjust fonts, caption size, contrast themes, and more to match how you read best."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This is a placeholder view. In a full build, this page would let you
          pick font size, caption density, contrast themes, and a
          dyslexia-friendly font toggle, stored per user.
        </CardContent>
      </Card>
    </>
  );
}
