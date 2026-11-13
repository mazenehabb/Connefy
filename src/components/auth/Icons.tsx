import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c0-4.142 3.358-7 7.5-7s7.5 2.858 7.5 7" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 2 9l10 5.5L22 9l-10-5.5Z" />
      <path d="M6 11.3V16c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.7" />
      <path d="M22 9v6.5" />
    </svg>
  );
}

export function AtSignIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1.3a2.7 2.7 0 0 0 5.4 0V12a9.4 9.4 0 1 0-4.1 7.76" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2.5" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S5.5 5.8 12 5.8 21.5 12 21.5 12 18.5 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
      <path d="M9.9 5.1A10.4 10.4 0 0 1 12 5.8c6.5 0 9.5 6.2 9.5 6.2a16.4 16.4 0 0 1-3.1 4.1M6.5 6.7C3.8 8.4 2.5 12 2.5 12s2.06 4.3 5.9 5.9c1 .4 2 .6 3.1.7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}
