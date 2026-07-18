import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";

function Card({
  title, kicker, body, points, className = "", icon,
}: {
  title: string; kicker: string; body: string; points: string[]; className?: string; icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 noise ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full accent-glow opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{kicker}</span>
          <div className="rounded-full border border-border p-2.5 text-primary transition-transform duration-500 group-hover:rotate-45">{icon}</div>
        </div>
        <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <ul className="mt-6 space-y-2 border-t border-border pt-5">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/85">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const CameraIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/></svg>;
const CutIcon    = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 18 20 4M14 12l6 8"/></svg>;
const ChartIcon  = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 20V6M10 20v-8M16 20V4M22 20H2"/></svg>;

export function ServicesBento() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Capabilities</SectionLabel>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:max-w-xl">
            <SplitText text="A studio built" />
            <br />
            <SplitText text="around the scroll." className="italic text-primary" />
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Three tightly-integrated services. One team. Each engagement is priced on the
            metric it moves — not the hours it burns.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          <Card
            className="md:col-span-4 md:row-span-2"
            title="4K Commercial Video Shoots"
            kicker="01 · Production"
            body="On-site, retail, real estate, and studio productions with cinema-grade cameras and lighting. Small crews, big frames, deliverables ready for every 9:16, 1:1, and 16:9 placement."
            points={["FX3 / FX6 · Cinema primes", "1-day to 5-day builds", "Location scouting + talent"]}
            icon={CameraIcon}
          />
          <Card
            className="md:col-span-2"
            title="Retention Editing"
            kicker="02 · Post"
            body="Cinematic hooks, dynamic pacing, sound design. Cut for the metric that matters: watch-through."
            points={["Hook-first structure", "Sound + motion design", "A/B variant packs"]}
            icon={CutIcon}
          />
          <Card
            className="md:col-span-2"
            title="Ad Performance"
            kicker="03 · Distribution"
            body="Media strategy backed by creative diagnostics. We tell you which frame is losing you money."
            points={["Meta · TikTok · YouTube", "Creative testing frameworks", "Weekly performance reads"]}
            icon={ChartIcon}
          />
        </div>
      </div>
    </section>
  );
}