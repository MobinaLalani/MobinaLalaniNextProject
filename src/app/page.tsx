import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import Button from "@/components/ui/Button";
import texts from "@/contents/texts/fa/index.json";
export const metadata = {
  title: "خانه",
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 py-20 px-6 bg-background sm:items-start">
        <h1 className="text-3xl font-semibold text-white dark:text-zinc-50">
          {texts.home.title}
        </h1>
        <p className="text-foreground/70">{texts.home.description}</p>
        <ContactForm />
        <div className="w-full">
          <Link href="/dashboard" className="block">
            <Button className="w-full" variant="primary">
              {texts.home.viewDashboard}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
