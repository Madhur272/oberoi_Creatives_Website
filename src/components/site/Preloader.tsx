import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[1000] flex items-end justify-between bg-background px-8 pb-8"
        >
          <div className="font-display text-[18vw] leading-none tracking-tighter text-foreground/95 sm:text-[10vw]">
            sam<span className="text-primary">.</span>
          </div>
          <div className="flex flex-col items-end gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>loading</span>
            <span className="font-display text-4xl text-foreground">{String(pct).padStart(3, "0")}</span>
          </div>
          <div className="absolute inset-x-8 bottom-6 h-px bg-border">
            <motion.div className="h-full bg-primary" animate={{ width: `${pct}%` }} transition={{ ease: "linear" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}