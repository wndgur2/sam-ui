import React from "react";
import s from "./Avatar.module.css";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string; // used to compute initials
}

export function Avatar({ src, alt, name, className, ...rest }: AvatarProps) {
  const initials = React.useMemo(() => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
    return (first + last).toUpperCase();
  }, [name]);
  return (
    <span className={[s.root, className].filter(Boolean).join(" ")} aria-label={alt ?? name} {...rest}>
      {src ? <img className={s.img} src={src} alt={alt ?? name ?? ""} /> : initials}
    </span>
  );
}

