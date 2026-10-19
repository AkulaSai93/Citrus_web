import Logo from "../Logo";
import { TEAMS } from "../preview/data";

const NAV = ["Overview", "Tasks", "Sprints", "Tracker", "Projects", "Teams"];

export default function AppWindow({
  activeNav,
  breadcrumb,
  children,
}: {
  activeNav: string;
  breadcrumb: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/6 bg-white shadow-2xl shadow-black/10">
      <div className="flex min-h-[420px]">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col justify-between border-r border-black/6 bg-white py-4 sm:flex">
          <div>
            <div className="px-4">
              <Logo className="scale-90 origin-left" />
            </div>

            <nav className="mt-5 space-y-0.5 px-2.5">
              {NAV.map((item) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    item === activeNav
                      ? "bg-brand/10 font-semibold text-brand-dark"
                      : "text-ink-muted"
                  }`}
                >
                  {item}
                </div>
              ))}
            </nav>

            <p className="mt-5 px-4 text-[10px] font-semibold uppercase tracking-wider text-ink-muted/70">
              Teams
            </p>
            <div className="mt-1.5 space-y-0.5 px-2.5">
              {TEAMS.map((team) => (
                <div
                  key={team.name}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-xs font-medium text-ink-muted"
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full ${team.tone}`} />
                  {team.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5 border-t border-black/6 px-4 pt-4">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/15 text-[9px] font-bold text-brand-dark">
              AS
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-ink">
                Adarsh Singh
              </p>
              <p className="text-[10px] font-medium text-ink-muted">
                Super admin
              </p>
            </div>
          </div>
        </aside>

        {/* Main pane */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3 border-b border-black/6 px-5 py-3.5">
            <p className="truncate text-xs font-medium text-ink-muted">
              Citrus <span className="px-1 text-black/20">/</span>
              <span className="font-semibold text-ink">{breadcrumb}</span>
            </p>
            <span className="hidden rounded-lg border border-black/8 px-3 py-1.5 text-[11px] font-medium text-ink-muted/80 sm:block">
              Search tasks…
            </span>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
