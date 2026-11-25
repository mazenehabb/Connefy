import { useState } from "react";
import type { Post, PostComment } from "../../types/posts";
import { Heart, MessageCircle, Share2, Sparkles } from "lucide-react";
import { usePosts } from "../../contexts/PostsContext";
import { useAuth } from "../../contexts/AuthContext";
import { formatPostDate } from "../../utils/formatPostDate";
import Avatar from "./Avatar";
import TopCommentCard from "./TopCommentCard";

export default function PostCard({ post }: { post: Post }) {
  const date = formatPostDate(post.createdAt);
  const { handleLikePost } = usePosts();
  const { user } = useAuth();
  const isLiked = post.likes.includes(user?._id ?? "");

  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-brand-border bg-brand-paper p-5 shadow-[0_1px_0_rgba(17,36,45,.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(17,36,45,.08)] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-primary via-brand-secondary to-brand-lime opacity-80" />

      <header className="flex items-center gap-3 pt-1">
        <Avatar name={post.user.name} photo={post.user.photo} />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold tracking-[-.02em]">
            {post.user.name}
          </p>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-xs text-brand-muted">
            <span className="truncate">@{post.user.username}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.createdAt}>{date}</time>
          </div>
        </div>
        <span className="ml-auto rounded-full bg-brand-bg px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[.08em] text-brand-muted">
          {post.privacy}
        </span>
      </header>

      {post.body && (
        <p className="mt-4 whitespace-pre-wrap break-words text-[15px] leading-7 text-brand-ink">
          {post.body}
        </p>
      )}

      {post.image && (
        <img
          src={post.image}
          alt={`Attachment shared by ${post.user.name}`}
          className="mt-4 max-h-125 w-full rounded-[16px] border border-brand-border/70 object-cover"
          loading="lazy"
        />
      )}

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-brand-border pt-4">
        <button
          onClick={() => void handleLikePost(post._id)}
          disabled={!user}
          aria-label={isLiked ? "Unlike post" : "Like post"}
          aria-pressed={isLiked}
          type="button"
          className={`group flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 transition-all duration-200 ${
            isLiked
              ? "bg-rose-50 text-rose-500"
              : "text-brand-muted hover:bg-rose-50 hover:text-rose-500"
          }`}
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            fill={isLiked ? "currentColor" : "none"}
            className="transition-transform duration-200 group-hover:scale-110"
          />
          <span className="text-xs font-semibold">{post.likesCount} Likes</span>
        </button>

        <button
          type="button"
          className="group flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-brand-muted transition-all duration-200 hover:bg-indigo-50 hover:text-brand-secondary"
        >
          <MessageCircle
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:scale-110"
          />
          <span className="text-xs font-semibold">
            {post.commentsCount} Comments
          </span>
        </button>

        <button
          type="button"
          className="group flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-brand-muted transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
        >
          <Share2
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:scale-110"
          />
          <span className="text-xs font-semibold">
            {post.sharesCount} Shares
          </span>
        </button>
      </div>

      {(post.topComment || post.commentsCount > 0) && (
        <footer className="mt-4 border-t border-brand-border/80 pt-3.5">
          {post.topComment && (
            <>
              <div className="mb-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="grid size-5 place-items-center rounded-md bg-brand-secondary/10 text-brand-secondary">
                    <Sparkles size={11} strokeWidth={2.5} />
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-brand-ink">
                    Top Comment
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-brand-secondary/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-brand-secondary">
                  Featured
                </span>
              </div>

              <TopCommentCard
                comment={post.topComment}
                postAuthorId={post.user?._id}
                currentUserId={user?._id}
              />

              {post.commentsCount > 1 && (
                <button
                  type="button"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-secondary transition hover:underline"
                >
                  <span>View all {post.commentsCount} comments</span>
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </>
          )}
        </footer>
      )}
    </article>
  );
}
