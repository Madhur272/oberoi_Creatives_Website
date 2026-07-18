import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { MagneticButton } from "./MagneticButton";
import { Spline3DPlaceholder } from "./Spline3DPlaceholder";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* ambient bg glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 accent-glow opacity-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            Now booking Q3 · Remote & On-Site
          </motion.div>

          <h1 className="font-display text-[clamp(3.2rem,8.2vw,7rem)] leading-[0.92] tracking-[-0.02em] text-balance">
            <SplitText text="We engineer" />
            <br />
            <SplitText text="attention." className="italic text-primary" delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-lg text-[17px] leading-relaxed text-muted-foreground text-balance"
          >
            Sam Creatives is a short-form studio for brands allergic to average. 4K commercial
            shoots, retention-obsessed edits, and paid-media strategy that turns 8 seconds into
            enterprise value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact">Book a service →</MagneticButton>
            <MagneticButton href="#work" variant="ghost">See the work</MagneticButton>
          </motion.div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-6 sm:max-w-md">
            {[
              { k: "180M+", v: "Views delivered" },
              { k: "4.6×", v: "Avg. client ROAS" },
              { k: "72h", v: "Rough-cut turnaround" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl leading-none">{s.k}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <Spline3DPlaceholder />
        </motion.div>
      </div>
    </section>
  );
}