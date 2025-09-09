import React from "react";
import s from "../_styles/Input.module.css";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, className, rows = 4, ...rest },
  ref,
) {
  const uid = React.useId();
  const textareaId = id ?? uid;
  const cls = [s.input, className].filter(Boolean).join(" ");
  return label ? (
    <label className={s.field} htmlFor={textareaId}>
      <span className={s.label}>{label}</span>
      <textarea ref={ref} id={textareaId} className={cls} rows={rows} {...rest} />
    </label>
  ) : (
    <textarea ref={ref} id={textareaId} className={cls} rows={rows} {...rest} />
  );
});

