import Card from "@/components/ui/Card";
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";
import texts from "@/contents/texts/fa/index.json";

export const metadata = {
  title: texts.dashboard.title,
  description: texts.dashboard.description,
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {texts.dashboard.title}
        </h2>
        <Suspense
          fallback={
            <div className="space-y-4">
              <div className="h-24 rounded-2xl bg-black/5 dark:bg-white/10 animate-pulse" />
            </div>
          }
        >
          <DashboardClient />
        </Suspense>
      </div>
    </div>
  );
}
