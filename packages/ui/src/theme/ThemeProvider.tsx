import React from "react";
import "./theme.css";
import { createTheme } from "./createTheme";
import type { Theme } from "./types";

type Props = { theme?: Partial<Theme>; className?: string; children?: React.ReactNode };
export const ThemeProvider: React.FC<Props> = ({ theme, className, children }) => {
  const created = React.useMemo(() => (theme ? createTheme(theme) : null), [theme]);
  const cls = ["ui-theme", created?.className, className].filter(Boolean).join(" ");
  return (
    <div className={cls} data-ui-theme>
      {children}
    </div>
  );
};

export function useThemeMode() {
  function getRoot(): HTMLElement {
    return (
      (document.querySelector("[data-ui-theme]") as HTMLElement | null) ||
      (document.documentElement as HTMLElement)
    );
  }
  const setDark = (on: boolean) => {
    const root = getRoot();
    root.classList.toggle("ui-dark", on);
  };
  const toggleDark = () => {
    const root = getRoot();
    const next = !root.classList.contains("ui-dark");
    root.classList.toggle("ui-dark", next);
    return next;
  };
  const isDark = () => getRoot().classList.contains("ui-dark");
  return { setDark, toggleDark, isDark };
}
