"use client"
import { createContext, useContext, ReactNode } from "react"
import { useTheme } from "next-themes"
import { colors } from "@/lib/theme/colors"

type Mode = "light" | "dark"
type Ctx = { mode: Mode; setTheme: (t: "light" | "dark" | "system") => void; tokens: typeof colors.light }

const ThemeCtx = createContext<Ctx | null>(null)

export function ThemeCtxProvider({ children }: { children: ReactNode }) {
  const { theme, systemTheme, setTheme } = useTheme()
  const cur = theme === "system" ? systemTheme : theme
  const mode: Mode = cur === "dark" ? "dark" : "light"
  const tokens = mode === "dark" ? colors.dark : colors.light
  return <ThemeCtx.Provider value={{ mode, setTheme, tokens }}>{children}</ThemeCtx.Provider>
}

export function useThemeCtx() {
  const v = useContext(ThemeCtx)
  if (!v) throw new Error("ThemeCtx missing")
  return v
}

