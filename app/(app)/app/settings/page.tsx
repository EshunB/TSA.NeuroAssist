import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const settingsLinks = [
  { href: "/app/settings/audio", label: "Audio", description: "Microphone selection and capture options." },
  { href: "/app/settings/translation", label: "Translation", description: "Default languages and provider." },
  { href: "/app/settings/accessibility", label: "Accessibility", description: "Fonts, contrast, and caption styles." },
  { href: "/app/settings/privacy", label: "Privacy", description: "Data retention and local-only mode." },
  { href: "/app/settings/shortcuts", label: "Shortcuts", description: "Keyboard shortcuts and customization." },
  { href: "/app/settings/account", label: "Account", description: "Demo profile and identity." }
];

export default function SettingsHubPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Fine-tune how NeuroAssist listens, looks, and behaves. All sections are placeholders in this demo."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {settingsLinks.map((item) => (
          <Card
            key={item.href}
            className="border-slate-800/80 bg-slate-950/60 text-slate-100"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
