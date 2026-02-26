import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "NeuroAssist – Accessible Live Captions & Translation",
  description:
    "NeuroAssist is a desktop assistant for hearing‑impaired people, providing live captions and translation for everyday conversations and calls."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only sr-only-focusable focus-visible:outline-none"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
