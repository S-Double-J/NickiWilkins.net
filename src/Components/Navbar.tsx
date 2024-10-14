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
  margin: 10px;
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
  let scrollValues = [0.29, 0.35, 0.8, 0.82];
  let barColourValues = [
    "rgba(255, 244, 223, 0)",
    "#8C1C1C",
    "#8C1C1C",
    "rgba(255, 244, 223, 0)",
  ];
  let accentColourValues = ["#8C1C1C", "#FFF4DF", "#FFF4DF", "#FFF4DF"];
  if (location.pathname !== "/") {
    scrollValues = [0, 0, 0, 0];
    barColourValues = [
      "rgba(255, 244, 223, 0)",
      "rgba(255, 244, 223, 0)",
      "rgba(255, 244, 223, 0)",
      "rgba(255, 244, 223, 0)",
    ];
    accentColourValues = ["#8C1C1C", "#8C1C1C", "#8C1C1C", "#8C1C1C"];
  }
  const barBgColour = useTransform(
    scrollYProgress,
    scrollValues,
    barColourValues
  );
  const accentColour = useTransform(
    scrollYProgress,
    scrollValues,
    accentColourValues
  );

  return (
    <>
      <motion.div
        className="navbar"
        style={{ background: barBgColour }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 2.45 }}
        viewport={{ once: true }}
      >
        <motion.div style={{ color: accentColour }}>
          <LinkText to={"/"}>NICKI WILKINS</LinkText>
        </motion.div>
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            initial={false}
            onClick={handleClick}
            className="hamburger"
            animate={active ? "open" : "closed"}
          >
            <motion.span
              className="hamburger-span"
              style={{
                left: "50%",
                top: "35%",
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
                bottom: "35%",
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
