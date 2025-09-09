import React from "react";
import { Stack, Switch, useThemeMode } from "@sam/ui";

export function ThemeControls() {
  const { setDark } = useThemeMode();
  const [primary, setPrimary] = React.useState("#2b77ff");
  React.useEffect(() => {
    document.documentElement.style.setProperty("--ui-color-primary", primary);
  }, [primary]);
  return (
    <Stack
      gap={12}
      style={{ padding: 16, border: "1px solid var(--ui-color-border)", borderRadius: 12 }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span>Dark mode</span>
        <Switch onChange={(e) => setDark(e.target.checked)} />
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span>Primary</span>
        <input type="color" value={primary} onChange={(e) => setPrimary(e.target.value)} />
      </label>
    </Stack>
  );
}

