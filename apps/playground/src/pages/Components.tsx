import React from "react";
import { useLocation } from "react-router-dom";
import {
  Stack,
  Flex,
  Button,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Badge,
  Spinner,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Grid,
  Modal,
  Divider,
  Card,
  Progress,
  Avatar,
  Alert,
} from "@sam/ui";
import { ThemeControls } from "../sections/ThemeControls";

export function ComponentsPage() {
  const [open, setOpen] = React.useState(false);
  const [btnVariant, setBtnVariant] = React.useState<"solid" | "outline" | "ghost">("solid");
  const [btnSize, setBtnSize] = React.useState<"sm" | "md" | "lg">("md");
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);
  return (
    <Stack gap={24}>
      <div>
        <h1>Components</h1>
        <p>Preview the core components shipped in v0.1.</p>
      </div>
      <section>
        <h2>Theme Controls</h2>
        <p>Toggle dark mode and try your brand primary color.</p>
        <ThemeControls />
      </section>
      <section id="button">
        <h2>Button</h2>
        <Flex gap={8} style={{ flexWrap: "wrap" }}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </Flex>
        <div style={{ height: 12 }} />
        <h3>Playground</h3>
        <Flex gap={12} align="center" style={{ flexWrap: "wrap" }}>
          <label>
            Variant:
            <select
              value={btnVariant}
              onChange={(e) => setBtnVariant(e.target.value as any)}
              style={{ marginLeft: 8 }}
            >
              <option value="solid">solid</option>
              <option value="outline">outline</option>
              <option value="ghost">ghost</option>
            </select>
          </label>
          <label>
            Size:
            <select
              value={btnSize}
              onChange={(e) => setBtnSize(e.target.value as any)}
              style={{ marginLeft: 8 }}
            >
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </label>
          <Button variant={btnVariant} size={btnSize}>
            Preview
          </Button>
        </Flex>
      </section>
      <section id="textinput">
        <h2>TextInput & Textarea</h2>
        <Stack gap={12}>
          <TextInput label="Text input" placeholder="Type here" />
          <Textarea label="Textarea" placeholder="Multiline..." />
          <TextInput label="Disabled" placeholder="Can't type" disabled />
        </Stack>
      </section>
      <section id="select">
        <h2>Select</h2>
        <Stack gap={12}>
          <Select label="Select">
            <option value="">Select…</option>
            <option value="a">Option A</option>
            <option value="b">Option B</option>
          </Select>
          <Select disabled label="Disabled">
            <option value="">Select…</option>
          </Select>
          <Flex gap={12}>
            <Checkbox>Accept</Checkbox>
            <Switch label="Toggle" />
          </Flex>
        </Stack>
      </section>
      <section id="badge">
        <h2>Badge & Feedback</h2>
        <Flex gap={12} align="center">
          <Badge>Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </Flex>
      </section>
      <section id="spinner">
        <h2>Spinner & Progress</h2>
        <Spinner />
        <div style={{ height: 12 }} />
        <Progress value={62} />
      </section>
      <section id="alert">
        <h2>Alert</h2>
        <Stack gap={8}>
          <Card>
            <Alert title="Info" variant="info">
              Useful information.
            </Alert>
          </Card>
          <Card>
            <Alert title="Success" variant="success">
              Operation completed.
            </Alert>
          </Card>
          <Card>
            <Alert title="Warning" variant="warning">
              Check your inputs.
            </Alert>
          </Card>
          <Card>
            <Alert title="Danger" variant="danger">
              Something went wrong.
            </Alert>
          </Card>
        </Stack>
      </section>
      <section id="tabs">
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
      </section>
      <section id="layout">
        <h2>Layout</h2>
        <Card
          title={
            <Flex align="center" gap={8}>
              <Avatar name="Sam UI" /> <span>Card Title</span>
            </Flex>
          }
          footer={
            <Flex justify="space-between">
              <span>Footer</span>
              <Button size="sm">Action</Button>
            </Flex>
          }
        >
          A simple Card component with header and footer slots.
        </Card>
        <Divider />
        <Flex gap={{ base: 4, md: 12 }}>
          <Box style={{ padding: 8, border: "1px solid var(--ui-color-border)", borderRadius: 8 }}>
            Box 1
          </Box>
          <Box
            as="section"
            style={{ padding: 8, border: "1px solid var(--ui-color-border)", borderRadius: 8 }}
          >
            Box 2 (section)
          </Box>
        </Flex>
        <div style={{ height: 16 }} />
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
      </section>
      <section id="modal">
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
      </section>
      <section id="divider">
        <h2>Divider</h2>
        <Divider />
      </section>
      <section id="card">
        <h2>Card</h2>
        <Card title="Card title">Card content...</Card>
      </section>
      <section id="progress">
        <h2>Progress</h2>
        <Progress value={30} />
      </section>
      <section id="avatar">
        <h2>Avatar</h2>
        <Flex gap={12} align="center">
          <Avatar name="Sam UI" />
          <Avatar name="Ada Lovelace" />
          <Avatar />
        </Flex>
      </section>
    </Stack>
  );
}
