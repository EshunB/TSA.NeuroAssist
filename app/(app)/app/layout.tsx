// Signed-in app layout
// Wraps all application pages (dashboard, captions, transcripts, settings)
// in a shared shell with navigation and consistent spacing.
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
