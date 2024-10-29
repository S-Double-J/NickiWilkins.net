import { motion, MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled.p`
  color: var(--Primary-Dark);
  text-decoration: none;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.14px;
  margin: 0;
  padding: 0;
`;
const GlassContainer = styled(motion.div)`
  width: auto;
  display: flex;
  padding: 50px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 100px;
  border-top-right-radius: 30px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: -4px -4px 4px 0px rgba(172, 172, 172, 0.25) inset,
    4px 4px 4px 0px rgba(172, 172, 172, 0.25) inset;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  overflow: visible;
  z-index: 200;
`;
const SectionButton = styled(motion.button)`
  display: flex;
  width: 138px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  box-shadow: inherit;
  overflow: hidden;
  position: relative;
  background-color: var(--Primary-Light);
  border: 1px solid var(--Accent-Dark);
  cursor: pointer;
`;
const ActiveSpan = styled(motion.span)`
  display: flex;
  width: 138px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  box-shadow: inherit;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  background: var(--Accent-Dark);
  border: none;
  cursor: pointer;
`;
const HideButtonDiv = styled.button`
  display: flex;
  width: 30px;
  height: 3dvb;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50px;
  border: none;
  z-index: 100;
  cursor: pointer;
`;
const HideButton = styled(motion.button)`
  display: flex;
  width: 30px;
  height: 30px;
  padding-left: 3px;
  justify-content: left;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid var(--Primary-Dark);
  background: var(--Primary-Light);
  cursor: pointer;
`;
const HideButtonSVG = styled.svg`
  stroke: var(--Primary-Dark);
  transform: rotate(180deg);
`;

type ClickHandler = React.MouseEventHandler<HTMLElement>;

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
function Menu({ active, setActive }: Props) {
  const handleClick: ClickHandler = () => {
    setActive((prevValue) => !prevValue);
  };
  const buttonVariants = {
    active: {
      border: "1px solid var(--Primary-Light)",
    },
    inactive: {
      border: "1px solid var(--Primary-Dark)",
    },
  };
  const spanVariants = {
    active: {
      transform: "translateY(0%)"
    },
    inactive: {
         transform: "translateY(100%)"
    },
  };
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (active === true) {
        if (!menuRef.current?.contains(e.target as Node)) {
          setActive(false);
          console.log(e.target as Node);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [active, setActive]);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <GlassContainer
        initial={false}
        ref={menuRef}
        animate={active ? "open" : "closed"}
        variants={{
          open: {
            right: 0,
            opacity: 1,
          },
          closed: {
            right: "-400px",
            opacity: 0,
          },
        }}
      >
        <Link to="/" style={{textDecoration: "none"}}>
        <SectionButton
          initial="inactive"
          whileHover="active"
          variants={buttonVariants}
          transition={{ duration: 0.5, easing: "easeInOut" }}
        >
          <LinkText>Home</LinkText>
          <ActiveSpan
            variants={spanVariants}
            transition={{ duration: 0.3, easing: "easeInOut" }}
          >
            <LinkText style={{ color: "var(--Primary-Light)" }}>
              Home
            </LinkText>
          </ActiveSpan>
        </SectionButton>
        </Link>
        <Link to="/about" style={{textDecoration: "none"}}>
        <SectionButton
          initial="inactive"
          whileHover="active"
          variants={buttonVariants}
          transition={{ duration: 0.5, easing: "easeInOut" }}
        >
        <LinkText>About</LinkText>
          <ActiveSpan
            variants={spanVariants}
            transition={{ duration: 0.3, easing: "easeInOut" }}
          >
            <LinkText style={{ color: "var(--Primary-Light)" }}>
              About
            </LinkText>
          </ActiveSpan>
        </SectionButton>
        </Link>
        <Link to="/contact" style={{textDecoration: "none"}}>
        <SectionButton
          initial="inactive"
          whileHover="active"
          variants={buttonVariants}
          transition={{ duration: 0.5, easing: "easeInOut" }}
        >
        <LinkText>Contact</LinkText>
          <ActiveSpan
            variants={spanVariants}
            transition={{ duration: 0.3, easing: "easeInOut" }}
          >
            <LinkText style={{ color: "var(--Primary-Light)" }}>
              Contact
            </LinkText>
          </ActiveSpan>
        </SectionButton>
        </Link>
        <Link to="/birthing-wisdom" style={{textDecoration: "none"}}>
        <SectionButton
          initial="inactive"
          whileHover="active"
          variants={buttonVariants}
          transition={{ duration: 0.5, easing: "easeInOut" }}
        >
        <LinkText>Birthing Wisdom</LinkText>
          <ActiveSpan
            variants={spanVariants}
            transition={{ duration: 0.3, easing: "easeInOut" }}
          >
            <LinkText style={{ color: "var(--Primary-Light)" }}>
              Birthing Wisdom
            </LinkText>
          </ActiveSpan>
        </SectionButton>
        </Link>
        <Link to="/transformative-mentoring" style={{textDecoration: "none"}}>
        <SectionButton
          initial="inactive"
          whileHover="active"
          variants={buttonVariants}
          transition={{ duration: 0.5, easing: "easeInOut" }}
        >
        <LinkText>Transformative Mentoring</LinkText>
          <ActiveSpan
            variants={spanVariants}
            transition={{ duration: 0.3, easing: "easeInOut" }}
          >
            <LinkText style={{ color: "var(--Primary-Light)" }}>
              Transformative Mentoring
            </LinkText>
          </ActiveSpan>
        </SectionButton>
        </Link>
         <Link to="/retreats" style={{textDecoration: "none"}}>
        <SectionButton
          initial="inactive"
          whileHover="active"
          variants={buttonVariants}
          transition={{ duration: 0.5, easing: "easeInOut" }}
        >
        <LinkText>Retreats</LinkText>
          <ActiveSpan
            variants={spanVariants}
            transition={{ duration: 0.3, easing: "easeInOut" }}
          >
            <LinkText style={{ color: "var(--Primary-Light)" }}>
              Retreats
            </LinkText>
          </ActiveSpan>
        </SectionButton>
        </Link>
        <HideButtonDiv onClick={handleClick}>
            <HideButton
              animate={active ? "hidden" : "visible"}
              variants={{
                hidden: {
                  rotate: "180deg",
                },
                visible: {
                  rotate: "0deg",
                },
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
                delay: 0.1,
              }}
            >
              <HideButtonSVG
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M3.5 1L16.5 11L3.5 21M1.5 3.5L12 11L1.5 18.5"
                  stroke-width="2"
                />
              </HideButtonSVG>
            </HideButton>
          </HideButtonDiv>
      </GlassContainer>
    </MotionConfig>
  );
}

export default Menu;
