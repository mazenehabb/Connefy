export function formatRelativeTime(dateString?: string) {
  if (!dateString) return "Recently";
  const parsedDate = new Date(dateString);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Recently";
  }

  const now = new Date();
  const diffInSeconds = Math.max(
    0,
    Math.floor((now.getTime() - parsedDate.getTime()) / 1000),
  );

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
  }).format(parsedDate);
}
