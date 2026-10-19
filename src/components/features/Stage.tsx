/**
 * Layering primitives for the feature visuals: a base panel that bleeds past
 * the cell, softened behind a foreground card that carries a coloured glow.
 */

export function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative flex w-full flex-col justify-center">{children}</div>;
}

/** The panel behind — wider than the cell, so it crops at the edges. */
export function Base({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[116%] -translate-x-[7%]">
      {children}
      {/* Softens the base so the foreground card reads first */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/70"
      />
    </div>
  );
}

/** The card on top, with the glow that marks it as the focus. */
export function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-2xl bg-brand/25 blur-xl"
      />
      <div className="relative rounded-xl bg-white p-3.5 shadow-2xl shadow-black/20 ring-2 ring-brand/70">
        {children}
      </div>
    </div>
  );
}

/** A drawn-on arrow pointing at the focused card. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute text-brand ${className}`}
    >
      <path
        d="M6 10c42-6 78 10 92 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M88 44l11 12 3-16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
