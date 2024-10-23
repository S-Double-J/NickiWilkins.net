import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import DropDownBox from "../DropDownBox";

const Section3 = styled(motion.div)`
  width: 100%;
  height: 100svh;
  background-color: var(--Primary-Dark);
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
  padding-top: 62px;
`;

const StickyScrollDiv = styled.div`
  height: 500vh;
  width: 100%;
  z-index: 0;
`;

const Spiral = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(40deg);
  z-index: 0;
  @media (max-width: 1050px) {
    width: 437px;
    height: 437px;
  }
`;
const SpiralTextAxis = styled.div`
  position: absolute;
  height: 760px;
  width: 760px;
  border-radius: 100%;
  @media (max-width: 1050px) {
    width: 437px;
    height: 437px;
  }
`;
const TextFrame = styled.div`
  display: flex;
  max-width: 700px;
  width: 95%;
  padding: 50px;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
  height: auto;
  @media screen and (max-width: 600px) {
    padding: 10px;
    gap: 10px;
  }
`;
const BlurDiv = styled(motion.div)`
  display: flex;
  align-items: start;
  justify-content: flex-end;
  background: rgba(140, 28, 28, 0.01);
  backdrop-filter: blur(10px);
  z-index: 999;
  box-shadow: -4px -4px 4px 0px rgba(172, 172, 172, 0.25) inset,
  4px 4px 4px 0px rgba(172, 172, 172, 0.25) inset;
  border-radius: 31px;
  margin-top: 20px;
  margin-right: 5px;
  height: fit-content;
