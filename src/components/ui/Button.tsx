"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-base",
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-muted text-foreground hover:opacity-90",
  outline:
    "bg-transparent text-foreground border border-[color:var(--border)] hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

export default Button;
