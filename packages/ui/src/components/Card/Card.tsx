import React from "react";
import s from "./Card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, footer, className, children, ...rest }: CardProps) {
  return (
    <div className={[s.card, className].filter(Boolean).join(" ")} {...rest}>
      {title && <div className={s.header}>{title}</div>}
      {children}
      {footer && <div className={s.footer}>{footer}</div>}
    </div>
  );
}