`

interface Props{
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
}
}
function TheCycle({fadeInViewProps}:Props) {
  const { scrollYProgress } = useScroll({});
  let scrollValues = [0.29, 0.82];
  let fontSizeValues = ["15px", "36px", "36px", "15px"];
  if (window.innerHeight <= 550) {
    fontSizeValues = ["8px", "20px", "20px", "8px"];
  }
  let rotate = useTransform(scrollYProgress, scrollValues, [
    "20deg",
    "-340deg",
  ]);
  let rotate1 = useTransform(scrollYProgress, scrollValues, [
    "-110deg",
    "250deg",
  ]);
  let fontSize1 = useTransform(
    scrollYProgress,
    [0.29, 0.32, 0.79, 0.82],
    ["36px", "15px", "15px", "36px"]
  );
  let rotate2 = useTransform(scrollYProgress, scrollValues, [
    "-155deg",
    "205deg",
  ]);
  let fontSize2 = useTransform(
    scrollYProgress,
    [0.31, 0.33, 0.355, 0.37],
    fontSizeValues
  );
  let rotate3 = useTransform(scrollYProgress, scrollValues, [
    "-200deg",
    "160deg",
  ]);
  let fontSize3 = useTransform(
    scrollYProgress,
    [0.38, 0.4, 0.425, 0.445],
    fontSizeValues
  );
  let rotate4 = useTransform(scrollYProgress, scrollValues, [
    "-245deg",
    "115deg",
  ]);
  let fontSize4 = useTransform(
    scrollYProgress,
    [0.44, 0.47, 0.495, 0.51],
    fontSizeValues
  );
  let rotate5 = useTransform(scrollYProgress, scrollValues, [
    "-290deg",
    "70deg",
  ]);
  let fontSize5 = useTransform(
    scrollYProgress,
    [0.5, 0.53, 0.56, 0.58],
    fontSizeValues
  );
  let rotate6 = useTransform(scrollYProgress, scrollValues, [
    "-335deg",
    "25deg",
  ]);
  let fontSize6 = useTransform(
    scrollYProgress,
    [0.58, 0.6, 0.625, 0.645],
    fontSizeValues
  );
  let rotate7 = useTransform(scrollYProgress, scrollValues, [
    "-20deg",
    "340deg",
  ]);
  let fontSize7 = useTransform(
    scrollYProgress,
    [0.645, 0.665, 0.69, 0.715],
    fontSizeValues
  );
  let rotate8 = useTransform(scrollYProgress, scrollValues, [
    "-65deg",
    "295deg",
  ]);
  let fontSize8 = useTransform(
    scrollYProgress,
    [0.715, 0.735, 0.755, 0.78],
    fontSizeValues
  );

  if (window.innerWidth <= 650) {
    scrollValues = [0.29, 0.82];
    fontSizeValues = ["8px", "24px", "24px", "8px"];
    rotate = useTransform(scrollYProgress, scrollValues, ["-30deg", "-390deg"]);
    rotate1 = useTransform(scrollYProgress, scrollValues, ["-60deg", "300deg"]);
    fontSize1 = useTransform(
      scrollYProgress,
      [0.29, 0.32, 0.79, 0.82],
      ["24px", "8px", "8px", "24px"]
    );
    rotate2 = useTransform(scrollYProgress, scrollValues, [
      "-105deg",
      "255deg",
    ]);
    fontSize2 = useTransform(
      scrollYProgress,
      [0.31, 0.33, 0.355, 0.37],
      fontSizeValues
    );
    rotate3 = useTransform(scrollYProgress, scrollValues, [
      "-150deg",
      "210deg",
    ]);
    fontSize3 = useTransform(
      scrollYProgress,
      [0.38, 0.4, 0.425, 0.445],
      fontSizeValues
    );
    rotate4 = useTransform(scrollYProgress, scrollValues, [
      "-195deg",
      "165deg",
    ]);
    fontSize4 = useTransform(
      scrollYProgress,
      [0.44, 0.47, 0.495, 0.51],
      fontSizeValues
    );
    rotate5 = useTransform(scrollYProgress, scrollValues, [
      "-240deg",
      "120deg",
    ]);
    fontSize5 = useTransform(
      scrollYProgress,
      [0.5, 0.53, 0.56, 0.58],
      fontSizeValues
    );
    rotate6 = useTransform(scrollYProgress, scrollValues, ["-285deg", "75deg"]);
    fontSize6 = useTransform(
      scrollYProgress,
      [0.58, 0.6, 0.625, 0.645],
      fontSizeValues
    );
    rotate7 = useTransform(scrollYProgress, scrollValues, ["30deg", "390deg"]);
    fontSize7 = useTransform(
      scrollYProgress,
      [0.645, 0.665, 0.69, 0.715],
      fontSizeValues
    );
    rotate8 = useTransform(scrollYProgress, scrollValues, ["-15deg", "345deg"]);
    fontSize8 = useTransform(
      scrollYProgress,
      [0.715, 0.735, 0.755, 0.78],
      fontSizeValues
    );
  }

  if (window.innerWidth <= 550) {
    scrollValues = [0.29, 0.82];
    fontSizeValues = ["8px", "22px", "22px", "8px"];
    rotate = useTransform(scrollYProgress, scrollValues, ["-55deg", "-415deg"]);
    rotate1 = useTransform(scrollYProgress, scrollValues, ["-35deg", "325deg"]);
    fontSize1 = useTransform(
      scrollYProgress,
      [0.29, 0.32, 0.79, 0.82],
      ["24px", "8px", "8px", "24px"]
    );
    rotate2 = useTransform(scrollYProgress, scrollValues, ["-80deg", "280deg"]);
    fontSize2 = useTransform(
      scrollYProgress,
      [0.31, 0.33, 0.355, 0.37],
      fontSizeValues
    );
    rotate3 = useTransform(scrollYProgress, scrollValues, [
      "-125deg",
      "235deg",
    ]);
    fontSize3 = useTransform(
      scrollYProgress,
      [0.38, 0.4, 0.425, 0.445],
      fontSizeValues
    );
    rotate4 = useTransform(scrollYProgress, scrollValues, [
      "-170deg",
      "190deg",
    ]);
    fontSize4 = useTransform(
      scrollYProgress,
      [0.44, 0.47, 0.495, 0.51],
      fontSizeValues
    );
    rotate5 = useTransform(scrollYProgress, scrollValues, [
      "-215deg",
      "145deg",
    ]);
    fontSize5 = useTransform(
      scrollYProgress,
      [0.5, 0.53, 0.56, 0.58],
      fontSizeValues
    );
    rotate6 = useTransform(scrollYProgress, scrollValues, [
      "-260deg",
      "100deg",
    ]);
    fontSize6 = useTransform(
      scrollYProgress,
      [0.58, 0.6, 0.625, 0.645],
      fontSizeValues
    );
    rotate7 = useTransform(scrollYProgress, scrollValues, ["55deg", "415deg"]);
    fontSize7 = useTransform(
      scrollYProgress,
      [0.645, 0.665, 0.69, 0.715],
      fontSizeValues
    );
    rotate8 = useTransform(scrollYProgress, scrollValues, ["10deg", "370deg"]);
    fontSize8 = useTransform(
      scrollYProgress,
      [0.715, 0.735, 0.755, 0.78],
      fontSizeValues
    );
  }
const [active, setActive] = useState(true);
const lightBoxProps = {
  bg: "var(--Primary-Light)",
  border: "none",
  class_name: "spiral-title",
  dropDown: active,
  setDropDown: setActive,
  fadeInViewProps: fadeInViewProps,
};

  return (
    <>
      <Section3 id="Third">
        <BlurDiv  {...fadeInViewProps}>
          <TextFrame>
            <DropDownBox title="The Rebirthing Spiral" boxProps={lightBoxProps} >
            <p className="ta-right white">
              The spiral, an ancient symbol for regeneration, is the map I use
              for the Midlife Rebirth. Its circular movement invites you inward
              to the centre of Self to find your heart-based wisdom and purpose.
              The outward movement invites you to integrate your new found
              wisdom and purpose into your life. At each curve of the spiral, I
              ask a new question to invite you to travel deeper into your
              rebirth. 
            </p>
            </DropDownBox>
          </TextFrame>
        </BlurDiv>
        <motion.div
          className="spiral-div"
          style={{
            rotate,
          }}
          {...fadeInViewProps}
        >
          <Spiral
            className="spiral"
            id="Spiral"
            xmlns="http://www.w3.org/2000/svg"
            width="684"
            height="675"
            viewBox="0 0 684 675"
            fill="none"
          >
            <path
              d="M173.139 25.417C268.878 -6.52406 489.854 -30.6608 607.845 128.321C755.335 327.048 671.773 650.105 444.374 670.5C244.372 688.437 -20.4701 617.35 3.73096 372.835C27.9321 128.321 173.142 70.584 316.062 64.5C480.5 57.5 682.5 222.5 616 437.5C563.546 607.089 362.584 676.726 229.303 617.349C37.5212 531.911 58.9826 447.889 89.5764 325.632C120.17 203.374 174.189 112.012 355.332 128.321C479.5 139.5 579.502 289.11 565 389.828C541 556.514 362.638 614.989 265.377 569.202C168.116 523.414 114.234 430.423 136.152 348.289C169.987 221.5 279.546 168.186 382.273 208.095C461.951 239.049 519.309 310.303 501.908 396.437C486.664 471.895 405.104 531.5 355.332 531.5C305.56 531.5 256.324 511.155 229.303 462.522C194.701 400.241 211.952 331.296 283.642 287.397C325.955 261.486 378.163 270.592 407.387 297.781C430.218 319.023 451.965 353.954 444.374 389.828C434.185 437.976 388.665 469.444 355.332 468.5C321.998 467.556 274.053 436.56 274.053 403.989C274.053 358.202 312.866 325.632 344.373 336.96C344.373 336.96 385.322 350.2 390.035 372.835C394.5 394.274 386.033 415.315 366.291 423.343C346.81 431.265 318.352 425.5 316.062 403.989C314.596 390.214 319.178 374.381 332.501 372.835C343.419 371.568 353.031 378.723 355.332 389.828"
              stroke="#8C1C1C"
              stroke-width="3"
            />
          </Spiral>
          <SpiralTextAxis className="axis-1">
            <motion.p style={{ rotate: rotate1, fontSize: fontSize1 }}>
              1. The Call in the middle of the night
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-2">
            <motion.p style={{ rotate: rotate2, fontSize: fontSize2 }}>
              2. Preparation: the gathering of allies, the road of trials. A
              sorting of this from that
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-3">
            <motion.p style={{ rotate: rotate3, fontSize: fontSize3 }}>
              3. Awakening to feelings of loss and death
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-4">
            <motion.p style={{ rotate: rotate4, fontSize: fontSize4 }}>
              4. The descent
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-5">
            <motion.p style={{ rotate: rotate5, fontSize: fontSize5 }}>
              5. Soul Quest
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-6">
            <motion.p style={{ rotate: rotate6, fontSize: fontSize6 }}>
              6. The return
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-7">
            <motion.p style={{ rotate: rotate7, fontSize: fontSize7 }}>
              7. Integration of the experience and the gift you received
            </motion.p>
          </SpiralTextAxis>
          <SpiralTextAxis className="axis-8">
            <motion.p style={{ rotate: rotate8, fontSize: fontSize8 }}>
              8. Ceremony
            </motion.p>
          </SpiralTextAxis>
        </motion.div>
      </Section3>
      <StickyScrollDiv />
    </>
  );
}

export default TheCycle;
