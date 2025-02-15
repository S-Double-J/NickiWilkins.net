import Footer from "../Components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import NewFooter from "../Components/NewFooter";


function Root() {
  const [active, setActive] = useState(false);
  return (
    <>
        <Navbar key="Navbar" active={active} setActive={setActive}/>
        <Outlet />
        <NewFooter key="NewFooter" />
        {/* <Footer key="Footer" /> */}
      <ScrollRestoration
         getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
}

export default Root;
