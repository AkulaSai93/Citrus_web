/**
 * Sprint velocity — magnitude over time, so a single sequential hue, no legend.
 * The title names the one series; only the peak is direct-labelled.
 */
const DATA = [
  { day: "M", done: 3 },
  { day: "T", done: 5 },
  { day: "W", done: 4 },
  { day: "T", done: 8 },
  { day: "F", done: 6 },
];

const MAX = Math.max(...DATA.map((d) => d.done));

export default function MiniChart() {
  return (
    <figure className="m-0">
      <figcaption className="text-[11px] font-semibold text-ink">
        Tasks completed this sprint
      </figcaption>

      <div className="mt-3 flex h-20 items-end gap-2" role="img" aria-label="Tasks completed per day: Monday 3, Tuesday 5, Wednesday 4, Thursday 8, Friday 6.">
        {DATA.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            {d.done === MAX ? (
              <span className="text-[10px] font-semibold leading-none text-ink">
                {d.done}
              </span>
            ) : null}
            <div
              className="w-full rounded-t bg-brand"
              style={{ height: `${(d.done / MAX) * 100}%` }}
            />
          </div>
        ))}
      </div>

      {/* Recessive baseline + day labels in ink, never the series colour */}
      <div className="mt-1 border-t border-black/8 pt-1.5">
        <div className="flex gap-2">
          {DATA.map((d, i) => (
            <span
              key={i}
              className="flex-1 text-center text-[10px] font-medium text-ink-muted"
            >
              {d.day}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
