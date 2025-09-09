import { render } from "@testing-library/react";
import React from "react";
import { Grid } from "../components/Grid/Grid";

describe("Grid", () => {
  it("applies CSS vars for cols and gap", () => {
    const { container } = render(<Grid cols={3} gap={16} data-testid="grid" />);
    const el = container.querySelector("[data-testid=grid]") as HTMLElement;
    expect(el.style.getPropertyValue("--cols-base")).toBe("3");
    expect(el.style.getPropertyValue("--gap-base")).toBe("16");
  });
});

