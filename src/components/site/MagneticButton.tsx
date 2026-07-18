import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  const base =
    "group relative inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all will-change-transform select-none";

  const primaryStyle = {
    background: "#FF3333",
    color: "#F5F5F5",
    border: "1px solid #FF3333",
    borderRadius: 0,
  };
  const ghostStyle = {
    background: "transparent",
    color: "#F5F5F5",
    border: "1px solid rgba(245,245,245,0.2)",
    borderRadius: 0,
  };

  const Comp: any = href ? motion.a : motion.button;
  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, ...(variant === "primary" ? primaryStyle : ghostStyle) }}
      className={`${base} ${className}`}
      onMouseEnter={(e: MouseEvent<HTMLElement>) => {
        if (variant === "primary") {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#FF3333";
        } else {
          (e.currentTarget as HTMLElement).style.background = "rgba(245,245,245,0.05)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,245,245,0.4)";
        }
      }}
      onMouseLeaveCapture={(e: MouseEvent<HTMLElement>) => {
        if (variant === "primary") {
          (e.currentTarget as HTMLElement).style.background = "#FF3333";
          (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
        } else {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,245,245,0.2)";
        }
      }}
    >
      <motion.span style={{ x, y }} className="pointer-events-none flex items-center gap-2">
        {children}
      </motion.span>
    </Comp>
  );
}
