import { Link } from "react-router-dom";
const logo =
  "inline-flex items-center gap-2.5 text-[30px] font-bold tracking-[-1.2px]";

interface BrandPanelProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function BrandPanel({
  subtitle,
  title,
  description,
}: BrandPanelProps) {
  return (
    <aside className="relative hidden overflow-hidden bg-brand-ink px-[clamp(32px,6vw,88px)] py-10 text-brand-paper lg:block before:absolute before:-bottom-65 before:-left-40 before:size-162.5 before:rounded-full before:border before:border-brand-lime/70 before:shadow-[0_0_0_70px_transparent,0_0_0_71px_rgba(184,235,65,.35),0_0_0_157px_transparent,0_0_0_158px_rgba(184,235,65,.18)]">
      <Link className={`${logo} relative z-10`} to="/">
        <span className="grid size-7.5 place-items-center rounded-[50%_50%_50%_7px] bg-brand-lime font-mono text-[13px] font-medium text-brand-ink -rotate-[14deg]">
          c.
        </span>
        connefy
      </Link>
      <div className="relative z-10 mt-[clamp(120px,20vh,210px)] max-w-147.5">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[.12em] text-brand-lime before:size-2 before:rounded-full before:bg-brand-primary before:shadow-[0_0_0_4px_rgba(240,100,76,.24)]">
          {subtitle}
        </span>
        <h1 className="my-5 text-[clamp(46px,5vw,72px)] font-bold leading-[.95] tracking-[-.075em]">
          {title}
        </h1>
        <p className="max-w-105 text-base leading-relaxed text-[#c9d3d3]">
          {description}
        </p>
      </div>
      <div className="absolute bottom-[6%] right-[8%] size-82.5 rounded-full border border-dashed border-white/38 before:absolute before:left-28.75 before:top-28.75 before:size-23 before:rounded-full before:bg-brand-primary before:shadow-[-133px_-48px_0_-27px_#b8eb41,156px_-71px_0_-30px_#4758e8,89px_156px_0_-35px_#fffdf8] after:absolute after:inset-13.5 after:rounded-full after:border after:border-brand-lime/65" />
    </aside>
  );
}
