export default function TranslationDocsPage() {
  return (
    <div className="space-y-5 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">Translation</h1>
      <p>
        The translation layer in NeuroAssist is intentionally simple. It uses a
        provider interface that you can implement for any translation API, plus
        a mock provider that returns predictable, offline-friendly output for
        demo use.
      </p>
      <p>
        In code, the <code className="rounded bg-slate-900 px-1 py-0.5">ITranslationProvider</code> exposes a single{" "}
        <code className="rounded bg-slate-900 px-1 py-0.5">translate()</code>{" "}
        method. The mock implementation looks up a few common phrases and
        otherwise prefixes the text with the target language code so you always
        see that translation is &quot;on&quot;.
      </p>
    </div>
  );
}
