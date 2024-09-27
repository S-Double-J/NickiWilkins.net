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
  width: 100%;
  padding: 50px;
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
  return (
    <Frame>
      <h1 className="white">THANK YOU FOR VISITING MY WEBSITE</h1>
      <TextDiv>
        <p className="white">
          If you’re inspired to reframe your menopausal journey as a rebirth,
          and you’re curious about the ways your soul is asking you to show up
          as a Wise, Wild, and Whole Woman, I invite you to read more about my
          courses, sign up to my newsletter and read my Substack. 
        </p>
      </TextDiv>
      <ButtonFrame>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <LinkText to={"about"} className="primary-button-dark">
            <p>My Courses</p>
          </LinkText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <LinkText to={"about"} className="primary-button-dark">
            <p>Sign up to my Newsletter</p>
          </LinkText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <LinkText to={"about"} className="primary-button-dark">
            <p>Read my Substack</p>
          </LinkText>
        </motion.div>
      </ButtonFrame>
    </Frame>
  );
}

export default Conclusion;
