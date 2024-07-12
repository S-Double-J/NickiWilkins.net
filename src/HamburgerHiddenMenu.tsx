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
          right: "-100%",
          bottom: "0",
          opacity: 0,
        }}
        variants={{
          open: {
            right: "0",
            opacity: 1,
          },
          closed: {
            right: "-100%",
            opacity: 0,
          },
        }}
      >
        <div className="hamburger-x">
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
          />
          </motion.button>
          </div>
      </motion.div>
    </MotionConfig>
  );
}

export default Menu;
