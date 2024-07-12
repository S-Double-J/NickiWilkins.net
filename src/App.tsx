import './App.css'
import Navbar from './Navbar'
import LandingPage from './landing_page/LandingPage'
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  return <>
  <Navbar key="Nav-bar" active={active} setActive={setActive}/>
  <LandingPage key="Landing-Page" />
  </>
}

export default App
