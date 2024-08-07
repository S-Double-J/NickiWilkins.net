import styled from "styled-components";
import { ScrollRestoration } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100svh;
  flex-direction: column;
  align-items: center;
  background: var(--Accent-Dark);
  position: relative;
`;

const GradientSVG = styled.svg`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  fill: linear-gradient(180deg, #8c1c1c 0%, #590000 100%);
`;

const ComponentsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100svh;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: calc(100svh - 105px);
  display: flex;
  padding: 60px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  width: 50%;
  max-width: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  align-self: stretch;
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  align-self: stretch;
  width: 50%;
  min-width: 600px;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    width: 100%;
    min-width: 0px;
  }
`;

const Text = styled.p`
  color: var(--Primary-Light);
`;

const Image = styled.img`
  width: 600px;
  height: 600px;
  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 600px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
  object-fit: cover;
  rotate: 30deg;
  border-radius: 100%;
`;
function Contact() {
  const [active, setActive] = useState(false);

  return (
    <ContactContainer>
      <Navbar key="Nav-bar" active={active} setActive={setActive} />

      <GradientSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 681"
        fill="none"
      >
        <path
          d="M-2 121.503C-2 121.503 86.6796 61.2648 152 48.5027C280.599 23.3775 341.035 135.826 471 152.503C705.543 182.598 749.034 -0.35588 985.5 0.00052006C1134.73 0.225436 1441 75.5027 1441 75.5027V576.503C1441 576.503 1248.54 663.965 1116.5 678.003C879.852 703.163 743.971 527.712 506 525.5C295.154 523.541 -2 636.003 -2 636.003V121.503Z"
          fill="url(#paint0_linear_251_1082)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_251_1082"
            x1="719.5"
            y1="0"
            x2="719.5"
            y2="680.471"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8C1C1C" />
            <stop offset="1" stop-color="#590000" />
          </linearGradient>
        </defs>
      </GradientSVG>
      <ComponentsContainer>
        <Content>
          <TextContainer>
            <h3>contact nicki</h3>
            <Text>
              <b>Want to work with me one-to-one?</b> <br />
              Get in touch. I am here to offer support, encouragement, and
              guidance for your midlife journey.
              <br />
              <br />
              <b>
                Not sure which program is the right one for you? Let’s chat.
              </b>
              <br />
              I’m happy to talk with you to discuss what is the right path for
              you. I offer a free 30-minute session to see if my work resonates
              with you.
            </Text>
            <a
              style={{ padding: "0", textDecoration: "none" }}
              href="mailto:nwilkins@btinternet.com"
              className="primary-button"
            >
              <p>Email Nicki</p>
              <svg
                className="button-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="15"
                viewBox="0 0 37 15"
                fill="none"
              >
                <path
                  className="arrow"
                  d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                  fill="#590000"
                />
              </svg>
            </a>
          </TextContainer>
          <ImageContainer>
            <Image src="images/20220102_135354.jpg" />
          </ImageContainer>
        </Content>
        <Footer />
      </ComponentsContainer>
      <ScrollRestoration />
    </ContactContainer>
  );
}

export default Contact;
