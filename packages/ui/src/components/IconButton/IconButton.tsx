import React from "react";
import s from "./IconButton.module.css";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: Variant;
  size?: Size;
  "aria-label": string;
  icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { variant = "outline", size = "md", icon, className, ...rest },
  ref,
) {
  const cls = [s.root, s[variant], s[size], className].filter(Boolean).join(" ");
  return (
    <button ref={ref} className={cls} {...rest}>
      {icon}
    </button>
  );
});

