import React from "react";
import s from "./Alert.module.css";

type Variant = "info" | "success" | "warning" | "danger";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export function Alert({
  variant = "info",
  title,
  children,
  className,
  role = "alert",
  ...rest
}: AlertProps) {
  const cls = [s.alert, s[variant], className].filter(Boolean).join(" ");
  return (
    <div className={cls} role={role} {...rest}>
      <div>
        {title && <div className={s.title}>{title}</div>}
        {children && <div className={s.desc}>{children}</div>}
      </div>
    </div>
  );
}
