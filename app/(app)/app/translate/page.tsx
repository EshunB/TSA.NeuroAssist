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
import { MockTranslationProvider } from "@/lib/providers/translationProvider";

type UiSegment = SpeechSegment & { id: string; translatedText?: string };

export default function LiveTranslatePage() {
  const [speechProvider] = useState(() => new WebSpeechProvider());
  const [translationProvider] = useState(() => new MockTranslationProvider());

  const [sourceLanguage, setSourceLanguage] = useState("en-US");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [segments, setSegments] = useState<UiSegment[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const isListening = speechProvider.status === "listening";
  const isUnsupported = speechProvider.status === "unsupported";
  const hasError = !!speechProvider.error;

  const handleSegment = useCallback(
    async (segment: SpeechSegment) => {
      let translatedText: string | undefined;
      try {
        translatedText = await translationProvider.translate({
          text: segment.text,
          sourceLanguage,
          targetLanguage
        });
      } catch {
        translatedText = undefined;
      }

      setSegments((prev) => [
        ...prev,
        {
          ...segment,
          id: `${Date.now()}-${prev.length}`,
          translatedText
        }
      ]);
    },
    [sourceLanguage, targetLanguage, translationProvider]
  );

  const startListening = () => {
    speechProvider.start(
      {
        language: sourceLanguage,
        interimResults: true,
        continuous: true
      },
      (segment) => {
        void handleSegment(segment);
      }
    );
  };

  const stopListening = () => {
    speechProvider.stop();
  };

  const clearSession = () => {
    setSegments([]);
    setSaveError(null);
  };

  const fullSource = useMemo(
    () => segments.map((s) => s.text).join(" "),
    [segments]
  );
  const fullTarget = useMemo(
    () => segments.map((s) => s.translatedText ?? "").join(" "),
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
          title: "Live translate session",
          languageSource: sourceLanguage,
          languageTarget,
          mode: "translate",
          segments: segments.map((s) => ({
            startTimeMs: s.startTimeMs,
            endTimeMs: s.endTimeMs,
            speakerLabel: s.speakerLabel ?? null,
            originalText: s.text,
            translatedText: s.translatedText ?? null,
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
        title="Live Translate"
        description="See an original language and a translated column side by side. Uses a mock translator so it always works in demo mode."
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant={isListening ? "secondary" : "default"}
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

      <div className="grid gap-4 md:grid-cols-[minmax(0,2.1fr),minmax(0,1.4fr)]">
        <Card className="border-slate-200 bg-white text-slate-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-slate-200">
            <CardTitle className="text-sm font-medium text-slate-900">
              Live translation stream
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
                desktop for live translate, or check the Docs for alternatives.
              </p>
            )}
            {hasError && (
              <p className="rounded-md border border-dashed border-red-300 bg-red-50 px-3 py-2 text-xs text-red-800">
                {speechProvider.error}
              </p>
            )}
            <div
              ref={scrollRef}
              className="flex-1 overflow-auto rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed"
              aria-label="Live translation"
            >
              {segments.length === 0 && (
                <p className="text-xs text-slate-600">
                  Press <span className="font-semibold">Space</span> or select{" "}
                  <span className="font-semibold">Start listening</span> to see
                  captions here. The mock translator will annotate each segment
                  with the chosen target language.
                </p>
              )}
              {segments.map((segment) => (
                <div
                  key={segment.id}
                  className="mb-2 grid gap-2 rounded-md bg-white px-2 py-1.5 shadow-sm shadow-slate-200 ring-1 ring-slate-200 md:grid-cols-2"
                >
                  <div>
                    <p className="text-[11px] font-medium text-slate-600">
                      Original
                    </p>
                    <p className="text-slate-900">{segment.text}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-600">
                      Translated
                    </p>
                    <p className="text-emerald-700">
                      {segment.translatedText ?? "…"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white text-slate-900">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-900">
              Session settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-700">
            <div className="flex items-center justify-between gap-2">
              <label className="text-xs font-medium">Source language</label>
              <select
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900"
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
              >
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
              </select>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="text-xs font-medium">Target language</label>
              <select
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                <option value="es">Spanish (mock)</option>
                <option value="fr">French (mock)</option>
              </select>
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
                    Ctrl / Cmd + S
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
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-medium text-slate-900">
                  Source buffer
                </p>
                <div className="h-20 overflow-auto rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[11px] leading-relaxed text-slate-900">
                  {fullSource || (
                    <span className="text-slate-600">
                      Original text from this session will appear here.
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-slate-900">
                  Translated buffer
                </p>
                <div className="h-20 overflow-auto rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[11px] leading-relaxed text-emerald-800">
                  {fullTarget || (
                    <span className="text-slate-400">
                      The mock translator&apos;s output will appear here.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
