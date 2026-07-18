import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";
    const move = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a,button,[data-cursor='hover'],input,textarea,select,label"));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.2 : 1, opacity: hover ? 0.6 : 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="h-8 w-8 rounded-full border border-primary/70 mix-blend-difference"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      />
    </>
  );
}