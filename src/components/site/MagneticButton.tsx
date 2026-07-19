import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.35,
  /**
   * Custom accent override — pass { fill, text } to replace the default
   * red primary. Hover will invert to transparent bg + fill-coloured text.
   * Example: accentColor={{ fill: "#D4FF00", text: "#111111" }}
   */
  accentColor,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  strength?: number;
  accentColor?: { fill: string; text: string };
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

  // Resolve fill + text from accentColor override or defaults
  const fill  = accentColor?.fill  ?? (variant === "primary" ? "#FF3333" : "transparent");
  const text  = accentColor?.text  ?? (variant === "primary" ? "#F5F5F5" : "#F5F5F5");
  const borderCol = accentColor?.fill ?? (variant === "primary" ? "#FF3333" : "rgba(245,245,245,0.2)");

  const baseStyle = {
    background: fill,
    color: text,
    border: `1px solid ${borderCol}`,
    borderRadius: 0,
  };

  const base =
    "group relative inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all will-change-transform select-none";

  const Comp: any = href ? motion.a : motion.button;
  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, ...baseStyle }}
      className={`${base} ${className}`}
      onMouseEnter={(e: MouseEvent<HTMLElement>) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "transparent";
        el.style.color = borderCol;
        if (variant === "ghost" && !accentColor) {
          el.style.background = "rgba(245,245,245,0.05)";
          el.style.borderColor = "rgba(245,245,245,0.4)";
          el.style.color = "#F5F5F5";
        }
      }}
      onMouseLeaveCapture={(e: MouseEvent<HTMLElement>) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = fill;
        el.style.color = text;
        el.style.borderColor = borderCol;
      }}
    >
      <motion.span style={{ x, y }} className="pointer-events-none flex items-center gap-2">
        {children}
      </motion.span>
    </Comp>
  );
}
