import styled from "styled-components";
import { motion } from "framer-motion";
import "./projects.css";
import DropDownBox from "../Components/DropDownBox";
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
const LinkText = styled.a`
  text-decoration: none;
  z-index: 1;
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
function Retreats({ fadeInViewProps, MakeSplitTextAnim }: Props) {
  const DURATION = fadeInViewProps.transition.duration;
  const EASE = fadeInViewProps.transition.ease;
  const MARGIN = fadeInViewProps.viewport.margin;
  const darkBoxProps = {
    bg: "var(--Primary-Dark)",
    border: "1px solid var(--Primary-Dark)",
    class_name: "",
    fadeInViewProps: fadeInViewProps,
  };
  return (
    <div className="page-container">
      <div className="title-frame">
        <h1 className="projects-title-h">
          <MakeSplitTextAnim>CREATIVE RETREATS</MakeSplitTextAnim>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE, delay: 3.4 }}
          viewport={{ once: true, margin: MARGIN }}
          className="projects-title-p"
        >
          For women in the second half of life
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE, delay: 3.4 }}
          viewport={{ once: true, margin: MARGIN }}
          className="projects-title-p"
        >
          Isle of Iona, Scotland <br />
          Argyll Hotel
        </motion.p>
      </div>
      <section className="section-frame-dark" id="booking">
        <div className="section-text-container">
          <motion.h3 className="white" {...fadeInViewProps}>
            Booking your place on a retreat
          </motion.h3>
          <motion.p {...fadeInViewProps} className="white"> In order to book a place on any of the retreats please contact Katy at the Argyll Hotel, book, and pay directly. You can reach the Argyll Hotel over the phone at <i>+44 (0)1681 700334</i> or send them an email at reception@argyllhoteliona.co.uk</motion.p>
          <motion.div className="col-to-row" {...fadeInViewProps}>
                  <LinkText
                    href="mailto:reception@argyllhoteliona.co.uk"
                    className="primary-button-dark"
                  >
                    <p>Email the Argyll Hotel</p>
                  </LinkText>
                  <LinkText
                    href="https://argyllhoteliona.co.uk/"
                    className="primary-button-dark"
                  >
                    <p>Visit their website</p>
                  </LinkText>
                </motion.div>
        </div>
      </section>
      <section className="section-frame" id="soul-pelt">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps}>
            Finding your Soul Pelt:<br/> The Selkie myth and The Midlife
            Metamorphosis
          </motion.h3>
          <motion.p {...fadeInViewProps} className="libre">
            <b>Finding your shape-shifter</b>
            <br />
            April 1st to April 6th 2025
          </motion.p>
          <motion.p{...fadeInViewProps}>
            A creative retreat for women who are ready to explore the soulful
            side of menopause through myth, creativity, nature, and the
            spirituality of transformation.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            We will dive deep into the mythical landscape of the selkie, a
            shape-shifter on an underworld journey, to explore the ways in which
            menopause is a time of inner exploration, shape-shifting, and
            expanding creativity.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            You are invited to use your chosen creative medium—writing, poetry,
            drawing—to respond to the myth of the selkie.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            We will explore a different aspect of the story each morning in our
            group sessions. The afternoons are for your individual creative
            practice. There will be plenty of time for nature connection. In the
            evenings we will gather for Wisdom Circle, a time to connect and
            share stories, celebrate creativity, and explore the midlife
            metamorphosis.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            With its natural beauty, beaches, seals, and long history of
            pilgrimage, Iona is an ideal place to nourish body and soul.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>ALL INCLUSIVE (ACCOMMODATION, MEALS, RETREAT FEE): £1200</b>
          </motion.p>
        </div>
      </section>
      <section className="section-frame" id="cailleach">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps}>
            The face of The Cailleach:<br/> Winds, Whirlpools and Wilderness
          </motion.h3>
          <motion.p {...fadeInViewProps} className="libre">
            <b>Exploring Self-Portraiture</b>
            <br />
            July 5th to July 8th 2025
          </motion.p>
          <motion.p {...fadeInViewProps}>
            A creative retreat for women in midlife, menopause, or the wisdom
            years who are ready to explore the crone archetype through myth,
            creativity, nature, and the spirituality of embodiment.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            You are invited to explore self-portraiture using your chosen
            medium—nature writing, memoir, poetry, drawing, photography, or
            environmental art.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            Who is the Cailleach? Where is she? What does she teach about life,
            death, and rebirth?
          </motion.p>
          <motion.p {...fadeInViewProps}>
            We will seek the face of the Cailleach in myth and in nature,
            listening closely for the wisdom about the art of letting go, how to
            see in the dark, where to find authenticity, how to be an agent of
            change, and how to stand in Mystery.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            We will explore the story and landscape of the Cailleach in our
            morning group sessions. The afternoons are for individual creative
            practice. In the evenings we will gather for Wisdom Circle, a time
            to connect, share stories, and celebrate your creativity.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            Iona, with its big sea and sky, and craggy coves, is the perfect
            place to dive into your creative practice and search for the face of
            the Cailleach. Where will you find her?
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>ALL INCLUSIVE (ACCOMMODATION, MEALS, RETREAT FEE): £750</b>
          </motion.p>
        </div>
      </section>
      <section className="section-frame" id="WWS">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps}>Wise Women Stories</motion.h3>
          <motion.p {...fadeInViewProps} className="libre">
            <b>Writing your Personal Myth</b>
            <br />
            October 9th to October 15th 2025
          </motion.p>
          <motion.p {...fadeInViewProps}>
            A creative writing retreat for the woman who has been through
            menopause and is ready to explore her new role as a wise woman crone
            through myth, nature, and creative writing.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            You’ve made it through menopause, a rite of passage, a midlife
            rebirth! You’ve been busy reflecting and reviewing the story of your
            life. You now wonder: What next? Who am I now? What are my gifts?
            How can I contribute to my community?
          </motion.p>
          <motion.p {...fadeInViewProps}>
            This retreat is a chance to spend time in solitude and in community
            exploring the spirituality of elderhood through the lens of the wise
            woman archetype. Each morning, we will dive deep into a myth,
            looking for clues about what it means to be a wise, wild, and whole
            woman. The afternoons are for writing your personal myth. In the
            evenings we will gather for Wisdom Circle to share stories,
            longings, and how we might be agents of change in a world that
            desperately needs wise women to embody wisdom, love, and power.{" "}
          </motion.p>
          <motion.p {...fadeInViewProps}>
            At the end of the retreat, there will be a Story Feast to share our
            personal myths and a Blessing Ceremony.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            <b>ALL INCLUSIVE (ACCOMMODATION, MEALS, RETREAT FEE): £1200</b>
          </motion.p>
        </div>
      </section>
      <section className="section-frame-dark" id="FAQs">
        <div className="section-text-container">
          <motion.h3 {...fadeInViewProps} className="white">
            FAQ's
          </motion.h3>

          <motion.div {...fadeInViewProps}>
            <Box
              style={{ padding: "10px", background: "var(--Primary-Light)" }}
            >
              <DropDownBox boxProps={darkBoxProps} title="How do I book?">
                <p>Contact Katy at the Argyll Hotel, book, and pay directly. You can reach the Argyll Hotel over the phone at <i>+44 (0)1681 700334</i> or send them an email at reception@argyllhoteliona.co.uk</p>
                <motion.div className="col-to-row" {...fadeInViewProps}>
                  <LinkText
                    href="mailto:reception@argyllhoteliona.co.uk"
                    className="primary-button"
                  >
                    <p>Email the Argyll Hotel</p>
                  </LinkText>
                  <LinkText
                    href="https://argyllhoteliona.co.uk/"
                    className="primary-button"
                  >
                    <p>Visit their website</p>
                  </LinkText>
                </motion.div>
              </DropDownBox>
              <DropDownBox boxProps={darkBoxProps} title="How do I get to Iona">
                <p>
                  All participants are responsible for transportation to and
                  from Iona. It’s a ferry ride from Oban to Craignure on Mull, a
                  bus across Mull to Fionnphort, and then a 10-minute ferry to
                  Iona. This requires paying close attention to the ferry and
                  bus times.
                </p>
                <motion.div className="button-col" {...fadeInViewProps}>
                  <LinkText
                    href="https://www.calmac.co.uk/article/7796/Mull-Oban---Craignure"
                    className="primary-button"
                  >
                    <p>Oban to Mull ferry timetable</p>
                  </LinkText>
                  <LinkText
                    href="https://www.calmac.co.uk/article/7817/Iona-Fionnphort-Iona"
                    className="primary-button"
                  >
                    <p>Mull to Iona ferry timetable</p>
                  </LinkText>
                  <LinkText
                    href="https://www.westcoastmotors.co.uk/services/WCMO/96"
                    className="primary-button"
                  >
                    <p>Mull bus timetable</p>
                  </LinkText>
                </motion.div>
              </DropDownBox>
              <DropDownBox
                boxProps={darkBoxProps}
                title="What time am I expected to be there?"
              >
                <p>
                  Check-in at the Argyll Hotel is from 2pm. Due to the ferry
                  timetables and public transportation across Mull, most people
                  arrive around 3.30pm. On our first day we will meet for
                  dinner, followed by our first evening session.
                </p>
                <p>
                  Departure will be from 10am. Most people catch the 9am bus
                  across Mull.
                </p>
              </DropDownBox>
              <DropDownBox boxProps={darkBoxProps} title="What should I bring?">
                <p>
                  A good pair of walking shoes, waterproofs, and warm clothing.
                  Even in the summer it can be cool in the evenings. If you
                  require snacks, bring them along with you or purchase at the
                  local Spar on the island that’s open from 9 to 5 daily.
                </p>
              </DropDownBox>
              <DropDownBox
                boxProps={darkBoxProps}
                title="What creative materials should I bring?"
              >
                <p>
                  Anything that’s portable. Keep it simple. You won’t have a lot
                  of space to work unless you are working outside. I suggest a
                  journal, computer, writing pens and pencils, drawing
                  materials, watercolours, and sketchbooks. Again, you want to
                  consider space and portability. You might want to bring a
                  portable chair or cushion if you want to work outside.
                </p>
              </DropDownBox>
              <DropDownBox
                boxProps={darkBoxProps}
                title="What if I have specific dietary needs?"
              >
                <p>Consult with Katy from the Argyll Hotel. You can reach the Argyll Hotel over the phone at <i>+44 (0)1681 700334</i> or send them an email at reception@argyllhoteliona.co.uk</p>
                <motion.div className="col-to-row" {...fadeInViewProps}>
                  <LinkText
                    href="mailto:reception@argyllhoteliona.co.uk"
                    className="primary-button"
                  >
                    <p>Email the Argyll Hotel</p>
                  </LinkText>
                  <LinkText
                    href="https://argyllhoteliona.co.uk/"
                    className="primary-button"
                  >
                    <p>Visit their website</p>
                  </LinkText>
                </motion.div>
              </DropDownBox>
              <DropDownBox
                boxProps={darkBoxProps}
                title="Can I contact you to discuss a retreat?"
              >
                <p>
                  Of course, contact me here, and we can arrange for a call.
                </p>
                <motion.div className="col-to-row" {...fadeInViewProps}>
                  <LinkText
                    href="mailto:nwilkinsmentor@gmail.com"
                    className="primary-button"
                  >
                    <p>Email Nicki</p>
                  </LinkText>
                  <MeetingButton class_name="primary-button"fadeInViewProps={fadeInViewProps}/>
                </motion.div>
              </DropDownBox>
            </Box>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Retreats;
