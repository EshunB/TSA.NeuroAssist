export default function ChangelogPage() {
  return (
    <div className="space-y-4 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">Changelog</h1>
      <section>
        <h2 className="text-sm font-semibold text-slate-900">
          Initial demo
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-700">
          <li>Created NeuroAssist marketing site and docs section.</li>
          <li>Implemented live captions using the Web Speech API.</li>
          <li>Added demo translation provider and a pluggable interface.</li>
          <li>Added a local SQLite-backed transcript store via Prisma.</li>
        </ul>
      </section>
    </div>
  );
}
