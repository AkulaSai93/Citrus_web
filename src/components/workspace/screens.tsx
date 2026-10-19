import {
  BAR_TONE,
  CARD_TONE,
  COLUMNS,
  DAY_LABELS,
  DAYS,
  DOT_TONE,
  IS_SETTLED,
  STATUS_LABEL,
  STATUS_STEP,
  TASKS,
  TEAMS,
} from "../preview/data";

/** The board — five statuses, the team's week. */
export function BoardScreen() {
  return (
    <>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <p className="text-sm font-bold tracking-tight text-ink">
          Butterfly <span className="font-medium text-ink-muted">· this week</span>
        </p>
        <p className="shrink-0 text-[11px] font-medium text-ink-muted">
          6 open · 2 live
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {COLUMNS.map((status) => (
          <div
            key={status}
            className="rounded-xl border border-black/6 bg-white p-2.5"
          >
            <div className="mb-2.5 flex items-center gap-1.5 px-0.5">
              <span className={`h-2 w-2 shrink-0 rounded-full ${DOT_TONE[status]}`} />
              <span className="truncate text-[11px] font-semibold text-ink">
                {STATUS_LABEL[status]}
              </span>
            </div>

            <div className="space-y-2">
              {TASKS.filter((t) => t.status === status).map((task) => (
                <div
                  key={task.id}
                  className={`rounded-lg p-2.5 ${CARD_TONE[status]}`}
                >
                  <p className="font-mono text-[9px] font-medium text-ink-muted">
                    {task.id}
                  </p>
                  <p
                    className={`mt-0.5 text-[11px] font-bold leading-snug text-ink ${
                      IS_SETTLED[status] ? "line-through decoration-ink/40" : ""
                    }`}
                  >
                    {task.title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-ink-muted">
                    {task.assignee}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/** Overview — counts, teams and the review queue. */
export function OverviewScreen() {
  const stats = [
    { label: "Teams", value: "3", note: "1 archived" },
    { label: "People", value: "12", note: "across teams" },
    { label: "Projects", value: "8", note: "live under teams" },
    { label: "To review", value: "2", note: "waiting on you" },
  ];

  return (
    <>
      <p className="text-[11px] font-medium text-ink-muted">Monday, 19 October</p>
      <p className="mt-1.5 text-lg font-bold tracking-tight text-ink">
        Good morning, Adarsh
      </p>
      <p className="mt-1 text-xs font-medium text-ink-muted">
        2 tasks need your review.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-black/6 bg-neutral-50 p-3"
          >
            <p className="text-[11px] font-semibold text-ink-muted">
              {stat.label}
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums leading-none text-ink">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[10px] font-medium text-ink-muted">
              {stat.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-black/6">
        <p className="border-b border-black/6 bg-neutral-50 px-3.5 py-2 text-[11px] font-semibold text-ink">
          Teams
        </p>
        <ul className="divide-y divide-black/5">
          {TEAMS.map((team) => (
            <li key={team.name} className="flex items-center gap-3 px-3.5 py-2.5">
              <span className={`h-2 w-2 shrink-0 rounded-full ${team.tone}`} />
              <span className="flex-1 truncate text-xs font-semibold text-ink">
                {team.name}
              </span>
              <span className="hidden text-[11px] font-medium text-ink-muted sm:block">
                {team.head}
              </span>
              <span className="w-5 text-right text-[11px] font-medium tabular-nums text-ink-muted">
                {team.people}
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                Active
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** Sprints — Sunday to Sunday. */
export function SprintsScreen() {
  return (
    <>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <p className="text-sm font-bold tracking-tight text-ink">
          12 – 18 Oct <span className="font-medium text-ink-muted">· this week</span>
        </p>
        <p className="shrink-0 text-[11px] font-medium text-ink-muted">
          Sunday to Sunday
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-black/6">
        <div className="flex items-center gap-3 border-b border-black/6 bg-neutral-50 px-3 py-2">
          <span className="w-24 shrink-0 sm:w-32" aria-hidden="true" />
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

        <div className="space-y-2 p-3">
          {TASKS.map((task) => (
            <div key={task.id} className="flex items-center gap-3">
              <span className="w-24 shrink-0 truncate text-[11px] font-semibold text-ink sm:w-32">
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
      </div>
    </>
  );
}

/** Tracker — what this team is carrying, and the path work takes. */
export function TrackerScreen() {
  return (
    <>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <p className="text-sm font-bold tracking-tight text-ink">Butterfly</p>
        <p className="shrink-0 text-[11px] font-medium text-ink-muted">
          Head, lead, members
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div className="space-y-2.5">
          {TEAMS.map((team) => (
            <div
              key={team.name}
              className="flex items-center gap-3 rounded-xl border border-black/6 bg-white p-3"
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${team.tone} text-sm font-bold text-white`}
              >
                {team.initial}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-ink">{team.name}</p>
                <p className="text-[11px] font-medium text-ink-muted">
                  {team.people} people · {team.projects}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[10px] font-medium text-ink-muted">Head</p>
                <p className="text-[11px] font-semibold text-ink">{team.head}</p>
              </div>
            </div>
          ))}
        </div>

        <ol className="space-y-2">
          {COLUMNS.map((status) => (
            <li
              key={status}
              className="flex items-center gap-3 rounded-xl border border-black/6 bg-white px-3 py-2.5"
            >
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${DOT_TONE[status]}`} />
              <span className="flex-1 text-xs font-semibold text-ink">
                {STATUS_LABEL[status]}
              </span>
              <span className="font-mono text-[11px] font-medium tabular-nums text-ink-muted">
                {STATUS_STEP[status]}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
