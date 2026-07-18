import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className={`flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all ${scrolled ? "glass" : ""}`}>
          <a href="#top" className="text-foreground">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <MagneticButton href="#contact">Book a call →</MagneticButton>
          </div>
          <button
            aria-label="Toggle menu"
            className="rounded-full border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 8h16" /><path d="M4 16h16" /></>}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-5 mt-2 glass rounded-3xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground">
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}