import React, { useState } from "react";
import { getInitialsName } from "../../utils/getInitialsName";

export default function Avatar({
  name,
  photo,
  size = "md",
}: {
  name: string;
  photo?: string;
  size?: "sm" | "md";
}) {
  const [hasImageError, setHasImageError] = useState(false);

  const sizeClasses =
    size === "sm"
      ? "size-8 rounded-[11px] text-[10px] shadow-[2px_2px_0_#11242d]"
      : "size-11 rounded-[15px] text-xs shadow-[3px_3px_0_#11242d]";

  return (
    <div
      className={`relative grid shrink-0 place-items-center overflow-hidden bg-brand-secondary font-mono font-medium text-brand-paper ${sizeClasses}`}
      aria-label={name}
    >
      <span aria-hidden="true">{getInitialsName(name)}</span>
      {photo && !hasImageError && (
        <img
          src={photo}
          alt=""
          className="absolute inset-0 size-full object-cover"
          onError={() => setHasImageError(true)}
        />
      )}
    </div>
  );
}
