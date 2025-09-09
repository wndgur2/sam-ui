import React from "react";
import s from "./Navbar.module.css";
import { Flex, Button, Switch } from "@sam/ui";
import { useThemeMode } from "@sam/ui";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const { setDark, isDark } = useThemeMode();
  const [dark, setDarkLocal] = React.useState(false);
  React.useEffect(() => { setDarkLocal(isDark()); }, [isDark]);
  function toggleDark(e: React.ChangeEvent<HTMLInputElement>) {
    const on = e.target.checked;
    setDarkLocal(on);
    setDark(on);
  }
  return (
    <div className={s.nav}>
      <div className={s.inner} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <Link to="/" className={s.brand} aria-label="sam-ui home">
          sam-ui
        </Link>
        <Flex className={s.links} gap={12} align="center">
          <NavLink to="/docs/getting-started" className={s.link}>
            Install
          </NavLink>
          <NavLink to="/docs/theming" className={s.link}>
            Theming
          </NavLink>
          <NavLink to="/docs/components" className={s.link}>
            Components
          </NavLink>
          <a
            className={s.link}
            href="https://github.com/wndgur2/sam-ui"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link to="/docs/components"><Button variant="outline">Try</Button></Link>
          <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, opacity: 0.8 }}>Dark</span>
            <Switch checked={dark} onChange={toggleDark} aria-label="Toggle dark mode" />
          </label>
        </Flex>
      </div>
    </div>
  );
}
