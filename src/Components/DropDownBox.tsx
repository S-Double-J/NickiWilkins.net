import styled from "styled-components";
import { motion } from "framer-motion";
import DDButton from "./DropDownButton";
import { useState } from "react";

const DropDownDiv = styled(motion.div)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const BoxInnerRoundedHalf = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  
`;
const RoundedHalfInnerTop = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
interface Props {
  title: string;
  children: React.ReactNode;
boxProps: {
    bg: string;
    border: string;
    class_name: string;
        fadeInViewProps: {
            initial: {
                opacity: number;
            };
            whileInView: {
                opacity: number;
            };
            transition: {
                duration: number;
                ease: string;
            };
            viewport: {
                once: boolean;
                margin: string;
            };
        };
    };
}

function DropDownBox({ boxProps, title, children }: Props) {
  const FADE_IN_VIEW_PROPS = boxProps.fadeInViewProps
  const BORDER = boxProps.border
  const CLASS_NAME = boxProps.class_name
  const BG = boxProps.bg
  const [dropDown, setDropDown] = useState(false)

  return (
    <BoxInnerRoundedHalf {...FADE_IN_VIEW_PROPS} style={{border: BORDER}}>
      <RoundedHalfInnerTop>
        <h4 className={CLASS_NAME}>{title}</h4>
        <DDButton
          dropDown={dropDown}
          setDropDown={setDropDown}
          bg={BG}
        />
      </RoundedHalfInnerTop>
      <DropDownDiv
        initial={false}
        animate={dropDown ? "open" : "closed"}
        transition={{
          ease: "easeInOut",
          opacity: { duration: 0.5, delay: dropDown ? 0.45 : 0 },
          height: { duration: 0.7, delay: dropDown ? 0 : 0.2 },
          marginTop: { duration: 0.7, delay: dropDown ? 0 : 0.2 },
        }}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            marginTop: 20,
          },
          closed: {
            height: "0px",
            opacity: 0,
            marginTop: 0,
          },
        }}
      >
        {children}
      </DropDownDiv>
    </BoxInnerRoundedHalf>
  );
}

export default DropDownBox;
