import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg";
  muted?: boolean;
}

export function Text({ as: As = "p", size = "md", muted, style, ...rest }: TextProps) {
  const fontSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;
  const styles: React.CSSProperties = {
    fontSize,
    margin: 0,
    opacity: muted ? 0.85 : undefined,
    ...style,
  };
  return <As style={styles} {...rest} />;
}

