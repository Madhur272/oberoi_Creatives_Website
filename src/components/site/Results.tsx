import { SectionLabel } from "./SectionLabel";

const stats = [
  { k: "180M+",  v: "Total views delivered", d: "Across 200+ shipped assets in the last 18 months." },
  { k: "+62%",   v: "Avg. watch-through lift", d: "Measured against clients' prior 90-day baseline." },
  { k: "4.6×",   v: "Blended ROAS",             d: "Weighted across Meta, TikTok, YouTube Shorts." },
  { k: "72h",    v: "Rough-cut turnaround",     d: "First edit on your desk within three days." },
];

export function Results() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Signal, not noise</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.v} className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
                  <div className="font-display text-5xl leading-none text-primary">{s.k}</div>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-10 md:col-span-5">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 accent-glow opacity-40 blur-2xl" />
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="text-primary/70"><path d="M6 17V9c0-3 2-5 6-5v3c-2 0-3 1-3 2v1h3v7H6zm9 0V9c0-3 2-5 6-5v3c-2 0-3 1-3 2v1h3v7h-6z"/></svg>
            <blockquote className="mt-6 font-display text-2xl italic leading-snug text-balance sm:text-3xl">
              Sam and his team don't shoot ads — they engineer a scroll-stopper. Our TikTok
              spend became predictable within a single testing cycle.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/70 to-primary/20" />
              <div>
                <div className="text-sm text-foreground">Maren Halvorsen</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Head of Growth · Havenhouse</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}