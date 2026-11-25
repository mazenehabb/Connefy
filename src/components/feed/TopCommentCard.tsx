import { CornerDownRight, Heart } from "lucide-react";
import React, { useState } from "react";
import Avatar from "./Avatar";
import type { PostComment } from "../../types/posts";
import { formatRelativeTime } from "../../utils/formatRelativeTime";

export default function TopCommentCard({
  comment,
  postAuthorId,
  currentUserId,
}: {
  comment: PostComment;
  postAuthorId?: string;
  currentUserId?: string;
}) {
  const initialLiked = Boolean(
    currentUserId && comment.likes?.includes(currentUserId),
  );
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(comment.likes?.length ?? 0);

  const isAuthor = Boolean(
    postAuthorId &&
    comment.commentCreator?._id &&
    comment.commentCreator._id === postAuthorId,
  );
  return (
    <div className="group/comment relative rounded-2xl border border-brand-border/75 bg-brand-bg/50 p-3.5 transition-colors duration-200 hover:border-brand-border hover:bg-brand-bg/80 sm:p-4">
      <div className="flex items-start gap-3">
        <Avatar
          name={comment.commentCreator?.name ?? "User"}
          photo={comment.commentCreator?.photo}
          size="sm"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="truncate text-xs font-bold text-brand-ink">
              {comment.commentCreator?.name ?? "Anonymous"}
            </span>

            {comment.commentCreator?.username && (
              <span className="truncate text-[11px] text-brand-muted">
                @{comment.commentCreator.username}
              </span>
            )}
            {isAuthor && (
              <span className="rounded-md bg-brand-lime/80 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-brand-ink shadow-[1px_1px_0_#11242d]">
                Author
              </span>
            )}
            <span aria-hidden="true" className="text-xs text-brand-muted/60">
              ·
            </span>
            <time
              dateTime={comment.createdAt}
              className="text-[11px] text-brand-muted"
            >
              {formatRelativeTime(comment.createdAt)}
            </time>
          </div>
          {comment.content && (
            <p className="mt-1.5 whitespace-pre-wrap break-words text-[13px] leading-relaxed text-brand-ink/90 sm:text-sm">
              {comment.content}
            </p>
          )}
          {comment.image && (
            <div className="mt-2.5 overflow-hidden rounded-xl border border-brand-border/70">
              <img
                src={comment.image}
                alt="Comment attachment"
                className="max-h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          <div className="mt-2.5 flex items-center gap-3">
            <button
              type="button"
              disabled={!currentUserId}
              aria-label={isLiked ? "Unlike comment" : "Like comment"}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-semibold transition-colors duration-150 ${
                isLiked
                  ? "bg-rose-50 text-rose-500"
                  : "text-brand-muted hover:bg-rose-50/70 hover:text-rose-500"
              }`}
            >
              <Heart
                size={13}
                strokeWidth={1.8}
                fill={isLiked ? "currentColor" : "none"}
                className="transition-transform active:scale-125"
              />
              <span>
                {likesCount} {likesCount === 1 ? "Like" : "Likes"}
              </span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-semibold text-brand-muted transition-colors duration-150 hover:bg-brand-secondary/10 hover:text-brand-secondary"
            >
              <CornerDownRight size={12} strokeWidth={2} />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
