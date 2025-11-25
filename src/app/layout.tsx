import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeCtxProvider } from "@/components/providers/ThemeContext";
import texts from "@/contents/texts/fa/index.json";

const geistSans = localFont({
  variable: "--font-geist-sans",
  src: [
    {
      path: "../../public/fonts/YekanBakh-VF.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../../public/fonts/YekanBakh-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  display: "swap",
});

const geistMono = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: texts.app.title,
    template: `%s | ${texts.app.title}`,
  },
  description: texts.app.description,
  keywords: ["Next.js", "React", "Frontend", "فرانت‌اند", "پروژه"],
  openGraph: {
    title: texts.app.title,
    description: "پروژه نمونه با Next.js 14",
    type: "website",
    locale: "fa_IR",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: texts.app.title,
    description: "پروژه نمونه با Next.js 14",
  },
  alternates: {
    canonical: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <ThemeCtxProvider>
              <header className="sticky top-0 z-10 w-full border-b border-[color:var(--border)] bg-background">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                  <span className="font-semibold">{texts.app.header}</span>
                  <ThemeToggle />
                </div>
              </header>
              {children}
            </ThemeCtxProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
