import Link from "next/link";
import CollabCallout from "./CollabCallout";
import ProductPreview from "./preview/ProductPreview";

/**
 * Floating canvas objects — the only place the playful FigJam styling lives.
 */

function Cursor({
  name,
  color,
  className = "",
}: {
  name: string;
  color: string;
  className?: string;
}) {
  return (
    <div className={`animate-float pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-6 w-6 drop-shadow-sm"
      >
        <path
          d="M4 2.5l14.5 7.8-6.3 1.6-2.4 6.2L4 2.5z"
          fill={color}
          stroke="#1b1b1b"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="sticker-sm -mt-1 ml-4 inline-block rounded-lg px-2.5 py-1 font-display text-xs font-semibold text-white"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}

function StickyNote({
  children,
  color,
  className = "",
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`sticker animate-float pointer-events-none w-36 rounded-xl p-3 font-display text-sm font-medium leading-snug text-ink ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-clip px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-brand-100 opacity-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow with the hairlines running out either side */}
        <div className="mx-auto flex max-w-md items-center gap-3 text-ink-muted">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-black/15" />
          <span className="whitespace-nowrap text-sm font-medium">
            Built for weekly sprints
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-black/15" />
        </div>

        <div className="relative mt-7">
          {/* Live cursors */}
          <Cursor
            name="Adarsh"
            color="#7c5cff"
            className="absolute -left-4 -top-8 hidden lg:block xl:-left-24"
          />
          <Cursor
            name="Ritika"
            color="#ff6b9d"
            className="absolute -right-2 -bottom-4 hidden lg:block xl:-right-20"
          />

          {/* Sticky notes pinned around the headline */}
          <StickyNote
            color="#ffe9a8"
            className="absolute -left-20 top-32 hidden -rotate-6 xl:block"
          >
            Sprint 14 kicks off Monday 🚀
          </StickyNote>

          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[4.25rem]">
            Project management built for{" "}
            <span className="text-brand sm:whitespace-nowrap">
              increased productivity
            </span>
          </h1>
        </div>

        <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
          Plan your projects, track all the work on one board, and sit with your
          team in weekly sprints — without the usual tool sprawl.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#signin"
            className="w-full rounded-[10px] bg-brand px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark hover:shadow-brand/35 sm:w-auto"
          >
            Start free trial
          </Link>
          <Link
            href="#product"
            className="w-full rounded-[10px] border border-black/12 bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink transition hover:border-black/25 hover:bg-black/3 sm:w-auto"
          >
            See the product
          </Link>
        </div>
      </div>

      {/* Interactive product preview */}
      <div className="relative mt-16 pb-12 sm:mt-20 lg:pb-16 xl:pb-28">
        <ProductPreview />
      </div>

      {/* Collaboration callout */}
      <div className="relative mt-24 sm:mt-28">
        <CollabCallout />
      </div>
    </section>
  );
}
