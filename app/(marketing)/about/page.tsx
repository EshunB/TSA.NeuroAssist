import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="About NeuroAssist"
        description="NeuroAssist started as a tool for people who prefer reading to listening, and for anyone who benefits from visual support during conversations."
      />

      <Card className="border-slate-200 bg-white text-slate-900">
        <CardContent className="space-y-3 p-4 text-sm text-slate-700">
          <p>
            The goal of NeuroAssist is simple: make spoken language more
            comfortable to follow. Whether you are hard of hearing, autistic,
            ADHD, deaf, or simply overwhelmed by fast speech, live captions can
            give you back control over the pace and clarity of conversations.
          </p>
          <p className="text-sm text-slate-600">
            This project is designed as a local-first, open demo. It shows how
            to build an accessible web experience using the Web Speech API,
            strong keyboard support, and a clear, high-contrast UI.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
