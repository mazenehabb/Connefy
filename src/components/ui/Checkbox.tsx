import type { ReactNode } from "react";
import { CheckIcon } from "../auth/Icons";

type CheckboxProps = {
  id: string;
  children: ReactNode;
};

export default function Checkbox({ id, children }: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
      <span className="relative mt-0.5 flex size-[18px] shrink-0 items-center justify-center">
        <input
          id={id}
          type="checkbox"
          className="peer absolute inset-0 size-full cursor-pointer appearance-none rounded-[6px] border border-brand-border bg-brand-card transition-colors duration-150 checked:border-brand-primary checked:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/40"
        />
        <CheckIcon className="pointer-events-none relative z-10 size-3 text-white opacity-0 transition-opacity duration-150 peer-checked:opacity-100" />
      </span>

      <span className="text-sm leading-6 text-brand-muted">{children}</span>
    </label>
  );
}
