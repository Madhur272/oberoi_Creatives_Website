import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";

const steps = [
  { n: "01", t: "Discover", d: "Positioning workshop, audience deep-dive, and a brief that stops guessing and starts betting." },
  { n: "02", t: "Shoot",    d: "Cinema-grade capture with lean crews. We optimise for coverage, not chaos." },
  { n: "03", t: "Edit",     d: "Hook engineering, sound design, motion. Every frame answers to a metric." },
  { n: "04", t: "Distribute", d: "Meta, TikTok, YouTube — media buying built around the creative variant that wins." },
  { n: "05", t: "Analyze",  d: "Weekly creative diagnostics. Winners get scaled. Losers become intelligence." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>How we work</SectionLabel>
        <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
          <SplitText text="Five acts." />{" "}
          <SplitText text="One thesis." className="italic text-primary" />
        </h2>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {steps.map((s) => (
            <div key={s.n} className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-surface/40 sm:py-10">
              <div className="col-span-2 font-mono text-xs uppercase tracking-[0.22em] text-primary sm:col-span-1">{s.n}</div>
              <div className="col-span-10 sm:col-span-3">
                <h3 className="font-display text-3xl leading-none tracking-tight sm:text-4xl">{s.t}</h3>
              </div>
              <div className="col-span-12 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:col-span-7 sm:col-start-6">
                {s.d}
              </div>
              <div className="col-span-12 justify-self-end font-mono text-muted-foreground/60 transition-colors group-hover:text-primary sm:col-span-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}