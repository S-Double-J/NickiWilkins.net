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
  /* width: calc(100% - 100px); */
  width: 100%;
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
  width: 100%;
  max-width: 600px;
`;
interface Props {
  fadeInViewProps: object;
}
function Conclusion({fadeInViewProps}: Props) {
  return (
    <Frame>
      <motion.h1 className="white" {...fadeInViewProps}>
        THANK YOU FOR VISITING MY WEBSITE
      </motion.h1>
      <TextDiv>
        <motion.p className="white" {...fadeInViewProps}>
          If you’re inspired to reframe your menopausal journey as a rebirth,
          and you’re curious about the ways your soul is asking you to show up
          as a wise, wild, and whole woman, I invite you to read more about my
          courses, Birthing Wisdom and Transformative Mentoring. You can also
          sign up to my newsletter and read my Substack. 
        </motion.p>
      </TextDiv>
      <ButtonFrame>
        <motion.div {...fadeInViewProps}>
          <LinkText to={"birthing-wisdom"} className="primary-button-dark">
            <p>Birthing Wisdom</p>
          </LinkText>
        </motion.div>
        <motion.div {...fadeInViewProps}>
          <LinkText
            to={"transformative-mentoring"}
            className="primary-button-dark"
          >
            <p>Transformative Mentoring</p>
          </LinkText>
        </motion.div>
        <motion.div {...fadeInViewProps}>
          <LinkText to={"#"} className="primary-button-dark">
            <p>Sign up to my Newsletter</p>
          </LinkText>
        </motion.div>
        <motion.div {...fadeInViewProps}>
          <LinkText to={"#"} className="primary-button-dark">
            <p>Read my Substack</p>
          </LinkText>
        </motion.div>
      </ButtonFrame>
    </Frame>
  );
}

export default Conclusion;
