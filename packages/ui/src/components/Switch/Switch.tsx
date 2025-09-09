import React from "react";
import s from "./Switch.module.css";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { id, checked, defaultChecked, onChange, label, className, ...rest },
  ref,
) {
  const uid = React.useId();
  const inputId = id ?? uid;
  const [internal, setInternal] = React.useState<boolean>(Boolean(defaultChecked));
  const isControlled = checked !== undefined;
  const on = isControlled ? !!checked : internal;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  }

  const wrapCls = [on ? s.checked : "", className].filter(Boolean).join(" ");

  return (
    <label className={[s.label, wrapCls].filter(Boolean).join(" ")} htmlFor={inputId}>
      <span className={s.track} aria-hidden>
        <span className={s.thumb} aria-hidden />
      </span>
      <input
        ref={ref}
        id={inputId}
        role="switch"
        aria-checked={on}
        className={s.input}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        {...rest}
      />
      {label && <span className={s.text}>{label}</span>}
    </label>
  );
});

