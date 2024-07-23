import "./App.css";
import LandingPage from "./landing_page/LandingPage";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <LandingPage key="Landing-Page" />
      </ParallaxProvider>
    </>
  );
}

export default App;
