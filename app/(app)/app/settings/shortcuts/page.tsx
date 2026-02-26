import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsShortcutsPage() {
  return (
    <>
      <PageHeader
        title="Keyboard shortcuts"
        description="Review the built-in shortcuts and imagine how you might customize them."
      />
      <Card className="border-slate-800/80 bg-slate-950/60 text-slate-100">
        <CardContent className="space-y-2 p-4 text-xs text-slate-300">
          <p>Current shortcuts:</p>
          <ul className="space-y-1">
            <li>
              <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono">
                Space
              </span>{" "}
              – Start / pause listening on Live Captions.
            </li>
            <li>
              <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono">
                Ctrl / Cmd + S
              </span>{" "}
              – Save the current session.
            </li>
            <li>
              <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono">
                Esc
              </span>{" "}
              – Stop listening.
            </li>
          </ul>
          <p>
            A future version could allow per-user customization of these
            bindings, saved in the database.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
