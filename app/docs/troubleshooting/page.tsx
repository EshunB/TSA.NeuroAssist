export default function TroubleshootingPage() {
  return (
    <div className="space-y-5 text-sm text-slate-800">
      <h1 className="text-xl font-semibold tracking-tight">Troubleshooting</h1>
      <ul className="space-y-2">
        <li>
          <strong>Captions are not appearing</strong>: Make sure you have
          granted microphone access in your browser and that you are using a
          browser that supports the Web Speech API (Chrome on desktop works
          best).
        </li>
        <li>
          <strong>Browser says the feature is unsupported</strong>: If you see
          a message that your browser does not support speech recognition, try
          switching to Chrome on a desktop or laptop device.
        </li>
        <li>
          <strong>Saving a session fails</strong>: Ensure that your dev server
          is still running and that the Prisma migrations have been applied
          using <code className="rounded bg-slate-900 px-1 py-0.5">npx prisma migrate dev</code>.
        </li>
      </ul>
    </div>
  );
}
