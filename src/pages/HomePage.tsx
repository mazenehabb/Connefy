import { Link } from "react-router-dom";

const eyebrow =
  "inline-flex items-center gap-2 text-[11px] font-mono font-medium uppercase tracking-[.12em] text-brand-muted before:size-2 before:rounded-full before:bg-brand-lime before:shadow-[0_0_0_4px_#ddefa8]";

function PulseScene() {
  return (
    <div
      className="relative mx-auto h-132 w-152 max-w-full shrink-0 max-[650px]:-mb-28 max-[650px]:h-105 max-[650px]:w-152 max-[650px]:scale-75"
      aria-label="A visual representation of community activity"
    >
      <div className="absolute left-6 top-0 size-132 rounded-full border border-brand-border" />
      <div className="absolute left-17 top-10 size-111 rounded-full border border-dashed border-[#aeb3ae]" />
      <div className="absolute left-32.5 top-25 size-81 rounded-full border border-dashed border-[#aeb3ae]" />
      <div className="absolute left-34 top-30 z-10 w-80 rotate-[-4deg] rounded-[18px] border border-brand-ink/12 bg-brand-paper p-4.5 shadow-[7px_8px_0_rgba(17,36,45,.12)]">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.08em] text-brand-muted">
          <span>Live map</span>
          <span className="text-[#dd4f39] before:mr-1 before:inline-block before:size-1.5 before:rounded-full before:bg-brand-primary">
            live now
          </span>
        </div>
        <div
          className="relative my-3.5 h-51 overflow-hidden rounded-xl bg-[#dcebc3]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49%, rgba(17,36,45,.18) 50%, transparent 51%), linear-gradient(transparent 49%, rgba(17,36,45,.18) 50%, transparent 51%)",
            backgroundSize: "55px 55px",
          }}
        >
          <svg
            viewBox="0 0 300 205"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          >
            <path
              d="M55 104C102 58 183 68 240 110c23 17 15 48-8 51-53 8-138-33-177-78"
              fill="none"
              stroke="#4758e8"
              strokeWidth="15"
            />
            <circle cx="47" cy="44" r="17" fill="#11242d" />
            <circle cx="138" cy="96" r="14" fill="#11242d" />
            <circle cx="225" cy="143" r="35" fill="#f0644c" />
          </svg>
          <span className="absolute bottom-4 left-5 rounded-md bg-brand-ink px-2.5 py-1.5 text-[11px] font-semibold text-brand-paper">
            <b className="text-brand-lime">●</b> 26 people here
          </span>
        </div>
        <h3 className="text-[19px] font-semibold tracking-[-.04em]">
          Central Commons
        </h3>
        <p className="mt-1 text-xs text-brand-muted">
          Meetups, pop-ups &amp; good coffee.
        </p>
      </div>
      <div className="absolute right-4 top-16 z-20 flex items-center gap-2.5 rotate-[7deg] rounded-[18px] border border-brand-ink/12 bg-brand-paper px-3.5 py-3 text-xs font-semibold shadow-[7px_8px_0_rgba(17,36,45,.12)]">
        <span className="grid size-7 place-items-center rounded-lg bg-[#ffe1d9] text-[15px]">
          ✦
        </span>
        <span>
          Design club
          <br />
          meets at 6
        </span>
      </div>
      <div className="absolute bottom-23 left-4 z-20 flex items-center gap-2.5 -rotate-[7deg] rounded-[18px] border border-brand-ink/12 bg-brand-paper px-3.5 py-3 text-xs font-semibold shadow-[7px_8px_0_rgba(17,36,45,.12)]">
        <span className="grid size-7 place-items-center rounded-lg bg-[#ddefa8] text-[15px]">
          ☻
        </span>
        <span>
          18 new
          <br />
          connections
        </span>
      </div>
      <div className="absolute bottom-14 right-5 z-20 grid size-26 place-items-center rounded-full border-2 border-brand-ink bg-brand-lime pt-3 text-center font-mono text-[11px] font-medium leading-[1.3] -rotate-[14deg] before:absolute before:top-2.5 before:content-['✦'] before:text-xl">
        YOUR
        <br />
        SOCIAL
        <br />
        PULSE
      </div>
    </div>
  );
}

