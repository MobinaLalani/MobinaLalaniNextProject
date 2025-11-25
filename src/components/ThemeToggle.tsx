"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { useRichText } from "@/hooks/useRichText";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? systemTheme : theme;
  const { t } = useRichText();
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        aria-label={t("theme.toggleLabel") as string}
        title={t("theme.toggleLabel") as string}
        onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      >
        {mounted ? (current === "dark" ? "☀️" : "🌙") : "🌓"}
      </Button>
    </div>
  );
}
