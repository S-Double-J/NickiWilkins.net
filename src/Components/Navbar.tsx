import { motion, MotionConfig, useTransform, useScroll } from "framer-motion";
import Menu from "./HamburgerHiddenMenu";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: CSBelvina;
  font-size: 40px;
  font-weight: 500;
  margin-left: 10px;
  text-align: center;
`;
const AlignmentDiv = styled.div`
  margin-bottom: -8px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ClickHandler = React.MouseEventHandler<HTMLElement>;
interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ active, setActive }: Props) {
  const handleClick: ClickHandler = () => {
    setActive((prevValue) => !prevValue);
  };
  const location = useLocation();
  const { scrollYProgress } = useScroll({});
  let scrollValues = [0.325, 0.33, 0.878, 0.88];
  let accentColourValues = ["#8C1C1C", "#FFF4DF", "#FFF4DF", "#8C1C1C"];
  let textColourValues = ["#8C1C1C", "#FFF4DF", "#FFF4DF", "#FFF4DF"];
  let bgColorValues = ["#FFF4DF", "#8C1C1C", "#8C1C1C", "#FFF4DF"];
  if (location.pathname !== "/") {
    scrollValues = [0, 0, 0, 0];
    accentColourValues = ["#8C1C1C", "#8C1C1C", "#8C1C1C", "#8C1C1C"];
   textColourValues = ["#8C1C1C", "#8C1C1C", "#8C1C1C", "#8C1C1C"];
    bgColorValues = ["#FFF4DF", "#FFF4DF", "#FFF4DF", "#FFF4DF"];
  }
  const accentColour = useTransform(
    scrollYProgress,
    scrollValues,
    accentColourValues
  );
  const textColour = useTransform(
    scrollYProgress,
    scrollValues,
    textColourValues
  );
  const bgColor = useTransform(scrollYProgress, scrollValues, bgColorValues);

  let DELAY = 2.45;
  if (location.pathname === "/transformative-mentoring") {
    DELAY = 3.4;
  }

  return (
    <>
      <motion.div
        className="navbar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: DELAY }}
        viewport={{ once: true }}
      >
        <motion.div style={{ color: textColour }}>
          <AlignmentDiv>
            <LinkText to={"/"}>NICKI WILKINS</LinkText>
          </AlignmentDiv>
        </motion.div>
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            initial={false}
            onClick={handleClick}
            className="hamburger"
            animate={active ? "open" : "closed"}
            style={{
              backgroundColor: bgColor,
              borderColor: accentColour
            }}
          >
            <motion.span
              className="hamburger-span"
              style={{
                left: "50%",
                top: "30%",
                x: "-50%",
                y: "-50%",
                backgroundColor: accentColour,
              }}
            />
            <motion.span
              className="hamburger-span"
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                backgroundColor: accentColour,
              }}
            />
            <motion.span
              className="hamburger-span"
              style={{
                left: "50%",
                bottom: "30%",
                x: "-50%",
                y: "50%",
                backgroundColor: accentColour,
              }}
            />
          </motion.button>
        </MotionConfig>
      </motion.div>
      <Menu active={active} setActive={setActive} />
    </>
  );
}

export default Navbar;
