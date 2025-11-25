import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ title, children, className }: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[color:var(--border)] p-6 bg-background shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      )}
      <div className="text-foreground/80">{children}</div>
    </div>
  );
}
