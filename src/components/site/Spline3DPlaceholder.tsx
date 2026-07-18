import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// SPLINE_SCENE_URL — paste your published Spline scene URL here
// and set USE_SPLINE = true after installing `@splinetool/react-spline`.
//   1) bun add @splinetool/react-spline
//   2) Uncomment the Spline import + block below.
// ─────────────────────────────────────────────────────────────
// import Spline from "@splinetool/react-spline";
export const SPLINE_SCENE_URL = "https://prod.spline.design/YOUR_SCENE/scene.splinecode";
const USE_SPLINE = false;

export function Spline3DPlaceholder() {
  const wrap = useRef<HTMLDivElement>(null);
  const orb = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const o = orb.current;
    if (!el || !o) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 60;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 60;
    };
    const onLeave = () => { tx = 0; ty = 0; };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      o.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  if (USE_SPLINE) {
    // return <Spline scene={SPLINE_SCENE_URL} />;
  }

  return (
    <div ref={wrap} className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-border bg-surface noise">
      {/* concentric rings */}
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="rg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {[60, 110, 160, 210].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeOpacity="0.08" />
        ))}
        <circle cx="200" cy="200" r="180" fill="url(#rg)" />
      </svg>

      {/* the orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={orb} className="relative h-[55%] w-[55%]">
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                "conic-gradient(from 120deg, oklch(0.65 0.24 295), oklch(0.55 0.22 260), oklch(0.75 0.2 320), oklch(0.65 0.24 295))",
              animation: "float-orb 12s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.9 0.1 300) 0%, oklch(0.55 0.24 285) 40%, oklch(0.15 0.03 285) 80%)",
              boxShadow: "inset -20px -30px 60px rgba(0,0,0,0.6), 0 30px 80px rgba(139,92,246,0.35)",
            }}
          />
        </div>
      </div>

      {/* HUD corners */}
      <div className="pointer-events-none absolute inset-4 flex flex-col justify-between">
        <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>◉ live · scene_01</span>
          <span>fps 60</span>
        </div>
        <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>move cursor to interact</span>
          <span>rendered · webgl</span>
        </div>
      </div>
    </div>
  );
}