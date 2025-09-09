import React from "react";
import s from "./Checkbox.module.css";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, children, className, ...rest },
  ref,
) {
  const uid = React.useId();
  const inputId = id ?? uid;
  return (
    <label className={s.wrap} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" className={[s.input, className].filter(Boolean).join(" ")} {...rest} />
      {children && <span className={s.label}>{children}</span>}
    </label>
  );
});

