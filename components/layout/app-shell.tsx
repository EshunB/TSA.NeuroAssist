import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <TopNav />
      <div className="flex flex-1">
        <Sidebar />
        <main
          id="main-content"
          className="flex-1 border-l border-slate-200 bg-slate-50 px-4 py-4 lg:px-8"
        >
          <div className="mx-auto max-w-6xl space-y-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
