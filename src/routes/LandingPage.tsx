import styled from "styled-components";
import Heroine from "../Components/Landing Page Components/Heroine";
import WiseWildWhole from "../Components/Landing Page Components/Introduction";
import TheCycle from "../Components/Landing Page Components/TheCycle";
import Conclusion from "../Components/Landing Page Components/Conclusion";
import Testimonials from "../Components/Landing Page Components/Testimonials";

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

  return (
    <>
        <svg className="splotch-top-left"
          viewBox="0 0 438 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 592.499C0 592.499 110.329 527.201 146.132 447.04C179.211 372.977 106.178 310.679 146.132 239.959C187.568 166.613 269.902 185.411 334.068 130.039C379.678 90.6798 437.376 0 437.376 0H0V592.499Z"
            fill="#590000"
          />
        </svg>
        <svg className="splotch-top-right" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 176 1145"
          fill="none"
        >
          <path
            d="M128.5 269C175.083 173.032 176 0 176 0V1145C176 1145 117.411 1029.42 98.5 949.5C78.4752 864.872 93.385 813.579 81 727.5C63.7397 607.537 -27.9813 540.757 9.49992 425.5C33.2441 352.485 94.9723 338.072 128.5 269Z"
            fill="#590000"
          />
        </svg>

      <Heroine />
      <WiseWildWhole />
      <TheCycle />
      <ColourBox>
        {/* <Projects /> */}
        <Testimonials />
        <Conclusion />
      </ColourBox>
    </>
  );
}

export default LandingPage;
