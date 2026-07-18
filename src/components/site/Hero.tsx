import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

// ─── Viewfinder corner brackets (pure CSS approach via inline styles) ───────

function ViewfinderCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: 28,
    height: 28,
    borderColor: "#FF3333",
    borderStyle: "solid",
    zIndex: 20,
    pointerEvents: "none",
  };
  const positions: Record<typeof pos, React.CSSProperties> = {
    tl: { top: 10, left: 10, borderWidth: "2px 0 0 2px" },
    tr: { top: 10, right: 10, borderWidth: "2px 2px 0 0" },
    bl: { bottom: 10, left: 10, borderWidth: "0 0 2px 2px" },
    br: { bottom: 10, right: 10, borderWidth: "0 2px 2px 0" },
  };
  return <div style={{ ...base, ...positions[pos] }} aria-hidden />;
}

// ─── REC indicator ───────────────────────────────────────────────────────────

function RecBadge() {
  return (
    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none" aria-hidden>
      <span
        className="h-2 w-2 rounded-full bg-[#FF3333]"
        style={{ animation: "blink 1.2s step-start infinite" }}
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]">REC</span>
    </div>
  );
}

// ─── Focus-peaking overlay ────────────────────────────────────────────────────

function FocusPeakOverlay() {
  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      aria-hidden
      style={{
        background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)",
      }}
    />
  );
}

// ─── Scanline effect ──────────────────────────────────────────────────────────

function ScanlineOverlay() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(180deg, transparent 0%, rgba(255,51,51,0.04) 50%, transparent 100%)",
          animation: "scanline 4s linear infinite",
        }}
      />
      {/* CRT scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── Viewfinder metadata ─────────────────────────────────────────────────────

function ViewfinderMeta() {
  return (
    <>
      {/* Bottom-left: focal info */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none" aria-hidden>
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F5F5F5]/70 leading-relaxed">
          <div>4K · 24FPS · S-LOG3</div>
          <div className="text-[#D4FF00]">AF ◉ LOCKED</div>
        </div>
      </div>
      {/* Bottom-right: exposure */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-right" aria-hidden>
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F5F5F5]/70 leading-relaxed">
          <div>ISO 800</div>
          <div>1/50s F2.8</div>
        </div>
      </div>
      {/* Top-right: timecode */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none" aria-hidden>
        <div className="font-mono text-[9px] tracking-[0.12em] text-[#F5F5F5]/50">
          00:00:04:12
        </div>
      </div>
    </>
  );
}

// ─── IG Reel Viewfinder ───────────────────────────────────────────────────────

function IGReelViewfinder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative w-full mx-auto"
      style={{ maxWidth: "min(320px, 85vw)" }}
    >
      {/* Outer frame — the "camera body" */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "9/16",
          background: "#0a0a0a",
          border: "1px solid rgba(255,51,51,0.25)",
          boxShadow: "0 0 0 1px rgba(255,51,51,0.08), 0 24px 80px rgba(0,0,0,0.8), inset 0 0 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* The actual IG embed / iframe */}
        <iframe
          src="https://www.instagram.com/reel/Da5N8NwyPGe/embed/"
          title="Sam Creattive — agency explainer reel"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            background: "#111",
            // Shift iframe content to hide IG chrome and show only the video
            transform: "scale(1.08)",
            transformOrigin: "center center",
          }}
        />

        {/* Overlays sit on top of the iframe */}
        <FocusPeakOverlay />
        <ScanlineOverlay />
        <RecBadge />
        <ViewfinderMeta />

        {/* Viewfinder corners */}
        <ViewfinderCorner pos="tl" />
        <ViewfinderCorner pos="tr" />
        <ViewfinderCorner pos="bl" />
        <ViewfinderCorner pos="br" />

        {/* Centre crosshair */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" aria-hidden>
          <div style={{ position: "relative", width: 24, height: 24 }}>
            {/* horizontal */}
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(255,51,51,0.45)", transform: "translateY(-50%)" }} />
            {/* vertical */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(255,51,51,0.45)", transform: "translateX(-50%)" }} />
            {/* centre dot */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 4, height: 4, background: "#FF3333", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
          </div>
        </div>
      </div>

      {/* Label below viewfinder */}
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888]">
        <span>@sam.creattive</span>
        <span className="text-[#FF3333]">▶ AUTOPLAY</span>
      </div>
    </motion.div>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

const STATS = [
  { k: "30", v: "Reels/mo" },
  { k: "48H", v: "Turnaround" },
  { k: "4K", v: "Every shoot" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
      style={{ background: "#111111" }}
    >
      {/* Subtle red ambient — very sparse */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(255,51,51,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal rule - top */}
      <div className="absolute top-0 inset-x-0 h-px bg-[rgba(245,245,245,0.06)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        {/* ── Left: copy ── */}
        <div>
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-8 inline-flex items-center gap-2 border border-[rgba(255,51,51,0.3)] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888]"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#FF3333]"
              style={{ animation: "blink 1.2s step-start infinite" }}
            />
            NOW BOOKING · 15K–20K INR / MONTH
          </motion.div>

          {/* MAIN HEADLINE — Impact, massive, condensed */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
              fontSize: "clamp(4rem, 10vw, 8.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#F5F5F5",
              textTransform: "uppercase",
            }}
          >
            WE DON'T{" "}
            <br />
            <span style={{ color: "#FF3333", WebkitTextStroke: "1px #FF3333" }}>GUESS.</span>
            <br />
            WE SHOOT.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-lg font-mono text-[13px] leading-[1.8] text-[#888888]"
          >
            30 Reels. 0 Empty Days.{" "}
            <span className="text-[#D4FF00]">48-Hour Turnaround.</span>{" "}
            We are a ground-and-pound short-form studio building your brand's visual
            identity, one 4K frame at a time.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10"
          >
            <MagneticButton href="#services">View Our Packages →</MagneticButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-[rgba(245,245,245,0.08)] pt-6"
          >
            {STATS.map((s) => (
              <div key={s.k}>
                <div
                  style={{
                    fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1,
                    color: "#FF3333",
                  }}
                >
                  {s.k}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#888888]">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: IG Reel Viewfinder ── */}
        <div className="flex justify-center lg:justify-end">
          <IGReelViewfinder />
        </div>
      </div>
    </section>
  );
}
