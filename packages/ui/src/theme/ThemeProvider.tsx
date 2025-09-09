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
  const root = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    root.current = document.querySelector("[data-ui-theme]") as HTMLElement | null;
  }, []);
  const setDark = (on: boolean) => root.current?.classList.toggle("ui-dark", on);
  return { setDark };
}

