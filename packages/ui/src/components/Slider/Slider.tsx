import React from "react";
import s from "./Slider.module.css";

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  ariaLabel?: string;
}

export function Slider({
  value,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  onChange,
  className,
  ariaLabel,
  ...rest
}: SliderProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const val = isControlled ? (value as number) : internal;
  const clamped = Math.max(min, Math.min(max, val));
  const percent = ((clamped - min) / (max - min)) * 100;
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  function setValue(next: number) {
    const snapped = Math.round(next / step) * step;
    const clamp = Math.max(min, Math.min(max, snapped));
    if (!isControlled) setInternal(clamp);
    onChange?.(clamp);
  }

  function positionToValue(clientX: number) {
    const el = rootRef.current!;
    const rect = el.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return min + ratio * (max - min);
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (disabled) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setValue(positionToValue(e.clientX));
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp, { once: true });
  }

  function onPointerMove(e: PointerEvent) {
    setValue(positionToValue(e.clientX));
  }

  function onPointerUp() {
    window.removeEventListener("pointermove", onPointerMove);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (disabled) return;
    const largeStep = (max - min) / 10;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setValue(clamped + step);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setValue(clamped - step);
    } else if (e.key === "Home") {
      e.preventDefault();
      setValue(min);
    } else if (e.key === "End") {
      e.preventDefault();
      setValue(max);
    } else if (e.key === "PageUp") {
      e.preventDefault();
      setValue(clamped + largeStep);
    } else if (e.key === "PageDown") {
      e.preventDefault();
      setValue(clamped - largeStep);
    }
  }

  const style = { ["--ui-slider" as any]: `${percent}%` } as React.CSSProperties;
  const cls = [s.root, className].filter(Boolean).join(" ");

  return (
    <div className={cls} ref={rootRef} onPointerDown={onPointerDown} {...rest}>
      <div
        className={`${s.track} ${s.focus}`}
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={Math.round(clamped)}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        onKeyDown={onKeyDown}
        style={style}
      >
        <div className={s.bar} />
        <div className={s.thumb} />
        <div className={s.hit} />
      </div>
    </div>
  );
}
