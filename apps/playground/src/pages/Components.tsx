import { useLocation } from "react-router-dom";
import {
  Stack,
  Flex,
  Button,
  IconButton,
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
  Text,
  Heading,
  Slider,
} from "@sam/ui";
import { ThemeControls } from "../sections/ThemeControls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ComponentsPage() {
  const [open, setOpen] = useState(false);
  const [btnVariant, setBtnVariant] = useState<"solid" | "outline" | "ghost">("solid");
  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");
  const location = useLocation();
  const navigate = useNavigate();
  const [alertVariant, setAlertVariant] = useState<"info" | "success" | "warning" | "danger">(
    "info",
  );
  const [alertText, setAlertText] = useState("Useful information.");
  const [progress, setProgress] = useState(62);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  useEffect(() => {
    const ids = [
      "typography",
      "button",
      "iconbutton",
      "textinput",
      "select",
      "badge",
      "spinner",
      "alert",
      "tabs",
      "layout",
      "modal",
      "divider",
      "card",
      "progress",
      "avatar",
    ];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;
    let current = location.hash.replace(/^#/, "");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target.id && visible.target.id !== current) {
          current = visible.target.id;
          navigate(`/docs/components#${current}`, { replace: true });
        }
      },
      { root: null, threshold: [0.4], rootMargin: "0px 0px -40% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navigate]);
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
      <section id="typography">
        <h2>Typography</h2>
        <Stack gap={8}>
          <Heading size="lg">Heading LG</Heading>
          <Heading>Heading MD</Heading>
          <Heading size="sm">Heading SM</Heading>
          <Text size="lg">Body LG</Text>
          <Text>Body MD</Text>
          <Text size="sm" muted>
            Body SM Muted
          </Text>
        </Stack>
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
        <div style={{ height: 8 }} />
        <h3>IconButton</h3>
        <section id="iconbutton">
          <Flex gap={8}>
            <IconButton aria-label="settings" icon={<span>⚙️</span>} />
            <IconButton aria-label="like" icon={<span>❤</span>} variant="solid" />
            <IconButton aria-label="more" icon={<span>⋯</span>} size="lg" />
          </Flex>
        </section>
        <div style={{ height: 12 }} />
        <h3>Playground</h3>
        <Flex gap={12} align="center" style={{ flexWrap: "wrap" }}>
          <Select
            label="Variant"
            value={btnVariant}
            onChange={(e) => setBtnVariant(e.target.value as any)}
          >
            <option value="solid">solid</option>
            <option value="outline">outline</option>
            <option value="ghost">ghost</option>
          </Select>
          <Select label="Size" value={btnSize} onChange={(e) => setBtnSize(e.target.value as any)}>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
          </Select>
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
        <Flex gap={12} align="center">
          <span>Value: {progress}%</span>
          <Slider value={progress} onChange={setProgress} ariaLabel="Progress value" />
        </Flex>
        <Progress value={progress} />
      </section>
      <section id="alert">
        <h2>Alert</h2>
        <Stack gap={8}>
          <Flex gap={12} align="center" style={{ flexWrap: "wrap" }}>
            <Select
              label="Variant"
              value={alertVariant}
              onChange={(e) => setAlertVariant(e.target.value as any)}
            >
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </Select>
            <TextInput
              label="Message"
              value={alertText}
              onChange={(e) => setAlertText(e.target.value)}
            />
          </Flex>
          <Card>
            <Alert title={alertVariant.toUpperCase()} variant={alertVariant}>
              {alertText}
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
