 "use client";

 import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "Dashboard" },
  { href: "/app/captions", label: "Live Captions" },
  { href: "/app/translate", label: "Live Translate" },
  { href: "/app/transcripts", label: "Transcripts" },
  { href: "/app/settings", label: "Settings" },
  { href: "/app/help", label: "Help" }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="App navigation"
      className="hidden w-64 flex-col border-r border-slate-200 bg-slate-100 p-5 text-sm text-slate-900 md:flex"
    >
      <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        NeuroAssist
      </div>
      <ul className="space-y-1.5">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-slate-200 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500",
                  isActive &&
                    "bg-sky-600 text-white shadow-sm shadow-sky-300/50"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
