import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Live captions that keep up",
    body: "Continuous, low-latency captions tuned for conversations, meetings, and lectures."
  },
  {
    title: "Optional live translation",
    body: "See a second language alongside your captions using a pluggable translation engine."
  },
  {
    title: "Accessibility-first design",
    body: "High contrast themes, adjustable font sizes, and keyboard-friendly controls everywhere."
  },
  {
    title: "Own your transcripts",
    body: "Save sessions locally, search your history, and export text on your terms."
  }
];

export default function LandingPage() {
  return (
    <>
      <section className="grid gap-10 pb-16 pt-4 md:grid-cols-[minmax(0,2.1fr),minmax(0,1.4fr)] md:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-900 ring-1 ring-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Live captions for your laptop
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Turn every voice around you into clear, readable captions.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-700">
            NeuroAssist listens through your laptop microphone and renders
            speech as large, legible captions you can follow at your own pace.
            Add live translation when you need to cross language barriers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/app/captions">Start live captions</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/features">View all features</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/docs/getting-started">Read docs</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-200/80">
            No paid keys required. Runs locally in your browser using the Web
            Speech API. Best experienced in Chrome on desktop.
          </p>
        </div>
        <Card
          aria-label="Screenshot preview"
          className="overflow-hidden border-slate-200 bg-white shadow-md"
        >
          <CardHeader className="border-b border-slate-200 bg-slate-50">
            <CardTitle className="text-sm font-medium text-slate-900">
              Live captions preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 bg-slate-50 p-4 text-xs sm:text-sm">
            <div className="rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-emerald-200">
              <p className="font-semibold text-emerald-800">Speaker 1</p>
              <p className="mt-1 text-slate-800">
                “Welcome to NeuroAssist. Everything you say appears here in
                real time.”
              </p>
            </div>
            <div className="rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-sky-200">
              <p className="font-semibold text-sky-800">Speaker 2</p>
              <p className="mt-1 text-slate-800">
                “You can tune fonts, spacing, and colors so captions match how
                you best read.”
              </p>
            </div>
            <div className="rounded-md bg-slate-50 px-3 py-2 text-[11px] text-slate-700">
              <p className="font-semibold text-slate-900">Translate column</p>
              <p className="mt-1">
                “Hola, ¿cómo estás hoy?” → <span className="text-emerald-300">“Hi, how are you today?”</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6 pb-10">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Built for real everyday listening
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <Card
              key={f.title}
              className="border-slate-200 bg-white text-slate-900"
            >
              <CardHeader>
                <CardTitle className="text-sm font-semibold">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-slate-700">
                {f.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
