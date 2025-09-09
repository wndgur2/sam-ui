import React from "react";
import type { Theme } from "@sam/ui";
import {
  ThemeProvider,
  useThemeMode,
  Button,
  Grid,
  Stack,
  TextInput,
  Switch,
  Badge,
  Alert,
  Checkbox,
  Radio,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Box,
  Spinner,
  Modal,
} from "@sam/ui";

function ThemeControls() {
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

function Cards() {
  return (
    <Grid cols={{ base: 1, sm: 2, md: 3 }} gap={{ base: 12, md: 16 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{ border: "1px solid var(--ui-color-border)", borderRadius: 12, padding: 12 }}
        >
          <Stack gap={8}>
            <strong>Card {i + 1}</strong>
            <span>Lorem ipsum dolor sit amet.</span>
            <Button>Action</Button>
          </Stack>
        </div>
      ))}
    </Grid>
  );
}

export default function App() {
  const [theme] = React.useState<Partial<Theme>>({});
  const [open, setOpen] = React.useState(false);
  const [choice, setChoice] = React.useState("a");
  const install = "pnpm add @sam/ui";
  const quickStart = `import { ThemeProvider, Button, Grid } from "@sam/ui";\nimport "@sam/ui/styles.css";\n\nexport default function App() {\n  return (\n    <ThemeProvider>\n      <Button>Primary</Button>\n      <Grid cols={{ base:1, sm:2, md:3 }} gap={{ base:12, md:16 }} />\n    </ThemeProvider>\n  );\n}`;

  function CodeBlock({ code }: { code: string }) {
    const [copied, setCopied] = React.useState(false);
    async function copy() {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch {}
    }
    return (
      <div
        style={{
          position: "relative",
          border: "1px solid var(--ui-color-border)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <pre
          style={{ margin: 0, padding: 16, background: "var(--ui-color-muted)", overflowX: "auto" }}
        >
          <code>{code}</code>
        </pre>
        <button onClick={copy} style={{ position: "absolute", top: 8, right: 8 }}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: "var(--ui-color-bg)",
          color: "var(--ui-color-fg)",
          minHeight: "100vh",
          padding: 24,
        }}
      >
        {/* Hero */}
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Stack gap={12}>
            <h1 style={{ fontSize: 36, margin: 0 }}>@sam/ui</h1>
            <p style={{ margin: 0, opacity: 0.9 }}>
              Lean, responsive, themeable React + TypeScript UI components.
            </p>
            <Flex gap={12}>
              <a href="#install">
                <Button>Get Started</Button>
              </a>
              <a href="#components">
                <Button variant="outline">See Components</Button>
              </a>
              <Badge>v0.1.0</Badge>
            </Flex>
          </Stack>
        </div>
        <div style={{ height: 24 }} />

        <ThemeControls />

        <div style={{ height: 24 }} />
        <div id="install" style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Install</h2>
          <CodeBlock code={install} />
        </div>

        <div style={{ height: 24 }} />
        <div id="quickstart" style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Quick Start</h2>
          <CodeBlock code={quickStart} />
        </div>

        <div style={{ height: 24 }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Alert title="Welcome">Use the controls above to test theming and dark mode.</Alert>
        </div>

        <div style={{ height: 32 }} />
        <div id="components" style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Layout</h2>
          <Stack gap={12}>
            <Flex gap={{ base: 4, md: 12 }}>
              <Box
                style={{ padding: 8, border: "1px solid var(--ui-color-border)", borderRadius: 8 }}
              >
                Box 1
              </Box>
              <Box
                as="section"
                style={{ padding: 8, border: "1px solid var(--ui-color-border)", borderRadius: 8 }}
              >
                Box 2 (section)
              </Box>
            </Flex>
            <Cards />
          </Stack>
        </div>

        <div style={{ height: 32 }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Buttons</h2>
          <Flex gap={8}>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </Flex>
        </div>

        <div style={{ height: 32 }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Inputs</h2>
          <Stack gap={12}>
            <TextInput label="Text input" placeholder="Type here" />
            <Select label="Select">
              <option value="">Select…</option>
              <option value="a">Option A</option>
              <option value="b">Option B</option>
            </Select>
            <Flex gap={12}>
              <Checkbox>Accept</Checkbox>
              <Flex gap={12}>
                <Radio name="r" checked={choice === "a"} onChange={() => setChoice("a")}>
                  A
                </Radio>
                <Radio name="r" checked={choice === "b"} onChange={() => setChoice("b")}>
                  B
                </Radio>
              </Flex>
              <Switch label="Toggle" />
            </Flex>
          </Stack>
        </div>

        <div style={{ height: 32 }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Feedback</h2>
          <Flex gap={12} align="center">
            <Badge>Neutral</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Spinner />
          </Flex>
        </div>

        <div style={{ height: 32 }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Tabs</h2>
          <Tabs>
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Content 1</TabPanel>
              <TabPanel>Content 2</TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div style={{ height: 32 }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2>Modal</h2>
          <Button onClick={() => setOpen(true)}>Open modal</Button>
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Example Modal"
            ariaLabelledBy="ex-modal"
          >
            <Stack gap={12}>
              <p>Modal content here</p>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Stack>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
}
