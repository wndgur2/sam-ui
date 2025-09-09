import React from "react";
import s from "./Navbar.module.css";
import { Flex, Button, Switch } from "@sam/ui";
import { useThemeMode } from "@sam/ui";

export function Navbar() {
  const { setDark } = useThemeMode();
  const [dark, setDarkLocal] = React.useState(false);
  function toggleDark(e: React.ChangeEvent<HTMLInputElement>) {
    const on = e.target.checked;
    setDarkLocal(on);
    setDark(on);
  }
  return (
    <div className={s.nav}>
      <div className={s.inner} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <a href="#top" className={s.brand} aria-label="sam-ui home">sam-ui</a>
        <Flex className={s.links} gap={12} align="center">
          <a className={s.link} href="#install">Install</a>
          <a className={s.link} href="#quickstart">Quick Start</a>
          <a className={s.link} href="#components">Components</a>
          <a className={s.link} href="#sources">Sources</a>
          <Button variant="outline" onClick={() => { location.hash = "components"; }}>Try</Button>
          <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, opacity: .8 }}>Dark</span>
            <Switch checked={dark} onChange={toggleDark} aria-label="Toggle dark mode" />
          </label>
        </Flex>
      </div>
    </div>
  );
}
