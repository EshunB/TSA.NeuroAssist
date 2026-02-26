import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsTranslationPage() {
  return (
    <>
      <PageHeader
        title="Translation settings"
        description="Choose your default target language and translation provider."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="p-4 text-xs text-slate-300">
          This is a placeholder. The demo ships with a mock translation
          provider. A full version would let you plug in real translation APIs
          and configure default languages.
        </CardContent>
      </Card>
    </>
  );
}
