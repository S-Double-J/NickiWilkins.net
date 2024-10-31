import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDownBox from "../Components/DropDownBox";
import "./projects.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MeetingButton from "../Components/MeetingButton";




const Box = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 26px;
  background: var(--Primary-Dark);
  box-sizing: border-box;
`;

const BoxInnerNoBorder = styled.div`
  display: flex;
  padding: 5px 20px;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  align-self: stretch;
  box-sizing: border-box;
`;
const SmallBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 500px;
  gap: 20px;
  padding: 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 28px;
  box-sizing: border-box;
  background: var(--Primary-Light);
`;
const Tick = styled.svg`
  width: 20px;
  height: 13.772px;
  stroke-width: 2px;
  stroke: var(--Primary-Light);
  flex-shrink: 0;
`;
const FixedPositionContainer = styled(motion.div)`
  width: auto;
  position: fixed;
  left: 0px;
  top: calc(50svh + 31px);
  transform: translateY(-50%);
  overflow: visible;
  z-index: 100;
`;
const GlassContainer = styled.div`
  width: auto;
  display: flex;
  padding: 50px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: -4px -4px 4px 0px rgba(172, 172, 172, 0.25) inset,
    4px 4px 4px 0px rgba(172, 172, 172, 0.25) inset;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  overflow: visible;
  z-index: 100;
`;
const ButtonText = styled(motion.p)`
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.14px;
  margin: 0;
  padding: 0;
`;
const SectionButton = styled(motion.button)`
  display: flex;
  width: 138px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  box-shadow: inherit;
  overflow: hidden;
  position: relative;
  background-color: var(--Primary-Light);
  border: 1px solid var(--Accent-Dark);
  cursor: pointer;
`;
const ActiveSpan = styled(motion.span)`
  display: flex;
  width: 138px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  box-shadow: inherit;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  background: var(--Accent-Dark);
  border: none;
  cursor: pointer;
`;

const HideButtonDiv = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -45px;
  top: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(5px);
  box-shadow: inherit;
  border: none;
  z-index: 100;
  cursor: pointer;
`;
const HideButton = styled(motion.button)`
  display: flex;
  width: 30px;
  height: 30px;
  padding-left: 3px;
  justify-content: left;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid var(--Primary-Dark);
  background: var(--Primary-Light);
  cursor: pointer;
