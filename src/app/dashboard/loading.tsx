export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-2xl bg-black/5 dark:bg-white/10 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
