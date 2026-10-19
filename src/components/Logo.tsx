export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-brand">
        <span className="h-3 w-3 rounded-full bg-white" />
        <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand-light" />
      </span>
      <span className="text-xl font-bold tracking-tight text-ink">Citrus</span>
    </span>
  );
}
