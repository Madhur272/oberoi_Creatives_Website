const items = [
  "PREMIERE PRO", "DAVINCI RESOLVE", "AFTER EFFECTS", "META ADS",
  "TIKTOK ADS", "YOUTUBE SHORTS", "SORA", "FIGMA", "CINEMA 4D", "NUKE",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section aria-hidden className="relative border-y border-border bg-surface/40 py-6">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-14 pr-14 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
          {doubled.map((t, i) => (
            <span key={i} className="flex items-center gap-14 whitespace-nowrap">
              {t}
              <span aria-hidden className="h-1 w-1 rounded-full bg-primary/70" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}