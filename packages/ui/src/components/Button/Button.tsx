import React from "react";
import s from "./Button.module.css";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "solid", size = "md", leftIcon, rightIcon, children, className, ...rest },
  ref,
) {
  const cls = [s.button, s[variant], s[size], className].filter(Boolean).join(" ");
  return (
    <button ref={ref} className={cls} {...rest}>
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
});
