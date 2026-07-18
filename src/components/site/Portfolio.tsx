import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { MagneticCarousel, type CarouselItem } from "./MagneticCarousel";

// ─── Genre data ───────────────────────────────────────────────────────────────
// Add real IG embed URLs or YouTube Short embed URLs to each item's embedUrl.
// Instagram reel embed format: https://www.instagram.com/reel/{SHORTCODE}/embed/
// YouTube Short embed format:  https://www.youtube.com/embed/{VIDEO_ID}

interface Genre {
  id: string;
  label: string;
  description: string;
  count: string;
  items: CarouselItem[];
}

const GENRES: Genre[] = [
  {
    id: "retail",
    label: "[RETAIL]",
    description: "Shop aesthetics, new arrivals, B-roll, product reveals.",
    count: "6 reels",
    items: [
      { id: "retail-1", title: "Retail Reel 1", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "retail-2", title: "Retail Reel 2", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "retail-3", title: "Retail Reel 3", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "retail-4", title: "Retail Reel 4", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "retail-5", title: "Retail Reel 5", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "retail-6", title: "Retail Reel 6", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
    ],
  },
  {
    id: "fnb",
    label: "[F&B]",
    description: "Food styling, kitchen process, sensory close-ups.",
    count: "5 reels",
    items: [
      { id: "fnb-1", title: "F&B Reel 1", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fnb-2", title: "F&B Reel 2", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fnb-3", title: "F&B Reel 3", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fnb-4", title: "F&B Reel 4", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fnb-5", title: "F&B Reel 5", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
    ],
  },
  {
    id: "fashion",
    label: "[FASHION]",
    description: "Model shoots, catalogue stills, lookbooks, transitions.",
    count: "6 reels",
    items: [
      { id: "fashion-1", title: "Fashion Reel 1", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fashion-2", title: "Fashion Reel 2", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fashion-3", title: "Fashion Reel 3", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fashion-4", title: "Fashion Reel 4", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fashion-5", title: "Fashion Reel 5", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "fashion-6", title: "Fashion Reel 6", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
    ],
  },
  {
    id: "realestate",
    label: "[REAL ESTATE]",
    description: "Property walkthroughs, architectural B-roll, drone cuts.",
    count: "5 reels",
    items: [
      { id: "re-1", title: "Real Estate Reel 1", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "re-2", title: "Real Estate Reel 2", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "re-3", title: "Real Estate Reel 3", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "re-4", title: "Real Estate Reel 4", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
      { id: "re-5", title: "Real Estate Reel 5", embedUrl: "https://www.instagram.com/reel/Da5N8NwyPGe/embed/" },
    ],
  },
];

// ─── Genre block ──────────────────────────────────────────────────────────────

function GenreBlock({
  genre,
  onOpen,
}: {
  genre: Genre;
  onOpen: (genre: Genre) => void;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(245,245,245,0.08)",
        cursor: "pointer",
      }}
      whileHover={{ borderColor: "rgba(255,51,51,0.4)" }}
      transition={{ duration: 0.2 }}
      onClick={() => onOpen(genre)}
    >
      {/* Big genre label */}
      <div className="p-7 pb-4">
        <h3
          className="uppercase"
          style={{
            fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
            color: "#F5F5F5",
            transition: "color 0.2s",
          }}
        >
          {genre.label}
        </h3>
        <p
          className="mt-3 font-mono text-[11px] leading-[1.7]"
          style={{ color: "#888888" }}
        >
          {genre.description}
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between px-7 py-4 border-t"
        style={{ borderColor: "rgba(245,245,245,0.08)" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "#888888" }}>
          {genre.count}
        </span>
        <div
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
          style={{ color: "#FF3333" }}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            Click to expand
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="translate-x-0 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover red underline */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
        style={{ background: "#FF3333" }}
        aria-hidden
      />
    </motion.div>
  );
}

// ─── Portfolio section ────────────────────────────────────────────────────────

export function Portfolio() {
  const [openGenre, setOpenGenre] = useState<Genre | null>(null);

  return (
    <section id="work" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionLabel>Selected Work</SectionLabel>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2
            className="uppercase"
            style={{
              fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#F5F5F5",
            }}
          >
            FRAMES THAT
            <br />
            <span style={{ color: "#FF3333" }}>PAID RENT.</span>
          </h2>
          <p className="max-w-xs font-mono text-[12px] leading-[1.8]" style={{ color: "#888888" }}>
            Click any genre block to expand the full reel library for that
            category. Drag to navigate. Snap to view.
          </p>
        </div>

        {/* Genre blocks */}
        <div
          className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2"
          style={{ background: "rgba(245,245,245,0.06)" }}
        >
          {GENRES.map((genre) => (
            <GenreBlock key={genre.id} genre={genre} onOpen={setOpenGenre} />
          ))}
        </div>

        {/* Instruction note */}
        <div
          className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]"
          style={{ color: "#888888" }}
        >
          <span style={{ color: "#FF3333" }}>//</span>
          <span>
            Replace embed URLs in{" "}
            <code style={{ color: "#D4FF00" }}>Portfolio.tsx</code> with your
            actual IG reel or YouTube Short URLs to populate the carousel.
          </span>
        </div>
      </div>

      {/* Magnetic Carousel overlay */}
      <AnimatePresence>
        {openGenre && (
          <MagneticCarousel
            key={openGenre.id}
            items={openGenre.items}
            onClose={() => setOpenGenre(null)}
            initialIndex={0}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
