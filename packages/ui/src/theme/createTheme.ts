import type { Theme } from "./types";

type CreatedTheme = { className: string };

function hashString(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = (h * 33) ^ input.charCodeAt(i);
  return (h >>> 0).toString(36);
}

function toCssVars(theme: Partial<Theme>): string {
  const lines: string[] = [];
  if (theme.colors) {
    const c = theme.colors as Record<string, string>;
    for (const k of Object.keys(c)) {
      lines.push(`--ui-color-${k}:${c[k]};`);
    }
  }
  return lines.join("");
}

export function createTheme(theme: Partial<Theme>): CreatedTheme {
  const key = `ui-theme-${hashString(JSON.stringify(theme))}`;
  if (typeof document !== "undefined") {
    const id = `style-${key}`;
    if (!document.getElementById(id)) {
      const css = `.${key}{${toCssVars(theme)}}`;
      const el = document.createElement("style");
      el.id = id;
      el.textContent = css;
      document.head.appendChild(el);
    }
  }
  return { className: key };
}

