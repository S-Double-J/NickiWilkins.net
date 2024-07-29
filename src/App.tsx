import "./App.css";
import LandingPage from "./landing_page/LandingPage";
import About from "./Pages/About";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ParallaxProvider>
              <LandingPage key="Landing-Page" />
            </ParallaxProvider>
          }
        />
        <Route
          path="about"
          element={
            <ParallaxProvider>
              <About key="About" />
            </ParallaxProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
