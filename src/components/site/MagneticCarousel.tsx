/**
 * MagneticCarousel
 *
 * Horizontally draggable carousel that:
 * - Snaps strictly to the center of the viewport on drag-end
 * - Uses framer-motion drag + spring physics for magnetic snap feel
 * - Expands as a fullscreen overlay when triggered
 * - Each card can contain an iframe embed (IG/YouTube Short)
 */
import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export interface CarouselItem {
  id: string;
  /** Iframe embed URL (IG reel embed or YouTube short embed) */
  embedUrl: string;
  /** Title for a11y */
  title: string;
  /** Optional poster/thumbnail shown before load */
  poster?: string;
}

interface MagneticCarouselProps {
  items: CarouselItem[];
  onClose: () => void;
  /** Initially center on this index */
  initialIndex?: number;
}

const CARD_WIDTH = 280;
const CARD_GAP = 16;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function CarouselCard({ item, isCenter }: { item: CarouselItem; isCenter: boolean }) {
  return (
    <motion.div
      animate={{
        scale: isCenter ? 1 : 0.88,
        opacity: isCenter ? 1 : 0.55,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      style={{
        width: CARD_WIDTH,
        flexShrink: 0,
        aspectRatio: "9/16",
        position: "relative",
        background: "#0a0a0a",
        border: isCenter ? "1px solid rgba(255,51,51,0.5)" : "1px solid rgba(245,245,245,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Iframe embed */}
      <iframe
        src={item.embedUrl}
        title={item.title}
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
        }}
      />
      {/* Viewfinder corners on center card */}
      {isCenter && (
        <>
          {[
            { top: 8, left: 8, border: "2px 0 0 2px" },
            { top: 8, right: 8, border: "2px 2px 0 0" },
            { bottom: 8, left: 8, border: "0 0 2px 2px" },
            { bottom: 8, right: 8, border: "0 2px 2px 0" },
          ].map((corner, i) => (
            <div
              key={i}
              aria-hidden
              style={{
                position: "absolute",
                width: 18,
                height: 18,
                borderColor: "#FF3333",
                borderStyle: "solid",
                borderWidth: corner.border,
                zIndex: 10,
                pointerEvents: "none",
                ...Object.fromEntries(
                  Object.entries(corner).filter(([k]) => ["top", "left", "right", "bottom"].includes(k))
                ),
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}

export function MagneticCarousel({ items, onClose, initialIndex = 0 }: MagneticCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 35, mass: 0.8 });

  // Center offset: places item[index] at viewport center
  const getOffsetForIndex = useCallback(
    (index: number) => {
      const vw = window.innerWidth;
      return -(index * CARD_STRIDE) + vw / 2 - CARD_WIDTH / 2;
    },
    []
  );

  // Snap to center on mount
  useEffect(() => {
    x.set(getOffsetForIndex(initialIndex));
  }, [initialIndex, x, getOffsetForIndex]);

  const snapToIndex = useCallback(
    (index: number) => {
      const clamped = clamp(index, 0, items.length - 1);
      setActiveIndex(clamped);
      x.set(getOffsetForIndex(clamped));
    },
    [items.length, x, getOffsetForIndex]
  );

  const handleDragEnd = useCallback(() => {
    const currentX = x.get();
    const vw = window.innerWidth;
    const centerX = vw / 2 - CARD_WIDTH / 2;
    // Closest index from drag position
    const rawIndex = (centerX - currentX) / CARD_STRIDE;
    const nearest = Math.round(rawIndex);
    snapToIndex(nearest);
  }, [x, snapToIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") snapToIndex(activeIndex + 1);
      if (e.key === "ArrowLeft") snapToIndex(activeIndex - 1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, snapToIndex, onClose]);

  const totalWidth = items.length * CARD_STRIDE;

  return (
    <AnimatePresence>
      <motion.div
        key="carousel-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(17,17,17,0.97)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
        onClick={(e) => {
          // Close when clicking backdrop (not cards)
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Header */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(245,245,245,0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "JetBrains Mono, IBM Plex Mono, monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
            {activeIndex + 1} / {items.length} —{" "}
            <span style={{ color: "#FF3333" }}>DRAG TO EXPLORE</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close carousel"
            style={{
              background: "transparent",
              border: "1px solid rgba(245,245,245,0.15)",
              color: "#F5F5F5",
              padding: "8px 14px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
            Close
          </button>
        </div>

        {/* Carousel track */}
        <div
          ref={containerRef}
          style={{
            width: "100vw",
            overflow: "hidden",
            cursor: "grab",
            userSelect: "none",
          }}
        >
          <motion.div
            drag="x"
            dragElastic={0.08}
            dragConstraints={{
              left: getOffsetForIndex(items.length - 1) - 40,
              right: getOffsetForIndex(0) + 40,
            }}
            onDragEnd={handleDragEnd}
            style={{
              x: springX,
              display: "flex",
              gap: CARD_GAP,
              width: totalWidth,
              alignItems: "center",
              height: "72vh",
              paddingLeft: 0,
            }}
            whileDrag={{ cursor: "grabbing" }}
          >
            {items.map((item, i) => (
              <CarouselCard
                key={item.id}
                item={item}
                isCenter={i === activeIndex}
              />
            ))}
          </motion.div>
        </div>

        {/* Nav arrows */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <button
            onClick={() => snapToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous"
            style={{
              background: "transparent",
              border: "1px solid rgba(245,245,245,0.15)",
              color: activeIndex === 0 ? "#444" : "#F5F5F5",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: activeIndex === 0 ? "not-allowed" : "pointer",
              transition: "border-color 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 6 }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => snapToIndex(i)}
                aria-label={`Go to ${i + 1}`}
                style={{
                  width: i === activeIndex ? 24 : 6,
                  height: 6,
                  background: i === activeIndex ? "#FF3333" : "rgba(245,245,245,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s, background 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => snapToIndex(activeIndex + 1)}
            disabled={activeIndex === items.length - 1}
            aria-label="Next"
            style={{
              background: "transparent",
              border: "1px solid rgba(245,245,245,0.15)",
              color: activeIndex === items.length - 1 ? "#444" : "#F5F5F5",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: activeIndex === items.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
