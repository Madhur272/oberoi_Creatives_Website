/**
 * MobileNav — bottom-docked tab bar (Instagram-style)
 * Only renders on mobile (hidden on md+).
 * Tracks active section via IntersectionObserver.
 * Safe-area aware for iPhone home indicator.
 */
import { useEffect, useState } from "react";

interface NavTab {
  id: string;
  href: string;
  label: string;
  icon: React.ReactNode;
}

const TABS: NavTab[] = [
  {
    id: "top",
    href: "#top",
    label: "Home",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12L12 3l9 9" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    id: "work",
    href: "#work",
    label: "Work",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "services",
    href: "#services",
    label: "Packages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "process",
    href: "#process",
    label: "Calendar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    id: "contact",
    href: "#contact",
    label: "Book",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

// Which section IDs to observe
const SECTION_IDS = ["top", "work", "services", "process", "contact"];

export function MobileNav() {
  const [active, setActive] = useState("top");

  // Track which section is in viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTap = (href: string) => {
    const id = href.replace("#", "");
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="md:hidden"
      aria-label="Mobile navigation"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "rgba(17,17,17,0.97)",
        borderTop: "1px solid rgba(245,245,245,0.1)",
        backdropFilter: "blur(16px) saturate(120%)",
        // Safe-area inset for iPhone home indicator
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          height: 56,
        }}
      >
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTap(tab.href)}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "6px 0",
                position: "relative",
                WebkitTapHighlightColor: "transparent",
                transition: "opacity 0.15s",
              }}
            >
              {/* Active top-line indicator */}
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: isActive ? 20 : 0,
                  height: 2,
                  background: "#FF3333",
                  transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)",
                }}
                aria-hidden
              />

              {/* Icon */}
              <span
                style={{
                  color: isActive ? "#FF3333" : "#555555",
                  transition: "color 0.2s, transform 0.2s",
                  transform: isActive ? "scale(1.1)" : "scale(1)",
                  display: "flex",
                }}
              >
                {tab.icon}
              </span>

              {/* Label */}
              <span
                style={{
                  fontFamily: "JetBrains Mono, IBM Plex Mono, monospace",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isActive ? "#FF3333" : "#444444",
                  transition: "color 0.2s",
                  lineHeight: 1,
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
