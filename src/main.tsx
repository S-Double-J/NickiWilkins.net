import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./routes/App.css";
import BirthingWisdom from "./routes/BirthingWidom.tsx";
import TransformativeMentoring from "./routes/TransformativeMentoring.tsx";
import LandingPage from "./routes/LandingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root key="Root" />,
    children: [
      { path: "/", element: <LandingPage key="LandingPage" /> },
      {
        path: "about",
        element: <About key="About" />,
      },
      {
        path: "contact",
        element: (
          <>
            <Contact key="Contact" />
          </>
        ),
      },
      {
        path: "birthing-wisdom",
        element: (
          <>
            <BirthingWisdom key="Birthing Wisdom" />
          </>
        ),
      },
      {
        path: "transformative-mentoring",
        element: (
          <>
            <TransformativeMentoring key="Transformative Mentoring" />
          </>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
