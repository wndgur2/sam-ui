import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import MarketingHome from "./pages/marketing/Home";
import { GettingStarted } from "./pages/GettingStarted";
import { Theming } from "./pages/Theming";
import { ComponentsPage } from "./pages/Components";
import "@sam/ui/styles.css";
import "./app.css";

const router = createHashRouter([
  {
    path: "/",
    element: <MarketingHome />,
  },
  {
    path: "/docs",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="getting-started" replace /> },
      { path: "getting-started", element: <GettingStarted /> },
      { path: "theming", element: <Theming /> },
      { path: "components", element: <ComponentsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
