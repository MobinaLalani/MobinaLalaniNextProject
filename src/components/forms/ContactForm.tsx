"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useRichText } from "@/hooks/useRichText";
import texts from "@/contents/texts/fa/index.json";

const schema = z.object({
  name: z.string().min(2, { message: texts.form.errors.nameMin }),
  email: z.string().email({ message: texts.form.errors.emailValid }),
  message: z.string().min(10, { message: texts.form.errors.messageMin }),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const { t } = useRichText();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 800));
    reset();
  }

  return (
    <div className="w-full max-w-xl">
      <Card title={t("form.title") as string} className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <Input
            label={t("form.nameLabel") as string}
            placeholder={t("form.nameLabel") as string}
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label={t("form.emailLabel") as string}
            type="email"
            placeholder={t("form.emailPlaceholder") as string}
            {...register("email")}
            error={errors.email?.message}
          />
          <div>
            <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
              {t("form.messageLabel")}
            </label>
            <textarea
              className="w-full h-28 rounded-xl border border-black/10 dark:border-white/20 bg-white dark:bg-black px-3 py-2 text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-foreground"
              placeholder={t("form.messagePlaceholder") as string}
              {...register("message")}
            />
            {errors.message?.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white dark:bg-white dark:text-black"
          >
            {t("form.submit")}
          </Button>
        </form>
        {isSubmitSuccessful && (
          <p className="text-green-600">{t("form.success")}</p>
        )}
      </Card>
    </div>
  );
}
