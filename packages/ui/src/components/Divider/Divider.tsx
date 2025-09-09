import React from "react";
import s from "./Divider.module.css";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({ orientation = "horizontal", className, style, ...rest }: DividerProps) {
  if (orientation === "vertical") {
    return <span role="separator" aria-orientation="vertical" className={[s.vr, className].filter(Boolean).join(" ")} style={style as React.CSSProperties} {...(rest as any)} />;
  }
  return <hr role="separator" className={[s.hr, className].filter(Boolean).join(" ")} style={style} {...rest} />;
}

