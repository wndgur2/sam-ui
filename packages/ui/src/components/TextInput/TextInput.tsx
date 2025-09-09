import React from "react";
import s from "../_styles/Input.module.css";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { id, label, className, ...rest },
  ref,
) {
  const uid = React.useId();
  const inputId = id ?? uid;
  return label ? (
    <label className={s.field} htmlFor={inputId}>
      <span className={s.label}>{label}</span>
      <input ref={ref} id={inputId} className={[s.input, className].filter(Boolean).join(" ")} {...rest} />
    </label>
  ) : (
    <input ref={ref} id={inputId} className={[s.input, className].filter(Boolean).join(" ")} {...rest} />
  );
});

