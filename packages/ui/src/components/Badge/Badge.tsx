import React from "react";
import s from "./Badge.module.css";

type Variant = "neutral" | "success" | "warning" | "danger";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ variant = "neutral", className, ...rest }: BadgeProps) {
  const cls = [s.badge, s[variant], className].filter(Boolean).join(" ");
  return <span className={cls} {...rest} />;
}

