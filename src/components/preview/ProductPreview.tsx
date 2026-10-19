"use client";

import { useRef, useState } from "react";
import { BoardView, ListView, TimelineView } from "./Views";
import MiniChart from "./MiniChart";

const VIEWS = [
  { id: "board", label: "Board" },
  { id: "list", label: "List" },
  { id: "timeline", label: "Timeline" },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

const PROJECTS = [
  { name: "Butterfly", tone: "bg-brand" },
  { name: "Assessment", tone: "bg-grape" },
  { name: "IAIB", tone: "bg-sky" },
];

function Sidebar() {
  return (
    <aside className="hidden w-44 shrink-0 border-r border-black/5 bg-neutral-50/70 p-3 lg:block">
      <div className="space-y-0.5">
        {["Overview", "Tasks", "Sprints", "Tracker"].map((item, i) => (
          <div
            key={item}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ${
              i === 2 ? "bg-brand/12 text-brand-dark" : "text-ink-muted"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <p className="mt-4 px-2.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted/70">
        Teams
      </p>
      <div className="mt-1.5 space-y-0.5">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-muted"
          >
            <span className={`h-2 w-2 shrink-0 rounded-full ${p.tone}`} />
            {p.name}
          </div>
        ))}
      </div>
    </aside>
  );
}

/** A teammate's live cursor, floating over the canvas. */
function Cursor() {
  return (
    <div className="pointer-events-none absolute -right-6 top-28 hidden xl:block">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M4 2.5l14.5 7.8-6.3 1.6-2.4 6.2L4 2.5z"
          fill="#7c5cff"
          stroke="#1b1b1b"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-3 inline-block rounded-lg bg-grape px-2.5 py-1 text-[11px] font-semibold text-white shadow-md">
        Ritika is reviewing
      </span>
    </div>
  );
}

export default function ProductPreview() {
  const [active, setActive] = useState<ViewId>("board");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = VIEWS.findIndex((v) => v.id === active);

  /** Roving tabindex: arrow keys move between tabs, per the WAI-ARIA pattern. */
  function onKeyDown(event: React.KeyboardEvent) {
    const last = VIEWS.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = activeIndex === last ? 0 : activeIndex + 1;
    if (event.key === "ArrowLeft") next = activeIndex === 0 ? last : activeIndex - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      setActive(VIEWS[next].id);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-2xl shadow-black/15">
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-black/5 bg-neutral-50/80 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          </div>
          <span className="hidden whitespace-nowrap text-xs font-semibold text-ink sm:block">
            Citrus <span className="text-ink-muted">/ Sprint 14</span>
          </span>

          <div
            role="tablist"
            aria-label="Preview view"
            onKeyDown={onKeyDown}
            className="ml-auto flex items-center gap-1 rounded-full bg-black/5 p-1"
          >
            {VIEWS.map((view, i) => {
              const selected = view.id === active;
              return (
                <button
                  key={view.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`preview-tab-${view.id}`}
                  aria-selected={selected}
                  aria-controls={`preview-panel-${view.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(view.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    selected
                      ? "bg-white text-ink shadow-sm"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {view.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar + canvas */}
        <div className="flex">
          <Sidebar />
          <div className="min-w-0 flex-1 bg-white p-4">
            {VIEWS.map((view) => (
              <div
                key={view.id}
                role="tabpanel"
                id={`preview-panel-${view.id}`}
                aria-labelledby={`preview-tab-${view.id}`}
                hidden={view.id !== active}
              >
                {view.id === active ? (
                  view.id === "board" ? (
                    <BoardView />
                  ) : view.id === "list" ? (
                    <ListView />
                  ) : (
                    <TimelineView />
                  )
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating panel overlapping the window, like a second app surface */}
      <div className="absolute -bottom-32 -right-8 hidden w-56 rounded-xl border border-black/8 bg-white p-3.5 shadow-xl shadow-black/15 xl:block">
        <MiniChart />
      </div>

      <Cursor />
    </div>
  );
}
