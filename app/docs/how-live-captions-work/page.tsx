export default function HowLiveCaptionsWorkPage() {
  return (
    <div className="space-y-5 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">
        How live captions work
      </h1>
      <p>
        NeuroAssist uses the Web Speech API exposed by your browser. When you
        start listening, the app asks the browser to convert microphone audio
        into text, then renders that text as a stream of caption segments.
      </p>
      <p>
        Each segment includes timing information, confidence (when available),
        and speaker metadata. When you save a session, those segments are
        persisted to the local SQLite database as a <code className="rounded bg-slate-900 px-1 py-0.5">TranscriptSession</code>{" "}
        and multiple <code className="rounded bg-slate-900 px-1 py-0.5">TranscriptSegment</code> records.
      </p>
    </div>
  );
}
