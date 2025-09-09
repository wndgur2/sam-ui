import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../components/Tabs/Tabs";

function Demo() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("roving tabIndex and arrow keys switch tabs", () => {
    render(<Demo />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    tabs[0].focus();
    fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  });
});

