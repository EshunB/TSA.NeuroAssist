import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featureSections = [
  {
    title: "Live captions",
    points: [
      "Continuous captioning tuned for conversations and meetings.",
      "High-contrast caption blocks that auto-scroll as you speak.",
      "Keyboard shortcuts for start, pause, and save – no tiny buttons."
    ]
  },
  {
    title: "Live translation",
    points: [
      "Optional second column that mirrors captions in another language.",
      "Mock translation engine that works out of the box (no API keys).",
      "Pluggable provider interface so you can wire real APIs later."
    ]
  },
  {
    title: "Transcript library",
    points: [
      "Save a session in one shortcut and revisit it any time.",
      "Search across titles and transcript text.",
      "Export your data, including caption timings, as plain text or caption files."
    ]
  },
  {
    title: "Accessibility and comfort",
    points: [
      "Adjustable font size, line height, and caption density.",
      "Theme options tuned for contrast and low-light use.",
      "Keyboard-first navigation across the entire app."
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Features"
        description="Everything in NeuroAssist is designed around one goal: make spoken words easier to follow and remember."
        actions={
          <Button asChild size="sm" variant="outline">
            <Link href="/app/captions">Try live captions</Link>
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {featureSections.map((section) => (
          <Card
            key={section.title}
            className="border-slate-200 bg-white text-slate-900"
          >
            <CardHeader>
              <CardTitle className="text-sm font-semibold">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-slate-700">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
