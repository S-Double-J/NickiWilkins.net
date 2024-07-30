import { motion, MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled(Link)`
text-decoration: none;
color: var(--Accent-Light);
font-family: "M Plus Rounded 1c";
font-weight: 500;
font-size: 16px;
margin: 10px;
transition: all 0.2s ease;
&:hover {
 transform: translateX(-3px)
}`;

type ClickHandler = React.MouseEventHandler<HTMLElement>;

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
function Menu({ active, setActive }: Props) {
  const handleClick: ClickHandler = () => {
    setActive((prevValue) => !prevValue);
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
      <motion.div
        initial={false}
        ref={menuRef}
        className="menu-background"
        animate={active ? "open" : "closed"}
        style={{
          width: "0px",
          opacity: 0,
        }}
        variants={{
          open: {
            width: "150px",
            opacity: 1,
          },
          closed: {
            width: "0px",
            opacity: 0,
          },
        }}
      >
        <LinkText to="/about">About</LinkText>
        <motion.div
          initial={false}
          className="hamburger-x-div"
          animate={active ? "open" : "closed"}
          variants={{
            open: {
              width: "60px",
              opacity: 1,
            },
            closed: {
              width: "0px",
              opacity: 0,
            },
          }}
        >
          <motion.button
            initial={false}
            onClick={handleClick}
            className="hamburger-x-button"
            animate={active ? "open" : "closed"}
            variants={{
              open: {
                width: "60px",
                opacity: 1,
              },
              closed: {
                width: "0px",
                opacity: 0,
              },
            }}
          >
            <motion.span
              className="hamburger-x-span"
              animate={active ? "open" : "closed"}
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                rotate: "45deg",
              }}
              variants={{
                open: {
                  width: "40px",
                  height: "3px",
                  opacity: 1,
                },
                closed: {
                  height: "0px",
                  width: "0px",
                  opacity: 0,
                },
              }}
            />
            <motion.span
              className="hamburger-x-span"
              animate={active ? "open" : "closed"}
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                rotate: "-45deg",
              }}
              variants={{
                open: {
                  width: "40px",
                  height: "3px",
                  opacity: 1,
                },
                closed: {
                  height: "0px",
                  width: "0px",
                  opacity: 0,
                },
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default Menu;
