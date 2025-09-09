import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={s.wrap} aria-label="Sidebar">
      <div className={s.section}>
        <h3 className={s.title}>Getting started</h3>
        <nav className={s.nav}>
          <NavLink to="/" end className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}>Introduction</NavLink>
          <NavLink to="/docs/getting-started" className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}>Install</NavLink>
          <NavLink to="/docs/theming" className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}>Theming</NavLink>
        </nav>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Components</h3>
        <nav className={s.nav}>
          <NavLink to="/docs/components" className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}>Overview</NavLink>
          <NavLink to="/docs/components#button" className={s.link}>Button</NavLink>
          <NavLink to="/docs/components#textinput" className={s.link}>TextInput</NavLink>
          <NavLink to="/docs/components#textarea" className={s.link}>Textarea</NavLink>
          <NavLink to="/docs/components#select" className={s.link}>Select</NavLink>
          <NavLink to="/docs/components#checkbox" className={s.link}>Checkbox</NavLink>
          <NavLink to="/docs/components#radio" className={s.link}>Radio</NavLink>
          <NavLink to="/docs/components#switch" className={s.link}>Switch</NavLink>
          <NavLink to="/docs/components#badge" className={s.link}>Badge</NavLink>
          <NavLink to="/docs/components#spinner" className={s.link}>Spinner</NavLink>
          <NavLink to="/docs/components#alert" className={s.link}>Alert</NavLink>
          <NavLink to="/docs/components#tabs" className={s.link}>Tabs</NavLink>
          <NavLink to="/docs/components#modal" className={s.link}>Modal</NavLink>
          <NavLink to="/docs/components#layout" className={s.link}>Layout</NavLink>
          <NavLink to="/docs/components#divider" className={s.link}>Divider</NavLink>
          <NavLink to="/docs/components#card" className={s.link}>Card</NavLink>
          <NavLink to="/docs/components#progress" className={s.link}>Progress</NavLink>
          <NavLink to="/docs/components#avatar" className={s.link}>Avatar</NavLink>
        </nav>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Links</h3>
        <nav className={s.nav}>
          <a
            href="https://github.com/wndgur2/sam-ui"
            className={s.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </aside>
  );
}
