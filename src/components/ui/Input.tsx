"use client";
import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { useThemeCtx } from "@/components/providers/ThemeContext";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  darkLabelClassName?: string;
  darkClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    className,
    label,
    error,
    id,
    labelClassName,
    inputClassName,
    containerClassName,
    darkLabelClassName,
    darkClassName,
    ...props
  },
  ref
) {
  const inputId = id || label?.replace(/\s+/g, "-").toLowerCase();
  const { mode } = useThemeCtx();
  return (
    <div className={clsx("w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            "block text-sm mb-1 text-foreground",
            labelClassName,
            mode === "dark" && darkLabelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={clsx(
          "w-full h-10 rounded-xl border border-[color:var(--input)] bg-white dark:bg-black px-3 text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]",
          error && "ring-2 ring-red-500 border-red-500",
          inputClassName,
          mode === "dark" && darkClassName,
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
});

export default Input;
