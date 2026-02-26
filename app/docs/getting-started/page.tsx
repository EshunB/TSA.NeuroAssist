export default function GettingStartedPage() {
  return (
    <div className="space-y-5 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">Getting started</h1>
      <p>
        NeuroAssist is a local-first demo that runs on your machine using
        Next.js, Prisma with SQLite, and the Web Speech API built into your
        browser.
      </p>
      <ol className="list-decimal space-y-2 pl-4 text-slate-800">
        <li>Install Node.js 18+ and npm.</li>
        <li>Install dependencies with <code className="rounded bg-slate-900 px-1 py-0.5">npm install</code>.</li>
        <li>
          Apply database migrations with{" "}
          <code className="rounded bg-slate-900 px-1 py-0.5">
            npx prisma migrate dev --name init
          </code>
          .
        </li>
        <li>
          Start the dev server with{" "}
          <code className="rounded bg-slate-900 px-1 py-0.5">npm run dev</code>{" "}
          and open <code className="rounded bg-slate-900 px-1 py-0.5">http://localhost:3000</code>.
        </li>
        <li>
          Navigate to{" "}
          <code className="rounded bg-slate-900 px-1 py-0.5">
            /app/captions
          </code>{" "}
          to begin live captioning.
        </li>
      </ol>
    </div>
  );
}
