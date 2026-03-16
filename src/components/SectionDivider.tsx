export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-600">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
