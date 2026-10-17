export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8 h-8 w-64 animate-pulse rounded-lg bg-canvas-subtle" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-canvas p-6 dark:bg-canvas-subtle">
            <div className="mb-4 h-6 w-48 animate-pulse rounded bg-canvas-subtle" />
            <div className="space-y-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-4 w-full animate-pulse rounded bg-canvas-subtle" style={{ width: `${40 + j * 13}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
