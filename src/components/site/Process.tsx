import { SectionLabel } from "./SectionLabel";

// ─── 30-Day calendar data ─────────────────────────────────────────────────────
// Each entry has a day number, a content type, and an optional shoot marker.

type ContentType =
  | "REEL"
  | "STATIC"
  | "STORY"
  | "REEL+SHOOT"
  | "COLLAB"
  | "TRENDING"
  | "REST";

interface CalendarDay {
  day: number;
  type: ContentType;
  label: string;
}

const CALENDAR: CalendarDay[] = [
  { day: 1,  type: "REEL+SHOOT", label: "Shop Open / B-roll" },
  { day: 2,  type: "REEL",       label: "Product Close-up" },
  { day: 3,  type: "STATIC",     label: "Offer Post" },
  { day: 4,  type: "REEL+SHOOT", label: "Process / Making-of" },
  { day: 5,  type: "TRENDING",   label: "Hook Reel" },
  { day: 6,  type: "STATIC",     label: "Testimonial Card" },
  { day: 7,  type: "REEL",       label: "FAQ Breakdown" },
  { day: 8,  type: "REEL+SHOOT", label: "Raw Aesthetic" },
  { day: 9,  type: "STATIC",     label: "Product Feature" },
  { day: 10, type: "TRENDING",   label: "Trend Riff" },
  { day: 11, type: "REEL",       label: "Brand Story Cut" },
  { day: 12, type: "REEL+SHOOT", label: "Team / Behind Scenes" },
  { day: 13, type: "STATIC",     label: "Before / After" },
  { day: 14, type: "COLLAB",     label: "Collab / Stitch" },
  { day: 15, type: "REEL",       label: "Top 3 List" },
  { day: 16, type: "REEL+SHOOT", label: "New Arrival Reveal" },
  { day: 17, type: "STATIC",     label: "Quote / Value Card" },
  { day: 18, type: "TRENDING",   label: "Audio Trend Reel" },
  { day: 19, type: "REEL",       label: "Informative Breakdown" },
  { day: 20, type: "REEL+SHOOT", label: "Shop Atmosphere" },
  { day: 21, type: "STATIC",     label: "Milestone / Gratitude" },
  { day: 22, type: "REEL",       label: "Customer Reaction" },
  { day: 23, type: "COLLAB",     label: "UGC Repost / Stitch" },
  { day: 24, type: "REEL+SHOOT", label: "Detail / Texture B-roll" },
  { day: 25, type: "TRENDING",   label: "Challenge Reel" },
  { day: 26, type: "STATIC",     label: "End-of-Month Offer" },
  { day: 27, type: "REEL",       label: "Tutorial / How-to" },
  { day: 28, type: "REEL+SHOOT", label: "Month Recap Reel" },
  { day: 29, type: "STATIC",     label: "Next Month Teaser" },
  { day: 30, type: "REEL",       label: "Win Highlight / Analytics" },
];

const TYPE_STYLES: Record<ContentType, { bg: string; color: string; label: string; textColor: string }> = {
  "REEL+SHOOT": { bg: "#FF3333",                   color: "#FFFFFF", label: "SHOOT + REEL", textColor: "rgba(255,255,255,0.75)" },
  "REEL":       { bg: "rgba(245,245,245,0.06)",    color: "#F5F5F5", label: "REEL",         textColor: "#666666" },
  "STATIC":     { bg: "rgba(212,255,0,0.10)",      color: "#D4FF00", label: "STATIC",       textColor: "#888888" },
  "STORY":      { bg: "rgba(245,245,245,0.03)",    color: "#888888", label: "STORY",        textColor: "#555555" },
  "TRENDING":   { bg: "rgba(255,100,100,0.12)",    color: "#FF8888", label: "TRENDING",     textColor: "#666666" },
  "COLLAB":     { bg: "rgba(212,255,0,0.07)",      color: "#aad400", label: "COLLAB",       textColor: "#666666" },
  "REST":       { bg: "transparent",               color: "#444444", label: "REST",         textColor: "#333333" },
};

// ─── Calendar cell ────────────────────────────────────────────────────────────

