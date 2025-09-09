import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Button } from "../components/Button/Button";

describe("Button", () => {
  it("renders and handles click", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

