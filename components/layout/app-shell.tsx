// Main application shell
// Adds the top navigation and centers the main content column
// for all internal app pages.
import { ReactNode } from "react";
import { TopNav } from "@/components/layout/top-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <TopNav />
      <div className="flex flex-1 justify-center">
        <main
          id="main-content"
          className="w-full max-w-5xl px-6 py-8 lg:px-12"
        >
          <div className="space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
