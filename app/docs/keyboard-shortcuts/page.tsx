export default function KeyboardShortcutsPage() {
  return (
    <div className="space-y-5 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">
        Keyboard shortcuts
      </h1>
      <ul className="space-y-2">
        <li>
          <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-xs font-mono">
            Space
          </span>{" "}
          – Start or pause live captioning on the /app/captions page.
        </li>
        <li>
          <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-xs font-mono">
            Ctrl / Cmd + S
          </span>{" "}
          – Save the current caption session to the local database.
        </li>
        <li>
          <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-xs font-mono">
            Esc
          </span>{" "}
          – Stop listening without clearing the current on-screen captions.
        </li>
      </ul>
    </div>
  );
}
