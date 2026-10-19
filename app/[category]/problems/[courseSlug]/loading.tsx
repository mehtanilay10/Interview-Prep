export default function ProblemsCourseLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-canvas-subtle rounded w-1/4" />
        <div className="h-8 bg-canvas-subtle rounded w-1/2" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-48 bg-canvas-subtle rounded" />
          <div className="h-48 bg-canvas-subtle rounded" />
          <div className="h-48 bg-canvas-subtle rounded" />
        </div>
      </div>
    </div>
  );
}
