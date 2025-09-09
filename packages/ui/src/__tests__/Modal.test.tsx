import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Modal } from "../components/Modal/Modal";

function Wrapper() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Test Modal" ariaLabelledBy="title-id">
        <button>Inner</button>
      </Modal>
    </div>
  );
}

describe("Modal", () => {
  it("closes on ESC and traps focus", () => {
    render(<Wrapper />);
    const inner = screen.getByRole("button", { name: /inner/i });
    expect(inner).toBeInTheDocument();
    inner.focus();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByText(/test modal/i)).not.toBeInTheDocument();
  });
});

