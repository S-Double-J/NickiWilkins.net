import { motion, MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";

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

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [active, setActive]);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <motion.div
        ref={menuRef}
        className="menu-background"
        animate={active ? "open" : "closed"}
        style={{
          width: "0px",
          opacity: 0,
        }}
        variants={{
          open: {
            width: "400px",
            opacity: 1,
          },
          closed: {
            width: "0px",
            opacity: 0,
          },
        }}
      >
        <motion.div className="hamburger-x"
        animate={active ? "open" : "closed"}
        variants={{
          open: {
            width: "60px",
            opacity: 1,
          },
          closed: {
            width: "0px",
            opacity: 0,
          }}}
        >
        <motion.button
          initial={false}
          onClick={handleClick}
          className="hamburger"
          animate={active ? "open" : "closed"}
        >
          <motion.span
            className="hamburger-x-span"
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              rotate: "45deg"
            }}
            variants={{
              open: {
                width: "40px",
                opacity: 1,
              },
              closed: {
                width: "0px",
                opacity: 0,
              }}}
          />
          <motion.span
            className="hamburger-x-span"
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              rotate: "-45deg"
            }}
            variants={{
              open: {
                width: "40px",
                opacity: 1,
              },
              closed: {
                width: "0px",
                opacity: 0,
              }}}
          />
          </motion.button>
          </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default Menu;
