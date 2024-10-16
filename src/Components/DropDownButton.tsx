import styled from "styled-components";
import { motion, MotionConfig } from "framer-motion";

const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
type ClickHandler = React.MouseEventHandler<HTMLElement>;

interface DDProps {
  bg: string;
  dropDown: boolean;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}
function DDButton({ bg, dropDown, setDropDown }: DDProps) {
  const handleClick: ClickHandler = () => {
    setDropDown((prevValue) => !prevValue);
  };
  return (
    <Container onClick={handleClick}>
      <MotionConfig
        transition={{
          duration: 0.8,
          bounce: 0.35,
          type: "spring",
          delay: dropDown ? 0 : 0.2,
        }}
      >
        <motion.span
          initial={false}
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
          animate={dropDown ? "open" : "closed"}
          variants={{
            open: {
              rotate: "0deg",
            },
            closed: {
              rotate: "90deg",
            },
          }}
        />
        <motion.span
          initial={false}
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
          animate={dropDown ? "open" : "closed"}
          variants={{
            open: {
              rotate: "0deg",
            },
            closed: {
              rotate: "180deg",
            },
          }}
        />
      </MotionConfig>
    </Container>
  );
}

export default DDButton;
