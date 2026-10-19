"use client";

import { useEffect, useRef, useState } from "react";
import AppWindow from "./AppWindow";
import {
  BoardScreen,
  OverviewScreen,
  SprintsScreen,
  TrackerScreen,
} from "./screens";

const STEPS = [
  {
    id: "overview",
    label: "Overview",
    body: "Counts, teams, leaders, and the review queue — the screen everyone lands on after sign-in.",
    nav: "Overview",
    breadcrumb: "Overview",
    screen: <OverviewScreen />,
  },
  {
    id: "board",
    label: "The board",
    body: "Five statuses. Work belongs to the team. Park it, or put it on this week.",
    nav: "Tasks",
    breadcrumb: "Tasks",
    screen: <BoardScreen />,
  },
  {
    id: "sprints",
    label: "Weekly sprints",
    body: "Sunday to Sunday. Place work on this week, or park it for later.",
    nav: "Sprints",
    breadcrumb: "Sprints",
    screen: <SprintsScreen />,
  },
  {
    id: "tracker",
    label: "Team tracker",
    body: "What your team is carrying — not every team in the building.",
    nav: "Tracker",
    breadcrumb: "Tracker",
    screen: <TrackerScreen />,
  },
];

const DESKTOP = "(min-width: 1024px)";

export default function WorkspaceTour() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const pick = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;

      if (window.matchMedia(DESKTOP).matches) {
        // Pinned: the step comes from how far we are through the scroll track.
        const scrollable = track.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const travelled = -track.getBoundingClientRect().top;
        const progress = Math.min(Math.max(travelled / scrollable, 0), 1);
        const index = Math.min(
          STEPS.length - 1,
          Math.floor(progress * STEPS.length),
        );
        setActive(index);
        return;
      }

      // Stacked: whichever step sits nearest the trigger line.
      const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      const line = window.innerHeight * 0.4;
      let best = 0;
      let bestDistance = Infinity;
      nodes.forEach((node, i) => {
        const rect = node.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - line);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      setActive(best);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const current = STEPS[active];

  return (
    <section
      aria-labelledby="workspace-heading"
      className="bg-neutral-100/70"
    >
      {/* The track is only tall on desktop, where the panel pins and the
          steps advance as you scroll through it. */}
      <div ref={trackRef} className="lg:h-[360vh]">
        <div className="px-5 py-20 sm:px-8 sm:py-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-0">
          <div className="mx-auto w-full max-w-6xl">
            <h2
              id="workspace-heading"
              className="max-w-2xl text-balance text-3xl font-bold tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              A workspace that works hand-in-hand with the team
            </h2>

            <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
              <div>
                {STEPS.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={step.id}
                      ref={(el) => {
                        stepRefs.current[i] = el;
                      }}
                      className="border-b border-black/10 py-6 first:border-t first:border-black/10 lg:py-5"
                    >
                      <div
                        className={`border-l-2 pl-5 transition-colors duration-300 ${
                          isActive ? "border-brand" : "border-transparent"
                        }`}
                      >
                        <h3
                          className={`text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl ${
                            isActive ? "text-ink" : "text-ink-muted/70"
                          }`}
                        >
                          {step.label}
                        </h3>

                        {/* Only the active step shows its description */}
                        <div
                          className={`grid transition-all duration-300 motion-reduce:transition-none ${
                            isActive
                              ? "mt-2.5 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <p className="max-w-md overflow-hidden text-pretty text-[15px] leading-relaxed text-ink-muted">
                            {step.body}
                          </p>
                        </div>
                      </div>

                      {/* Stacked screens, for narrow viewports */}
                      <div className="mt-6 lg:hidden">
                        <AppWindow
                          activeNav={step.nav}
                          breadcrumb={step.breadcrumb}
                        >
                          {step.screen}
                        </AppWindow>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* The pinned window, swapping as you scroll */}
              <div className="hidden lg:block">
                <AppWindow
                  activeNav={current.nav}
                  breadcrumb={current.breadcrumb}
                >
                  {current.screen}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
