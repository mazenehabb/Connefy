import { Link } from "react-router-dom";

export default function Footer() {
  return <footer className="mx-auto flex max-w-320 flex-col gap-6 border-t border-brand-border px-5 py-8 sm:px-8 md:flex-row md:items-end md:justify-between md:py-10"><div><Link className="inline-flex items-center gap-2.5 text-[21px] font-bold tracking-[-1.2px]" to="/"><span className="grid size-7.5 place-items-center rounded-[50%_50%_50%_7px] bg-brand-primary font-mono text-[13px] font-medium text-brand-paper -rotate-[14deg]">c.</span>connefy</Link><p className="mt-2.5 text-[13px] text-brand-muted">The pulse of your campus, in one place.</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-brand-muted"><a className="hover:text-brand-primary" href="#how-it-works">About</a><Link className="hover:text-brand-primary" to="/feed">Campus pulse</Link><a className="hover:text-brand-primary" href="#privacy">Privacy</a><span>© 2026</span></div></footer>;
}
