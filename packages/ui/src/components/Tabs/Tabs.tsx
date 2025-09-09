import React from "react";
import s from "./Tabs.module.css";

type Orientation = "horizontal" | "vertical";

type TabsContextType = {
  selected: number;
  setSelected: (i: number) => void;
  registerTab: (id: string) => number;
  orientation: Orientation;
};

const TabsCtx = React.createContext<TabsContextType | null>(null);

export interface TabsProps {
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
  orientation?: Orientation;
  children: React.ReactNode;
}

export function Tabs({ defaultIndex = 0, index, onChange, orientation = "horizontal", children }: TabsProps) {
  const [internal, setInternal] = React.useState(defaultIndex);
  const isControlled = index !== undefined;
  const selected = isControlled ? (index as number) : internal;
  const tabs = React.useRef<string[]>([]);

  function registerTab(id: string) {
    const i = tabs.current.indexOf(id);
    if (i >= 0) return i;
    tabs.current.push(id);
    return tabs.current.length - 1;
  }

  function setSelected(i: number) {
    if (!isControlled) setInternal(i);
    onChange?.(i);
  }

  const value = React.useMemo(() => ({ selected, setSelected, registerTab, orientation }), [selected, orientation]);
  return <TabsCtx.Provider value={value}>{children}</TabsCtx.Provider>;
}

export function TabList({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(TabsCtx)!;
  return (
    <div role="tablist" aria-orientation={ctx.orientation} className={[s.list, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Tab({ id, children, className, onKeyDown, onClick, ...rest }: TabProps) {
  const ctx = React.useContext(TabsCtx)!;
  const uid = React.useId();
  const tabId = id ?? `tab-${uid}`;
  const [index] = React.useState(() => ctx.registerTab(tabId));
  const selected = index === ctx.selected;
  const controls = `${tabId}-panel`;

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    const horizontal = ctx.orientation === "horizontal";
    if ((horizontal && (e.key === "ArrowRight" || e.key === "ArrowLeft")) || (!horizontal && (e.key === "ArrowDown" || e.key === "ArrowUp"))) {
      e.preventDefault();
      const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
      const next = (ctx.selected + dir + Number.MAX_SAFE_INTEGER) % (document.querySelectorAll(`[role=tab]`).length || 1);
      ctx.setSelected(next);
      // move focus to the next selected tab after render
      requestAnimationFrame(() => {
        const el = document.querySelectorAll<HTMLButtonElement>(`[role=tab]`)[next];
        el?.focus();
      });
      return;
    }
    onKeyDown?.(e);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    ctx.setSelected(index);
    onClick?.(e);
  }

  return (
    <button
      role="tab"
      id={tabId}
      aria-selected={selected}
      aria-controls={controls}
      tabIndex={selected ? 0 : -1}
      className={[s.tab, className].filter(Boolean).join(" ")}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export function TabPanels({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[s.panels, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tabId?: string;
  index?: number; // optional positional hint
}

export function TabPanel({ tabId, index, className, children, ...rest }: TabPanelProps) {
  const ctx = React.useContext(TabsCtx)!;
  const uid = React.useId();
  const resolvedIndex = index ?? Array.from(document.querySelectorAll('[role=tabpanel]')).length;
  const resolvedTabId = tabId ?? document.querySelectorAll('[role=tab]')[resolvedIndex]?.id ?? `tab-${uid}`;
  const panelId = `${resolvedTabId}-panel`;
  const i = resolvedIndex;
  const selected = i === ctx.selected;
  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={resolvedTabId}
      hidden={!selected}
      className={[s.panel, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}

