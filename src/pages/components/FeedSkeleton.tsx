export default function FeedSkeleton() {
  return (
    <div className="space-y-4" aria-label="Loading posts" aria-busy="true">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-[22px] border border-brand-border bg-brand-paper p-5 sm:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-[15px] bg-brand-border/65" />
            <div className="space-y-2">
              <div className="h-3 w-28 rounded-full bg-brand-border/70" />
              <div className="h-2.5 w-20 rounded-full bg-brand-border/50" />
            </div>
          </div>
          <div className="mt-5 space-y-2.5">
            <div className="h-3 w-full rounded-full bg-brand-border/50" />
            <div className="h-3 w-[84%] rounded-full bg-brand-border/50" />
            <div className="h-3 w-[56%] rounded-full bg-brand-border/50" />
          </div>
        </div>
      ))}
    </div>
  );
}
