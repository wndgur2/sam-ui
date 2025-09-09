import React from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className={s.shell}>
      <Navbar />
      <div className={s.container}>
        <div className={s.grid}>
          <Sidebar />
          <main className={s.main}>
            <div className={s.content}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

