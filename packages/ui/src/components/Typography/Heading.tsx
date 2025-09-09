import React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements; // default h2
  size?: "sm" | "md" | "lg" | "xl";
}

export function Heading({ as: As = "h2", size = "md", style, ...rest }: HeadingProps) {
  const fontSize = size === "sm" ? 18 : size === "md" ? 22 : size === "lg" ? 28 : 34;
  const styles: React.CSSProperties = {
    fontSize,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    margin: 0,
    ...style,
  };
  return <As style={styles} {...rest} />;
}

