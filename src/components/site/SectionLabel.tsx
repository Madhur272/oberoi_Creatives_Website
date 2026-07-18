export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]"
      style={{ color: "#888888" }}
    >
      <span style={{ color: "#FF3333" }}>//{index ? ` ${index}` : ""}</span>
      <span>{children}</span>
      <span
        aria-hidden
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right, rgba(255,51,51,0.3), transparent)" }}
      />
    </div>
  );
}
