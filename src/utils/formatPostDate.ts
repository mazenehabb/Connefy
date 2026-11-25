export function formatPostDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Recently";
  }

  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
  }).format(parsedDate);
}
