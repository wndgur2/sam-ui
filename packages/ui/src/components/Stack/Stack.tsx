import React from "react";
import s from "./Stack.module.css";
import type { Responsive } from "../../system/responsive";
import { assignVars } from "../../system/responsive";

type Props = React.HTMLAttributes<HTMLDivElement> & { gap?: Responsive<number> };

export function Stack({ gap = 0, style, ...rest }: Props) {
  const vars = assignVars("gap", gap);
  return <div className={s.stack} style={{ ...vars, ...style }} {...rest} />;
}

