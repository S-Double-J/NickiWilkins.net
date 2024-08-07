import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: (
      <>
        <About key="About" />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Contact key="Contact" />
      </>
    ),
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
