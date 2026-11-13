import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[0.9375rem] font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-brand-primary text-white shadow-[0_1px_0_0_rgba(255,255,255,0.14)_inset,0_12px_24px_-10px_rgba(102,101,245,0.65)] hover:bg-brand-secondary active:scale-[0.98]",
    secondary:
      "border border-brand-border bg-brand-card text-brand-text hover:border-brand-secondary/40 hover:bg-brand-elevated active:scale-[0.98]",
    ghost:
      "text-brand-muted hover:bg-brand-elevated/60 hover:text-brand-text active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