function Feature({
  number,
  title,
  copy,
  className = "",
}: {
  number: string;
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <article
      className={`min-h-54 rounded-[18px] border border-brand-border bg-brand-paper p-6 ${className}`}
    >
      <span className="mb-8 block font-mono text-[11px] font-medium text-[#7c8584] md:mb-14">
        {number}
      </span>
      <h3 className="mb-2 text-2xl font-semibold tracking-[-.05em]">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-muted">{copy}</p>
    </article>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative mx-auto grid min-h-172 max-w-320 grid-cols-1 items-center gap-8 overflow-hidden px-5 py-14 sm:px-8 lg:grid-cols-[.94fr_1.06fr] lg:py-18 before:absolute before:-left-28 before:top-9 before:size-85 before:rounded-[48%_52%_51%_49%] before:border before:border-brand-border before:rotate-[22deg]">
        <div className="relative z-10">
          <span className={eyebrow}>Your community, in motion</span>
          <h1 className="mt-5 max-w-162 text-[clamp(52px,6.25vw,82px)] font-bold leading-[.94] tracking-[-.075em]">
            Find the people who make your world feel{" "}
            <span className="relative inline-block text-brand-secondary after:absolute after:inset-x-[-5px] after:bottom-0.5 after:-z-10 after:h-3.5 after:rounded-full after:bg-brand-lime after:-rotate-2">
              like yours.
            </span>
          </h1>
          <p className="mt-6 max-w-117.5 text-base leading-relaxed text-brand-muted sm:text-lg">
            Connefy is the living space for everyday connection — the communities,
            conversations, and shared moments that bring people together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              className="rounded-full bg-brand-primary px-5 py-3.5 text-sm font-bold text-brand-paper shadow-[5px_5px_0_#11242d] transition hover:-translate-y-0.5"
              to="/signup"
            >
              Find your circle →
            </Link>
            <Link
              className="rounded-full border border-[#b9b6ad] px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5"
              to="/feed"
            >
              See the pulse ↗
            </Link>
          </div>
          <div className="mt-11 flex items-center gap-3 text-xs text-brand-muted">
            <div className="flex">
              <span className="-mr-1.5 grid size-8 place-items-center rounded-full border-2 border-brand-bg bg-brand-secondary font-mono text-[10px] text-white">
                AN
              </span>
              <span className="-mr-1.5 grid size-8 place-items-center rounded-full border-2 border-brand-bg bg-brand-primary font-mono text-[10px] text-white">
                MK
              </span>
              <span className="-mr-1.5 grid size-8 place-items-center rounded-full border-2 border-brand-bg bg-brand-ink font-mono text-[10px] text-white">
                SR
              </span>
              <span className="grid size-8 place-items-center rounded-full border-2 border-brand-bg bg-brand-lime font-mono text-[10px]">
                JO
              </span>
            </div>
            <span>
              Made for the <b>4,200+ members</b> already in the loop.
            </span>
          </div>
        </div>
        <PulseScene />
      </section>
      <div className="overflow-hidden whitespace-nowrap border-y border-brand-border bg-brand-ink text-brand-paper">
        <div className="inline-flex animate-[community-marquee_25s_linear_infinite] gap-8 py-4 font-mono text-xs font-medium uppercase tracking-[.08em]">
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> clubs &amp;
            communities
          </span>
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> people near you
          </span>
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> local events
          </span>
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> group meetups
          </span>
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> clubs &amp;
            communities
          </span>
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> people near you
          </span>
          <span>
            <b className="text-[15px] text-brand-lime">✦</b> live updates
          </span>
        </div>
      </div>
      <section
        className="mx-auto max-w-320 px-5 py-18 sm:px-8 lg:py-28"
        id="how-it-works"
      >
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <span className={eyebrow}>More than a feed</span>
            <h2 className="mt-3 max-w-152 text-[clamp(34px,4vw,54px)] font-semibold leading-[.99] tracking-[-.065em]">
              A better way to belong and stay connected.
            </h2>
          </div>
          <p className="max-w-87.5 text-[15px] leading-relaxed text-brand-muted">
            No noise. No awkward introductions. Just the things and people that
            make your week more interesting.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            number="01 / DISCOVER"
            title="See what is alive."
            copy="Find out which spaces, clubs and conversations are moving right now."
          />
          <Feature
            className="border-brand-secondary bg-brand-secondary text-brand-paper md:translate-y-6 [&>p]:text-[#e5e7ff] [&>span]:text-[#c8cdfb]"
            number="02 / CONNECT"
            title="Start small, meet often."
            copy="Join a table, a chat or a club with people who are already into your thing."
          />
          <Feature
            className="border-brand-lime bg-brand-lime"
            number="03 / MAKE IT YOURS"
            title="Leave your mark."
            copy="Host something, share an idea, or build the corner of the community you wish existed."
          />
        </div>
      </section>
      <section
        className="mx-auto max-w-320 px-5 pb-18 sm:px-8 lg:pb-28"
        id="community"
      >
        <div className="grid overflow-hidden rounded-3xl bg-brand-primary text-brand-paper md:grid-cols-[1.35fr_.65fr]">
          <div className="p-8 sm:p-14">
            <div className="text-6xl leading-[.6] text-brand-lime">“</div>
            <blockquote className="mt-5 max-w-170 text-[clamp(27px,3.3vw,43px)] font-semibold leading-[1.07] tracking-[-.055em]">
              Connefy made a noisy digital world feel personal and close — in the
              best possible way.
            </blockquote>
            <cite className="mt-7 block text-[13px] not-italic">
              — Maya K., Product Designer &amp; Creator
            </cite>
          </div>
          <div className="relative min-h-45 overflow-hidden before:absolute before:-top-10 before:left-0 before:size-95 before:rounded-full before:border before:border-white/50 after:absolute after:left-16 after:top-6 after:size-62 after:rounded-full after:border after:border-white/50">
            <div className="absolute left-28 top-12 z-10 size-17.5 rounded-full bg-brand-lime shadow-[137px_130px_0_-20px_#11242d,-90px_160px_0_-23px_#fffdf8]" />
          </div>
        </div>
      </section>
    </main>
  );
}
