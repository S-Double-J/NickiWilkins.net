import LandingPage from "./landing_page/LandingPage";
import Footer from "../../Components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { ScrollRestoration } from "react-router-dom";
function Home() {
  return (
    <>
      <ParallaxProvider>
        <LandingPage key="Landing-Page" />
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

export default Home;
