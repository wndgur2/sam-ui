import React from "react";
import s from "./Progress.module.css";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0..100
}

export function Progress({ value = 0, className, style, ...rest }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const css = { ...(style || {}), ["--ui-progress" as any]: `${clamped}%` } as React.CSSProperties;
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={clamped}
      className={[s.track, className].filter(Boolean).join(" ")} style={css} {...rest}>
      <div className={s.bar} />
    </div>
  );
}

