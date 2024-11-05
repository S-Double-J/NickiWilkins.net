import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDownBox from "../Components/DropDownBox";
import MeetingButton from "../Components/MeetingButton";
import "./projects.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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
function TransformativeMentoring({
  fadeInViewProps,
  MakeSplitTextAnim,
}: Props) {
  const DURATION = fadeInViewProps.transition.duration;
  const EASE = fadeInViewProps.transition.ease;
  const MARGIN = fadeInViewProps.viewport.margin;
  const lightBoxProps = {
    bg: "var(--Primary-Light)",
    border: "1px solid var(--Primary-Light)",
    class_name: "white",
    fadeInViewProps: fadeInViewProps,
  };

  const ForewordRef = useRef(null);
  const IntroRef = useRef(null);
  const YourJourneyRef = useRef(null);
  const NickisRoleRef = useRef(null);
  const TheDetailsRef = useRef(null);
  const BookingRef = useRef(null)

  function ProjectsNavTool() {
    const [isHidden, setIsHidden] = useState(true);
    const ForewordIsInView = useInView(ForewordRef, { margin: "-200px 0px" });
    const IntroIsInView = useInView(IntroRef, { margin: "-200px 0px" });
    const YourJourneyIsInView = useInView(YourJourneyRef, {
      margin: "-200px 0px",
    });
    const NickisRoleIsInView = useInView(NickisRoleRef, {
      margin: "-200px 0px",
    });
    const TheDetailsIsInView = useInView(TheDetailsRef, {
      margin: "-200px 0px",
    });
    const BookingIsInView = useInView(BookingRef, { margin: "-200px 0px" });

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
            delay: 3.7,
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
              <ButtonText className="white">The Details</ButtonText>
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
    <div className="page-container">
      <ProjectsNavTool />
      <div className="title-frame">
        <h1 className="projects-title-h">
          <MakeSplitTextAnim>TRANSFORMATIVE MENTORING</MakeSplitTextAnim>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE, delay: 3.4 }}
          viewport={{ once: true, margin: MARGIN }}
          className="projects-title-p"
        >
          Personalised one-to-one sessions for women travelling the midlife
          journey of rebirth
        </motion.p>
      </div>
      <section className="section-frame" ref={ForewordRef} id="Foreword">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps}>Foreword</motion.h3>
          <motion.p {...fadeInViewProps}>
            Whether in the early days of your midlife metamorphosis or in the
            middle of your menopausal years, these sessions provide a{" "}
            <b>
              <i>structure</i>
            </b>{" "}
            to{" "}
            <b>
              <i>initiate your Midlife Rebirth</i>
            </b>{" "}
            and offer{" "}
            <b>
              <i>guidance</i>
            </b>{" "}
            as you tread its winding path.{" "}
            <b>
              <i>Each person’s journey is different</i>
            </b>
            , and as your Transformative Mentor, I offer{" "}
            <b>
              <i>guidance and gentle accountability</i>
            </b>{" "}
            as you dive deep into{" "}
            <b>
              <i>discovering your purpose</i>
            </b>{" "}
            in the second half of life. 
          </motion.p>
          <motion.p {...fadeInViewProps}>
            While these sessions share themes and practices that are similar to
            my course, Birthing Wisdom, what makes it distinct is that it is a
            personalised, solo journey, built around you and your process.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            If you’re interested in a{" "}
            <b>
              <i>group journey</i>
            </b>{" "}
            of discovery and rebirth, take a look at{" "}
            <b>
              <i>Birthing Wisdom</i>
            </b>{" "}
            here.
          </motion.p>
          <motion.div {...fadeInViewProps} className="col-to-row">
            <Link to={"/birthing-wisdom"} className="primary-button">
              <p>Birthing Wisdom</p>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="section-frame-dark" ref={IntroRef} id="Intro">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps} className="white">
            What is <i>mentoring</i> and how does it <i>differ</i> from{" "}
            <i>therapy</i>?
          </motion.h3>
          <motion.p {...fadeInViewProps} className="white">
            While mentoring is similar to therapy, both offering supportive
            methods and practices, the two are different.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            Therapy helps answer the question:
            <br />
            How do I heal and become happier?
            <br />
            It focuses on the past. It builds self-awareness.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            Mentoring helps answer the question:
            <br />
            What’s my unique purpose and offering?
            <br />
            It focuses on the present. It builds awareness of your own soul.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            A mentor offers guidance based on the experience of having walked
            where you are walking now.
          </motion.p>
        </div>
        <motion.line
          {...fadeInViewProps}
          className="line-white"
          style={{ width: "100%" }}
        />
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps} className="white">
            What is <i>Transformative Mentoring</i>?
          </motion.h3>
          <motion.p {...fadeInViewProps} className="white">
            Transformative Mentoring is a bespoke one-to-one journey with the
            explicit goal of helping women to connect to their purpose and find
            their voice. You already hold these vital parts of you within
            yourself, and as our bodies change in menopause, it invites us
            inward on a journey of rediscovery. Transformative Mentoring is the
            practice of journeying into the centre of self to meet your soul,
            and then return, bearing its gifts.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            The Midlife Rebirth is a pilgrimage—a circumambulation—a walk around
            your truest self. But each woman’s journey is different, each
            pilgrimage takes a new path, and so each time I mentor a woman on
            this journey, I use my techniques in the way that is right for her,
            at that moment. This makes the structure of this journey somewhat
            hard to define.
          </motion.p>
        </div>
      </section>
      <section id="YourJourney" ref={YourJourneyRef} className="section-frame">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps}>
            So, what will <i>your journey</i> look like?
          </motion.h3>
          <motion.p {...fadeInViewProps}>
            Whilst no two journeys are the same, which makes describing what a
            journey will look like difficult, there are some common themes and
            questions that appear more often than not. I will share these with
            you, so that you can see if these sessions might be right for you.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>
              <i>1. All journeys begin with three simple questions. </i>
            </b>
            These will help to shape your journey into the path that is right
            for you:
          </motion.p>
          <motion.p {...fadeInViewProps} className="libre center">
            <i>
              Where are you on your journey?
              <br />
              What do you want to let go?
              <br />
              What is your deepest longing?
            </i>
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>
              <i>2. Spiritual Change: </i>
            </b>
            In my work with midlife women, I’ve noticed a spiritual pattern of
            change that occurs naturally during menopause and the early wisdom
            years.
          </motion.p>
          <motion.p {...fadeInViewProps} className="libre center">
            <i>
              A woman seeks solitude.
              <br />
              She grows in self-awareness.
              <br />
              She wants to generously offer her gifts.
            </i>
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>
              <i>3. Soulful Questioning: </i>
            </b>
            I’ve also noticed a series of common questions that women ask:
          </motion.p>
          <motion.p {...fadeInViewProps} className="libre center">
            <i>
              Who am I now?
              <br />
              What’s my purpose?
              <br />
              In this change, what spiritual wisdom is my body offering?
              <br />
              How do I really feel about death and grief and loss?
              <br />
              How can I live a more soul-infused life?
              <br />
              How can I contribute to my community?
              <br />
              What kind of elder do I want to be?
            </i>
          </motion.p>
          <motion.p {...fadeInViewProps}>
            Through Transformative Mentoring, I help you discover your answers
            to these questions.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>
              <i>4. Your Journey's Conclusion: </i>
            </b>
            Since Transformative Mentoring is a journey, with a beginning,
            middle, and end, I encourage one of the following activities as a
            way to mark your rebirth and as a conclusion to our time together.
            You’ll know what feels right for you.
          </motion.p>
          <motion.p {...fadeInViewProps} className="libre center">
            <i>
              Narrating your story of rebirth in art or in the writing of your
              personal myth.
              <br />
              A ceremony to mark your passage.
              <br />
              Writing your Wise Woman Commitment.
            </i>
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>
              <i>5. My Tool and Practices: </i>
            </b>
            I offer the following tools to help you in your transformation. My
            objective is to support you on your journey. These tools help you
            dive deeper into the centre of you and to discover your purpose.
            During your journey we will discover which tools your soul needs.
            Perhaps we will invent some new ones. We will always work with what
            feels right to you.
          </motion.p>
          <Box style={{ padding: 10 }}>
            <DropDownBox boxProps={lightBoxProps} title="Nature">
              <p className="white">
                <b>Nature</b> is our most loyal ally on this journey. Spending
                time building our relationship with the land invites perspective
                and a chance to see ourselves in a larger context. I encourage
                you to foster an authentic and intuitive relationship with
                Nature.
              </p>
            </DropDownBox>
            <DropDownBox boxProps={lightBoxProps} title="Story">
              <p className="white">
                <b>Story</b> is medicine for the soul. Story helps us connect
                with ourselves through empathy. Is there a myth you’d like to
                explore? One that’s been calling you?
              </p>
            </DropDownBox>
            <DropDownBox boxProps={lightBoxProps} title="Archetypes">
              <p className="white">
                <b>Archetypes</b> are a way to rediscover wholeness. It’s a way
                to identify and work with the different parts of you. For
                example, working the Artemis archetype might rekindle your love
                of the wilderness. As a result, nature connection becomes a
                doorway to find purpose and meaning.
              </p>
            </DropDownBox>
            <DropDownBox boxProps={lightBoxProps} title="Creativity">
              <p className="white">
                <b>Creativity</b> is a spiritual practice, and because it uses
                the language of soul (metaphor, images, symbols), it’s a useful
                way to access wisdom, wholeness, and purpose. The art we make
                mirrors our soul. This art then offers an opportunity to reflect
                and communicate your rebirthing journey.
              </p>
            </DropDownBox>
            <DropDownBox boxProps={lightBoxProps} title="Meditation">
              <p className="white">
                <b>Meditation</b> is a great tool for answering the question:
                Who am I? It also invites us into the present moment. I offer my
                clients a number of meditations for their soulwork.
              </p>
            </DropDownBox>
            <DropDownBox
              boxProps={lightBoxProps}
              title="Soulcentric Journaling"
            >
              <p className="white">
                <b>Soulcentric Journaling</b> is a free-writing technique to
                create a conversation with your truest self and your soul.
              </p>
            </DropDownBox>
            <DropDownBox boxProps={lightBoxProps} title="Ceremony">
              <p className="white">
                <b>Ceremony</b> is a way to recognize and behold what you are
                becoming—a wise woman elder. As your rebirthing journey comes to
                an end, I invite you to consider a ceremony. It could be private
                or with community.
              </p>
            </DropDownBox>
            <DropDownBox boxProps={lightBoxProps} title="I bring my experience">
              <p className="white">
                <b>I bring my experience:</b> my own rebirthing midlife journey
                (I’ve walked where you walk), my former life as a priest (I hold
                sacred space for others), and my work as a certified Purpose
                Guide (I walk with others on the journey of soul initiation).
              </p>
            </DropDownBox>
          </Box>
          <motion.p {...fadeInViewProps}>
            <b>
              <i>6. What journeys could these sessions take you on? </i>
            </b>
            These are just some of the many ways that my clients use these
            sessions.
          </motion.p>
          <ul>
            <motion.li {...fadeInViewProps} className="libre">
              Weaving spirituality into your life.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Living authentically, aligning your inner self with your work.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Developing a loving relationship with your body.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Exploring the wild feminine through myth and nature connection.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Healing and unifying your inner masculine and feminine.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Working with internal and external resistances and inner critics.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Practising self-love, self-acceptance, and self-loyalty.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Finding your mythopoetic identity.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Exploring your expanding creativity.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Integration of your rebirthing journey.
            </motion.li>
            <motion.li {...fadeInViewProps} className="libre">
              Embodiment of your soul’s purpose and calling.
            </motion.li>
          </ul>
        </div>
      </section>
      <section
        className="section-frame-dark"
        ref={NickisRoleRef}
        id="NickisRole"
      >
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps} className="white">
            My role as your <i>Transformative Mentor</i>
          </motion.h3>
          <motion.p {...fadeInViewProps} className="white">
            As your mentor, I’m like a midwife, holding space for you to rebirth
            your truest self, the most sacred part of you. I’m here to stand
            guard as you birth your unique wise woman elder.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            I offer a unique perspective from years of working with women in
            various stages of spiritual development. I bring 30+ years grounding
            in the spirituality of transformation, the study of the feminine
            life cycle, and a training ranging from the ordained priesthood to a
            variety of meditative and somatic practices. I’m currently a Mentor
            for The Purpose Guide Institute, a poet, and an artist.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            <b>I believe in your body’s intelligence.</b> That you have a deep
            intuitive sense about what’s right for you on this journey. My
            training in Focusing, an experience-based practice of
            self-reflection and meditation, helps locate that felt sense within.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            <b>I am committed to listening to your soul,</b> looking for your
            lost threads, and helping you weave together your purpose-filled,
            soul-infused life.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            <b>I’ve walked this midlife journey.</b> I know the themes and the
            patterns. I know its sacred path.
          </motion.p>
        </div>
      </section>
      <section className="section-frame-dark" style={{ padding: 0 }}>
        <motion.line {...fadeInViewProps} className="line-white" />
      </section>
      <section
        className="section-frame-dark"
        ref={TheDetailsRef}
        id="TheDetails"
      >
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps} className="white">
            The <i>Details</i>
          </motion.h3>
          <motion.p {...fadeInViewProps} className="white">
            While I offer single sessions, deep transformational work often
            needs 3, 6, or 12 sessions. I will follow your lead about what feels
            right for you. All these sessions will be held online, via a
            video-call.
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            One 60-minute Session:
            <br />
            £80
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            Three 60-minute Sessions:
            <br />
            £230
          </motion.p>
          <motion.p {...fadeInViewProps} className="white">
            Six 60-minute Sessions:
            <br />
            £460
          </motion.p>
        </div>
      </section>
      <section className="section-frame-dark" style={{ padding: 0 }}>
        <motion.line {...fadeInViewProps} className="line-white" />
      </section>
      <section className="section-frame-dark" ref={BookingRef} id="Booking">
          <div className="section-text-container">
            <motion.h3  className="white" {...fadeInViewProps}>
              How to <i>book your first session(s)</i>
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              If you would like to book your first Transformative Mentoring session(s) please first book a free 30 minute introductory call with Nicki. This is a chance to get to know each other and answer any questions you might have.
            </motion.p>
            <MeetingButton class_name="primary-button-dark" fadeInViewProps={fadeInViewProps}/>
          </div>
        </section>
    </div>
  );
}

export default TransformativeMentoring;
