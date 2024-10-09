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
  width: 600px;
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
  align-items: flex-start;
  gap: 20px;
  max-width: 100svh;
  width: 1200px;
`;
const Card = styled.div`
  display: flex;
  width: 350px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid var(--Primary-Dark);
`;

const SplotchBottom = styled.svg`
  width: 100%;
  z-index: 0;
  margin-bottom: -2px;
`;

function WiseWildWhole() {
  return (
    <InfoSection id="Second">
      <OuterFrame>
        <h3>Hi, I'm Nicki</h3>
        <p>
           I’m a Transformative Mentor and certified Purpose Guide, a mother, a
          poet and most importantly, an elder. I offer wisdom and guidance to
          women as they move through menopause and transition into a new stage
          of life.
        </p>
        <InnerFrame>
          <p className="libre fs-24">My Journey</p>
          <p>
            10 years ago I began the journey I call the{" "}
            <i className="libre">Midlife Rebirth</i>. It was a profound
            transformation, helping me recover lost parts of myself: my
            intuition, creativity, power, and purpose.
          </p>
          <p>
            Once I reached the end of my journey, I found an unexpected clarity.
            Having already spent 30+ years holding sacred space for women to
            rediscover their own innate wholeness, I knew I needed to offer my
            wisdom to a new generation of women.
          </p>
          <motion.div
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ margin: "-50px", once: true }}
            transition={{ duration: 0.5 }}
          >
            <LinkText to={"about"} className="primary-button">
              <p>About Nicki</p>
            </LinkText>
          </motion.div>
        </InnerFrame>
      </OuterFrame>
      <OuterFrame>
        <h3>
          What is the <i>Midlife Rebirth</i>?
        </h3>
        <InnerFrame>
          <p>
            The Midlife Rebirth is an antidote to the suppression of voice that
            so many women feel once they begin menopause. This stage in life was
            once a moment for celebration. A marker for the initiation of a new
            elder. A valued, empowered contributor to her community. The Earth
            is in a time of global crisis and we need Her voice again. The
            Midlife Rebirth aims to give that validation and empowerment to a
            new generation of Wise, Wild, Whole Women.
          </p>
          <p>
            Menopause, by its nature, is a cellular change in a woman's body.
            But it’s so much more than this. It’s a transformation of a woman's
            soul. Through my practice, the Midlife Rebirth, I offer guidance
            through this transition of soul, an opportunity for rebirth.
          </p>
          <p>
            During your Midlife Rebirth we will use myth, nature, and art to
            uncover your unique purpose. Then, by pairing your purpose discovery
            with the psychology, biology, and spirituality of menopause and
            elderhood, I will guide you to find a more Wise, Wild and Whole way
            of being. 
          </p>
        </InnerFrame>
      </OuterFrame>
      <OuterFrame>
        <h3>Your Journey</h3>
        <InnerFrame>
          <p>
            Each woman’s journey is unique. Her journey begins and ends in her
            own time based on her strengths, needs, and her life story. To
            address this, I offer a variety of ways to guide you on your{" "}
            <i className="libre">Midlife Rebirth</i>.
          </p>
          <CardFrame>
            <Card>
              <p className="libre italic center">Transformative Mentoring</p>
              <p>
                I offer one-to-one bespoke mentoring sessions for women who want
                a more intimate, personal approach.
              </p>
              <motion.div
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.5 }}
              >
                <LinkText to={"about"} className="primary-button">
                  <p>Transformative Mentoring</p>
                </LinkText>
              </motion.div>
            </Card>
            <Card>
              <p className="libre italic center">Birthing Wisdom</p>
              <p>
                For women who are wanting to be part of a community as they move
                through this time of transition, I offer Birthing Wisdom, a
                6-month online program that includes group sessions as well as
                private mentoring sessions with me.
              </p>
              <motion.div
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.5 }}
              >
                <LinkText to={"/birthing-wisdom"} className="primary-button">
                  <p>Birthing Wisdom</p>
                </LinkText>
              </motion.div>
            </Card>
            <Card>
              <p className="libre italic center">Retreats</p>
              <p>
                For women looking for a shorter intensive, I run regular
                week-long Retreats.
              </p>
              <motion.div
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.5 }}
              >
                <LinkText to={"about"} className="primary-button">
                  <p>Retreats</p>
                </LinkText>
              </motion.div>
            </Card>
          </CardFrame>
        </InnerFrame>
      </OuterFrame>
      <SplotchBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 206">
        <path
          d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
          fill="#8C1C1C"
        />
      </SplotchBottom>
    </InfoSection>
  );
}

export default WiseWildWhole;

{
  /* <TextContainer>
        <motion.div
          className="wise-title-motion-container"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text">
            WISE
            <br />
            WILD
            <br />
            WHOLE
          </h2>
        </motion.div>
        <motion.div
          className="wise-text-motion-container"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            <b>
              The most important relationship is the one you foster with your
              truest self!
            </b>
            <br />
            <br />
            I mentor women in midlife who are travelling the creative journey to
            self, re-discovering heart-based wisdom, gifts, and purpose.
            <br />
            <br />
            As a Transformational Mentor, Teacher, and Purpose Guide, I offer
            one-to-one mentoring, courses, meditations, retreats, and
            ceremonies.
            <br />
            <br />
            I’m so glad you’re here.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <LinkText to={"about"} className="primary-button">
            <p>Meet Nicki</p>
            <svg
              className="button-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="15"
              viewBox="0 0 37 15"
              fill="none"
            >
              <path
                className="arrow"
                d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                fill="#590000"
              />
            </svg>
          </LinkText>
        </motion.div>
      </TextContainer> */
}
