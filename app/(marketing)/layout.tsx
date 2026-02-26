import type { ReactNode } from "react";
import { TopNav } from "@/components/layout/top-nav";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />
      <main
        id="main-content"
        className="mx-auto flex max-w-6xl flex-col px-4 pb-10 pt-10 lg:px-8"
      >
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} NeuroAssist. Built for accessibility first.</p>
          <nav className="flex flex-wrap gap-3">
            <a href="/accessibility" className="hover:text-slate-900">
              Accessibility
            </a>
            <a href="/privacy" className="hover:text-slate-100">
              Privacy
            </a>
            <a href="/security" className="hover:text-slate-100">
              Security
            </a>
            <a href="/docs" className="hover:text-slate-100">
              Docs
            </a>
            <a href="/contact" className="hover:text-slate-100">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
