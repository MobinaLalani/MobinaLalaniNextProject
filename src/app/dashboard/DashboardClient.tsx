"use client";
import Card from "@/components/ui/Card";
import { usePosts } from "@/hooks/usePosts";
import { useRichText } from "@/hooks/useRichText";

export default function DashboardClient() {
  const { data, isLoading, error } = usePosts();
  const { t } = useRichText();
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-2xl bg-black/5 dark:bg-white/10 animate-pulse"
          />
        ))}
      </div>
    );
  }
  if (error) {
    return <p className="text-red-600">{t("dashboard.error")}</p>;
  }
  const posts = (data ?? []).slice(0, 8);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((p) => (
        <Card key={p.id} title={p.title}>
          <p className="line-clamp-3">{p.body}</p>
        </Card>
      ))}
    </div>
  );
}
