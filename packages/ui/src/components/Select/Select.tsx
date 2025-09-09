import React from "react";
import s from "../_styles/Input.module.css";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, label, className, children, ...rest },
  ref,
) {
  const uid = React.useId();
  const selectId = id ?? uid;
  const cls = [s.input, className].filter(Boolean).join(" ");
  return label ? (
    <label className={s.field} htmlFor={selectId}>
      <span className={s.label}>{label}</span>
      <select ref={ref} id={selectId} className={cls} {...rest}>
        {children}
      </select>
    </label>
  ) : (
    <select ref={ref} id={selectId} className={cls} {...rest}>
      {children}
    </select>
  );
});

