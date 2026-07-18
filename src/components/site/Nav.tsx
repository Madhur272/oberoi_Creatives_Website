import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { FlipText } from "./FlipText";

const links = [
  { href: "#work",     label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process",  label: "Process" },
  { href: "#contact",  label: "Contact" },
];

// ─── FlipLink ─────────────────────────────────────────────────────────────────

function FlipLink({ href, children, index }: { href: string; children: string; index: number }) {
  return (
    <a
      href={href}
      className="group relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors"
      style={{ color: "#888888", textDecoration: "none" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
    >
      <span
        className="mr-1.5 font-mono text-[9px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: "#FF3333" }}
      >
        {String(index + 1).padStart(2, "0")}.
      </span>
      <FlipText hover loop={false} duration={0.4} together={false}>
        {children}
      </FlipText>
    </a>
  );
}

// ─── Nav — desktop only, no hamburger ────────────────────────────────────────

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      style={{
        borderBottom: scrolled ? "1px solid rgba(245,245,245,0.08)" : "1px solid transparent",
        background: scrolled ? "rgba(17,17,17,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo — always visible */}
        <a href="#top" style={{ textDecoration: "none" }}>
          <Logo />
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l, i) => (
            <FlipLink key={l.href} href={l.href} index={i}>
              {l.label}
            </FlipLink>
          ))}
        </nav>

        {/* Book a Call — desktop only */}
        <div className="hidden md:block">
          <MagneticButton href="#contact">
            <FlipText hover loop={false} duration={0.35} together={false}>
              Book a Call
            </FlipText>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
