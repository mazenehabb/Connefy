import logo from "../../assets/images/logo/logo.svg";

const PROOF_INITIALS = ["A", "M", "R", "S"];

export default function AuthBranding() {
  return (
    <div className="relative z-10">
      <img src={logo} alt="Connefy" className="h-9 w-auto" />

      <div className="mt-24 max-w-md">
        <p className="text-sm font-medium text-brand-cyan">
          Built for genuine connection
        </p>

        <h1 className="mt-4 font-display text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-brand-text xl:text-[3.25rem]">
          Find your people, wherever you are.
        </h1>

        <p className="mt-5 max-w-sm text-[15px] leading-7 text-brand-muted">
          Join conversations, share ideas, and keep up with the communities and
          people that matter to you — all in one place.
        </p>
      </div>

      <div className="mt-14 flex items-center gap-4">
        <div className="flex -space-x-2.5">
          {PROOF_INITIALS.map((letter) => (
            <div
              key={letter}
              className="flex size-9 items-center justify-center rounded-full border-2 border-brand-sidebar bg-brand-elevated text-xs font-semibold text-brand-text"
            >
              {letter}
            </div>
          ))}
        </div>

        <p className="text-sm text-brand-muted">
          <span className="font-semibold text-brand-text">4,200+ members</span>{" "}
          already connected
        </p>
      </div>
    </div>
  );
}
