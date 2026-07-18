import { Logo } from "./Logo";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube",   href: "https://youtube.com" },
  { label: "TikTok",    href: "https://tiktok.com" },
  { label: "LinkedIn",  href: "https://linkedin.com" },
  { label: "X",         href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-14 md:flex-row">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              A short-form video studio for brands that measure everything. Cinema
              craft, retention obsession, distribution logic.
            </p>
            <a
              href="mailto:hello@samcreatives.co"
              className="group mt-8 inline-flex items-center gap-3 font-display text-4xl leading-none tracking-tight sm:text-5xl"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">hello@samcreatives.co</span>
                <span className="absolute inset-0 block translate-y-full text-primary transition-transform duration-500 group-hover:translate-y-0">let's talk →</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Studio</div>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li><a href="#work" className="hover:text-primary">Work</a></li>
                <li><a href="#services" className="hover:text-primary">Services</a></li>
                <li><a href="#process" className="hover:text-primary">Process</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Follow</div>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                {socials.map((s) => (
                  <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary">{s.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Booking</div>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li>Q3 · 3 slots open</li>
                <li>Remote & On-site</li>
                <li className="text-muted-foreground">Reply within 24h</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Sam Creatives · All rights reserved</span>
          <span>Engineered for scroll · Built with care</span>
        </div>

        <div className="mt-10 select-none font-display leading-[0.85] tracking-tighter text-foreground/[0.06]" style={{ fontSize: "clamp(4rem, 22vw, 22rem)" }}>
          samcreatives
        </div>
      </div>
    </footer>
  );
}