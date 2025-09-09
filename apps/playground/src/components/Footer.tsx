import React from "react";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <span className={s.muted}>MIT © {new Date().getFullYear()} sam-ui</span>
        <nav className={s.links} aria-label="Footer">
          <a className={s.link} href="#sources">Sources</a>
          <a className={s.link} href="#install">Install</a>
          <a className={s.link} href="#components">Components</a>
        </nav>
      </div>
    </footer>
  );
}

