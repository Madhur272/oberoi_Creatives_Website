import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 200);
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
          transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[1000] flex items-end justify-between px-8 pb-8"
          style={{ background: "#111111" }}
        >
          {/* Big wordmark */}
          <div
            className="uppercase leading-none tracking-tighter"
            style={{
              fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
              fontSize: "clamp(5rem, 18vw, 14rem)",
              lineHeight: 0.85,
              color: "#F5F5F5",
            }}
          >
            SAM
            <span style={{ color: "#FF3333" }}>.</span>
          </div>

          {/* Counter + status */}
          <div className="flex flex-col items-end gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888]">
              initializing
            </span>
            <span
              style={{
                fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
                fontSize: "3rem",
                lineHeight: 1,
                color: "#F5F5F5",
              }}
            >
              {String(pct).padStart(3, "0")}
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="absolute inset-x-8 bottom-6 h-px"
            style={{ background: "rgba(245,245,245,0.1)" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "#FF3333" }}
              animate={{ width: `${pct}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
