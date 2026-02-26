import Link from "next/link";

export default function DocsHomePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
          NeuroAssist Docs
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Documentation
        </h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Learn how to run NeuroAssist locally, how live captions work in the
          browser, and how to extend the app with your own speech and
          translation providers.
        </p>
      </header>

      <nav className="grid gap-3 text-sm text-slate-800 md:grid-cols-2">
        <Link
          href="/docs/getting-started"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/60 hover:bg-slate-50"
        >
          <p className="font-medium">Getting started</p>
          <p className="text-xs text-slate-600">
            Install dependencies, set up the database, and run the dev server.
          </p>
        </Link>
        <Link
          href="/docs/how-live-captions-work"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/60 hover:bg-slate-50"
        >
          <p className="font-medium">How live captions work</p>
          <p className="text-xs text-slate-600">
            Under the hood: Web Speech API, segments, and saving sessions.
          </p>
        </Link>
        <Link
          href="/docs/translation"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/60 hover:bg-slate-50"
        >
          <p className="font-medium">Translation</p>
          <p className="text-xs text-slate-600">
            Learn about the mock translation provider and how to plug in real
            APIs.
          </p>
        </Link>
        <Link
          href="/docs/keyboard-shortcuts"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/60 hover:bg-slate-50"
        >
          <p className="font-medium">Keyboard shortcuts</p>
          <p className="text-xs text-slate-600">
            All of the key bindings for captions, saving, and navigation.
          </p>
        </Link>
        <Link
          href="/docs/troubleshooting"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/60 hover:bg-slate-50"
        >
          <p className="font-medium">Troubleshooting</p>
          <p className="text-xs text-slate-600">
            Common issues like microphone permissions and unsupported browsers.
          </p>
        </Link>
        <Link
          href="/docs/changelog"
          className="rounded-md border border-slate-200 bg-white px-3 py-2 hover:border-sky-500/60 hover:bg-slate-50"
        >
          <p className="font-medium">Changelog</p>
          <p className="text-xs text-slate-600">
            A running log of changes to this demo.
          </p>
        </Link>
      </nav>
    </div>
  );
}
