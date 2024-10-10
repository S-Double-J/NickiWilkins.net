import styled from "styled-components";
import Footer from "../Components/Footer";
import { ScrollRestoration } from "react-router-dom";

const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Primary-Light);
`;

const Container = styled.div`
  background: rgba(255, 244, 223, 0.01);
  backdrop-filter: blur(10px);
  display: flex;
  padding: 100px 0px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 90%;
`;

const TitleSocialsAndImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 50px;
`;

const TitleAndSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const SocialsIcons = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  gap: 20px;
  flex-shrink: 0;
  align-items: center;
`;

const NickiPortraitMain = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 300px;
  background: var(--Primary-Dark);
  flex-shrink: 0;
  @media screen and (max-width: 330px) {
    width: 200px;
    height: 200px;
  }
`;

const Line = styled.line`
  width: 100%;
  height: 1px;
  background: var(--Primary-Dark);
  flex-shrink: 0;
`;

const Icons = styled.a`
  width: 80px;
  height: 80px;
  background: var(--Primary-Dark);
  border-radius: 50%;
  flex-shrink: 0;
`;
const TextContainer = styled.div`
  max-width: 800px;
  gap: 50px;
  display: flex;
  flex-direction: column;
`;

function About() {
  return (
    <>
      <AboutDiv key="About">
        <Container key="container">
          <TitleSocialsAndImage key="title-image-and-icons">
            <NickiPortraitMain key="nicki-portrait-main" />
            <TitleAndSocials>
              <h1>About Nicki</h1>
              <SocialsIcons key="socials-icons">
                <Icons href="#">
                  <i className="instagram"></i>
                </Icons>
                <Icons href="#">
                  <i className="substack"></i>
                </Icons>
              </SocialsIcons>
            </TitleAndSocials>
          </TitleSocialsAndImage>
          <TextContainer key="text-container">
            <Line />
            <h3>
              <i>My heart, my life, my work</i>
            </h3>
            <p>
              Hello, I’m Nicki Wilkins. Here are 10 things about me...
              <br />
              <br />
              <b>FIRST, SOME DETAILS ABOUT MY TRAINING.</b> With a Masters of
              Divinity from Yale University and a Masters in Creative Writing
              from Stirling University in Scotland, and as a certified Purpose
              Guide. I’ve been working with women and the spirituality of the
              feminine life cycle for over thirty years, offering spiritual care
              and ceremony. Some of my work as a former priest included my
              spiritual work with pregnant women and new mothers. More recently,
              I’ve held New Moon Groups for women and Creativity Circles for
              teenagers. I’m also a published poet, currently writing a memoir
              about my midlife rebirth. I write weekly for The Soul Pelt Press
              on Substack. 
              <br />
              <br />
              <b>I AM A POEM.</b> And so are you! I see poems everywhere. Ones
              written and ones lived. Short ones. Long ones. Forever growing
              ones.
              <br />
              <br />
              <b>MY INTRODUCTION TO SOUL</b> started when my grandma walked me
              around her garden. Always visiting her compost heap (It was her
              holiest of holies), she taught me how to walk an ordinary
              pilgrimage. To circumnavigate. I’ve been hooked ever since.
              <br />
              <br />
              <b>MY SOUL PURPOSE</b> is to hold space for others as they walk
              life’s journey. I’m like a soul detective, curious and eager for
              you to find your lost threads. The artist in me likes to help you
              weave them together.
              <br />
              <br />
              <b>THE YEAR I TURNED 50</b>, I posed nude for a life drawing
              class. I thought it would help me accept my body. Once and for
              all. I wrote about it in my short collection of essays called,
              Inside Art.
              <br />
              <br />
              <b>MENOPAUSE</b> was a long and arduous soul journey, full of
              creativity, reflection, and growth. My inner life started to align
              with my outer one, and I found a deep self-love that still
              surprises me.
              <br />
              <br />
              <b>I LEFT THE ORDAINED PRIESTHOOD </b> because I needed to go on a
              personal journey to discover the Sacred Feminine. I had resisted
              it for decades, but when my bishop told me I had to choose between
              motherhood and the priesthood, it was a no brainer. I knew there
              was more to explore. And, I chose motherhood.
              <br />
              <br />
              <b>HOME EDUCATING MY FOUR CHILDREN</b> was a soul-infused
              experimental, time-based performance piece of art with a hint of
              political philosophy. 
              <br />
              <br />
              <b>IF I HAD TO DECLARE A SPIRITUAL PRACTICE</b> it would be haiku.
              I write while walking, just like the old haiku monks of Japan,
              counting syllables with my fingers.
              <br />
              <br />
              <b>THE WORK I OFFER</b> is for the healing of Earth, our home. I
              know that when fully initiated wise women speak truth with love
              and authenticity, the next seven generations have a chance. 
            </p>

            <Line />
            <p>
              <b>ELSEWHERE:</b>
              <br />
              <br />
              Instagram :: This is where I share my artwork.
              <br />
              <br />
              Substack :: The Soul Pelt Press is where I record the journey into
              my wisewoman years.
              <br />
              <br />
              #wisewildwhole :: Use this hashtag on Instagram to record your
              journey to your wise, wild, and whole self.
            </p>
          </TextContainer>
        </Container>
        <Footer />
      </AboutDiv>
      <ScrollRestoration />
    </>
  );
}

export default About;
