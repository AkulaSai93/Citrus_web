/** Content mirrors the live Citrus workspace at citrus.ugsot.com. */

export type Status = "upcoming" | "ongoing" | "review" | "completed" | "live";

export type Assignee = "Adarsh" | "Ritika" | "Saugat";

export type Task = {
  id: string;
  title: string;
  team: string;
  assignee: Assignee;
  status: Status;
  /** Placement across the Sunday–Sunday sprint week. */
  start: number;
  span: number;
};

export const STATUS_LABEL: Record<Status, string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  review: "In review",
  completed: "Completed",
  live: "Live",
};

export const STATUS_STEP: Record<Status, string> = {
  upcoming: "01",
  ongoing: "02",
  review: "03",
  completed: "04",
  live: "05",
};

export const STATUS_TONE: Record<Status, string> = {
  upcoming: "bg-neutral-200 text-neutral-700",
  ongoing: "bg-sky/15 text-sky-700",
  review: "bg-brand/15 text-brand-dark",
  completed: "bg-grape/15 text-violet-700",
  live: "bg-mint/15 text-emerald-700",
};

export const BAR_TONE: Record<Status, string> = {
  upcoming: "bg-neutral-300",
  ongoing: "bg-sky",
  review: "bg-brand",
  completed: "bg-grape",
  live: "bg-mint",
};

export const ASSIGNEE_TONE: Record<Assignee, string> = {
  Adarsh: "bg-grape",
  Ritika: "bg-bubble",
  Saugat: "bg-sky",
};

export const INITIALS: Record<Assignee, string> = {
  Adarsh: "A",
  Ritika: "R",
  Saugat: "S",
};

export const TASKS: Task[] = [
  { id: "TK-0012", title: "Map sprint week", team: "Butterfly", assignee: "Adarsh", status: "upcoming", start: 4, span: 3 },
  { id: "TK-0005", title: "Assessment portal", team: "Assessment", assignee: "Adarsh", status: "ongoing", start: 1, span: 3 },
  { id: "TK-0009", title: "Invite flow copy", team: "Butterfly", assignee: "Ritika", status: "ongoing", start: 3, span: 3 },
  { id: "TK-0003", title: "Admin panel sweep", team: "Butterfly", assignee: "Saugat", status: "review", start: 2, span: 3 },
  { id: "TK-0002", title: "Main website nav", team: "Butterfly", assignee: "Adarsh", status: "completed", start: 0, span: 2 },
  { id: "TK-0001", title: "IAIB validation", team: "IAIB", assignee: "Saugat", status: "live", start: 1, span: 4 },
];

export const COLUMNS: Status[] = [
  "upcoming",
  "ongoing",
  "review",
  "completed",
  "live",
];

/** Sprints run Sunday to Sunday — the week the team actually works. */
export const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const DAYS = DAY_LABELS.length;

export const TEAMS = [
  { name: "Butterfly", initial: "B", head: "Saugat", people: 6, projects: "4 active", tone: "bg-brand" },
  { name: "Assessment", initial: "A", head: "Adarsh", people: 4, projects: "2 active", tone: "bg-grape" },
  { name: "IAIB", initial: "I", head: "Ritika", people: 5, projects: "3 active", tone: "bg-sky" },
];

/** Card tints used on the workspace board. */
export const CARD_TONE: Record<Status, string> = {
  upcoming: "bg-indigo-50",
  ongoing: "bg-orange-50",
  review: "bg-violet-50",
  completed: "bg-emerald-50",
  live: "bg-sky-50",
};

export const DOT_TONE: Record<Status, string> = {
  upcoming: "bg-indigo-500",
  ongoing: "bg-brand",
  review: "bg-violet-500",
  completed: "bg-emerald-500",
  live: "bg-sky-500",
};

/** Work that has landed reads as struck through on the board. */
export const IS_SETTLED: Record<Status, boolean> = {
  upcoming: false,
  ongoing: false,
  review: false,
  completed: true,
  live: true,
};
