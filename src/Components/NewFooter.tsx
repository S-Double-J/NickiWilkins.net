import styled from "styled-components";
import { Link } from "react-router-dom";
import MailchimpForm from "./mailchimp/MailchimpForm";

const FooterFrame = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 50px 10px 50px;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  background-color: var(--Accent-Dark);
  flex-wrap: wrap;
`;

const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 50px;
  flex: 1 0 0;
  align-self: stretch;
`;

const TopFrame = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const BottomFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 0 0;
  align-self: stretch;
`;

const LinksFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RightFrame = styled.div`

`;

const SLink = styled(Link)`
  color: var(--Primary-Light);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
`;

const Sa = styled.a`
  color: var(--Primary-Light);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SVG = styled.svg`
  @media screen and (max-width: 600px) {
    display: none;
  }
`

function NewFooter() {
  return (
    <FooterFrame>
      <LeftFrame>
        <TopFrame>
          <TopLeft>
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="178"
              height="178"
              viewBox="0 0 178 178"
              fill="none"
            >
              <circle cx="88" cy="88" r="88" fill="#FFF4DF" />
              <path
                d="M101.143 88C101.143 92.4286 83.4286 107.929 74.5715 92.4286C68.384 81.6004 67.3394 61.423 79.0001 57C97.2948 50.0606 121.125 68.553 123.286 88C125.732 110.012 110.005 123.428 87.8571 123.429C65.7142 123.429 39.1428 119 39.1428 88C39.1428 53.4107 59.1256 25.9997 92.2857 26C129.055 26.0003 149.857 51.2311 149.857 88C149.857 124.769 124.626 150 87.8571 150C52.4285 150 -5.14286 119 25.8572 52.5714"
                stroke="#590000"
                stroke-width="10"
                stroke-linecap="round"
              />
            </SVG>
            <p style={{ color: "var(--Primary-Light)" }}>
              I guide women navigating the soulfulness of menopause to reveal
              their heart-based wisdom, gifts, and purpose for a regenerative
              world full of compassion and meaning.
            </p>
          </TopLeft>
          <TopRight>
            <LinksFrame>
              <p
                style={{
                  color: "var(--Primary-Light)",
                  fontSize: "24px",
                  letterSpacing: "5.76px",
                  opacity: 0.5,
                }}
              >
                Links
              </p>
              <SLink to="/">Home</SLink>
              <SLink to="/about">About</SLink>
              <SLink to="/contact">Contact</SLink>
              <SLink to="/transformative-mentoring">
                Transformative Mentoring
              </SLink>
              <SLink to="/birthing-wisdom">Birthing Wisdom</SLink>
              <SLink to="/retreats">Retreats</SLink>
            </LinksFrame>
            <LinksFrame>
              <p
                style={{
                  color: "var(--Primary-Light)",
                  fontSize: "24px",
                  letterSpacing: "5.76px",
                  opacity: 0.5,
                }}
              >
                Socials
              </p>
              <Sa href="http://instagram.com/the.midlife.rebirth/">
                Instagram
              </Sa>
              <Sa href="https://substack.com/@nickiwilkins?utm_source=user-menu">
                Substack
              </Sa>
              <Sa href="https://www.facebook.com/themidliferebirth/?locale=en_GB">
                Facebook
              </Sa>
            </LinksFrame>
          </TopRight>
        </TopFrame>
        <BottomFrame>
          <h1 style={{ color: "var(--Primary-Light)", textAlign: "left" }}>
            nicki wilkins
          </h1>
        </BottomFrame>
        <p style={{ color: "var(--Primary-Light)", fontSize: "14px" }}>
          Copyright @ 2024 Nicki Wilkins     All rights reserved
        </p>
      </LeftFrame>
      <RightFrame>
        <MailchimpForm />
      </RightFrame>
    </FooterFrame>
  );
}

export default NewFooter;
