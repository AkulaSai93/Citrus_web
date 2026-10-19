import {
  ASSIGNEE_TONE,
  BAR_TONE,
  COLUMNS,
  DAY_LABELS,
  DAYS,
  INITIALS,
  STATUS_LABEL,
  STATUS_TONE,
  TASKS,
  type Assignee,
} from "./data";

export function Avatar({ who }: { who: Assignee }) {
  return (
    <span
      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${ASSIGNEE_TONE[who]} text-[9px] font-bold text-white`}
      title={who}
    >
      {INITIALS[who]}
    </span>
  );
}

export function BoardView() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {COLUMNS.map((status) => {
        const items = TASKS.filter((t) => t.status === status);
        return (
          <div key={status} className="rounded-xl bg-neutral-50 p-2.5">
            <div className="mb-2.5 flex items-center justify-between gap-2 px-1">
              <span className="truncate text-xs font-semibold text-ink">
                {STATUS_LABEL[status]}
              </span>
              <span className="text-xs font-medium text-ink-muted">
                {items.length}
              </span>
            </div>
            <div className="space-y-2">
              {items.map((task) => (
                <div
                  key={task.id}
                  className="rounded-lg border border-black/6 bg-white p-2.5 shadow-sm"
                >
                  <p className="text-[10px] font-semibold text-ink-muted">
                    {task.id}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold leading-snug text-ink">
                    {task.title}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="truncate text-[10px] font-medium text-ink-muted">
                      {task.team}
                    </span>
                    <Avatar who={task.assignee} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ListView() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/6">
      <div className="hidden grid-cols-[auto_1fr_auto_auto_auto] gap-4 bg-neutral-50 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-ink-muted sm:grid">
        <span>ID</span>
        <span>Task</span>
        <span>Team</span>
        <span>Status</span>
        <span className="pl-2">Owner</span>
      </div>
      <ul className="divide-y divide-black/5 bg-white">
        {TASKS.map((task) => (
          <li
            key={task.id}
            className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-2.5 sm:grid-cols-[auto_1fr_auto_auto_auto] sm:gap-4"
          >
            <span className="hidden text-[11px] font-semibold text-ink-muted sm:block">
              {task.id}
            </span>
            <span className="truncate text-xs font-semibold text-ink">
              {task.title}
            </span>
            <span className="hidden text-xs font-medium text-ink-muted sm:block">
              {task.team}
            </span>
            <span
              className={`hidden whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold sm:block ${STATUS_TONE[task.status]}`}
            >
              {STATUS_LABEL[task.status]}
            </span>
            <span className="justify-self-end pl-2">
              <Avatar who={task.assignee} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TimelineView() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/6 bg-white">
      <div className="flex items-center gap-3 border-b border-black/5 bg-neutral-50 px-3 py-2">
        <span className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-ink-muted sm:w-36">
          Sunday to Sunday
        </span>
        <div
          className="grid flex-1"
          style={{ gridTemplateColumns: `repeat(${DAYS}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {DAY_LABELS.map((d) => (
            <span
              key={d}
              className="text-center text-[10px] font-medium text-ink-muted"
            >
              {d}
            </span>
          ))}
        </div>
        <span className="w-6 shrink-0" aria-hidden="true" />
      </div>

      <div className="space-y-2 p-3">
        {TASKS.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            <span className="w-24 shrink-0 truncate text-[11px] font-semibold text-ink sm:w-36 sm:text-xs">
              {task.title}
            </span>
            <div
              className="grid flex-1 items-center"
              style={{ gridTemplateColumns: `repeat(${DAYS}, minmax(0, 1fr))` }}
            >
              <div
                className={`h-5 rounded-full ${BAR_TONE[task.status]}`}
                style={{
                  gridColumnStart: task.start + 1,
                  gridColumnEnd: `span ${task.span}`,
                }}
                title={`${task.title} — ${STATUS_LABEL[task.status]}`}
              />
            </div>
            <span className="shrink-0">
              <Avatar who={task.assignee} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
