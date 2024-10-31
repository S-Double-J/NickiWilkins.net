import Footer from "../Components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Root() {
  const [active, setActive] = useState(false);
  useEffect(()=>{
    (async function () {
    const cal = await getCalApi({"namespace":"30min"});
    cal("floatingButton", {"calLink":"nickiwilkins/30min","config":{"layout":"month_view","theme":"auto"},"buttonText":"Book a  meeting with Nicki","buttonColor":"#8c1c1c","buttonTextColor":"#fff4df"});
    cal("ui", {"styles":{"branding":{"brandColor":"#8c1c1c"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  
  return (
    <>
        <Navbar key="Navbar" active={active} setActive={setActive}/>
        <Outlet />
        <Footer key="Footer" />
      <ScrollRestoration
         getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
}

export default Root;
