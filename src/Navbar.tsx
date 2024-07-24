import styled from "styled-components";
import { motion, MotionConfig, useTransform, useScroll } from "framer-motion";
import Menu from "./HamburgerHiddenMenu";

type ClickHandler = React.MouseEventHandler<HTMLElement>;
interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ active, setActive }: Props) {
  const handleClick: ClickHandler = () => {
    setActive((prevValue) => !prevValue);
  };
  const { scrollYProgress } = useScroll({});
  const scrollValues = [0.29, 0.31, 0.8, 0.82];
  const barColourValues = [
    "rgba(255, 244, 223, 0.5)",
    "#8C1C1C",
    "#8C1C1C",
    "rgba(255, 244, 223, 0.5)",
  ];
  const accentColourValues = [
    "#8C1C1C",
    "#FFF4DF",
    "#FFF4DF",
    "#8C1C1C",
  ];
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
    <motion.div className="navbar" style={{ background: barBgColour }}>
      <motion.p style={{ color: accentColour }}>
        nicki wilkins
      </motion.p>
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
      <Menu active={active} setActive={setActive} />
    </motion.div>
  );
}

export default Navbar;
