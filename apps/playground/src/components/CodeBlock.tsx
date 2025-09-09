import React from "react";

export function CodeBlock({ code }: { code: string }) {
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
      <pre style={{ margin: 0, padding: 16, background: "var(--ui-color-muted)", overflowX: "auto" }}>
        <code>{code}</code>
      </pre>
      <button onClick={copy} style={{ position: "absolute", top: 8, right: 8 }}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

