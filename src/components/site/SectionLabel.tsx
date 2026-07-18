export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      {index && (
        <span className="text-primary/80">[{index}]</span>
      )}
      <span>{children}</span>
      <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}