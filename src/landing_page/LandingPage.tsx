import styled from "styled-components";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Navbar from "../Navbar";
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
const Footer = styled.div`
  min-height: 200px;
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
      <Parallax className="trisk" speed={-10}>
        <svg
          width="313px"
          height="294.24px"
          viewBox="0 0 397 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="trisk-path-fill"
            d="M207.928 264.873C210.118 232.071 210.107 207.452 194.829 174.338C226.11 195.705 239.957 201.245 277.345 207.349C247.251 224.567 230.436 238.501 207.928 264.873Z"
            fill="#590000"
          />
          <path
            className="trisk-path-stroke"
            d="M207.928 264.873C210.118 232.071 210.107 207.452 194.829 174.338M207.928 264.873C230.436 238.501 247.251 224.567 277.345 207.349M207.928 264.873C161.053 369.879 276.252 455.243 355.736 396.897C446.957 329.936 352.712 191.481 263.351 255.384C192.837 305.809 263.392 418.712 334.875 366.24C385.553 329.04 335.141 250.298 286.063 286.324C251.922 311.385 284.281 356.587 312.555 335.833C327.942 324.538 313.11 307.515 304.042 314.171M194.829 174.338C226.11 195.705 239.957 201.245 277.345 207.349M194.829 174.338C109.145 63.2013 -11.5551 157.354 5.30933 237.11C30.5526 356.49 197.629 324.146 171.509 215.259C152.087 134.292 37.3115 150.982 41.5562 226.1C45.3789 293.752 144.291 287.626 136.937 230.787C130.439 180.556 78.4499 199.018 78.6598 221.85C78.8888 246.764 107.307 241.865 101.752 228.705M277.345 207.349C402.566 193.416 410.538 42.3613 316.172 9.74189C212.771 -26.0006 147.345 119.714 249.861 164.316C324.477 196.779 387.321 79.8283 303.238 44.683C249.084 22.0474 205.219 103.5 258.844 127.348C276.949 135.399 293.104 129.287 301.565 117.33C310.027 105.373 306.085 84.7852 291.764 79.3752C276.997 73.7967 264.518 90.3453 276.226 97.3482"
            stroke-width="7"
            stroke="#590000"
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
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
