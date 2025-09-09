import React from "react";
import s from "./Flex.module.css";
import type { Responsive } from "../../system/responsive";
import { assignVars } from "../../system/responsive";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  gap?: Responsive<number>;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  direction?: React.CSSProperties["flexDirection"];
  wrap?: React.CSSProperties["flexWrap"];
};

export function Flex({ gap = 0, align, justify, direction, wrap, style, ...rest }: Props) {
  const vars = assignVars("gap", gap);
  return (
    <div
      className={s.flex}
      style={{
        ...vars,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        ...style,
      }}
      {...rest}
    />
  );
}
