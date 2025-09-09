import React from "react";

type AsProp<E extends React.ElementType> = { as?: E };

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

export type BoxOwnProps = {};

export type BoxProps<E extends React.ElementType = "div"> = BoxOwnProps &
  AsProp<E> &
  Omit<React.ComponentPropsWithRef<E>, PropsToOmit<E, BoxOwnProps>>;

type BoxComponent = <E extends React.ElementType = "div">(
  props: BoxProps<E> & { ref?: React.ComponentPropsWithRef<E>["ref"] }
) => React.ReactElement | null;

export const Box: BoxComponent = React.forwardRef(function Box<
  E extends React.ElementType = "div"
>(props: BoxProps<E>, ref: React.ComponentPropsWithRef<E>["ref"]) {
  const { as, ...rest } = props as BoxProps<E>;
  const As = (as ?? "div") as E;
  return <As ref={ref} {...(rest as Omit<React.ComponentPropsWithRef<E>, "as">)} />;
}) as unknown as BoxComponent;
