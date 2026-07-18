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

const TYPE_STYLES: Record<ContentType, { bg: string; color: string; label: string }> = {
  "REEL+SHOOT": { bg: "rgba(255,51,51,0.18)",  color: "#FF3333", label: "SHOOT + REEL" },
  "REEL":       { bg: "rgba(245,245,245,0.08)", color: "#F5F5F5", label: "REEL" },
  "STATIC":     { bg: "rgba(212,255,0,0.08)",   color: "#D4FF00", label: "STATIC" },
  "STORY":      { bg: "rgba(245,245,245,0.05)", color: "#888888", label: "STORY" },
  "TRENDING":   { bg: "rgba(255,51,51,0.10)",   color: "#FF8888", label: "TRENDING" },
  "COLLAB":     { bg: "rgba(212,255,0,0.05)",   color: "#aad400", label: "COLLAB" },
  "REST":       { bg: "transparent",            color: "#444444", label: "REST" },
};

// ─── Calendar cell ────────────────────────────────────────────────────────────

function CalCell({ day }: { day: CalendarDay }) {
  const style = TYPE_STYLES[day.type];
  return (
    <div
      className="relative flex flex-col justify-between p-2 transition-all duration-150 hover:brightness-125"
      style={{
        background: style.bg,
        border: "1px solid rgba(245,245,245,0.05)",
        minHeight: 70,
        cursor: "default",
      }}
    >
      {/* Day number */}
      <div
        className="font-mono text-[9px] leading-none"
        style={{ color: day.type === "REEL+SHOOT" ? "#FF3333" : "#555555" }}
      >
        {String(day.day).padStart(2, "0")}
        {day.type === "REEL+SHOOT" && (
          <span
            className="ml-1 font-mono text-[8px] uppercase"
            style={{ color: "#FF3333" }}
          >
            ● SHOOT
          </span>
        )}
      </div>
      {/* Content type badge */}
      <div>
        <div
          className="font-mono text-[8px] uppercase tracking-[0.12em] mb-0.5"
          style={{ color: style.color }}
        >
          {style.label}
        </div>
        <div
          className="font-mono text-[8px] leading-tight"
          style={{ color: "#888888" }}
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
          width: 10,
          height: 10,
          background: s.bg,
          border: `1px solid ${s.color}`,
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
