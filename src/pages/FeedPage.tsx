import { useEffect, useRef, useState } from "react";
import PostCard from "../components/feed/PostCard";
import { usePosts } from "../contexts/PostsContext";
import FeedSkeleton from "./components/FeedSkeleton";
import RefreshButton from "./components/RefreshButton";

export default function FeedPage() {
  const { posts, getAllPosts, isLoading, error } = usePosts();
  const feedHeaderRef = useRef<HTMLElement>(null);
  const [isFeedHeaderVisible, setIsFeedHeaderVisible] = useState(true);
  const postCount = `${posts.length} ${posts.length === 1 ? "post" : "posts"}`;

  useEffect(() => {
    const header = feedHeaderRef.current;

    if (!header) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsFeedHeaderVisible(entry.isIntersecting),
      { rootMargin: "-80px 0px 0px", threshold: 0 },
    );

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto min-h-[calc(100vh-86px)] max-w-320 px-5 pb-20 pt-4 sm:px-8 sm:pt-7">
      <header
        ref={feedHeaderRef}
        className="relative overflow-hidden rounded-[26px] border border-brand-border bg-brand-paper px-5 py-8 sm:px-8 sm:py-10"
      >
        <div className="absolute -right-12 -top-20 size-60 rounded-full border border-brand-secondary/20" />
        <div className="absolute -right-2 top-7 size-30 rounded-full bg-brand-lime/45 blur-sm" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[.12em] text-brand-muted before:size-2 before:rounded-full before:bg-brand-lime before:shadow-[0_0_0_4px_#ddefa8]">
              Community feed
            </span>
            <h1 className="mt-3 text-[clamp(42px,5vw,62px)] font-bold leading-[.92] tracking-[-.07em]">
              The pulse.
            </h1>
            <p className="mt-3 max-w-122 text-sm leading-relaxed text-brand-muted sm:text-base">
              A quiet place to catch up with the conversations and moments
              moving across the community.
            </p>
          </div>
          <RefreshButton
            isLoading={isLoading}
            onRefresh={() => void getAllPosts()}
          />
        </div>
      </header>

      <div className="grid gap-6 pt-6 lg:grid-cols-[210px_minmax(0,640px)_250px] lg:gap-8">
        <aside className="hidden self-start lg:sticky lg:top-20 lg:block">
          <div className="rounded-[20px] border border-brand-border bg-brand-paper p-4.5">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[.12em] text-brand-muted">
              Your space
            </span>
            <div className="mt-4 rounded-xl bg-brand-ink p-3.5 text-brand-paper">
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="grid size-7 place-items-center rounded-lg bg-brand-lime text-brand-ink">
                  ✦
                </span>
                For you
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#cbd3d2]">
                The latest public updates from across the community.
              </p>
            </div>
            <div className="mt-4 border-t border-brand-border pt-4 text-xs leading-relaxed text-brand-muted">
              New spaces for clubs, saved posts, and events will live here as
              the feed grows.
            </div>
          </div>
        </aside>

        <section aria-label="Community posts">
          {isFeedHeaderVisible ? (
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[.12em] text-brand-muted">
                  Latest updates
                </span>
                <p
                  className="mt-0.5 text-sm font-semibold text-brand-ink"
                  aria-live="polite"
                >
                  {isLoading ? "Updating your feed…" : postCount}
                </p>
              </div>
              <span className="rounded-full border border-brand-border bg-brand-paper px-3 py-1.5 text-[11px] font-medium text-brand-muted">
                Public posts
              </span>
            </div>
          ) : (
            <div className="sticky top-20 z-20 -mx-1 mb-4 flex items-center justify-between rounded-2xl border border-brand-border/85 bg-brand-bg/92 px-4 py-3 shadow-[0_8px_20px_rgba(17,36,45,.07)] backdrop-blur-md">
              <div>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[.12em] text-brand-muted">
                  Latest updates
                </span>
                <p
                  className="mt-0.5 text-sm font-semibold text-brand-ink"
                  aria-live="polite"
                >
                  {isLoading ? "Updating your feed…" : postCount}
                </p>
              </div>
              <RefreshButton
                compact
                isLoading={isLoading}
                onRefresh={() => void getAllPosts()}
              />
            </div>
          )}

          {isLoading ? (
            <FeedSkeleton />
          ) : error ? (
            <div className="rounded-[22px] border border-brand-primary/30 bg-[#fff5f1] p-7 text-center">
              <span className="grid mx-auto size-12 place-items-center rounded-2xl bg-brand-primary text-xl text-brand-paper">
                !
              </span>
              <h2 className="mt-4 text-xl font-bold tracking-[-.04em]">
                The feed could not load.
              </h2>
              <p className="mx-auto mt-2 max-w-90 text-sm leading-relaxed text-brand-muted">
                {error}
              </p>
              <button
                type="button"
                onClick={() => void getAllPosts()}
                className="mt-5 rounded-full bg-brand-ink px-5 py-2.5 text-sm font-bold text-brand-paper transition hover:bg-brand-primary"
              >
                Try again
              </button>
            </div>
          ) : posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-[22px] border border-dashed border-brand-border bg-brand-paper p-8 text-center sm:p-12">
              <span className="grid mx-auto size-13 place-items-center rounded-2xl bg-brand-lime text-2xl text-brand-ink shadow-[4px_4px_0_#11242d]">
                ✦
              </span>
              <h2 className="mt-5 text-xl font-bold tracking-[-.04em]">
                No posts yet.
              </h2>
              <p className="mx-auto mt-2 max-w-80 text-sm leading-relaxed text-brand-muted">
                When someone in the community shares an update, it will appear
                here.
              </p>
            </div>
          )}
        </section>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className="relative overflow-hidden rounded-[20px] bg-brand-secondary p-5 text-brand-paper">
            <div className="absolute -right-10 -top-10 size-35 rounded-full border border-white/35" />
            <span className="relative font-mono text-[10px] font-medium uppercase tracking-[.12em] text-[#c8cdfb]">
              Happening now
            </span>
            <h2 className="relative mt-2 text-xl font-bold leading-tight tracking-[-.05em]">
              Little things worth leaving your desk for.
            </h2>
            <div className="relative mt-5 space-y-3 border-t border-white/20 pt-4 text-xs">
              <div>
                <strong className="block text-brand-lime">
                  Vinyl &amp; coffee session
                </strong>
                <span className="mt-1 block text-[#e5e7ff]">
                  Central Square · 5:00 PM
                </span>
              </div>
              <div className="border-t border-white/15 pt-3">
                <strong className="block text-brand-lime">
                  Creative portfolio review
                </strong>
                <span className="mt-1 block text-[#e5e7ff]">
                  Design Studio · Tomorrow
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-brand-border bg-brand-paper p-5">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[.12em] text-brand-muted">
              Moving this week
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {["night-market", "creative-tech", "film-club"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-bg px-3 py-1.5 text-xs font-medium text-brand-muted"
                >
                  <b className="mr-0.5 text-brand-primary">#</b>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
