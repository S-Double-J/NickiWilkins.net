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
{
  /* <svg
        className="splotch-top-left"
        viewBox="0 0 438 593"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 592.499C0 592.499 110.329 527.201 146.132 447.04C179.211 372.977 106.178 310.679 146.132 239.959C187.568 166.613 269.902 185.411 334.068 130.039C379.678 90.6798 437.376 0 437.376 0H0V592.499Z"
          fill="#590000"
        />
      </svg>
      <svg
        className="splotch-top-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 176 1145"
        fill="none"
      >
        <path
          d="M128.5 269C175.083 173.032 176 0 176 0V1145C176 1145 117.411 1029.42 98.5 949.5C78.4752 864.872 93.385 813.579 81 727.5C63.7397 607.537 -27.9813 540.757 9.49992 425.5C33.2441 352.485 94.9723 338.072 128.5 269Z"
          fill="#590000"
        />
      </svg> */
}

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
            <button className="secondary-button">
              <p>See what I do</p>
            </button>
          </ButtonDiv>
        </motion.div>
      </Title>
    </>
  );
}

export default Heroine;
