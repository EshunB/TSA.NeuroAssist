"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { WebSpeechProvider } from "@/lib/providers/webSpeechProvider";
import type { SpeechSegment } from "@/lib/providers/speechProvider";

type UiSegment = SpeechSegment & { id: string };

export default function LiveCaptionsPage() {
  const [provider] = useState(() => new WebSpeechProvider());
  const [language, setLanguage] = useState("en-US");
  const [segments, setSegments] = useState<UiSegment[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const isListening = provider.status === "listening";
  const isUnsupported = provider.status === "unsupported";
  const hasError = !!provider.error;

  const handleSegment = useCallback((segment: SpeechSegment) => {
    setSegments((prev) => [
      ...prev,
      {
        ...segment,
        id: `${Date.now()}-${prev.length}`
      }
    ]);
  }, []);

  const startListening = () => {
    provider.start(
      {
        language,
        interimResults: true,
        continuous: true
      },
      handleSegment
    );
  };

  const stopListening = () => {
    provider.stop();
  };

  const clearSession = () => {
    setSegments([]);
    setSaveError(null);
  };

  const fullText = useMemo(
    () => segments.map((s) => s.text).join(" "),
    [segments]
  );

  const handleSave = async () => {
    if (!segments.length || isSaving) return;
    setIsSaving(true);
    setSaveError(null);
    try {
      const res = await fetch("/api/transcripts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Live captions session",
          languageSource: language,
          languageTarget: null,
          mode: "captions",
          segments: segments.map((s) => ({
            startTimeMs: s.startTimeMs,
            endTimeMs: s.endTimeMs,
            speakerLabel: s.speakerLabel ?? null,
            originalText: s.text,
            translatedText: null,
            confidence: s.confidence ?? null
          }))
        })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Failed to save transcript.");
      }
      clearSession();
    } catch (err) {
      setSaveError(
        err instanceof Error ? err.message : "Failed to save transcript."
      );
    } finally {
      setIsSaving(false);
    }
  };

  // Keyboard shortcuts: Space (start/stop), Ctrl/Cmd+S to save, Esc to stop.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target as HTMLElement | null)?.isContentEditable
      ) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        if (isListening) {
          stopListening();
        } else {
          startListening();
        }
      }

      const isSave =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s";
      if (isSave) {
        event.preventDefault();
        void handleSave();
      }

      if (event.key === "Escape") {
        stopListening();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isListening, startListening, stopListening]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [segments]);

  return (
    <>
      <PageHeader
        title="Live Captions"
        description="See what’s being said around you in real time. Use Space to start or pause, and Ctrl/Cmd+S to save."
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant={isListening ? "outline" : "default"}
              onClick={isListening ? stopListening : startListening}
              aria-pressed={isListening}
            >
              {isListening ? "Pause listening (Space)" : "Start listening (Space)"}
            </Button>
            <Button
              variant="outline"
              onClick={clearSession}
              disabled={!segments.length}
            >
              Clear
            </Button>
            <Button
              variant="secondary"
              onClick={handleSave}
              disabled={!segments.length || isSaving}
            >
              {isSaving ? "Saving…" : "Save session (Ctrl/Cmd+S)"}
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-[minmax(0,2.3fr),minmax(0,1.2fr)]">
        <Card className="flex min-h-[320px] flex-col border-slate-200 bg-white text-slate-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-slate-200">
            <CardTitle className="text-sm font-medium text-slate-900">
              Live captions stream
            </CardTitle>
            <span className="text-xs text-slate-500">
              Status:{" "}
              <span className="font-medium text-slate-900">
                {isUnsupported
                  ? "Not supported"
                  : isListening
                  ? "Listening"
                  : "Stopped"}
              </span>
            </span>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3 pt-3">
            {isUnsupported && (
              <p className="rounded-md border border-dashed border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                Your browser does not support the Web Speech API. Try Chrome on
                desktop for live captions, or check the Docs for alternatives.
              </p>
            )}
            {hasError && (
              <p className="rounded-md border border-dashed border-red-300 bg-red-50 px-3 py-2 text-xs text-red-800">
                {provider.error}
              </p>
            )}
            <div
              ref={scrollRef}
              className="flex-1 space-y-2 overflow-auto rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed"
              aria-label="Live captions"
            >
              {segments.length === 0 && (
                <p className="text-xs text-slate-600">
                  Press <span className="font-semibold">Space</span> or select{" "}
                  <span className="font-semibold">Start listening</span> to see
                  captions here. Text will appear in high‑contrast blocks as you
                  speak.
                </p>
              )}
              {segments.map((segment) => (
                <div
                  key={segment.id}
                  className="rounded-md bg-white px-2 py-1.5 shadow-sm shadow-slate-200 ring-1 ring-slate-200"
                >
                  <p className="text-slate-900">{segment.text}</p>
                  {typeof segment.confidence === "number" && (
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Confidence: {(segment.confidence * 100).toFixed(0)}%
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white text-slate-900">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-900">
              Session summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-700">
            <div className="flex items-center justify-between text-xs">
              <span>Language</span>
              <select
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Caption language"
              >
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
              </select>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Segments</span>
              <span className="font-semibold text-slate-900">
                {segments.length}
              </span>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-slate-900">
                Keyboard shortcuts
              </p>
              <ul className="space-y-1">
                <li>
                  <span className="rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10px] font-mono">
                    Space
                  </span>{" "}
                  Start / pause listening
                </li>
                <li>
                  <span className="rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10px] font-mono">
                    Ctrl
                    <span className="mx-0.5">/</span>Cmd + S
                  </span>{" "}
                  Save session
                </li>
                <li>
                  <span className="rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10px] font-mono">
                    Esc
                  </span>{" "}
                  Stop listening
                </li>
              </ul>
            </div>
            {saveError && (
              <p className="rounded-md border border-red-300 bg-red-50 px-2 py-1.5 text-xs text-red-800">
                {saveError}
              </p>
            )}
            <div className="mt-2">
              <p className="mb-1 text-xs font-medium text-slate-900">
                Current buffer
              </p>
              <div className="h-24 overflow-auto rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs leading-relaxed text-slate-900">
                {fullText || (
                  <span className="text-slate-600">
                    Text from this session will appear here as a single block
                    once you start speaking.
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
