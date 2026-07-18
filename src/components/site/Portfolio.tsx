import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { SplitText } from "./SplitText";
import { VideoTile } from "./VideoTile";
import { VIDEO_SOURCES, type Category, type VideoSource } from "@/data/portfolio";

const filters: ("All" | Category)[] = ["All", "Retail", "Real Estate", "Commercials", "UGC"];

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<VideoSource | null>(null);

  const list = useMemo(
    () => (active === "All" ? VIDEO_SOURCES : VIDEO_SOURCES.filter((v) => v.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Selected work</SectionLabel>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:max-w-xl">
            <SplitText text="Frames that" />{" "}
            <SplitText text="paid rent." className="italic text-primary" />
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${active === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((v) => (
              <motion.div
                key={v.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <VideoTile v={v} onOpen={setOpen} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-3xl border border-border bg-surface"
            >
              {open.src ? (
                <video src={open.src} controls autoPlay className="h-full w-full object-cover" poster={open.poster} />
              ) : (
                <>
                  <img src={open.poster} alt="" className="h-full w-full object-cover opacity-70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Preview slot</span>
                    <p className="text-sm text-foreground/90">Add your CDN or Google Drive link in <code className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-primary">src/data/portfolio.ts</code></p>
                  </div>
                </>
              )}
              <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 p-2 backdrop-blur">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}