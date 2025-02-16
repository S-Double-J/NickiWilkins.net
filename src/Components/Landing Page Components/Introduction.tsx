import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LinkText = styled(Link)`
  text-decoration: none;
  z-index: 1;
`;
const InfoSection = styled.div`
  display: flex;
  width: 100%;
  padding: 100px 0px 0px 0px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
const OuterFrame = styled.div`
  display: flex;
  width: 95%;
  max-width: 600px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;
const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;
const CardFrame = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 90%;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid var(--Primary-Dark);
  box-sizing: border-box;
  text-align: center;
`;

const SplotchBottom = styled.svg`
  width: 100%;
  z-index: 0;
  margin-bottom: -2px;
`;
interface IntroProps {
  fadeInViewProps: object;
}
function Intro({ fadeInViewProps }: IntroProps) {
  return (
    <InfoSection id="Second">
      <OuterFrame>
        <motion.h3 style={{ width: "100%" }} {...fadeInViewProps}>
          Hi, I'm Nicki
        </motion.h3>
        <motion.p {...fadeInViewProps}>
          I’m a Transformative Mentor and certified Purpose Guide, a mother, a
          poet, and artist. I offer wisdom and guidance to women as they
          navigate the soulful side of menopause and elderhood. I’m a midwife
          for your midlife rebirth.
        </motion.p>
        <InnerFrame>
          <motion.h4 style={{ width: "100%" }} {...fadeInViewProps}>
            My Journey
          </motion.h4>
          <motion.p {...fadeInViewProps}>
            10 years ago I began the journey I call the{" "}
            <i className="libre">Midlife Rebirth</i>. It was a profound
            transformation, helping me recover lost parts of myself: my
            intuition, creativity, power, and purpose.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            Once I reached the end of my journey, I found an unexpected clarity.
            Having already spent 30+ years holding sacred space for women to
            rediscover their own innate wholeness, I knew I needed to offer my
            wisdom to a new generation of women.
          </motion.p>
          <motion.div {...fadeInViewProps}>
            <LinkText to={"about"} className="primary-button">
              <p>About Nicki</p>
            </LinkText>
          </motion.div>
        </InnerFrame>
      </OuterFrame>
      <OuterFrame>
        <motion.h3 {...fadeInViewProps}>
          What is the <i>Midlife Rebirth</i>?
        </motion.h3>
        <InnerFrame>
          <motion.p {...fadeInViewProps}>
            The Midlife Rebirth is an antidote to the suppression of voice that
            so many women feel once they begin menopause. This stage in life was
            once a moment for celebration. A marker for the initiation of a new
            elder. A valued, empowered contributor to her community. The Earth
            is in a time of global crisis and we need Her voice again. The
            Midlife Rebirth aims to give that validation and empowerment to a
            new generation of wise, wild, whole women.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            Menopause, by its nature, is a cellular change in a woman's body.
            But it’s so much more than this. It’s a transformation of a woman's
            soul. Through my practice, the Midlife Rebirth, I offer guidance
            through this transition of soul, an opportunity for rebirth.
          </motion.p>
          <motion.p {...fadeInViewProps}>
            During your Midlife Rebirth we will use myth, nature, and art to
            uncover your unique purpose. Then, by pairing your purpose discovery
            with the psychology, biology, and spirituality of menopause and
            elderhood, I will guide you to find a more wise, wild and whole way
            of being.
          </motion.p>
        </InnerFrame>
      </OuterFrame>
      <OuterFrame id="Courses">
        <motion.h3 {...fadeInViewProps}>Your Journey</motion.h3>
        <InnerFrame>
          <motion.p {...fadeInViewProps}>
            Each woman’s journey is unique. Her journey begins and ends in her
            own time based on her strengths, needs, and her life story. To
            address this, I offer a variety of ways to guide you on your Midlife
            Rebirth.
          </motion.p>
        </InnerFrame>
      </OuterFrame>
      <CardFrame>
        <motion.div {...fadeInViewProps}>
          <Card>
            <motion.p {...fadeInViewProps} className="libre italic center">
              Transformative Mentoring
            </motion.p>
            <motion.p {...fadeInViewProps}>
              I offer one-to-one bespoke mentoring sessions for women travelling
              the midlife journey, seeking wisdom, purpose, and wholeness.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <LinkText
                to={"/transformative-mentoring"}
                className="primary-button"
              >
                <p>Transformative Mentoring</p>
              </LinkText>
            </motion.div>
          </Card>
        </motion.div>
        <motion.div {...fadeInViewProps}>
          <Card>
            <motion.p {...fadeInViewProps} className="libre italic center">
              Birthing Wisdom
            </motion.p>
            <motion.p {...fadeInViewProps}>
              An 8-week online soul-initiation journey for menopausal women who
              are wanting to be part of a community as they transition into
              wisdomhood. Birthing Wisdom includes group sessions and private
              sessions with me.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <LinkText to={"/birthing-wisdom"} className="primary-button">
                <p>Birthing Wisdom</p>
              </LinkText>
            </motion.div>
          </Card>
        </motion.div>
        <motion.div {...fadeInViewProps}>
          <Card>
            <motion.p {...fadeInViewProps} className="libre italic center">
              Retreats
            </motion.p>
            <motion.p {...fadeInViewProps}>
              For women looking for a shorter intensive, I run creative retreats
              on the Isle of Iona, Scotland.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <LinkText to={"/retreats"} className="primary-button">
                <p>Retreats</p>
              </LinkText>
            </motion.div>
          </Card>
        </motion.div>
      </CardFrame>
      <SplotchBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 206">
        <path
          d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
          fill="#8C1C1C"
        />
      </SplotchBottom>
    </InfoSection>
  );
}

export default Intro;
