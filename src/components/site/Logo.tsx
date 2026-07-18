export function Logo({ className = "" }: { className?: string }) {
  // Replace with your uploaded SVG/PNG logo when ready.
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M6 22 C6 14, 26 18, 26 10 M6 22 C6 28, 26 24, 26 16"
          stroke="url(#lg)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg> */}

      <img 
        src="/logo.png" 
        alt="SO Digital Marketing Agency Logo" 
        className="h-7 w-auto object-contain" 
      />
      <span className="font-display text-[19px] leading-none tracking-tight">
        Sam<span className="text-primary">.</span>Creattive
      </span>
    </div>
  );
}