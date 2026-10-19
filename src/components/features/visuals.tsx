import {
  BAR_TONE,
  DAY_LABELS,
  DAYS,
  STATUS_LABEL,
  STATUS_STEP,
  TASKS,
  TEAMS,
  COLUMNS,
} from "../preview/data";
import { Avatar } from "../preview/Views";
import { Arrow, Base, GlowCard, Stage } from "./Stage";

function Frame({ title, meta, children }: { title: string; meta?: string; children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-black/5 px-5 py-3.5">
        <p className="text-xs font-semibold text-ink">
          Citrus <span className="text-ink-muted">/ {title}</span>
        </p>
        {meta ? (
          <p className="text-[11px] font-medium text-ink-muted">{meta}</p>
        ) : null}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/** The board — the week's tasks grouped by status. */
export function TasksBoardPanel() {
  const shown = COLUMNS.slice(0, 3);
  return (
    <Frame title="Tasks" meta="6 open · 2 live">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Butterfly · this week
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        {shown.map((status) => (
          <div key={status} className="rounded-xl bg-neutral-50 p-2">
            <p className="mb-2 px-0.5 text-[11px] font-semibold text-ink">
              {STATUS_LABEL[status]}
            </p>
            <div className="space-y-2">
              {TASKS.filter((t) => t.status === status).map((task) => (
                <div
                  key={task.id}
                  className="rounded-lg border border-black/6 bg-white p-2 shadow-sm"
                >
                  <p className="text-[9px] font-semibold text-ink-muted">
                    {task.id}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold leading-snug text-ink">
                    {task.title}
                  </p>
                  <div className="mt-1.5 flex justify-end">
                    <Avatar who={task.assignee} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** Sprints — Sunday to Sunday, with what the team is carrying. */
export function SprintWeekPanel() {
  return (
    <Frame title="Sprints" meta="12 – 18 Oct · this week">
      <div className="flex items-center gap-2 pb-2">
        <span className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
          Sunday to Sunday
        </span>
        <div
          className="grid flex-1"
          style={{ gridTemplateColumns: `repeat(${DAYS}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {DAY_LABELS.map((d) => (
            <span key={d} className="text-center text-[10px] font-medium text-ink-muted">
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 border-t border-black/5 pt-3">
        {TASKS.filter((t) => t.status !== "upcoming").map((task) => (
          <div key={task.id} className="flex items-center gap-2">
            <span className="w-24 shrink-0 truncate text-[11px] font-semibold text-ink">
              {task.title}
            </span>
            <div
              className="grid flex-1"
              style={{ gridTemplateColumns: `repeat(${DAYS}, minmax(0, 1fr))` }}
            >
              <div
                className={`h-4 rounded-full ${BAR_TONE[task.status]}`}
                style={{
                  gridColumnStart: task.start + 1,
                  gridColumnEnd: `span ${task.span}`,
                }}
                title={`${task.title} — ${STATUS_LABEL[task.status]}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** Teams — a head, a lead, members, and the projects under them. */
export function TeamsListPanel() {
  return (
    <Frame title="Teams" meta="Head, lead, members">
      <div className="space-y-2.5">
        {TEAMS.map((team) => (
          <div
            key={team.name}
            className="flex items-center gap-3 rounded-xl border border-black/6 bg-white p-3 shadow-sm"
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${team.tone} text-sm font-bold text-white`}
            >
              {team.initial}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-ink">{team.name}</p>
              <p className="text-[11px] font-medium text-ink-muted">
                {team.people} people
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] font-medium text-ink-muted">Head</p>
              <p className="text-[11px] font-semibold text-ink">{team.head}</p>
            </div>
            <div className="hidden shrink-0 text-right sm:block">
              <p className="text-[10px] font-medium text-ink-muted">Projects</p>
              <p className="text-[11px] font-semibold text-ink">{team.projects}</p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** The five statuses — the same path on every team. */
export function StatusFlowPanel() {
  return (
    <Frame title="Statuses" meta="Same path on every team">
      <ol className="space-y-2">
        {COLUMNS.map((status) => (
          <li
            key={status}
            className="flex items-center gap-3 rounded-xl border border-black/6 bg-white px-3 py-2.5 shadow-sm"
          >
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${BAR_TONE[status]}`} />
            <span className="flex-1 text-xs font-semibold text-ink">
              {STATUS_LABEL[status]}
            </span>
            <span className="text-[11px] font-bold tabular-nums text-ink-muted">
              {STATUS_STEP[status]}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[11px] leading-relaxed text-ink-muted">
        Live — then the next status.
      </p>
    </Frame>
  );
}

export function TasksBoard() {
  return (
    <Stage>
      <Base>
        <TasksBoardPanel />
      </Base>
      <Arrow className="-top-1 left-[18%] hidden h-16 w-24 -scale-x-100 sm:block" />

      <GlowCard className="bottom-2 right-0 w-48 sm:right-2">
        <p className="text-[10px] font-semibold text-ink-muted">TK-0012</p>
        <p className="mt-0.5 text-xs font-bold leading-snug text-ink">
          Map sprint week
        </p>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="rounded-full bg-sky/15 px-2 py-0.5 text-[10px] font-semibold text-sky-700">
            Moved to Ongoing
          </span>
          <Avatar who="Adarsh" />
        </div>
      </GlowCard>
    </Stage>
  );
}

export function SprintWeek() {
  return (
    <Stage>
      <Base>
        <SprintWeekPanel />
      </Base>
      <GlowCard className="-bottom-2 left-0 w-52 sm:left-2">
        <p className="text-xs font-bold text-ink">Parked for later</p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
          Not this week — it keeps its place in the backlog.
        </p>
      </GlowCard>
    </Stage>
  );
}

export function TeamsList() {
  return (
    <Stage>
      <Base>
        <TeamsListPanel />
      </Base>
      <GlowCard className="bottom-0 right-0 w-56 sm:right-2">
        <p className="text-xs font-bold text-ink">How access is written</p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
          A head can see every project. They only add one on their own team.
        </p>
      </GlowCard>
    </Stage>
  );
}

export function StatusFlow() {
  return (
    <Stage>
      <Base>
        <StatusFlowPanel />
      </Base>
      <Arrow className="bottom-20 right-[8%] hidden h-14 w-20 sm:block" />

      <GlowCard className="bottom-0 right-0 w-52 sm:right-2">
        <p className="text-[10px] font-semibold text-ink-muted">TK-0001</p>
        <p className="mt-0.5 text-xs font-bold text-ink">IAIB validation</p>
        <span className="mt-2 inline-block rounded-full bg-mint/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          Accepted → Live
        </span>
      </GlowCard>
    </Stage>
  );
}
