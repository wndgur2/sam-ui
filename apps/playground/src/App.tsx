import React from "react";
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
  Theme,
} from "@sam/ui";
import "@sam/ui/styles.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import site from "./site/Site.module.css";

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
  const quickStart = `import { ThemeProvider, Button, Grid } from "@sam/ui";\nimport "@sam/ui/styles.css";\n\nexport default function App() {\n  return (\n    <ThemeProvider>\n      <Button>Primary</Button>\n      <Grid cols={{ base:1, sm:2, md:3 }} gap={{ base:12, md:16 }} />\n    </ThemeProvider>\n  );\n}`;

  return (
    <ThemeProvider theme={theme}>
      <div
        id="top"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: "var(--ui-color-bg)",
          color: "var(--ui-color-fg)",
        }}
      >
        <Navbar />
        <header className={site.hero}>
          <div className={site.container}>
            <div className={site.heroGrid}>
              <Stack gap={16}>
                <span className={site.kicker}>Design System</span>
                <h1 className={site.title}>
                  Build faster with a lean, responsive, themeable UI kit.
                </h1>
                <p className={site.subtitle}>
                  @sam/ui ships accessible primitives, CSS Modules, and a CSS variables theme
                  engine. Made for React 18 and Vite.
                </p>
                <Flex gap={12} align="center">
                  <a href="#install">
                    <Button>Get Started</Button>
                  </a>
                  <a href="#components">
                    <Button variant="outline">See Components</Button>
                  </a>
                  <span className={site.pill}>
                    <span>Version</span>
                    <strong>v0.1.0</strong>
                  </span>
                </Flex>
                <div className={site.code}>
                  <pre>
                    <code className={site.mono}>pnpm add @sam/ui</code>
                  </pre>
                </div>
              </Stack>
              <div>
                <Stack gap={12}>
                  <div className={site.card}>
                    <h3 style={{ marginTop: 0 }}>Color & Mode</h3>
                    <ThemeControls />
                  </div>
                  <div className={site.card}>
                    <h3 style={{ marginTop: 0 }}>Why Sam UI?</h3>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Lean CSS Modules, no runtime styling</li>
                      <li>Theme via CSS variables, dark mode built-in</li>
                      <li>Responsive props → CSS vars with media queries</li>
                      <li>Accessible patterns: Tabs, Modal, Forms</li>
                    </ul>
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className={site.section} id="install">
            <div className={site.container}>
              <div className={site.features}>
                <div className={site.feature}>
                  <h3>Accessible</h3>
                  <p className={site.muted}>
                    WAI-ARIA roles and keyboard support for Tabs and Modal; labeled inputs and
                    visible focus styles.
                  </p>
                </div>
                <div className={site.feature}>
                  <h3>Theme-first</h3>
                  <p className={site.muted}>
                    CSS variables power theming with a small createTheme() injector and a Dark mode
                    hook.
                  </p>
                </div>
                <div className={site.feature}>
                  <h3>Responsive</h3>
                  <p className={site.muted}>
                    Responsive props map to CSS variables with media queries. No resize listeners.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={site.section} id="quickstart">
            <div className={site.container}>
              <span className={site.eyebrow}>Quick Start</span>
              <h2>Drop it in and ship</h2>
              <div className={site.code}>
                <pre>
                  <code className={site.mono}>{quickStart}</code>
                </pre>
              </div>
            </div>
          </section>

          <section className={site.section} id="components">
            <div className={site.container}>
              <span className={site.eyebrow}>Components</span>
              <h2>Primitives to production</h2>
              <div className={site.cards}>
                <div className={site.card}>
                  <h3>Buttons</h3>
                  <Flex gap={8}>
                    <Button variant="solid">Solid</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </Flex>
                </div>
                <div className={site.card}>
                  <h3>Inputs</h3>
                  <Stack gap={12}>
                    <TextInput label="Text" placeholder="Type here" />
                    <Select label="Select">
                      <option value="">—</option>
                      <option value="a">A</option>
                      <option value="b">B</option>
                    </Select>
                  </Stack>
                </div>
                <div className={site.card}>
                  <h3>Switches & Checks</h3>
                  <Flex gap={12}>
                    <Checkbox>Accept</Checkbox>
                    <Switch label="Toggle" />
                  </Flex>
                </div>
                <div className={site.card}>
                  <h3>Feedback</h3>
                  <Flex gap={12} align="center">
                    <Badge>Neutral</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Spinner />
                  </Flex>
                </div>
                <div className={site.card}>
                  <h3>Tabs</h3>
                  <Tabs>
                    <TabList>
                      <Tab>One</Tab>
                      <Tab>Two</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>Panel 1</TabPanel>
                      <TabPanel>Panel 2</TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
                <div className={site.card}>
                  <h3>Modal</h3>
                  <Button onClick={() => setOpen(true)}>Open Modal</Button>
                  <Modal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    title="Example Modal"
                    ariaLabelledBy="ex-modal"
                  >
                    <Stack gap={12}>
                      <p>Modal content</p>
                      <Button onClick={() => setOpen(false)}>Close</Button>
                    </Stack>
                  </Modal>
                </div>
              </div>
            </div>
          </section>

          <section className={site.section}>
            <div className={site.container}>
              <span className={site.eyebrow}>Layout</span>
              <h2>Adaptive layout with responsive props</h2>
              <Stack gap={12}>
                <Flex gap={{ base: 4, md: 12 }}>
                  <Box
                    style={{
                      padding: 8,
                      border: "1px solid var(--ui-color-border)",
                      borderRadius: 8,
                    }}
                  >
                    Box 1
                  </Box>
                  <Box
                    as="section"
                    style={{
                      padding: 8,
                      border: "1px solid var(--ui-color-border)",
                      borderRadius: 8,
                    }}
                  >
                    Box 2 (section)
                  </Box>
                </Flex>
                <Cards />
              </Stack>
            </div>
          </section>

          <section className={site.section} id="sources">
            <div className={site.container}>
              <span className={site.eyebrow}>Sources</span>
              <h2>Design & Accessibility References</h2>
              <div className={site.sources}>
                <div className={site.card}>
                  <h3>Accessibility</h3>
                  <ul className={site.muted} style={{ margin: 0, paddingLeft: 18 }}>
                    <li>
                      <a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer">
                        WAI‑ARIA Authoring Practices
                      </a>
                    </li>
                    <li>
                      <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">
                        MDN Web Docs
                      </a>
                    </li>
                    <li>
                      <a href="https://a11yproject.com/" target="_blank" rel="noreferrer">
                        The A11Y Project
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={site.card}>
                  <h3>Design Systems</h3>
                  <ul className={site.muted} style={{ margin: 0, paddingLeft: 18 }}>
                    <li>
                      <a
                        href="https://mui.com/material-ui/react-tabs/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        MUI Tabs (pattern reference)
                      </a>
                    </li>
                    <li>
                      <a href="https://headlessui.com/" target="_blank" rel="noreferrer">
                        Headless UI (inspiration)
                      </a>
                    </li>
                    <li>
                      <a href="https://primer.style/" target="_blank" rel="noreferrer">
                        Primer (tokens inspiration)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ height: 16 }} />
              <Alert title="Disclaimer">
                This playground is for demonstration. Always run your own a11y checks and visual QA
                for production apps.
              </Alert>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
