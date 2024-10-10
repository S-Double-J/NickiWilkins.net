import Footer from "../Components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "../Components/Navbar";
import { useState } from "react";
function Root() {
  const [active, setActive] = useState(false);
  return (
    <>
      <ParallaxProvider>
        <Navbar key="Navbar" active={active} setActive={setActive}/>
        <Outlet />
        <Footer key="Footer" />
      </ParallaxProvider>
      <ScrollRestoration
         getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
}

export default Root;
