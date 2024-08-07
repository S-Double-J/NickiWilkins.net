import { motion, MotionConfig, useTransform, useScroll } from "framer-motion";
import Menu from "./HamburgerHiddenMenu";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: Cinzel;
  font-size: 20px;
  font-weight: 700;
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
  let scrollValues = [0.29, 0.31, 0.8, 0.82];
  let barColourValues = [
    "rgba(255, 244, 223, 0.5)",
    "#8C1C1C",
    "#8C1C1C",
    "rgba(255, 244, 223, 0.5)",
  ];
  let accentColourValues = ["#8C1C1C", "#FFF4DF", "#FFF4DF", "#8C1C1C"];
  if (location.pathname !== "/") {
    scrollValues = [0, 0, 0, 0];
    barColourValues = [
      "rgba(255, 244, 223, 0.5)",
      "rgba(255, 244, 223, 0.5)",
      "rgba(255, 244, 223, 0.5)",
      "rgba(255, 244, 223, 0.5)",
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
      <motion.div className="navbar" style={{ background: barBgColour }}>
        <motion.div style={{ color: accentColour }}>
          <LinkText to={"/"}>nicki wilkins</LinkText>
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
