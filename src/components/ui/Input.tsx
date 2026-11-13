import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
  error?: string;
};

export default function Input({
  label,
  icon,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;
  const paddingX = icon ? "pl-11 pr-4" : "px-4";
  const borderStyles = error
    ? "border-red-400/60 focus:border-red-400"
    : "border-brand-border hover:border-brand-secondary/40 focus:border-brand-secondary";

  return (
    <div className="w-full space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-brand-text"
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          className={`w-full rounded-xl border bg-brand-card py-3.5 ${paddingX} text-sm text-brand-text outline-none placeholder:text-brand-muted/50 transition-colors duration-150 ${borderStyles} focus:ring-[3px] focus:ring-brand-secondary/15 ${className}`}
          {...props}
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
