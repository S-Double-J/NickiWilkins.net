import styled from "styled-components";
import { motion } from "framer-motion";

const Section2 = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 0pc 200px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(180deg, rgba(255, 244, 223, 0.00) 13.5%, rgba(255, 244, 223, 0.01) 31.5%);
  backdrop-filter: blur(10px);
`;

const TextContainer = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
`;

const SplotchBottom = styled.svg`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: -1;
`;

function WiseWildWhole() {
  return (
    <Section2 id="Second">
        <TextContainer>
      <motion.div
        className="wise-title-motion-container"
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        viewport={{ margin: "-50px", once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>
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
        <p className="bold">
          The most important relationship is the one you foster with your truest
          self!
        </p>
        <p>
          <br />
          I mentor women in midlife who are travelling the creative journey to
          self, re-discovering heart-based wisdom, gifts, and purpose.
          <br />
          <br />
          As a Transformational Mentor, Teacher, and Purpose Guide, I offer
          one-to-one mentoring, courses, meditations, retreats, and ceremonies.
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
        <button className="primary-button">
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
        </button>
      </motion.div>
      </TextContainer>
      <SplotchBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 206">
        <path
          d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
          fill="#8C1C1C"
        />
      </SplotchBottom>
    </Section2>
  );
}

export default WiseWildWhole;
