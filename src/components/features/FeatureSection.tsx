import Link from "next/link";
import { SprintWeek, StatusFlow, TasksBoard, TeamsList } from "./visuals";

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#product"
      className="group mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-neutral-200"
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
      >
        <path
          d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function Copy({
  title,
  body,
  cta,
  className = "",
}: {
  title: string;
  body: string;
  cta: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center bg-white px-7 py-12 sm:px-10 lg:px-14 lg:py-16 ${className}`}
    >
      <h3 className="text-balance text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl lg:text-[2rem] lg:leading-[1.18]">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-muted">
        {body}
      </p>
      <div>
        <Cta>{cta}</Cta>
      </div>
    </div>
  );
}

function Visual({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-stretch overflow-hidden bg-white ${className}`}
    >
      <div className="w-full">{children}</div>
    </div>
  );
}

/** Copy and content mirror the live Citrus workspace. */
const BLOCKS = [
  {
    title: "See the week on one board",
    body: "Use the board to plan the sprint and track every task. Citrus keeps you on the critical work, its owner, and the gap between parked and this week.",
    cta: "Learn more about the board",
    visual: <TasksBoard />,
  },
  {
    title: "Log every week with sprints",
    body: "Sunday to Sunday. Place work on this week, or park it for later. The tracker shows what your team is carrying — not every team in the building.",
    cta: "Learn more about sprints",
    visual: <SprintWeek />,
  },
  {
    title: "Build the workspace around the team",
    body: "A head, a lead, members, and the projects under them. Tasks belong to the team — not a personal backlog. Heads add a project on the team they sit on. Anyone can still view the rest.",
    cta: "Learn more about teams",
    visual: <TeamsList />,
  },
  {
    title: "Move work without a meeting",
    body: "Upcoming, Ongoing, In review, Completed, Live. Same language on every team. Heads and leads accept work; the board does the rest.",
    cta: "Learn more about statuses",
    visual: <StatusFlow />,
  },
];

export default function FeatureSection() {
  return (
    <section
      aria-labelledby="structure-heading"
      className="px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="structure-heading"
          className="mx-auto max-w-3xl text-balance text-center text-3xl font-bold tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl"
        >
          Bring structure to every sprint,{" "}
          <span className="text-ink-muted">fast</span>
        </h2>

        {/* The hairlines are the 1px gaps letting the backing colour through */}
        <div className="mt-14 grid gap-px bg-black/10 lg:mt-16">
          {BLOCKS.map((block, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={block.title}
                className="grid gap-px bg-black/8 lg:grid-cols-2"
              >
                {/* Copy stays first in the DOM so it reads first when stacked */}
                <Copy
                  title={block.title}
                  body={block.body}
                  cta={block.cta}
                  className={flip ? "lg:order-2" : undefined}
                />
                <Visual className={flip ? "lg:order-1" : undefined}>
                  {block.visual}
                </Visual>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
