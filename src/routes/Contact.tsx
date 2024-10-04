import styled from "styled-components";
import { ScrollRestoration } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  background: var(--Primary-Light);
  position: relative;
`;

const ComponentsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100svh;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
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
      <ComponentsContainer>
        <Content>
          <TextContainer>
            <h1 style={{ textAlign: "left", fontSize: "70px" }}>
              Contact Nicki
            </h1>
            <p>
              <b>Want to work with me one-to-one? Get in touch.</b> I am here to
              offer support, encouragement, and guidance for your midlife
              journey.
              <br />
              <br />
              <b>
                Not sure which program is the right one for you? Let’s chat.
              </b> I’m happy to talk with you to discuss what is the right path for
              you. I offer a free 30-minute session to see if my work resonates
              with you.
              <br />
              <br />
              <p>
                <b>Want to interview me on your podcast? Contact me.</b> I love
                discussing meaningful topics like women’s spirituality, the
                soulful side of menopause, the power of fully initiated elders,
                and how to find purpose in the second half of life. 
              </p>
            </p>
            <a
              style={{ textDecoration: "none" }}
              href="mailto:nwilkins@btinternet.com"
              className="primary-button"
            >
              <p>Email Nicki</p>
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
