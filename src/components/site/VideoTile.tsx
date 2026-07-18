import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { VideoSource } from "@/data/portfolio";

export function VideoTile({ v, onOpen }: { v: VideoSource; onOpen: (v: VideoSource) => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !v.src) return;
    if (playing) el.play().catch(() => {});
    else { el.pause(); el.currentTime = 0; }
  }, [playing, v.src]);

  return (
    <motion.button
      onClick={() => onOpen(v)}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border bg-surface text-left"
    >
      <img
        src={v.poster}
        alt={`${v.title} — ${v.client}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      {v.src && (
        <video ref={ref} src={v.src} muted playsInline loop preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${playing ? "opacity-100" : "opacity-0"}`} />
      )}

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(80% 60% at 50% 80%, color-mix(in oklab, var(--color-primary) 30%, transparent), transparent)" }} />

      {/* meta */}
      <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
        <span>{v.id}</span>
        <span className="rounded-full border border-white/20 bg-black/40 px-2 py-0.5 backdrop-blur">{v.category}</span>
      </div>

      <div className="absolute inset-x-4 bottom-4">
        <div className="font-display text-2xl leading-none">{v.title}</div>
        <div className="mt-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{v.client}</span>
          <span className="text-primary/90">{v.metric}</span>
        </div>
      </div>

      {/* play glyph */}
      <div className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </motion.button>
  );
}