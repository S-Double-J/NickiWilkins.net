import styled from "styled-components";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

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
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 90%;
`;

const TitleSocialsAndImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  min-height: calc(100svh - 62px);
`;

const TitleAndSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const SocialsIcons = styled(motion.div)`
  display: flex;
  width: 100px;
  justify-content: center;
  gap: 20px;
  flex-shrink: 0;
  align-items: center;
`;

const NickiPortraitMain = styled(motion.img)`
  width: 600px;
  height: 600px;
  border-radius: 999px;
  flex-shrink: 0;
  object-fit: cover;
  object-position: 50% 95%;
  border: 2px solid var(--Primary-Dark);
  @media screen and (max-width: 330px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 800px) {
    width: 350px;
    height: 350px;
  }
`;

const Line = styled.line`
  width: 100%;
  height: 1px;
  background: var(--Primary-Dark);
  flex-shrink: 0;
`;
const TextContainer = styled.div`
  max-width: 800px;
  gap: 50px;
  display: flex;
  flex-direction: column;
`;
const IconTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  gap: 10px;
`;
const Icons = styled.a`
  width: 30px;
  height: 30px;
  background: var(--Primary-Dark);
  color: var(--Primary-Light);
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Insta = styled(FaInstagram)`
  width: 80%;
  height: 80%;
`;
const Substack = styled(BsSubstack)`
  width: 60%;
  height: 60%;
`;
interface Props {
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
  };
  MakeSplitTextAnim: (props: { children: string }) => JSX.Element;
}
function About({ fadeInViewProps, MakeSplitTextAnim }: Props) {
  const DURATION = fadeInViewProps.transition.duration;
  const EASE = fadeInViewProps.transition.ease;
  const DELAY = 1.6;
  return (
    <>
      <AboutDiv key="About">
        <Container key="container">
          <TitleSocialsAndImage key="title-image-and-icons">
            <NickiPortraitMain
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE, delay: DELAY }}
              viewport={{ once: true }}
              key="nicki-portrait-main"
              src="images/NickiAboutImageopt2.jpg"
            />
            <h1 className="seventy">
              <MakeSplitTextAnim>About Nicki</MakeSplitTextAnim>
            </h1>
            <TitleAndSocials>
              <SocialsIcons
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: DURATION, ease: EASE, delay: DELAY }}
                viewport={{ once: true }}
                key="socials-icons"
              >
                <Icons href="#">
                  <Insta />
                </Icons>
                <Icons href="#">
                  <Substack />
                </Icons>
              </SocialsIcons>
            </TitleAndSocials>
          </TitleSocialsAndImage>
          <TextContainer key="text-container">
            <Line />
            <motion.h3 {...fadeInViewProps}>
              <i>My heart, my life, my work</i>
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              Hello, I’m Nicki Wilkins. Here are 10 things about me...
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>FIRST, SOME DETAILS ABOUT MY TRAINING.</b> With a Masters of
              Divinity from Yale University and a Masters in Creative Writing
              from Stirling University in Scotland, and as a certified Purpose
              Guide, I’ve been working with women and the spirituality of the
              feminine life cycle for over thirty years, offering spiritual care
              and ceremony. Some of my work as a former priest included my
              spiritual work with pregnant women and new mothers. More recently,
              I’ve held New Moon Groups for women and Creativity Circles for
              teenagers. I’m also a published poet, currently writing a memoir
              about my midlife rebirth. I write weekly for The Soul Pelt Press
              on Substack. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I AM A POEM.</b> And so are you! I see poems everywhere. Ones
              written and ones lived. Short ones. Long ones. Forever growing
              ones.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>MY INTRODUCTION TO SOUL</b> started when my grandma walked me
              around her garden. Always visiting her compost heap (It was her
              holiest of holies), she taught me how to walk an ordinary
              pilgrimage. To circumnavigate. I’ve been hooked ever since.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>MY SOUL PURPOSE</b> is to hold space for others as they walk
              life’s journey. I’m like a soul detective, curious and eager for
              you to find your lost threads. The artist in me likes to help you
              weave them together.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>THE YEAR I TURNED 50</b>, I posed nude for a life drawing
              class. I thought it would help me accept my body. Once and for
              all. I wrote about it in my short collection of essays called,
              Inside Art.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>MENOPAUSE</b> was a long and arduous soul journey, full of
              creativity, reflection, and growth. My inner life started to align
              with my outer one, and I found a deep self-love that still
              surprises me.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I LEFT THE ORDAINED PRIESTHOOD </b> because I needed to go on a
              personal journey to discover the Sacred Feminine. I had resisted
              it for decades, but when my bishop told me I had to choose between
              motherhood and the priesthood, it was a no brainer. I knew there
              was more to explore.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>HOME EDUCATING MY FOUR CHILDREN</b> was a soul-infused
              experimental, time-based performance piece of art with a hint of
              political philosophy. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>IF I HAD TO DECLARE A SPIRITUAL PRACTICE</b> it would be haiku.
              I write while walking, just like the old haiku monks of Japan,
              counting syllables with my fingers.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>THE WORK I OFFER</b> is for the healing of Earth, our home. I
              know that when fully initiated wise women speak truth with love
              and authenticity, the next seven generations have a chance. 
            </motion.p>
            <Line />
            <motion.p {...fadeInViewProps}>
              <b>ELSEWHERE:</b>
            </motion.p>
            <IconTextBox>
              {" "}
              <Icons href="https://www.instagram.com/_nickiwilkins_/">
                <Insta />
              </Icons>
              <motion.p {...fadeInViewProps}>
                Instagram :: This is where I share my artwork.
              </motion.p>
            </IconTextBox>
            <IconTextBox>
              <Icons href="https://substack.com/@nickiwilkins?utm_source=user-menu">
                <Substack />
              </Icons>
              <motion.p {...fadeInViewProps}>
                Substack :: The Soul Pelt Press is where I record the journey
                into my wise woman years.
              </motion.p>
            </IconTextBox>
            <motion.p {...fadeInViewProps}>
              #wisewildwhole :: Use this hashtag on Instagram to record your
              journey to your wise, wild, and whole self.
            </motion.p>
          </TextContainer>
        </Container>
      </AboutDiv>
    </>
  );
}

export default About;
