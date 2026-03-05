export default function TranslationDocsPage() {
  return (
    <div className="space-y-5 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">Captions only mode</h1>
      <p>
        This version of NeuroAssist focuses on clear, readable captions rather
        than live translation. Everything runs locally in your browser using
        the Web Speech API.
      </p>
      <p>
        A future release could add an optional translation layer again, but for
        now the product is optimized for fast, high-contrast captions in a
        single language.
      </p>
    </div>
  );
}
