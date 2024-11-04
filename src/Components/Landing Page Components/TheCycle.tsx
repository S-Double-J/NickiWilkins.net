import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import styled from "styled-components";
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
  position: relative;
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
`;
const SVG = styled.svg`
  width: 100%;
  position: absolute;
  bottom: -6px;
`;

interface Props {
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
  };
}
function TheCycle({ fadeInViewProps }: Props) {
  const { scrollYProgress } = useScroll({});
  console.log(scrollYProgress);
  let fontSizeValues = ["15px", "36px", "36px", "15px"];
  let firstFontSizeValues = ["36px", "15px", "15px", "36px"];
  let spiralScrollValues = [0.327, 0.81];
  let scrollValues1 = [0.327, 0.36, 0.77, 0.81];
  let scrollValues2 = [0.33, 0.36, 0.39, 0.42];
  let scrollValues3 = [0.39, 0.42, 0.45, 0.48];
  let scrollValues4 = [0.45, 0.48, 0.51, 0.54];
  let scrollValues5 = [0.51, 0.54, 0.57, 0.6];
  let scrollValues6 = [0.57, 0.6, 0.63, 0.66];
  let scrollValues7 = [0.63, 0.66, 0.69, 0.72];
  let scrollValues8 = [0.69, 0.72, 0.75, 0.78];
  let spiralRotateValues = ["20deg", "-340deg"];
  let rotate1Values = ["-110deg", "250deg"];
  let rotate2Values = ["-155deg", "205deg"];
  let rotate3Values = ["-200deg", "160deg"];
  let rotate4Values = ["-245deg", "115deg"];
  let rotate5Values = ["-290deg", "70deg"];
  let rotate6Values = ["-335deg", "25deg"];
  let rotate7Values = ["-20deg", "340deg"];
  let rotate8Values = ["-65deg", "295deg"];
  if (window.innerWidth <= 1226) {
    firstFontSizeValues = ["36px", "15px", "15px", "36px"];
    spiralScrollValues = [0.35, 0.81];
    scrollValues1 = [0.35, 0.39, 0.77, 0.81];
    scrollValues2 = [0.35, 0.39, 0.41, 0.45];
    scrollValues3 = [0.41, 0.44, 0.47, 0.5];
    scrollValues4 = [0.47, 0.5, 0.53, 0.56];
    scrollValues5 = [0.53, 0.56, 0.59, 0.62];
    scrollValues6 = [0.59, 0.62, 0.65, 0.68];
    scrollValues7 = [0.65, 0.68, 0.71, 0.74];
    scrollValues8 = [0.71, 0.74, 0.77, 0.8];
    spiralRotateValues = ["20deg", "-340deg"];
    rotate1Values = ["-110deg", "250deg"];
    rotate2Values = ["-155deg", "205deg"];
    rotate3Values = ["-200deg", "160deg"];
    rotate4Values = ["-245deg", "115deg"];
    rotate5Values = ["-290deg", "70deg"];
    rotate6Values = ["-335deg", "25deg"];
    rotate7Values = ["-20deg", "340deg"];
    rotate8Values = ["-65deg", "295deg"];
  }
  if (window.innerWidth <= 814) {
    fontSizeValues = ["8px", "24px", "24px", "8px"];
    firstFontSizeValues = ["24px", "8px", "8px", "24px"];
    spiralScrollValues = [0.357, 0.795];
    scrollValues1 = [0.357, 0.39, 0.75, 0.78];
    scrollValues2 = [0.357, 0.39, 0.42, 0.45];
    scrollValues3 = [0.42, 0.45, 0.48, 0.51];
    scrollValues4 = [0.48, 0.51, 0.54, 0.57];
    scrollValues5 = [0.54, 0.57, 0.6, 0.63];
    scrollValues6 = [0.6, 0.63, 0.66, 0.69];
    scrollValues7 = [0.66, 0.69, 0.72, 0.75];
    scrollValues8 = [0.72, 0.75, 0.78, 0.795];
    spiralRotateValues = ["-30deg", "-390deg"];
    rotate1Values = ["-60deg", "300deg"];
    rotate2Values = ["-105deg", "255deg"];
    rotate3Values = ["-150deg", "210deg"];
    rotate4Values = ["-195deg", "165deg"];
    rotate5Values = ["-240deg", "120deg"];
    rotate6Values = ["-285deg", "75deg"];
    rotate7Values = ["30deg", "390deg"];
    rotate8Values = ["-15deg", "345deg"];
  }
  if (window.innerWidth <= 550 && window.innerHeight <= 700) {
    fontSizeValues = ["8px", "22px", "22px", "8px"];
    firstFontSizeValues = ["22px", "8px", "8px", "22px"];
    spiralScrollValues = [0.43, 0.72];
    scrollValues1 = [0.43, 0.45, 0.70, 0.72];
    scrollValues2 = [0.43, 0.45, 0.47, 0.49];
    scrollValues3 = [0.47, 0.49, 0.51, 0.53];
    scrollValues4 = [0.51, 0.53, 0.55, 0.57];
    scrollValues5 = [0.55, 0.57, 0.59, 0.61];
    scrollValues6 = [0.59, 0.61, 0.63, 0.65];
    scrollValues7 = [0.63, 0.65, 0.67, 0.69];
    scrollValues8 = [0.67, 0.69, 0.71, 0.72];
    spiralRotateValues = ["-30deg", "-390deg"];
    rotate1Values = ["-60deg", "300deg"];
    rotate2Values = ["-105deg", "255deg"];
    rotate3Values = ["-150deg", "210deg"];
    rotate4Values = ["-195deg", "165deg"];
    rotate5Values = ["-240deg", "120deg"];
    rotate6Values = ["-285deg", "75deg"];
    rotate7Values = ["30deg", "390deg"];
    rotate8Values = ["-15deg", "345deg"];
  }
  if (window.innerWidth <= 550 && window.innerHeight > 700) {
    fontSizeValues = ["8px", "22px", "22px", "8px"];
    firstFontSizeValues = ["22px", "8px", "8px", "22px"];
    spiralScrollValues = [0.43, 0.72];
    scrollValues1 = [0.43, 0.45, 0.70, 0.72];
    scrollValues2 = [0.43, 0.45, 0.47, 0.49];
    scrollValues3 = [0.47, 0.49, 0.51, 0.53];
    scrollValues4 = [0.51, 0.53, 0.55, 0.57];
    scrollValues5 = [0.55, 0.57, 0.59, 0.61];
    scrollValues6 = [0.59, 0.61, 0.63, 0.65];
    scrollValues7 = [0.63, 0.65, 0.67, 0.69];
    scrollValues8 = [0.67, 0.69, 0.71, 0.72];
    spiralRotateValues = ["-30deg", "-390deg"];
    rotate1Values = ["-60deg", "300deg"];
    rotate2Values = ["-105deg", "255deg"];
    rotate3Values = ["-150deg", "210deg"];
    rotate4Values = ["-195deg", "165deg"];
    rotate5Values = ["-240deg", "120deg"];
    rotate6Values = ["-285deg", "75deg"];
    rotate7Values = ["30deg", "390deg"];
    rotate8Values = ["-15deg", "345deg"];
  }
  // if (window.innerWidth <= 550) {
  //   scrollValues = [0.29, 0.82];
  //   fontSizeValues = ["8px", "22px", "22px", "8px"];
  //   rotate = useTransform(scrollYProgress, scrollValues, ["-55deg", "-415deg"]);
  //   rotate1 = useTransform(scrollYProgress, scrollValues, ["-35deg", "325deg"]);
  //   fontSize1 = useTransform(
  //     scrollYProgress,
  //     [0.29, 0.32, 0.79, 0.82],
  //     ["24px", "8px", "8px", "24px"]
  //   );
  //   rotate2 = useTransform(scrollYProgress, scrollValues, ["-80deg", "280deg"]);
  //   fontSize2 = useTransform(
  //     scrollYProgress,
  //     [0.31, 0.33, 0.355, 0.37],
  //     fontSizeValues
  //   );
  //   rotate3 = useTransform(scrollYProgress, scrollValues, [
  //     "-125deg",
  //     "235deg",
  //   ]);
  //   fontSize3 = useTransform(
  //     scrollYProgress,
  //     [0.38, 0.4, 0.425, 0.445],
  //     fontSizeValues
  //   );
  //   rotate4 = useTransform(scrollYProgress, scrollValues, [
  //     "-170deg",
  //     "190deg",
  //   ]);
  //   fontSize4 = useTransform(
  //     scrollYProgress,
  //     [0.44, 0.47, 0.495, 0.51],
  //     fontSizeValues
  //   );
  //   rotate5 = useTransform(scrollYProgress, scrollValues, [
  //     "-215deg",
  //     "145deg",
  //   ]);
  //   fontSize5 = useTransform(
  //     scrollYProgress,
  //     [0.5, 0.53, 0.56, 0.58],
  //     fontSizeValues
  //   );
  //   rotate6 = useTransform(scrollYProgress, scrollValues, [
  //     "-260deg",
  //     "100deg",
  //   ]);
  //   fontSize6 = useTransform(
  //     scrollYProgress,
  //     [0.58, 0.6, 0.625, 0.645],
  //     fontSizeValues
  //   );
  //   rotate7 = useTransform(scrollYProgress, scrollValues, ["55deg", "415deg"]);
  //   fontSize7 = useTransform(
  //     scrollYProgress,
  //     [0.645, 0.665, 0.69, 0.715],
  //     fontSizeValues
  //   );
  //   rotate8 = useTransform(scrollYProgress, scrollValues, ["10deg", "370deg"]);
  //   fontSize8 = useTransform(
  //     scrollYProgress,
  //     [0.715, 0.735, 0.755, 0.78],
  //     fontSizeValues
  //   );
  // }
  if (window.innerHeight <= 550) {
    fontSizeValues = ["8px", "20px", "20px", "8px"];
  }
  let spiralRotate = useTransform(
    scrollYProgress,
    spiralScrollValues,
    spiralRotateValues
  );
  let rotate1 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate1Values
  );
  let fontSize1 = useTransform(
    scrollYProgress,
    scrollValues1,
    firstFontSizeValues
  );
  let rotate2 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate2Values
  );
  let fontSize2 = useTransform(scrollYProgress, scrollValues2, fontSizeValues);
  let rotate3 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate3Values
  );
  let fontSize3 = useTransform(scrollYProgress, scrollValues3, fontSizeValues);
  let rotate4 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate4Values
  );
  let fontSize4 = useTransform(scrollYProgress, scrollValues4, fontSizeValues);
  let rotate5 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate5Values
  );
  let fontSize5 = useTransform(scrollYProgress, scrollValues5, fontSizeValues);
  let rotate6 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate6Values
  );
  let fontSize6 = useTransform(scrollYProgress, scrollValues6, fontSizeValues);
  let rotate7 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate7Values
  );
  let fontSize7 = useTransform(scrollYProgress, scrollValues7, fontSizeValues);
  let rotate8 = useTransform(
    scrollYProgress,
    spiralScrollValues,
    rotate8Values
  );
  let fontSize8 = useTransform(scrollYProgress, scrollValues8, fontSizeValues);
  const lightBoxProps = {
    bg: "var(--Primary-Light)",
    border: "none",
    class_name: "spiral-title",
    fadeInViewProps: fadeInViewProps,
  };

  return (
    <>
      <StickyScrollDiv>
        <Section3 id="Third">
          <BlurDiv {...fadeInViewProps}>
            <TextFrame>
              <DropDownBox
                title="The Rebirthing Spiral"
                boxProps={lightBoxProps}
              >
                <p className="ta-right white">
                  The spiral, an ancient symbol for regeneration, is the map I
                  use for the Midlife Rebirth. Its circular movement invites you
                  inward to the centre of Self to find your heart-based wisdom
                  and purpose. The outward movement invites you to integrate
                  your new found wisdom and purpose into your life. At each
                  curve of the spiral, I ask a new question to invite you to
                  travel deeper into your rebirth. 
                </p>
              </DropDownBox>
            </TextFrame>
          </BlurDiv>
          <motion.div
            className="spiral-div"
            style={{ rotate: spiralRotate }}
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
                1. WAKING UP: Did your soul-waters break?
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-2">
              <motion.p style={{ rotate: rotate2, fontSize: fontSize2 }}>
                2. SETTING OFF: What will you carry with you?
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-3">
              <motion.p style={{ rotate: rotate3, fontSize: fontSize3 }}>
                3. INTO THE CENTRE: What will you let go?
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-4">
              <motion.p style={{ rotate: rotate4, fontSize: fontSize4 }}>
                4. AT THE THRESHOLD: What is your deepest longing?
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-5">
              <motion.p style={{ rotate: rotate5, fontSize: fontSize5 }}>
                5. THE CENTRE: What does your truest Self whisper?
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-6">
              <motion.p style={{ rotate: rotate6, fontSize: fontSize6 }}>
                6. THE RETURN: How will you integrate your wisdom?
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-7">
              <motion.p style={{ rotate: rotate7, fontSize: fontSize7 }}>
                7. STORY FEAST: Your unique myth.
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-8">
              <motion.p style={{ rotate: rotate8, fontSize: fontSize8 }}>
                8. WELCOME HOME: The Ceremony of Wholeness.
              </motion.p>
            </SpiralTextAxis>
          </motion.div>
        </Section3>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 206">
          <path
            d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
            fill="#590000"
          />
        </SVG>
      </StickyScrollDiv>
    </>
  );
}

export default TheCycle;
