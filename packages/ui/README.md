# @sam/ui

Lean, responsive, themeable React + TypeScript UI components.

Install
- pnpm add @sam/ui

Usage
import { ThemeProvider, Button, Grid } from "@sam/ui";
// Optional: combined stylesheet with CSS variables only
import "@sam/ui/styles.css";

const myTheme = { colors: { primary: "#7c3aed" } };

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Button>Primary</Button>
      <Grid cols={{ base: 1, sm: 2, md: 3 }} gap={{ base: 12, md: 16 }} />
    </ThemeProvider>
  );
}

Theming
- ThemeProvider injects CSS variables. Pass partial theme to override tokens.
- useThemeMode().setDark(true) toggles dark mode by adding `.ui-dark`.

Responsive Props
- Many layout props accept Responsive<T> objects like `{ base: 1, sm: 2, md: 3 }`.
- These map to CSS variables with media queries (no runtime resize listeners).

A11y
- Tabs: WAI-ARIA roles, roving tabIndex, arrow keys switch tabs.
- Modal: Dialog role, aria-modal, focus trap, ESC and click-outside close.
- Inputs: Labels supported via `label` prop or standard label-for.

Build
- ESM + CJS + types via Vite library mode and tsc.
- CSS Modules; CSS variables for theming. sideEffects only for `*.css`.

