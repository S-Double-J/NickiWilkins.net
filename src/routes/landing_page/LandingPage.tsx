import styled from "styled-components";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Navbar from "../../Components/Navbar";
import Heroine from "./Heroine";
import WiseWildWhole from "./WiseWildWhole";
import TheCycle from "./TheCycle";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const ColourBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex: 1 0 0;
  align-self: stretch;
  background: #590000;
`;

function LandingPage() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar key="Nav-bar" active={active} setActive={setActive} />
      <Parallax className="splotch-top-left" speed={-50}>
        <svg
          viewBox="0 0 438 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 592.499C0 592.499 110.329 527.201 146.132 447.04C179.211 372.977 106.178 310.679 146.132 239.959C187.568 166.613 269.902 185.411 334.068 130.039C379.678 90.6798 437.376 0 437.376 0H0V592.499Z"
            fill="#590000"
          />
        </svg>
      </Parallax>
      <Parallax className="splotch-top-right" speed={-50}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 176 1145"
          fill="none"
        >
          <path
            d="M128.5 269C175.083 173.032 176 0 176 0V1145C176 1145 117.411 1029.42 98.5 949.5C78.4752 864.872 93.385 813.579 81 727.5C63.7397 607.537 -27.9813 540.757 9.49992 425.5C33.2441 352.485 94.9723 338.072 128.5 269Z"
            fill="#590000"
          />
        </svg>
      </Parallax>
      <Parallax className="orb-large-fast" speed={170}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="217"
          height="217"
          viewBox="0 0 217 217"
          fill="none"
        >
          <path
            d="M217 108.5C217 168.423 168.423 217 108.5 217C48.5771 217 0 168.423 0 108.5C0 48.5771 48.5771 0 108.5 0C168.423 0 217 48.5771 217 108.5Z"
            fill="#FAD07D"
          />
        </svg>
      </Parallax>
      <Parallax className="orb-small" speed={50}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="60" fill="#FAD07D" />
        </svg>
      </Parallax>
      <Parallax className="orb-small-fast" speed={150}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="60" fill="#FAD07D" />
        </svg>
      </Parallax>
      <Heroine />
      <WiseWildWhole />
      <TheCycle />
      <ColourBox>
      <Projects />
      <Testimonials />
      </ColourBox>
    </>
  );
}

export default LandingPage;
