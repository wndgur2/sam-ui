import React from "react";
import s from "./VisuallyHidden.module.css";

type AsProp<E extends React.ElementType> = { as?: E };
type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

type VHOwnProps = { children?: React.ReactNode };
export type VisuallyHiddenProps<E extends React.ElementType = "span"> = VHOwnProps &
  AsProp<E> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, VHOwnProps>>;

export function VisuallyHidden<E extends React.ElementType = "span">(
  props: VisuallyHiddenProps<E>,
): React.ReactElement | null {
  const { as, children, ...rest } = props as VisuallyHiddenProps<E>;
  const As = (as ?? "span") as E;
  return <As className={s.vh} {...(rest as Omit<React.ComponentPropsWithoutRef<E>, "as">)}>{children}</As>;
}
