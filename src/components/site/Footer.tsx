import { Logo } from "./Logo";

const socials = [
  { label: "Instagram", href: "https://instagram.com/sam.creattive" },
  { label: "YouTube",   href: "https://youtube.com" },
  { label: "TikTok",    href: "https://tiktok.com" },
  { label: "LinkedIn",  href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 md:pb-8"
      style={{ borderTop: "1px solid rgba(245,245,245,0.08)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-14 md:flex-row">
          {/* Brand col */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 font-mono text-[11px] leading-[1.8] text-[#888888]">
              Ground-and-pound short-form studio. 4K every 4 days. 30 reels a month.
              48-hour turnaround. No excuses, no empty days.
            </p>
            {/* Email CTA */}
            <a
              href="mailto:hello@samcreatives.co"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-[#FF3333]"
            >
              hello@samcreatives.co
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]">
                Studio
              </div>
              <ul className="space-y-3">
                {["Work", "Services", "Process", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-[#F5F5F5]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]">
                Follow
              </div>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888] transition-colors hover:text-[#F5F5F5]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF3333]">
                Booking
              </div>
              <ul className="space-y-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                <li className="text-[#F5F5F5]">2 Slots Open</li>
                <li className="text-[#888888]">₹15K–₹20K / mo</li>
                <li className="text-[#888888]">30-Day Rolling</li>
                <li className="text-[#888888]">Reply &lt; 24H</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#888888] sm:flex-row"
          style={{ borderColor: "rgba(245,245,245,0.08)" }}
        >
          <span>© {new Date().getFullYear()} Sam Creattive · All rights reserved</span>
          <span>4K · 48H · 30 REELS · 0 EXCUSES</span>
        </div>

        {/* Massive wordmark */}
        <div
          className="mt-8 select-none uppercase"
          style={{
            fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            fontSize: "clamp(4rem, 20vw, 18rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.03em",
            color: "rgba(245,245,245,0.04)",
          }}
        >
          SAM
        </div>
      </div>
    </footer>
  );
}
