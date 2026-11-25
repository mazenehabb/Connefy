export default function RefreshButton({
  isLoading,
  onRefresh,
  compact = false,
}: {
  isLoading: boolean;
  onRefresh: () => void;
  compact?: boolean;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onRefresh}
        disabled={isLoading}
        className={
          compact
            ? "inline-flex items-center gap-2 rounded-full bg-brand-ink px-3.5 py-2 text-xs font-bold text-brand-paper transition hover:bg-brand-primary disabled:cursor-not-allowed disabled:opacity-60"
            : "inline-flex w-fit items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-bold text-brand-paper shadow-[4px_4px_0_#4758e8] transition hover:-translate-y-0.5 hover:bg-brand-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:transform-none"
        }
      >
        <span aria-hidden="true" className={isLoading ? "animate-spin" : ""}>
          ↻
        </span>
        {isLoading ? "Refreshing" : compact ? "Refresh" : "Refresh feed"}
      </button>
    </>
  );
}
