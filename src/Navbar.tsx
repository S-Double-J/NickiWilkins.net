import styled from "styled-components";
import { motion, MotionConfig } from "framer-motion";
import Menu from "./HamburgerHiddenMenu";

const Container = styled.div`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 200;
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

  return (
    <Container className="navbar">
      <p>nicki wilkins</p>
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
            }}
          />
          <motion.span
            className="hamburger-span"
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
          />
          <motion.span
            className="hamburger-span"
            style={{
              left: "50%",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
          />
        </motion.button>
      </MotionConfig>
      <Menu active={active} setActive={setActive} />
    </Container>
  );
}

export default Navbar;
