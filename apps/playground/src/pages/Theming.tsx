import React from "react";
import { Stack } from "@sam/ui";
import { ThemeControls } from "../sections/ThemeControls";

export function Theming() {
  return (
    <Stack gap={16}>
      <h1>Theming</h1>
      <p>Override CSS variables with ThemeProvider, and toggle dark mode using useThemeMode().</p>
      <ThemeControls />
    </Stack>
  );
}

