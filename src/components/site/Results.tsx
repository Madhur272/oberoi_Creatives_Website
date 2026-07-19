import { SectionLabel } from "./SectionLabel";

const stats = [
  {
    k: "30",
    unit: "REELS",
    v: "Per Month. Every Month.",
    d: "We don't do content sprints. We build a machine. 30 edited, posted, and captioned reels — or you don't pay.",
    accent: true,
  },
  {
    k: "48H",
    unit: "",
    v: "Rough-Cut Turnaround",
    d: "Shoot wraps. 48 hours later, your first edit is in your DMs. No 2-week wait.",
    accent: false,
  },
  {
    k: "4K",
    unit: "EVERY",
    v: "Single Shoot",
    d: "Sony FX3/FX6 with cinema glass. Not a phone. Not a mirrorless from 2019.",
    accent: false,
  },
  {
    k: "0",
    unit: "",
    v: "Empty Days",
    d: "Daily posting is a hard guarantee. No weekends off, no 'we'll catch up tomorrow'.",
    accent: true,
  },
];

export function Results() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionLabel>The Numbers</SectionLabel>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2
            className="uppercase"
            style={{
              fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#F5F5F5",
            }}
          >
            NUMBERS THAT
            <br />
            <span style={{ color: "#FF3333" }}>DON'T LIE.</span>
          </h2>
          <p className="max-w-sm font-mono text-[12px] leading-[1.8] text-[#888888]">
            We built every guarantee from the ground up. These are contractual,
            not marketing copy.
          </p>
        </div>

        {/* Stat grid */}
        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "rgba(245,245,245,0.06)" }}>
          {stats.map((s) => (
            <div
              key={s.k}
              className="relative p-7 flex flex-col"
              style={{
                background: s.accent ? "rgba(255,51,51,0.05)" : "#111111",
              }}
            >
              <div className="mb-auto">
                {/* Big number */}
                <div className="flex items-end gap-2 mb-4">
                  <span
                    style={{
                      fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
                      fontSize: "clamp(3.5rem, 7vw, 5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: s.accent ? "#FF3333" : "#F5F5F5",
                    }}
                  >
                    {s.k}
                  </span>
                  {s.unit && (
                    <span
                      className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em]"
                      style={{ color: s.accent ? "#FF3333" : "#888888" }}
                    >
                      {s.unit}
                    </span>
                  )}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F5F5] mb-3">
                  {s.v}
                </div>
                <p className="font-mono text-[11px] leading-[1.7] text-[#888888]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <figure
          className="mt-4 p-8 sm:p-10"
          style={{
            background: "rgba(26,26,26,1)",
            border: "1px solid rgba(245,245,245,0.08)",
            borderRadius: 0,
          }}
        >
          <div
            style={{
              fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1,
              color: "#FF3333",
            }}
          >
            &#8220;
          </div>
          <blockquote className="mt-4 font-mono text-[14px] leading-[1.8] text-[#F5F5F5] max-w-3xl">
            Sam's team don't shoot ads — they engineer scroll-stoppers. Our Instagram
            went from 800 to 12,000 followers in 60 days. Every single reel was on time.
            Every single one was 4K. This isn't an agency, it's a production machine.
          </blockquote>
          <figcaption
            className="mt-8 flex items-center gap-4 border-t pt-6"
            style={{ borderColor: "rgba(245,245,245,0.08)" }}
          >
            <div
              className="h-10 w-10 rounded-full"
              style={{ background: "linear-gradient(135deg, #FF3333 0%, #880000 100%)" }}
            />
            <div>
              <div className="font-mono text-[12px] text-[#F5F5F5]">Mr. Sunny</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                Owner · Ruby Hardware Store.
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
