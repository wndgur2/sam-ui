import site from "../site/Site.module.css";
import { Stack, Flex, Button, Badge } from "@sam/ui";

export function Home() {
  return (
    <header className={site.hero}>
      <div className={site.container}>
        <div className={site.heroGrid}>
          <Stack gap={16}>
            <span className={site.kicker}>Design System</span>
            <h1 className={site.title}>Build faster with a lean, responsive, themeable UI kit.</h1>
            <p className={site.subtitle}>
              @sam/ui ships accessible primitives, CSS Modules, and a CSS variables theme engine.
              Made for React 18 and Vite.
            </p>
            <Flex gap={12} align="center">
              <Button onClick={() => (location.href = "#/getting-started")}>Get Started</Button>
              <Button variant="outline" onClick={() => (location.href = "#/components")}>
                See Components
              </Button>
              <span className={site.pill}>
                <span>Version</span>
                <strong>v0.1.0</strong>
              </span>
              <a href="https://github.com/wndgur2/sam-ui" target="_blank" rel="noreferrer">
                <Badge>GitHub</Badge>
              </a>
            </Flex>
          </Stack>
        </div>
      </div>
    </header>
  );
}