`;
const HideButtonSVG = styled.svg`
  stroke: var(--Primary-Dark);
  transform: rotate(180deg);
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
function BirthingWisdom({ fadeInViewProps, MakeSplitTextAnim }: Props) {
  const DURATION = fadeInViewProps.transition.duration;
  const EASE = fadeInViewProps.transition.ease;
  const lightBoxProps = {
    bg: "var(--Primary-Light)",
    border: "1px solid var(--Primary-Light)",
    class_name: "white",
    fadeInViewProps: fadeInViewProps,
  };
  const darkBoxProps = {
    bg: "var(--Primary-Dark)",
    border: "1px solid var(--Primary-Dark)",
    class_name: "",
    fadeInViewProps: fadeInViewProps,
  };

  const ForewordRef = useRef(null);
  const LetterRef = useRef(null);
  const IntroRef = useRef(null);
  const YourJourneyRef = useRef(null);
  const TheThreadsRef = useRef(null);
  const TheFourStagesRef = useRef(null);
  const NickisRoleRef = useRef(null);
  const TheDetailsRef = useRef(null);
  const BookingRef = useRef(null);
  const FAQsRef = useRef(null);
  const OtherOptionsRef = useRef(null);

  function ProjectsNavTool() {
    const [isHidden, setIsHidden] = useState(true);
    const ForewordIsInView = useInView(ForewordRef, { margin: "-200px 0px" });
    const LetterIsInView = useInView(LetterRef, { margin: "-200px 0px" });
    const IntroIsInView = useInView(IntroRef, { margin: "-200px 0px" });
    const YourJourneyIsInView = useInView(YourJourneyRef, {
      margin: "-200px 0px",
    });
    const TheThreadsIsInView = useInView(TheThreadsRef, {
      margin: "-200px 0px",
    });
    const TheFourStagesIsInView = useInView(TheFourStagesRef, {
      margin: "-200px 0px",
    });
    const NickisRoleIsInView = useInView(NickisRoleRef, {
      margin: "-200px 0px",
    });
    const TheDetailsIsInView = useInView(TheDetailsRef, {
      margin: "-200px 0px",
    });
    const BookingIsInView = useInView(BookingRef, {
      margin: "-200px 0px",
    });
    const FAQsIsInView = useInView(FAQsRef, { margin: "-200px 0px" });
    const OtherOptionsIsInView = useInView(OtherOptionsRef, {
      margin: "-200px 0px",
    });

    return (
      <FixedPositionContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: {
            left: -160,
          },
          visible: {
            left: 10,
          },
        }}
        transition={{
          isHidden: {
            duration: 0.5,
            ease: "easeInOut",
          },
          opacity: {
            delay: 3,
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
      >
        <GlassContainer>
          <SectionButton
            initial={false}
            animate={ForewordIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("Foreword");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Foreword</ButtonText>
            <ActiveSpan
              initial={false}
              animate={ForewordIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Foreword</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={LetterIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("Letter");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Letter</ButtonText>
            <ActiveSpan
              initial={false}
              animate={LetterIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Letter</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={IntroIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("Intro");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Intro</ButtonText>
            <ActiveSpan
              initial={false}
              animate={IntroIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Intro</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={YourJourneyIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("YourJourney");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Your Journey</ButtonText>
            <ActiveSpan
              initial={false}
              animate={YourJourneyIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Your Journey</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={TheThreadsIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("TheThreads");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>The Threads</ButtonText>
            <ActiveSpan
              initial={false}
              animate={TheThreadsIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">The Threads</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={TheFourStagesIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("TheFourStages");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>The Four Stages</ButtonText>
            <ActiveSpan
              initial={false}
              animate={TheFourStagesIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">The Four Stages</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={NickisRoleIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("NickisRole");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Nicki's Role</ButtonText>
            <ActiveSpan
              initial={false}
              animate={NickisRoleIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Nicki's Role</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={TheDetailsIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("TheDetails");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>The Details</ButtonText>
            <ActiveSpan
              initial={false}
              animate={TheDetailsIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">The Details</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={BookingIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("Booking");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Booking</ButtonText>
            <ActiveSpan
              initial={false}
              animate={BookingIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Booking</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={FAQsIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("FAQs");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>FAQs</ButtonText>
            <ActiveSpan
              initial={false}
              animate={FAQsIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">FAQs</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <SectionButton
            initial={false}
            animate={OtherOptionsIsInView ? "active" : "inactive"}
            variants={{
              active: {
                border: "1px solid var(--Primary-Light)",
              },
              inactive: {
                border: "1px solid var(--Primary-Dark)",
              },
            }}
            transition={{ duration: 0.5, easing: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById("OtherOptions");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ButtonText>Other Options</ButtonText>
            <ActiveSpan
              initial={false}
              animate={OtherOptionsIsInView ? "active" : "inactive"}
              variants={{
                active: {
                  top: 0,
                },
                inactive: {
                  top: "100%",
                },
              }}
              transition={{ duration: 0.3, easing: "easeInOut" }}
            >
              <ButtonText className="white">Other Options</ButtonText>
            </ActiveSpan>
          </SectionButton>
          <HideButtonDiv onClick={() => setIsHidden((prevValue) => !prevValue)}>
            <HideButton
              animate={isHidden ? "hidden" : "visible"}
              variants={{
                hidden: {
                  rotate: "180deg",
                },
                visible: {
                  rotate: "0deg",
                },
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
                delay: 0.1,
              }}
            >
              <HideButtonSVG
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M3.5 1L16.5 11L3.5 21M1.5 3.5L12 11L1.5 18.5"
                  stroke-width="2"
                />
              </HideButtonSVG>
            </HideButton>
          </HideButtonDiv>
        </GlassContainer>
      </FixedPositionContainer>
    );
  }
  return (
    <>
      <div className="page-container" id="Birthing Wisdom Page">
        <ProjectsNavTool />
        <div className="title-frame">
          <h1 className="projects-title-h">
            <MakeSplitTextAnim>Birthing Wisdom</MakeSplitTextAnim>
          </h1>
          <motion.p
            className="projects-title-p"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE, delay: 2.6 }}
            viewport={{ once: true }}
          >
            A 6-month online soul initiation for women travelling the midlife
            journey of rebirth. February to July 2025
          </motion.p>
        </div>
        <section className="section-frame" ref={ForewordRef} id="Foreword">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>Foreword</motion.h3>
            <motion.p {...fadeInViewProps}>
              Birthing Wisdom is a journey of soul initiation for women
              travelling the transition from menopause into elderhood. Whether
              in the early days of your midlife metamorphosis or in the middle
              of your menopausal years, this course provides you with a{" "}
              <b>
                <i>structure</i>
              </b>{" "}
              to{" "}
              <b>
                <i>initiate your Midlife Rebirth </i>
              </b>
               and offers{" "}
              <b>
                <i>guidance</i>
              </b>{" "}
              as you tread its winding path. During this process, you will have
              the support of a{" "}
              <b>
                <i>community of women </i>
              </b>
              with whom to{" "}
              <b>
                <i>share your journey</i>
              </b>{" "}
              and rebirth. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              While this course shares themes and practices that are similar to
              my one-to-one sessions, Transformative Mentoring, what makes it
              distinct is that this is a structured program designed to be
              shared with a community of women as they travel the path of their
              Midlife Rebirth.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              If you’re interested in a{" "}
              <b>
                <i>personalised, one-to-one journey</i>
              </b>{" "}
              of discovery and rebirth,{" "}
              <b>
                <i>built around you</i>
              </b>{" "}
              and your process, then take a look at{" "}
              <b>
                <i>Transformative Mentoring</i>
              </b>{" "}
              here.
            </motion.p>
            <motion.div className="col-to-row" {...fadeInViewProps}>
              <Link to={"/transformative-mentoring"} className="primary-button">
                <p>Transformative Mentoring</p>
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="section-frame-dark" ref={LetterRef} id="Letter">
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              A letter from Nicki, your guide
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              Hello friend,
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Menopause is an initiation of the soul. Even though it’s not
              honoured for what it is—one of the most profound transitions in a
              woman’s life—it deserves to be.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              And it’s not just the cellular changes that need to be addressed.
              The soulful ones beg for our attention too. In fact, many of us
              walk this transition alone. We should change that.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Let’s build a community where the wise woman is visible and
              honoured. Her vitality, cherished. Her heart-based wisdom, valued.
              Her name, spoken with pride. Let’s build a community where she has
              space to rebirth, in her own time.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              I offer this journey for you to creatively explore your soulful
              identity as a Woman of Wisdom. You’re already doing it. Diving
              deep into your inner landscape, looking for clues about your
              authentic self and your soul’s purpose. 
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Growth and rebirth—they don’t happen in a straight line. It’s
              always a circle. The transition from menopause to your wisdom
              years is no different. This is a journey of circumambulation: a
              “walk around” something holy and sacred. A “circle around” you. A
              pilgrimage. 
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              I hold space for you to keep walking. I want you to find her. That
              wise, wild, whole you! The world awaits your return.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              In service,
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Nicki
            </motion.p>
          </div>
        </section>
        <section className="section-frame" ref={IntroRef} id="Intro">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              What is <i>Birthing Wisdom</i>?
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              Menopause changes us on both the cellular and soulful level. It’s
              a time where we let go of what is dying to make room for the
              emergence of something new. Birthing Wisdom is a structured course
              designed to guide women on their pilgrimage to self, build a
              relationship with soul, and find purpose. This course is run for a
              group of women, offering a communal space to process this
              journey. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              This journey has many threads. While each rebirth is unique and
              organic, there are similar themes and desires that surface at this
              life stage transition. Jungians Bruce Baker and Jane Wheelwright
              identified these psychological-spiritual steps for the journey
              into wise elderhood. These steps heavily inform this course. 
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <Box style={{ padding: "20px 50px" }}>
                <ul className="white">
                  <motion.li {...fadeInViewProps}>
                    A review of one's life.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    An acceptance of death and the reality that life has finite
                    limits.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A letting go of the dominance of ego.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A turn towards honouring the truest self.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A desire to connect with the soul.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A longing to engage with one's purpose and to make an
                    offering of service.
                  </motion.li>
                </ul>
              </Box>
            </motion.div>
          </div>
        </section>
        <line className="line" />
        <section
          className="section-frame"
          ref={YourJourneyRef}
          id="YourJourney"
        >
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              So, what will <i>Your Journey</i> look like?
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              Birthing Wisdom is a course with two-fold intentions. It is an
              inner journey in which a woman births her Wise Woman Elder. It is
              also a collective of women who support each other on this journey
              to rebirth. By marrying these two intentions we find something the
              modern world does not offer. We find a space in which she can
              rebirth in her own time and share the gifts she finds in the
              process. We find a space where she is valued, and her voice is
              spoken and heard.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              Here’s what the two-fold intentions look like in practice. We will
              meet as a group online for two hours, twice a month. We will use
              these bi-monthly sessions for teaching, learning, meditation,
              connection, and discussion. Once a month you will meet with Nicki
              for a one-to-one mentoring session. The time in between sessions
              is for personal reflection, soul practices, and creative
              expression.
            </motion.p>
            <motion.h4 {...fadeInViewProps}>
              On this journey you'll have access to
            </motion.h4>
            <motion.div {...fadeInViewProps}>
              <Box style={{ padding: "50px" }}>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>12 Live, interactive group sessions </b>
                    </i>
                    with Nicki
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>6 Private, 60 minute sessions </b>
                    </i>
                    with Nicki
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>12 Practical guides, </b>
                    </i>
                    one for each of the 12 modules, outlining practices and
                    exercises to deepen your soulwork.
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>7 Guided soul encounter meditations </b>
                    </i>
                    with Nicki
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>Additional readings and resouces </b>
                    </i>
                    that support your soulwork
                  </motion.p>
                </BoxInnerNoBorder>
              </Box>
            </motion.div>
          </div>
        </section>
        <line className="line" />
        <section className="section-frame" ref={TheThreadsRef} id="TheThreads">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              The <i>Threads </i> of Birthing Wisdom
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              There are many paths to birthing your wisdom. I weave some common
              threads into this journey to help you dive deep into the centre of
              your truest self.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <Box style={{ padding: 10 }}>
                <DropDownBox boxProps={lightBoxProps} title="Story">
                  <p className="white">
                    Story is medicine that offers an invitation to find those
                    lost parts of you.
                  </p>
                  <p className="white">
                    We will be working with the myth of The Handless Maiden, an
                    underworld story that addresses the feminine life cycle.
                  </p>
                  <p className="white">
                    We will work with archetypal psychology, searching for the
                    face of the Wise Woman. In our quest to find your unique
                    elderhood, we will explore a variety of archetypes in women
                    over fifty.
                  </p>
                </DropDownBox>
                <DropDownBox boxProps={lightBoxProps} title="Soul Practices">
                  <p className="white">
                    This thread invites you to work with a variety of practices
                    to move closer to your soul: meditation, nature connection,
                    soulcentric journaling, and creativity.
                  </p>
                </DropDownBox>
                <DropDownBox boxProps={lightBoxProps} title="Purpose Discovery">
                  <p className="white">
                    This thread explores your soul’s purpose as you move into
                    your wisdom years. We will dive deep into the centre of Self
                    to explore your vision, values, powers, essence, giveaway,
                    task, message, and delivery system.
                  </p>
                </DropDownBox>
                <DropDownBox boxProps={lightBoxProps} title="The Wisdom Circle">
                  <p className="white">
                    These are our online group sessions. They will be used for
                    teaching, building community, group guidance, and the
                    exploration of the different stages of soul initiation.
                  </p>
                </DropDownBox>
                <DropDownBox boxProps={lightBoxProps} title="Private Mentoring">
                  <p className="white">
                    These one-to-one sessions with me will allow you to dive
                    deeper into your purpose and rebirthing process.
                  </p>
                </DropDownBox>
                <DropDownBox boxProps={lightBoxProps} title="Personal Study">
                  <p className="white">
                    Practices are given to you to complete between sessions,
                    including personal inquiry, soul practices, and creative
                    prompts.
                  </p>
                </DropDownBox>
              </Box>
            </motion.div>
          </div>
        </section>
        <section
          className="section-frame-dark"
          ref={TheFourStagesRef}
          id="TheFourStages"
        >
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              The <i>Four Stages </i>of Birthing Wisdom
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              Each journey is completely unique. Even within the community of
              women on your course, you may find that your journey to soul and
              the shape of your return is different from your sisters. But
              Birthing Wisdom will provide you with the same structured guidance
              as you walk the winding path to your own soul encounter. The
              course has four stages: Preparation, Dissolution, Soul Encounter,
              and Return.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <Box
                style={{ padding: "10px", background: "var(--Primary-Light)" }}
              >
                <DropDownBox
                  boxProps={darkBoxProps}
                  title="PREPARATION: Cultivating your innate wholeness."
                >
                  <h4>1. Key Explorations</h4>
                  <p>How to cultivate your innate wholeness?</p>
                  <ul>
                    <li>Reviewing your life story.</li>
                    <li>Gathering your allies and adversaries.</li>
                    <li>Meeting your Inner Protectors.</li>
                    <li>Discovering your Default Purpose.</li>
                    <li>
                      Working with myth and archetypes to find lost parts.
                    </li>
                    <li>Cultivating soul practices.</li>
                  </ul>
                  <h4>2. Story</h4>
                  <p>
                    The Handless Maiden:
                    <br />
                    Loss and betrayal are the first steps on an initiatory
                    journey to the underground forest. We will be looking at the
                    ways this story resonates with you.
                  </p>
                  <p>
                    The Feminine Face of Wisdom: Metis.
                    <br />
                    What does her story have to say to women who are moving into
                    the wisdom years?
                  </p>
                  <h4>3. Soul Practices</h4>
                  <p>
                    Deepening into Soul:
                    <br />
                    Meditation, communing with Nature, making art, building a
                    small altar for this journey.
                  </p>
                  <p>
                    Creative Expression:
                    <br />
                    Self-Portrait 1.
                    <br />
                    Over the course of this journey, you will be invited to make
                    a series of four self-portraits using your preferred medium:
                    paint, photography, poetry, writing, sculpture, nature art.
                  </p>
                  <h4>4. Purpose Discovery</h4>
                  <p>We will focus on the following facets of purpose:</p>
                  <ul>
                    <li>What do you envision for the world?</li>
                    <li>What are your deepest values?</li>
                    <li>What are your innate strengths and talents?</li>
                    <li>What is your essence?</li>
                  </ul>
                  <p>
                    You will receive a packet for personal inquiry at each stage
                    along the journey.
                  </p>
                </DropDownBox>
                <DropDownBox
                  boxProps={darkBoxProps}
                  title="DISSOLUTION: Softening the influence of Ego."
                >
                  <h4>1. Key Explorations</h4>
                  <p>
                    How can we soften the influence of Ego for Soul to lead?
                  </p>
                  <ul>
                    <li>Reviewing your relationship with death.</li>
                    <li>Accepting the reality that life has finite limits.</li>
                    <li>Working with life scripts and subpersonalities.</li>
                    <li>Cultivating a deeper relationship with Soul.</li>
                  </ul>
                  <h4>2. Story</h4>
                  <p>
                    The Handless Maiden:
                    <br />
                    We will explore the characters in the story as symbolic
                    representations of the parts of the psyche: the sleepy one,
                    the trailblazer, the transformer, the mage, the pregnant
                    one, the predator.
                  </p>
                  <p>
                    The Feminine Face of Wisdom: The Cailleach.
                    <br />
                    We will explore the archetype of the Wise Woman Crone. Who
                    is she? What is her name? What’s her offering? What is her
                    role in the Life/Death/Rebirth cycle?
                  </p>
                  <h4>3. Soul Practices</h4>
                  <p>
                    Deepening into Soul:
                    <br />
                    Your work at this stage is twofold: the practice of letting
                    go and the practice of opening your heart more fully to your
                    soul. We will work with grief and ceremony as well as the
                    art of romancing nature.
                  </p>
                  <p>
                    Creative Expression:
                    <br />
                    Self-Portrait 2.
                  </p>
                  <h4>4. Purpose Discovery</h4>
                  <ul>
                    <li>What is your Giveaway?</li>
                    <li>What is your Mission?</li>
                    <li>What is your Message?</li>
                    <li>What is your Delivery System?</li>
                  </ul>
                </DropDownBox>
                <DropDownBox
                  boxProps={darkBoxProps}
                  title="SOUL ENCOUNTER: Receiving gifts from Soul."
                >
                  <h4>1. Key Explorations</h4>
                  <ul>
                    <li>Surrendering to your deepest longing.</li>
                    <li>What does your truest self whisper?</li>
                    <li>Moving from egocentric to soulcentric living.</li>
                    <li>Discovering your True Purpose.</li>
                  </ul>
                  <h4>2. Story</h4>
                  <p>
                    The Handless Maiden:
                    <br />
                    We will explore the initiatory path of the maiden as she
                    enters and spends time in the large wild forest. This is the
                    realm of the wild woman. What takes root? What does she
                    find?
                  </p>
                  <p>
                    The Feminine Face of Wisdom: Sophia, Hecate, Hestia.
                    <br />
                    The art of meditative listening for mystical and intuitive
                    wisdom.
                  </p>
                  <h4>3. Soul Practices</h4>
                  <p>
                    Deepening into Soul: THE SOUL QUEST
                    <br />
                    Solo time on the land (8hours).
                  </p>
                  <p>
                    Creative Expression:
                    <br />
                    Self-Portrait 3.
                  </p>
                  <h4>4. Purpose Discovery</h4>
                  <p>The Soul Quest is an act of soulcentric living:</p>
                  <ul>
                    <li>How can we surrender to Soul?</li>
                    <li>Asking Nature: What can I do for you?</li>
                    <li>Practising the art of listening.</li>
                  </ul>
                </DropDownBox>
                <DropDownBox
                  boxProps={darkBoxProps}
                  title="RETURN: Integration and the embodiment of wisdom."
                >
                  <h4>1. Key Explorations</h4>
                  <ul>
                    <li>Returning to your community.</li>
                    <li>
                      Keeping your soul encounter experiences close with
                      expressive arts.
                    </li>
                    <li>Discerning your Sacred Instructions.</li>
                    <li>Your mythopoetic identity.</li>
                    <li>
                      Developing skills that resonate with your mythopoetic
                      identity.
                    </li>
                    <li>Cultivating more facets of your wholeness.</li>
                    <li>Begin to embody your Wise Woman.</li>
                  </ul>
                  <h4>2. Story</h4>
                  <p>
                    The Handless Maiden:
                    <br />
                    In the last stage of our study of this myth, we will focus
                    on wholeness and the reunion of the sacred masculine and
                    feminine.
                  </p>
                  <p>The Feminine Face of Wisdom: Self-Portrait 4 </p>
                  <h4>3. Soul Practices</h4>
                  <p>Creative Expression: Writing Your Unique Myth</p>
                  <h4>4. Purpose Discovery</h4>
                  <ul>
                    <li>Your mythopoetic identity.</li>
                    <li>Writing your Wise Woman Commitment.</li>
                    <li>Writing your Wise Woman Blessing Way.</li>
                  </ul>
                </DropDownBox>
              </Box>
            </motion.div>
          </div>
        </section>
        <section className="section-frame" ref={NickisRoleRef} id="NickisRole">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              My role as your <i>Transformative Mentor</i>
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              As your mentor, I’m like a midwife, holding space for you to
              rebirth your truest self, the most sacred part of you. I’m here to
              stand guard as you birth your unique wise woman elder.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              I offer a unique perspective from years of working with women in
              various stages of spiritual development. I bring 30+ years
              grounding in the spirituality of transformation, the study of the
              feminine life cycle, and a training ranging from the ordained
              priesthood to a variety of meditative and somatic practices. I’m
              currently a Mentor for The Purpose Guide Institute, a poet, and an
              artist.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I believe in your body’s intelligence.</b> That you have a deep
              intuitive sense about what’s right for you on this journey. My
              training in Focusing, an experience-based practice of
              self-reflection and meditation, helps locate that felt sense
              within.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I am committed to listening to your soul,</b> looking for your
              lost threads, and helping you weave together your purpose-filled,
              soul-infused life.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I’ve walked this midlife journey.</b> I know the themes and the
              patterns. I know its sacred path.
            </motion.p>
          </div>
        </section>
        <line className="line" />
        <section className="section-frame" ref={TheDetailsRef} id="TheDetails">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              The <i>Details</i>
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              <b>When the course meets:</b>
              <br />
              Course begins on the <b>1st February 2025</b> and ends on the{" "}
              <b>12th July 2025.</b>
              We meet every other Saturday from 4pm – 6pm GMT.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>There are 12 Group Sessions:</b>
              <br />1 Feb, 15th Feb, 1 March, 15 March, 29 March, 12 April, 26
              April, 10 May, 24 May, 31 May (Soul Quest), 7 June, 28 June, 12
              July. All private sessions with Nicki will be arranged.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>The cost of Birthing Wisdom:</b>
              The 6-month online program is <b>£900</b>.<br /> This is a
              one-time Special Launch price.
            </motion.p>
          </div>
        </section>
        <line className="line" />
        <section className="section-frame" ref={BookingRef} id="Booking">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              How to <i>book your place</i> on the course
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              If you would like to book your place on Birthing Wisdom please book a free 30 minute virtual meeting with Nicki. In this meeting you will be able to ask any questions you might have about the course and Nicki will take your details and get to know you a little.
            </motion.p>
            <MeetingButton class_name="primary-button" fadeInViewProps={fadeInViewProps}/>
          </div>
        </section>
        <section className="section-frame-dark" ref={FAQsRef} id="FAQs">
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              Frequently asked <i>Questions</i>
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>What do I need to participate?</i>
              </b>
              <br />
              The only equipment you’ll need is a computer or mobile device with
              an internet connection, a journal, and art supplies of your
              choice. You will receive the Zoom link to join our call ahead of
              time.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>How much time commitment does the course require?</i>
              </b>
              <br />5 hours per week. Participation of all participants in the
              practices is required to hold a sacred container for all. Please
              note that this journey involves an 8-hour Soul Quest out in
              nature.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>How can I best prepare for this course?</i>
              </b>
              <br />
              Some effective ways to prepare for this journey are to spend time
              in nature, support and nourish your body, deepen your personal
              relationships, engage in quiet contemplative practices, read
              mythology, and be creative.
              <br />
              <br />
              This program is for those who maintain a level of stability in
              their lives, are committed to fostering wellness, and are open to
              discovering wholeness.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>
                  Note: this program is not recommended for those with ongoing
                  addiction, severe untreated trauma, or untreated mental
                  illness.{" "}
                </i>
              </b>
              If uncertain about your readiness, I recommend working with a
              coach or therapist for a time before embarking on this journey.
            </motion.p>
          </div>
        </section>
        <section className="section-frame-dark" style={{ padding: 0 }}>
          <line className="line-white" />
        </section>
        <section
          id="OtherOptions"
          ref={OtherOptionsRef}
          className="section-frame-dark"
        >
          <div className="section-text-container-other-options">
            <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              <i>Other ways</i> to work with me and this journey
            </motion.h3>
            </div>
            <div className="col-to-row">
              <motion.div {...fadeInViewProps}>
                <SmallBox>
                  <motion.h4 {...fadeInViewProps}>
                    Individual sessions
                  </motion.h4>
                  <ul>
                    <motion.li {...fadeInViewProps}>
                      12 individual sessions with me, at your pace.
                    </motion.li>
                    <motion.li {...fadeInViewProps}>
                      These individual sessions will follow the structure of
                      Birthing Wisdom.
                    </motion.li>
                    <motion.li {...fadeInViewProps}>
                      In person or online. £1800 (This is a one-time special
                      launch price. Offer ends soon.)
                    </motion.li>
                  </ul>
                  <motion.div {...fadeInViewProps}>
                    <MeetingButton class_name="primary-button" fadeInViewProps={fadeInViewProps} />
                  </motion.div>
                </SmallBox>
              </motion.div>
              <motion.div {...fadeInViewProps}>
                <SmallBox>
                  <motion.h4 {...fadeInViewProps}>
                    Private Group sessions
                  </motion.h4>
                  <motion.p {...fadeInViewProps}>
                    Do you know a small group of women who would be interested
                    in this course? <i>(6-8 women)</i>
                    <br />
                    <br />
                    Would you like to deepen your bond as you travel this
                    journey together?
                    <br />
                    <br />
                    Contact me if you would like to book a private course, just
                    for you and your sisters.
                  </motion.p>
                  <motion.div {...fadeInViewProps}>
                  <MeetingButton class_name="primary-button" fadeInViewProps={fadeInViewProps} />
                  </motion.div>
                </SmallBox>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
}

export default BirthingWisdom;
