const items = [
  "PREMIERE PRO",
  "DAVINCI RESOLVE",
  "AFTER EFFECTS",
  "META ADS",
  "X ADS",
  "YOUTUBE SHORTS",
  "SORA AI",
  "CINEMA 4D",
  "4K SHOOTS",
  "DAILY POSTS",
  "48H TURNAROUND",
  "30 REELS/MONTH",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section
      aria-hidden
      className="relative overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(255,51,51,0.25)",
        borderBottom: "1px solid rgba(255,51,51,0.25)",
        background: "rgba(26,26,26,0.6)",
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex w-max gap-14 pr-14 font-mono text-[11px] uppercase tracking-[0.28em]"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-14 whitespace-nowrap"
              style={{ color: i % 3 === 0 ? "#FF3333" : "#888888" }}
            >
              {t}
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  width: 4,
                  height: 4,
                  background: "#FF3333",
                  borderRadius: "50%",
                  opacity: 0.6,
                }}
              />
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16" style={{ background: "linear-gradient(to right, #111111, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16" style={{ background: "linear-gradient(to left, #111111, transparent)" }} />
      </div>
    </section>
  );
}
