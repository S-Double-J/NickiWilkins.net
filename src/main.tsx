import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home/Home.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./routes/App.css";
import BirthingWisdom from "./routes/BirthingWidom.tsx";
import TransformativeMentoring from "./routes/TransformativeMentoring.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home key="Home" />,
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
  },
  {
    path: "/birthing-wisdom",
    element: (
      <>
        <BirthingWisdom key="Birthing Wisdom" />
      </>
    ),
  },
  {
    path: "/transformative-mentoring",
    element: (
      <>
        <TransformativeMentoring key="Transformative Mentoring" />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
