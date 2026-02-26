"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function TopNav() {
  const pathname = usePathname();
  const inApp = pathname?.startsWith("/app");

  const marketingLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact" }
  ];

  const appLinks = [
    { href: "/app", label: "Dashboard" },
    { href: "/app/captions", label: "Captions" },
    { href: "/app/translate", label: "Translate" },
    { href: "/app/transcripts", label: "Transcripts" },
    { href: "/app/settings", label: "Settings" },
    { href: "/app/help", label: "Help" }
  ];

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-slate-900"
            >
              NeuroAssist
            </Link>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900 ring-1 ring-emerald-300">
              Demo mode – translation is mocked
            </span>
          </div>
          <nav
            aria-label={inApp ? "App navigation" : "Site navigation"}
            className="hidden items-center gap-3 text-sm text-slate-700 sm:flex"
          >
            {(inApp ? appLinks : marketingLinks).map((item) => {
              const active =
                pathname === item.href ||
                pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded px-2 py-1 ${
                    active
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {!inApp && (
            <Button asChild size="sm">
              <Link href="/app">Open app</Link>
            </Button>
          )}
          {inApp && (
            <Button asChild variant="outline" size="sm">
              <Link href="/docs">Docs</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
