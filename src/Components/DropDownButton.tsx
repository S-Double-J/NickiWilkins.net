import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

interface DDProps {
    bg: string
}
function DDButton({bg}: DDProps) {
  return (
    <Container>
      <motion.span
        style={{
          backgroundColor: bg,
          width: 30,
          height: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.span
        style={{
          backgroundColor: bg,
          width: 30,
          height: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          rotate: "90deg"
        }}
      />
    </Container>
  );
}

export default DDButton;
