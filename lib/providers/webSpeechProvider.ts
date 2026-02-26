/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ISpeechProvider,
  SpeechProviderOptions,
  SpeechProviderStatus,
  SpeechSegment
} from "./speechProvider";

type WebSpeechRecognition = any;

export class WebSpeechProvider implements ISpeechProvider {
  private recognition: WebSpeechRecognition | null = null;
  status: SpeechProviderStatus = "idle";
  error: string | null = null;

  private getRecognition(): WebSpeechRecognition | null {
    if (typeof window === "undefined") return null;
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.status = "unsupported";
      this.error =
        "Web Speech API is not supported in this browser. Try Chrome on desktop.";
      return null;
    }
    if (!this.recognition) {
      this.recognition = new SpeechRecognition();
    }
    return this.recognition;
  }

  start(
    options: SpeechProviderOptions,
    onSegment: (segment: SpeechSegment) => void
  ) {
    const recognition = this.getRecognition();
    if (!recognition) return;

    recognition.lang = options.language;
    recognition.interimResults = options.interimResults ?? true;
    recognition.continuous = options.continuous ?? true;

    const sessionStart = performance.now();

    recognition.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0]?.transcript?.trim();
        if (!transcript) continue;
        const isFinal = result.isFinal;
        const confidence = result[0]?.confidence;
        const now = performance.now() - sessionStart;

        const segment: SpeechSegment = {
          text: transcript,
          isFinal,
          confidence,
          startTimeMs: Math.max(0, Math.floor(now - 1000)),
          endTimeMs: Math.floor(now)
        };
        onSegment(segment);
      }
    };

    recognition.onerror = (event: any) => {
      this.status = "error";
      this.error =
        event?.error === "not-allowed"
          ? "Microphone access was blocked. Please allow access in your browser."
          : `Speech recognition error: ${event?.error ?? "unknown"}`;
    };

    recognition.onend = () => {
      if (this.status !== "paused") {
        this.status = "idle";
      }
    };

    try {
      recognition.start();
      this.status = "listening";
      this.error = null;
    } catch (err) {
      this.status = "error";
      this.error =
        err instanceof Error
          ? err.message
          : "Failed to start speech recognition.";
    }
  }

  pause() {
    if (!this.recognition) return;
    this.recognition.stop();
    this.status = "paused";
  }

  resume() {
    if (!this.recognition) return;
    try {
      this.recognition.start();
      this.status = "listening";
    } catch {
      // ignore resume failures
    }
  }

  stop() {
    if (!this.recognition) return;
    this.recognition.onresult = null;
    this.recognition.onerror = null;
    this.recognition.onend = null;
    this.recognition.stop();
    this.status = "idle";
  }
}