function CalCell({ day }: { day: CalendarDay }) {
  const s = TYPE_STYLES[day.type];
  const isShoot = day.type === "REEL+SHOOT";

  return (
    <div
      className="relative flex flex-col justify-between transition-all duration-150"
      style={{
        background: s.bg,
        border: isShoot ? "1px solid #FF3333" : "1px solid rgba(245,245,245,0.05)",
        minHeight: 90,
        padding: "10px 10px 9px",
        cursor: "default",
      }}
    >
      {/* Day number row */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-mono text-[10px] leading-none font-medium"
          style={{ color: isShoot ? "rgba(255,255,255,0.55)" : "#444444" }}
        >
          {String(day.day).padStart(2, "0")}
        </span>
        {isShoot && (
          <span
            className="font-mono text-[8px] uppercase tracking-[0.14em] px-1.5 py-0.5"
            style={{ background: "rgba(0,0,0,0.25)", color: "#ffffff" }}
          >
            📍 ON-SITE
          </span>
        )}
      </div>

      {/* Content type + label */}
      <div>
        <div
          className="font-mono text-[8px] uppercase tracking-[0.14em] mb-1"
          style={{ color: s.color, fontWeight: isShoot ? 700 : 400 }}
        >
          {s.label}
        </div>
        <div
          className="font-mono text-[9px] leading-tight"
          style={{ color: isShoot ? "rgba(255,255,255,0.7)" : s.textColor }}
        >
          {day.label}
        </div>
      </div>
    </div>
  );
}

// ─── Legend item ──────────────────────────────────────────────────────────────

function LegendItem({ type }: { type: ContentType }) {
  const s = TYPE_STYLES[type];
  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          width: 12,
          height: 12,
          background: s.bg,
          border: type === "REEL+SHOOT" ? "none" : `1px solid ${s.color}`,
          flexShrink: 0,
        }}
      />
      <span className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: s.color }}>
        {s.label}
      </span>
    </div>
  );
}

// ─── Process section ──────────────────────────────────────────────────────────

export function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionLabel>Process / Content Calendar</SectionLabel>

        {/* Header */}
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
            THE 30-DAY
            <br />
            <span style={{ color: "#FF3333" }}>ASSAULT.</span>
          </h2>
        </div>

        {/* Body copy */}
        <p
          className="mt-8 max-w-3xl font-mono text-[13px] leading-[1.9]"
          style={{ color: "#888888" }}
        >
          We don't just shoot and ghost. We build a{" "}
          <span style={{ color: "#F5F5F5" }}>living content calendar</span> mixing
          informative breakdowns, product B-rolls, raw shop aesthetics, and trending patterns.
          Every reel has a purpose — a hook type, a content category, a goal.
          We test, we analyze the reach, and we{" "}
          <span style={{ color: "#D4FF00" }}>double down on what wins.</span>
        </p>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 border-b pb-8" style={{ borderColor: "rgba(245,245,245,0.08)" }}>
          {(["REEL+SHOOT", "REEL", "STATIC", "TRENDING", "COLLAB"] as ContentType[]).map((t) => (
            <LegendItem key={t} type={t} />
          ))}
          <div className="ml-auto font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: "#888888" }}>
            ● = On-site 4K shoot day
          </div>
        </div>

        {/* Calendar grid — scrollable on mobile, 6-col grid on desktop */}
        <div className="mt-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(100px, 1fr))",
              gap: "2px",
              minWidth: 620,
            }}
          >
            {CALENDAR.map((day) => (
              <CalCell key={day.day} day={day} />
            ))}
          </div>
        </div>

        {/* Footer callout */}
        <div
          className="mt-6 grid grid-cols-1 gap-px sm:grid-cols-3"
          style={{ background: "rgba(245,245,245,0.06)" }}
        >
          {[
            { k: "7–8", v: "Shoot days / month", accent: true },
            { k: "30",  v: "Posts delivered", accent: false },
            { k: "100%", v: "Calendar pre-approved by you", accent: false },
          ].map((s) => (
            <div
              key={s.k}
              className="flex items-center gap-5 p-6"
              style={{ background: "#111111" }}
            >
              <span
                style={{
                  fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  color: s.accent ? "#FF3333" : "#F5F5F5",
                }}
              >
                {s.k}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "#888888" }}>
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
