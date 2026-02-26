import type { ReactNode } from "react";
import { TopNav } from "@/components/layout/top-nav";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />
      <main
        id="main-content"
        className="mx-auto flex max-w-5xl flex-col px-4 pb-10 pt-8 lg:px-8"
      >
        {children}
      </main>
    </div>
  );
}
