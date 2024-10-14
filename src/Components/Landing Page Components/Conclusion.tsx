import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  gap: 40px;
  width: calc(100% - 100px);
  padding: 50px;
  z-index: inherit;
  margin-bottom: -6px;
`;
const ButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  flex-wrap: wrap;
`;
const LinkText = styled(Link)`
  text-decoration: none;
  z-index: 1;
`;
const TextDiv = styled.div`
  width: 600px;
`;
function Conclusion() {
  const DURATION = 0.7;
  const EASE = "easeInOut";
  const MARGIN = "-100px";
  return (
    <Frame>
      <motion.h1
        className="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: DURATION, ease: EASE }}
        viewport={{ once: true, margin: MARGIN }}
      >
        THANK YOU FOR VISITING MY WEBSITE
      </motion.h1>
      <TextDiv>
        <motion.p
          className="white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          If you’re inspired to reframe your menopausal journey as a rebirth,
          and you’re curious about the ways your soul is asking you to show up
          as a Wise, Wild, and Whole Woman, I invite you to read more about my
          courses, Birthing Wisdom and Transformative Mentoring. You can also
          sign up to my newsletter and read my Substack. 
        </motion.p>
      </TextDiv>
      <ButtonFrame>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <LinkText to={"birthing-wisdom"} className="primary-button-dark">
            <p>Birthing Wisdom</p>
          </LinkText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <LinkText
            to={"transformative-mentoring"}
            className="primary-button-dark"
          >
            <p>Transformative Mentoring</p>
          </LinkText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <LinkText to={"#"} className="primary-button-dark">
            <p>Sign up to my Newsletter</p>
          </LinkText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <LinkText to={"#"} className="primary-button-dark">
            <p>Read my Substack</p>
          </LinkText>
        </motion.div>
      </ButtonFrame>
    </Frame>
  );
}

export default Conclusion;
