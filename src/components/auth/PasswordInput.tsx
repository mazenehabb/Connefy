import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "./Icons";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function PasswordInput({
  label,
  error,
  className = "",
  id,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const inputId = id ?? props.name;
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
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted">
          <LockIcon className="size-[18px]" />
        </span>

        <input
          id={inputId}
          type={visible ? "text" : "password"}
          className={`w-full rounded-xl border bg-brand-card py-3.5 pl-11 pr-11 text-sm text-brand-text outline-none placeholder:text-brand-muted/50 transition-colors duration-150 ${borderStyles} focus:ring-[3px] focus:ring-brand-secondary/15 ${className}`}
          {...props}
        />

        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-muted transition-colors hover:text-brand-text"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOffIcon className="size-[18px]" />
          ) : (
            <EyeIcon className="size-[18px]" />
          )}
        </button>
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
