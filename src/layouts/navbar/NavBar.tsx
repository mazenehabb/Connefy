import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="relative z-20">
      <nav
        className="mx-auto flex max-w-320 items-center justify-between gap-6 px-5 py-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          className="inline-flex items-center gap-2.5 text-[21px] font-bold tracking-[-1.2px]"
          to="/"
          aria-label="Connefy home"
        >
          <span className="grid size-7.5 place-items-center rounded-[50%_50%_50%_7px] bg-brand-primary font-mono text-[13px] font-medium text-brand-paper -rotate-[14deg]">
            c.
          </span>
          connefy
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-brand-muted md:flex">
          <a className="hover:text-brand-ink" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-brand-ink" href="#campus-life">
            Campus life
          </a>
          <NavLink className="hover:text-brand-ink" to="/feed">
            Explore pulse
          </NavLink>
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            className="hidden px-3.5 py-2.5 text-sm font-semibold sm:block"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="rounded-full bg-brand-ink px-4 py-2.5 text-sm font-semibold text-brand-paper transition hover:-translate-y-0.5 hover:bg-brand-primary sm:px-5"
            to="/signup"
          >
            Join your campus <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="text-2xl md:hidden"
            type="button"
            aria-label="Open navigation"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
