import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

const Contacts = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Details = styled.div`
  display: flex;
  width: 400px;
  max-width: 90svw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  @media screen and (max-width: 600px){
   align-items: start;
   width: auto;
  }
`;

const Line = styled.line`
  width: 100%;
  height: 1px;
`;
const Text = styled.p`
  color: var(--Primary-Light, #fff4df);
  font-size: 14px;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

const TextRight = styled.p`
  color: var(--Primary-Light, #fff4df);
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 600px){
    display: none;
  }
`;

const A = styled.a`
  color: var(--Primary-Light, #fff4df);
  font-size: 14px;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
function Footer() {
  const location = useLocation();
  let containerBackground = "transparent";
  if (location.pathname === "/") {
    containerBackground = "var(--Accent-Dark)";
  }
  let aboutColor = " var(--Primary-Light";
  if (location.pathname === "/about") {
    aboutColor = "var(--Primary-Dark)";
  }
  return (
    <Container style={{ backgroundColor: containerBackground }}>
      <Contacts>
        <Text style={{ color: aboutColor }}>
          contact:{" "}
          <A
            style={{ color: aboutColor }}
            href="mailto:nwilkins@btinternet.com"
          >
            nwilkins@btinternet.com
          </A>
        </Text>
        <Socials></Socials>
      </Contacts>
      <Details>
        <TextRight style={{ color: aboutColor }}>
          I guide women navigating the soulfulness of menopause to reveal their
          heart-based wisdom, gifts, and purpose for a regenerative world full
          of compassion and meaning.
        </TextRight>
        <Line style={{ backgroundColor: aboutColor }} />
        <Text style={{ color: aboutColor }}>
          Copyright @ 2024 Nicki Wilkins. All rights reserved.
        </Text>
      </Details>
    </Container>
  );
}

export default Footer;
