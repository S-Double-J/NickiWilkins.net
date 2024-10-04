import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  align-self: stretch;
  margin: 0;
  @media screen and (max-width: 605px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
function Heroine() {
  return (
    <>
      <motion.div
        className="hero-motion-container"
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        viewport={{ margin: "-50px", once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>NICKI WILKINS</h1>
        <h2>Midlife is not a crisis, it's a rebirth!</h2>
        <ButtonDiv>
          <Link to={"/contact"} className="primary-button">
            <p>Let's work together</p>
          </Link>
          <button className="secondary-button">
            <p>See what I do</p>
          </button>
        </ButtonDiv>
      </motion.div>
    </>
  );
}

export default Heroine;
