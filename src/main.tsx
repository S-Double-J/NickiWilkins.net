import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import Retreats from "./routes/Retreats.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./routes/App.css";
import BirthingWisdom from "./routes/BirthingWidom.tsx";
import TransformativeMentoring from "./routes/TransformativeMentoring.tsx";
import LandingPage from "./routes/LandingPage.tsx";
import { motion } from "framer-motion";

const fadeInViewProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, margin: "-100px" },
};
function MakeSplitTextAnim({ children }: { children: string }) {
  return (
    <span>
      {children.split("").map((l, i) => {
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.13 * i }}
            viewport={{ once: true }}
          >
            {l}
          </motion.span>
        );
      })}
    </span>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root key="Root" />,
    children: [
      { path: "/", element: <LandingPage key="LandingPage" fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/> },
      {
        path: "about",
        element: <About key="About" fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/>,
      },
      {
        path: "contact",
        element: (
          <>
            <Contact key="Contact" fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/>
          </>
        ),
      },
      {
        path: "birthing-wisdom",
        element: (
          <>
            <BirthingWisdom key="Birthing Wisdom" fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/>
          </>
        ),
      },
      {
        path: "transformative-mentoring",
        element: (
          <>
            <TransformativeMentoring key="Transformative Mentoring" fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/>
          </>
        ),
      },
      {
        path: "retreats",
        element: (<>
        <Retreats key="Retreats" fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim} />
        </>)
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
