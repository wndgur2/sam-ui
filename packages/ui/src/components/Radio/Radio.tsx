import React from "react";
import s from "./Radio.module.css";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { id, name, children, className, ...rest },
  ref,
) {
  const uid = React.useId();
  const inputId = id ?? uid;
  return (
    <label className={s.wrap} htmlFor={inputId}>
      <input
        ref={ref}
        id={inputId}
        name={name}
        type="radio"
        className={[s.input, className].filter(Boolean).join(" ")}
        {...rest}
      />
      {children && <span className={s.label}>{children}</span>}
    </label>
  );
});

