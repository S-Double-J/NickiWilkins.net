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
const Title = styled.div`
  display: flex;
  width: 100%;
  height: calc(100svh - 62px);
  padding: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

interface Props {
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
  };
  MakeSplitTextAnim: (props: {children:string}) => JSX.Element;
}
function Heroine({fadeInViewProps, MakeSplitTextAnim}: Props) {
  const DURATION = 0.7;
  const EASE = "easeInOut";
  return (
    <>
      <Title>
        <h1>
          <MakeSplitTextAnim>NICKI WILKINS</MakeSplitTextAnim>
        </h1>
        <motion.h2
          {...fadeInViewProps}
          transition={{ duration: DURATION, ease: EASE, delay: 2.1 }}
        >
          Midlife is not a crisis, it's a rebirth!
        </motion.h2>
        <motion.div
          {...fadeInViewProps}
          transition={{ duration: DURATION, ease: EASE, delay: 2.45 }}
        >
          <ButtonDiv>
            <Link to={"/contact"} className="primary-button">
              <p>Let's work together</p>
            </Link>
            <button className="secondary-button"   onClick={() => {
              const element = document.getElementById("Courses");
              element?.scrollIntoView({
                behavior: "smooth",
                
              });
            }}>
              <p>My courses</p>
            </button>
          </ButtonDiv>
        </motion.div>
      </Title>
    </>
  );
}

export default Heroine;
