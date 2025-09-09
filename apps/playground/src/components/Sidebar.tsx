import { NavLink, Link, useLocation } from "react-router-dom";
import s from "./Sidebar.module.css";

export function Sidebar() {
  const location = useLocation();
  const isActiveHash = (hash: string) =>
    location.pathname === "/docs/components" && location.hash === `#${hash}`;
  return (
    <aside className={s.wrap} aria-label="Sidebar">
      <div className={s.section}>
        <h3 className={s.title}>Getting started</h3>
        <nav className={s.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}
          >
            Introduction
          </NavLink>
          <NavLink
            to="/docs/getting-started"
            className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}
          >
            Install
          </NavLink>
          <NavLink
            to="/docs/theming"
            className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}
          >
            Theming
          </NavLink>
        </nav>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Components</h3>
        <nav className={s.nav}>
          <NavLink
            to="/docs/components"
            className={({ isActive }) => [s.link, isActive ? s.active : ""].join(" ")}
          >
            Overview
          </NavLink>
          <Link
            to="/docs/components#typography"
            className={[s.link, isActiveHash("typography") ? s.active : ""].join(" ")}
          >
            Typography
          </Link>
          <Link
            to="/docs/components#button"
            className={[s.link, isActiveHash("button") ? s.active : ""].join(" ")}
          >
            Button
          </Link>
          <Link
            to="/docs/components#iconbutton"
            className={[s.link, isActiveHash("iconbutton") ? s.active : ""].join(" ")}
          >
            IconButton
          </Link>
          <Link
            to="/docs/components#textinput"
            className={[s.link, isActiveHash("textinput") ? s.active : ""].join(" ")}
          >
            TextInput
          </Link>
          <Link
            to="/docs/components#textarea"
            className={[s.link, isActiveHash("textarea") ? s.active : ""].join(" ")}
          >
            Textarea
          </Link>
          <Link
            to="/docs/components#select"
            className={[s.link, isActiveHash("select") ? s.active : ""].join(" ")}
          >
            Select
          </Link>
          <Link
            to="/docs/components#checkbox"
            className={[s.link, isActiveHash("checkbox") ? s.active : ""].join(" ")}
          >
            Checkbox
          </Link>
          <Link
            to="/docs/components#radio"
            className={[s.link, isActiveHash("radio") ? s.active : ""].join(" ")}
          >
            Radio
          </Link>
          <Link
            to="/docs/components#switch"
            className={[s.link, isActiveHash("switch") ? s.active : ""].join(" ")}
          >
            Switch
          </Link>
          <Link
            to="/docs/components#badge"
            className={[s.link, isActiveHash("badge") ? s.active : ""].join(" ")}
          >
            Badge
          </Link>
          <Link
            to="/docs/components#spinner"
            className={[s.link, isActiveHash("spinner") ? s.active : ""].join(" ")}
          >
            Spinner
          </Link>
          <Link
            to="/docs/components#alert"
            className={[s.link, isActiveHash("alert") ? s.active : ""].join(" ")}
          >
            Alert
          </Link>
          <Link
            to="/docs/components#tabs"
            className={[s.link, isActiveHash("tabs") ? s.active : ""].join(" ")}
          >
            Tabs
          </Link>
          <Link
            to="/docs/components#modal"
            className={[s.link, isActiveHash("modal") ? s.active : ""].join(" ")}
          >
            Modal
          </Link>
          <Link
            to="/docs/components#layout"
            className={[s.link, isActiveHash("layout") ? s.active : ""].join(" ")}
          >
            Layout
          </Link>
          <Link
            to="/docs/components#divider"
            className={[s.link, isActiveHash("divider") ? s.active : ""].join(" ")}
          >
            Divider
          </Link>
          <Link
            to="/docs/components#card"
            className={[s.link, isActiveHash("card") ? s.active : ""].join(" ")}
          >
            Card
          </Link>
          <Link
            to="/docs/components#progress"
            className={[s.link, isActiveHash("progress") ? s.active : ""].join(" ")}
          >
            Progress
          </Link>
          <Link
            to="/docs/components#avatar"
            className={[s.link, isActiveHash("avatar") ? s.active : ""].join(" ")}
          >
            Avatar
          </Link>
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
