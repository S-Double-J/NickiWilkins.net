import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  background-color: #8c1c1c;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 1000;
`;
const Hamburger = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  cursor: pointer;
`;
function Navbar() {
  return (
    <Container className="navbar">
      <p>nicki wilkins</p>
      <Hamburger className="hamburger">
        <motion.span
          className="hamburger-span"
          style={{
            top: "35%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          className="hamburger-span"
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          className="hamburger-span"
          style={{
            bottom: "35%",
            left: "50%",
            x: "-50%",
            y: "50%",
          }}
        />
      </Hamburger>
    </Container>
  );
}

export default Navbar;
