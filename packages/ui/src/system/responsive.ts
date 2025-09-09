import React from "react";

export type Responsive<T> = T | Partial<Record<"base" | "sm" | "md" | "lg" | "xl", T>>;
export const bps = ["base", "sm", "md", "lg", "xl"] as const;

export function assignVars<T> (name: string, value: Responsive<T>): React.CSSProperties {
  const css: React.CSSProperties = {};
  const setVar = (suffix: string, v: T) => {
    (css as Record<string, string | number | undefined>)[`--${name}-${suffix}`] = String(v as unknown as string | number);
  };
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    const obj = value as Partial<Record<(typeof bps)[number], T>>;
    for (const k of bps) {
      const v = obj[k];
      if (v !== undefined) setVar(k, v);
    }
  } else {
    setVar("base", value as T);
  }
  return css;
}
