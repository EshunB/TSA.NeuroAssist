export type SpeechSegment = {
  text: string;
  isFinal: boolean;
  confidence?: number;
  startTimeMs: number;
  endTimeMs: number;
};

export type SpeechProviderStatus =
  | "idle"
  | "listening"
  | "paused"
  | "unsupported"
  | "error";

export interface SpeechProviderOptions {
  language: string;
  interimResults?: boolean;
  continuous?: boolean;
}

export interface ISpeechProvider {
  readonly status: SpeechProviderStatus;
  readonly error: string | null;

  start(options: SpeechProviderOptions, onSegment: (segment: SpeechSegment) => void): void;
  pause(): void;
  resume(): void;
  stop(): void;
}
