import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
const FooterLeft = styled.div`
  display: flex;
  width: 40%;
  max-width: 600px;
  padding: 25px 0px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
  @media screen and (max-width:700px) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (max-width:600px) {
    flex-direction: column;
  }
`;
const ContactsAndSocials = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const PagesOuter = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`;
const PagesInner = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

`;
const FooterRight = styled.div`
  display: flex;
  width: 40%;
  max-width: 600px;
  padding: 25px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
  flex-shrink: 0;
  text-align: right;
  @media screen and (max-width:700px) {
    align-items: center;
    width: 100%;
    text-align: left;
  }
`;
const Plink = styled(Link)`
  color: var(--Primary-Dark, #8c1c1c);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%; /* 28.8px */
  letter-spacing: -0.8px;
  align-self: stretch;
  margin: 0;
`;
const Line = styled.div`
  height: 200px;
  width: 1px;
  background-color: var(--Primary-Dark);
  @media screen and (max-width:700px) {
    width: 100%;
    height: 1px;
  }
`
function Footer() {
  const location = useLocation();
  let containerBackground = "transparent";
  let textColor = " var(--Primary-Light)";
  if (location.pathname === "/" || location.pathname === "/birthing-wisdom") {
    containerBackground = "var(--Accent-Dark)";
  } else {
    textColor = "var(--Primary-Dark)";
  }
  return (
    <Container style={{ backgroundColor: containerBackground }}>
      <FooterLeft>
        <ContactsAndSocials>
          <p style={{ color: textColor }}>
            contact:
            <br />
            <a
              style={{ color: textColor }}
              href="mailto:nwilkins@btinternet.com"
            >
              nwilkins@btinternet.com
            </a>
          </p>
          <Socials></Socials>
        </ContactsAndSocials>
        <PagesOuter>
          <PagesInner>
            <Plink to="/" style={{ color: textColor }}>
              Home
            </Plink>
            <Plink to="/about" style={{ color: textColor }}>
              About
            </Plink>
            <Plink to="/contact" style={{ color: textColor }}>
              Contact
            </Plink>
          </PagesInner>
          <PagesInner>
            <Plink to="/birthing-wisdom" style={{ color: textColor }}>
              Birthing Wisdom
            </Plink>
            <Plink to="#" style={{ color: textColor }}>
              Transformative Mentoring
            </Plink>
            <Plink to="#" style={{ color: textColor }}>
              Retreats
            </Plink>
          </PagesInner>
        </PagesOuter>
      </FooterLeft>
      <Line style={{ backgroundColor: textColor}}/>
      <FooterRight>
        <p style={{ color: textColor }}>
          I guide women navigating the soulfulness of menopause to reveal their
          heart-based wisdom, gifts, and purpose for a regenerative world full
          of compassion and meaning.
        </p>
        <p style={{fontSize: "12px", color: textColor}}>Copyright @ 2024 Nicki Wilkins     All rights reserved</p>
      </FooterRight>
    </Container>
  );
}

export default Footer;
