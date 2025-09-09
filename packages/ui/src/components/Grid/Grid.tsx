import React from "react";
import s from "./Grid.module.css";
import type { Responsive } from "../../system/responsive";
import { assignVars } from "../../system/responsive";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  cols?: Responsive<number>;
  gap?: Responsive<number>;
};
export function Grid({ cols = 1, gap = 12, style, ...rest }: Props) {
  const vars = { ...assignVars("cols", cols), ...assignVars("gap", gap) };
  return <div className={s.grid} style={{ ...vars, ...style }} {...rest} />;
}

