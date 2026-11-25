export function getInitialsName(name?: string) {
  if (!name) return "U";
  return (
    name
      .trim()
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "U"
  );
}
