import React from "react";
import s from "./Spinner.module.css";

export function Spinner(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div role="status" aria-live="polite" className={[s.spinner, className].filter(Boolean).join(" ")} {...rest} />;
}

