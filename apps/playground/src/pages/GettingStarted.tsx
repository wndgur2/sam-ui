import React from "react";
import { Stack, Alert } from "@sam/ui";
import { CodeBlock } from "../components/CodeBlock";

export function GettingStarted() {
  const install = "pnpm add @sam/ui";
  const quickStart = `import { ThemeProvider, Button, Grid } from "@sam/ui";\nimport "@sam/ui/styles.css";\n\nexport default function App() {\n  return (\n    <ThemeProvider>\n      <Button>Primary</Button>\n      <Grid cols={{ base:1, sm:2, md:3 }} gap={{ base:12, md:16 }} />\n    </ThemeProvider>\n  );\n}`;
  return (
    <Stack gap={24}>
      <div>
        <h1>Getting Started</h1>
        <p>Install the package and import the theme CSS once.</p>
        <CodeBlock code={install} />
      </div>
      <div>
        <h2>Quick Start</h2>
        <CodeBlock code={quickStart} />
      </div>
      <Alert title="Note">During development, the playground aliases @sam/ui to source for fast HMR.</Alert>
    </Stack>
  );
}

