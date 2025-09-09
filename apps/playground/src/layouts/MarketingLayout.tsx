import React from "react";
import s from "./MarketingLayout.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.shell}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
