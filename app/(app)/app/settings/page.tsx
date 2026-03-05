import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    label: "Audio",
    description:
      "Configure which microphone NeuroAssist should listen to and how sensitive it should be. In a full version, you'd be able to choose input devices, adjust noise reduction, and test input levels.",
  },
  {
    label: "Translation",
    description:
      "Choose your default target language and translation provider. The demo ships with a mock translation provider. A full version would let you plug in real translation APIs and configure default languages.",
  },
  {
    label: "Accessibility",
    description:
      "Adjust fonts, caption size, contrast themes, and more to match how you read best. A full build would let you pick font size, caption density, contrast themes, and a dyslexia-friendly font toggle.",
  },
  {
    label: "Privacy",
    description:
      "Decide how long transcripts are kept and whether to run in local-only mode. You could configure data retention policies and toggle a strict local-only mode with no network calls.",
  },
  {
    label: "Account",
    description:
      "This workspace uses a local-first profile. Your data is stored securely in your local instance.",
  },
];

const shortcuts = [
  { key: "Space", action: "Start / pause listening on Live Captions." },
  { key: "Ctrl / Cmd + S", action: "Save the current session." },
  { key: "Esc", action: "Stop listening." },
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Fine-tune how NeuroAssist listens, looks, and behaves."
      />

      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.label} className="border-slate-200 bg-white">
            <CardHeader className="pb-1">
              <CardTitle className="text-sm font-semibold text-slate-900">
                {section.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              {section.description}
            </CardContent>
          </Card>
        ))}

        <Card className="border-slate-200 bg-white">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm font-semibold text-slate-900">
              Keyboard shortcuts
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            <ul className="space-y-2">
              {shortcuts.map((s) => (
                <li key={s.key} className="flex items-start gap-2">
                  <span className="shrink-0 rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 font-mono text-xs">
                    {s.key}
                  </span>
                  <span>{s.action}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              Custom shortcut bindings may be supported in a future version.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
