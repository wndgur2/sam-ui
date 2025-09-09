import React from "react";
import { MarketingLayout } from "../../layouts/MarketingLayout";
import s from "../../layouts/MarketingLayout.module.css";
import m from "./Home.module.css";
import {
  Stack,
  Flex,
  Button,
  Badge,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  Card as UICard,
  Spinner,
  Checkbox,
  Switch,
  TextInput,
  Select,
  Box,
  Modal,
} from "@sam/ui";
import { ThemeControls } from "../../sections/ThemeControls";
import { Link } from "react-router-dom";

export default function MarketingHome() {
  const [open, setOpen] = React.useState(false);
  return (
    <MarketingLayout>
      <header className={s.hero}>
        <div className={s.container}>
          <div className={s.heroGrid}>
            <Stack gap={16}>
              <span className={s.kicker}>UI Library</span>
              <h1 className={s.title}>Compact. Readable. Adaptable. Practical.</h1>
              <p className={s.subtitle}>
                sam-ui is a lean React UI library focused on clarity and speed. Compact defaults,
                strong readability, responsive props, and CSS‑variable theming make it easy to ship
                real products fast.
              </p>
              <Flex gap={12} align="center">
                <Link to="/docs/getting-started">
                  <Button>Get Started</Button>
                </Link>
                <a href="https://github.com/wndgur2/sam-ui" target="_blank" rel="noreferrer">
                  <Button variant="outline">GitHub</Button>
                </a>
                <span className={s.pill}>
                  <span>Version</span>
                  <strong>v0.1.0</strong>
                </span>
              </Flex>
              <div className={m.code}>
                <pre>
                  <code className={s.mono}>pnpm add @sam/ui</code>
                </pre>
              </div>
            </Stack>
            <div>
              <Stack gap={12}>
                <div className={s.card}>
                  <h3 style={{ marginTop: 0 }}>Live theme controls</h3>
                  <ThemeControls />
                </div>
                <div className={s.card}>
                  <h3 style={{ marginTop: 0 }}>Component snapshot</h3>
                  <Tabs>
                    <TabList>
                      <Tab>Buttons</Tab>
                      <Tab>Forms</Tab>
                      <Tab>Tabs</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Flex gap={8}>
                          <Button>Solid</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="ghost">Ghost</Button>
                        </Flex>
                      </TabPanel>
                      <TabPanel>
                        <Stack gap={8}>
                          <TextInput placeholder="Your name" />
                          <Select>
                            <option>—</option>
                            <option>A</option>
                            <option>B</option>
                          </Select>
                          <Flex gap={12}>
                            <Checkbox>Accept</Checkbox>
                            <Switch label="Toggle" />
                          </Flex>
                        </Stack>
                      </TabPanel>
                      <TabPanel>
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
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </header>

      <section className={s.section}>
        <div className={s.container}>
          <div className={s.grid3}>
            <div className={s.card}>
              <h3>Accessible</h3>
              <p className={s.muted}>
                WAI-ARIA roles, keyboard interactions, focus management for Tabs and Modal. Visible
                focus states and proper labeling.
              </p>
            </div>
            <div className={s.card}>
              <h3>Themeable</h3>
              <p className={s.muted}>
                CSS variables drive color and radius tokens. Override via ThemeProvider and toggle
                dark mode with a hook.
              </p>
            </div>
            <div className={s.card}>
              <h3>Responsive</h3>
              <p className={s.muted}>
                Responsive props map to CSS variables with media queries. No resize listeners or
                layout thrash.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.center}>Component gallery</h2>
          <div className={m.gallery}>
            {Array.from({ length: 6 }).map((_, i) => (
              <UICard key={i} title={<strong>Card {i + 1}</strong>}>
                <Stack gap={8}>
                  <p className={s.muted}>
                    Handy building block with consistent padding and border.
                  </p>
                  <Button size="sm">Action</Button>
                </Stack>
              </UICard>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <Grid cols={{ base: 1, sm: 2 }} gap={{ base: 12, md: 16 }}>
            <div className={s.card}>
              <h3>DX & Performance</h3>
              <p className={s.muted}>
                Vite + ES modules; tree-shakeable package with sideEffects only for CSS. Types
                included.
              </p>
              <Flex gap={8}>
                <Spinner />
                <span>Blazing fast HMR</span>
              </Flex>
            </div>
            <div className={s.card}>
              <h3>Modal preview</h3>
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
          </Grid>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.center}>Start building</h2>
          <p className={s.center} style={{ maxWidth: 720, margin: "8px auto 16px", opacity: 0.9 }}>
            Install the package, import the CSS variables theme, and drop components into your app.
            Customize tokens to match your brand.
          </p>
          <div className={m.code}>
            <pre>
              <code className={s.mono}>pnpm add @sam/ui</code>
            </pre>
          </div>
          <div style={{ height: 16 }} />
          <Flex gap={12} align="center" style={{ justifyContent: "center" }}>
            <Link to="/docs/getting-started">
              <Button>Read the docs</Button>
            </Link>
            <a href="https://github.com/wndgur2/sam-ui" target="_blank" rel="noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
          </Flex>
        </div>
      </section>
    </MarketingLayout>
  );
}
