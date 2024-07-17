import styled from "styled-components";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const ParalaxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: calc(100svh - 60px);
  width: 100svw;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const SplotchTopLeft = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 1000px) {
    width: 300px;
    top: -95px;
    left: -10px;
  }
  @media (max-width: 835px) {
    width: 201px;
    height: 271px;
    top: -60px;
    left: -1px;
  }
  @media (max-width: 450px) {
    width: 165px;
    height: 220.514px;
  }
  @media (max-width: 360px) {
    transform: rotate(15deg);
    left: -25px;
  }
  @media (orientation: landscape) and (max-width: 1200px) {
    width: 280px;
    height: 379.307px;
    top: -1px;
    left: -1px;
  }
  @media (orientation: landscape) and (max-height: 535px) {
    width: 165px;
    height: 220.514px;
  }
  @media (orientation: landscape) and (max-height: 400px) {
    height: 180px;
    width: 132px;
  }
`;
const SplotchMiddleRight = styled.svg`
  position: absolute;
  right: -1px;
  bottom: -650px;
  @media (max-width: 835px) {
    width: 175.417px;
    height: 1145px;
  }
  @media (max-width: 710px) {
    width: 90.022px;
    height: 579.699px;
    bottom: -300px;
  }
  @media (orientation: landscape) and (max-height: 535px) {
    width: 90.022px;
    height: 579.699px;
    bottom: -300px;
  }
`;
const Venus = styled.svg`
  margin-left: -50px;
  max-height: calc(100svh - 250px);
  @media (max-width: 835px) {
    margin-left: -50px;
    margin-right: 10px;
  }
  @media (max-width: 710px) {
    margin: 0;
    position: absolute;
    height: 347px;
    width: 250px;
    right: 0px;
    bottom: 120px;
  }
  @media screen and (orientation: landscape) and (max-height: 535px){
    position: static;
    max-height: calc(100svh - 80px);
    margin: 0;
  }
`;

const HeroTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  z-index: 1;
  margin-left: 200px;
  width: 600px;
  @media (max-width: 1000px) {
    margin-left: 120px;
  }
  @media (max-width: 710px) {
    margin-left: 0px;
    margin-top: 120px;
    width: 75%;
  }
  @media (max-width: 535px) {
    width: 320px;
  }
  @media screen and (orientation: landscape) and (max-width: 1200px) {
    margin-left: 100px;
    width: 550px;
  }
  @media screen and (orientation: landscape) and (max-height: 535px) {
    width: 320px;
    margin: 0;
    margin-left: 100px;
    margin-top: 50px;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 835px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }
  @media screen and (orientation: landscape) and (max-height: 535px) {
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
  }
`;

const ExploreText = styled.p`
  font-family: Cinzel;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 114%; /* 15.96px */
  letter-spacing: 0.14px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Section2 = styled.div`
  min-height: calc(100svh - 60px);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 150px;
  box-sizing: border-box;
  @media screen and (orientation: landscape) and (max-width: 1200px) {
    padding: 100px 10px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
  @media (max-width: 1060px) {
    padding-left: 10px;
  }
  @media (max-width: 835px) {
    justify-content: center;
    align-items: flex-start;
  }
  @media screen and (orientation: landscape) and (max-height: 535px){
    flex-direction: row-reverse;
    padding: 0;
  }
`;
const SplotchBottom = styled.svg`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const Section3 = styled.div`
  width: 101svw;
  min-height: calc(100svh - 60px);
  background-color: #8c1c1c;
  position: relative;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  overflow: hidden;
`;

const StickyScrollDiv = styled.div`
  min-height: 500vh;
  width: 100%;
`;

const Spiral = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(40deg);
  z-index: 5;
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

const Section4 = styled.div`
  min-height: calc(100svh - 60px);
  min-width: 100svw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #fff4df;
  @media (hover: none) {
    display: none;
  }
`;
const DisapearingBox = styled.div`
  height: 10%;
  width: 5%;
  background-color: #8c1c1c;
  z-index: 5;
  opacity: 1;
  overflow: hidden;
  transition: opacity 1s ease-out forwards;
  transition-delay: 5s;
  &:hover {
    opacity: 0;
    transition-delay: 0s;
  }
`;

const SlidingBar = styled.div`
  height: 100%;
  width: 16.6666666666%;
  background-color: #8c1c1c;
`;

const SlideAcross = styled.div`
  width: 100%;
  height: 10%;
  background-color: #8c1c1c;
`;

const Footer = styled.div`
  min-height: 200px;
`;

function LandingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: targetRef,
  });
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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  return (
    <ParalaxWrapper className="paralax-wrapper" ref={targetRef}>
      <SplotchTopLeft
        width="438"
        height="593"
        viewBox="0 0 438 593"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 592.499C0 592.499 110.329 527.201 146.132 447.04C179.211 372.977 106.178 310.679 146.132 239.959C187.568 166.613 269.902 185.411 334.068 130.039C379.678 90.6798 437.376 0 437.376 0H0V592.499Z"
          fill="#8C1C1C"
        />
      </SplotchTopLeft>
      <SplotchMiddleRight
        xmlns="http://www.w3.org/2000/svg"
        width="176"
        height="1145"
        viewBox="0 0 176 1145"
        fill="none"
      >
        <path
          d="M128.5 269C175.083 173.032 176 0 176 0V1145C176 1145 117.411 1029.42 98.5 949.5C78.4752 864.872 93.385 813.579 81 727.5C63.7397 607.537 -27.9813 540.757 9.49992 425.5C33.2441 352.485 94.9723 338.072 128.5 269Z"
          fill="#8C1C1C"
        />
      </SplotchMiddleRight>
      <motion.div
        className="hero-motion-container"
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        viewport={{ margin: "-200px", once: true }}
        transition={{ duration: 0.5 }}
      >
        <HeroTextDiv>
          <h1 className="hero-title">Begin Again</h1>
          <h4>Helping women find purpose in the second half of life</h4>
          <ButtonDiv>
            <button className="primary-button">
              <p>let's work together</p>
              <svg
                className="button-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="15"
                viewBox="0 0 37 15"
                fill="none"
              >
                <path
                  className="arrow"
                  d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                  fill="#590000"
                />
              </svg>
            </button>
            <button className="secondary-button">
              <p>see what i do</p>
              <svg
                className="button-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="15"
                viewBox="0 0 37 15"
                fill="none"
              >
                <path
                  className="arrow"
                  d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                  fill="#590000"
                />
              </svg>
            </button>
          </ButtonDiv>
        </HeroTextDiv>
        <Venus
          viewBox="0 0 589 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="399" cy="190" r="190" fill="#FAD07D" />
          <circle cx="266" cy="680" r="140" fill="#FAD07D" />
          <ellipse cx="302" cy="475" rx="222" ry="219" fill="#FAD07D" />
          <g filter="url(#filter0_f_102_1726)">
            <path
              d="M108.938 394.252C84.4342 415.771 34.0895 496.781 66.6131 533.911C99.1367 571.041 168.194 581.589 169.085 602.263C169.976 622.938 156.164 659.071 181.114 673.57C200.717 684.962 279.576 681.164 313.436 662.599C340.539 647.739 355.315 601.841 346.405 577.37C337.494 552.898 306.753 517.034 319.673 495.515C332.593 473.997 352.642 408.176 338.831 402.691C325.02 397.206 261.309 391.721 249.28 397.206C237.251 402.691 192.252 422.943 187.351 418.302C182.45 413.661 197.153 372.312 185.124 360.076C175.5 350.287 132.106 377.375 108.938 394.252Z"
              fill="#8C1C1C"
              fill-opacity="0.15"
            />
          </g>
          <path
            d="M327.413 309.575C322.297 313.439 337.132 319.717 341.224 312.956C345.317 306.194 339.255 295.346 334.063 295.568C322.809 296.051 316.67 304.745 315.136 313.439C313.908 320.394 327.072 326.64 332.017 328.894C333.892 329.216 338.462 329.667 341.736 328.894C345.828 327.928 350.432 322.132 350.944 320.2C351.455 318.269 355.036 303.296 358.617 297.983C362.198 292.671 383.682 286.392 383.682 291.705C383.682 297.017 370.894 301.364 367.313 304.745C363.732 308.126 362.198 318.751 358.617 325.03C355.036 331.309 349.409 332.275 347.363 333.724C345.317 335.173 341.224 344.349 340.201 348.696C339.178 353.043 331.505 374.777 328.947 364.152C326.39 353.526 325.367 355.458 323.32 349.662C321.274 343.867 292.628 307.16 284.955 297.983C277.281 288.807 253.75 295.085 250.17 295.568C246.589 296.051 222.546 301.364 220.5 305.711C218.454 310.058 225.616 307.16 230.731 307.16C234.823 307.16 251.875 319.073 259.889 325.03C275.406 336.944 301.017 370.817 305.928 385.886C312.066 404.722 312.066 417.28 318.716 423.075C325.367 428.871 328.436 425.49 335.597 417.763C342.759 410.035 365.267 396.028 371.917 391.199C378.567 386.369 429.721 328.411 447.625 325.03C465.529 321.649 427.675 349.662 424.606 354.009C421.537 358.356 351.455 413.416 361.686 410.518C371.917 407.62 411.817 385.403 422.56 382.988C433.302 380.573 447.114 381.056 452.229 381.056C457.345 381.056 460.414 385.886 463.483 391.199C464.659 393.234 465.87 396.994 465.529 398.443C465.529 398.443 468.599 384.92 470.645 381.056C472.691 377.192 476.579 372.749 483.945 356.907C493.153 337.105 493.664 312.956 494.176 301.364C494.687 289.773 492.13 286.392 484.968 273.834C477.806 261.277 443.022 255.481 415.398 251.617C387.775 247.753 390.333 259.345 349.409 251.617M241.985 401.824C231.754 402.307 225.104 392.648 228.173 383.954C231.243 375.26 236.358 374.294 245.054 375.26C253.75 376.226 257.331 382.505 259.889 396.028C262.447 409.552 250.17 427.905 234.823 423.075C222.546 419.212 211.804 410.035 210.781 408.103C191.342 391.199 200.038 330.826 234.823 344.832C276.987 361.81 287.001 388.301 282.908 417.763C279.398 443.035 242.496 453.986 230.731 450.122C218.965 446.258 187.25 420.66 178.554 410.518C169.857 400.375 171.392 384.437 171.392 369.464C171.392 354.492 191.854 328.894 201.573 322.132C211.292 315.371 207.2 317.786 223.569 316.82C239.939 315.854 269.097 345.028 282.908 369.464C296.729 393.916 300.301 393.614 300.301 416.314C300.301 434.176 290.07 447.707 279.328 452.054C271.616 455.175 247.1 462.197 241.985 462.68C237.893 463.066 223.569 462.68 215.896 457.85C206.688 447.224 180.088 417.763 172.927 417.763C165.765 417.763 156.557 416.314 152.976 424.524C149.396 432.735 135.584 458.333 137.119 467.993C138.653 477.652 142.234 503.733 151.953 516.774C161.673 529.814 168.834 536.093 168.834 538.991C168.834 541.889 168.323 548.167 169.857 553.48C171.392 558.793 173.95 564.589 178.042 567.487C182.134 570.384 187.25 570.867 189.807 567.487C192.365 564.106 197.992 560.242 202.596 557.344C207.2 554.446 224.592 552.514 236.869 551.548C249.147 550.582 318.205 554.929 340.713 572.799C363.221 590.67 377.032 595.5 383.682 597.431C390.333 599.363 397.564 594.515 408.237 591.153C418.83 587.815 420.767 579.701 429.21 572.799C438.881 564.894 452.489 556.713 454.787 553.48C480.876 516.774 482.922 493.108 480.876 453.986C479.385 425.49 461.437 411.484 450.695 403.273C436.371 399.57 395.448 405.495 387.263 410.518C379.079 415.541 349.409 433.701 340.201 438.048C321.786 449.156 306.439 461.907 300.301 478.135C292.628 498.42 303.882 526.433 325.367 539.957C346.851 553.48 398.006 557.827 410.283 553.48C422.56 549.133 475.249 493.591 461.949 466.544C448.649 439.497 399.029 434.667 383.682 441.429C368.336 448.19 346.34 467.027 347.363 492.625C348.386 518.223 380.613 521.12 394.425 521.603C408.237 522.086 427.164 506.631 422.56 487.795C417.956 468.958 397.494 463.163 390.333 467.993M193.9 452.054C185.715 442.878 172.927 424.041 165.765 431.769C158.603 439.497 148.884 457.367 150.93 468.959C152.976 480.55 153.999 500.352 174.973 521.603C195.946 542.855 224.081 534.161 228.173 516.774C232.266 499.386 209.246 462.68 199.527 462.68C189.807 462.68 181.111 461.124 174.973 472.527C168.834 483.931 172.927 496.392 178.554 502.767C188.784 514.359 200.038 509.529 205.665 500.352C211.292 491.176 201.573 478.135 193.9 482.965M165.765 393.131C158.603 415.831 159.626 421.143 150.93 398.443C142.234 375.743 162.184 333.241 177.019 325.03C191.854 316.82 185.715 313.439 191.854 305.711C196.764 299.529 215.044 296.373 223.569 295.568C237.211 292.349 266.539 283.494 274.724 273.834C284.955 261.76 302.347 263.209 310.532 250.168C318.716 237.128 291.054 225.259 282.397 218.292C270.024 208.333 256.86 197.669 250.17 178.204C244.353 161.281 239.939 105.274 288.024 79.6761C336.109 54.0781 431.768 64.2207 458.879 92.7165C485.991 121.212 505.941 175.789 501.337 209.115C496.734 242.441 497.99 267.541 484.968 259.345C472.691 251.617 425.629 239.06 404.656 241.475C383.682 243.89 348.898 238.094 323.32 218.292C297.743 198.489 284.443 149.708 299.278 125.559C314.113 101.41 349.921 81.608 404.656 100.444C445.579 114.527 463.592 152.805 447.625 182.068C430.233 213.945 399.54 216.637 367.313 206.217C346.851 199.601 337.132 177.238 341.736 147.776C346.34 118.315 383.491 115.464 406.702 132.321C420.002 141.981 421.025 156.953 411.817 168.062C405.575 175.592 374.475 184.966 368.848 164.198M180.088 605.642C180.088 619.166 178.554 620.614 171.392 634.138C165.654 644.972 169.857 656.355 173.438 663.6C177.019 670.844 205.665 684.851 215.385 690.647C225.104 696.442 239.427 724.938 232.777 731.7C226.127 738.462 232.777 749.087 235.335 751.019C237.893 752.951 247.1 752.951 251.704 761.162C256.308 769.373 250.681 770.338 261.935 774.202C273.189 778.066 294.162 775.651 301.836 767.441C309.509 759.23 305.416 759.23 318.205 751.019C330.993 742.809 346.851 712.381 338.667 700.306C330.482 688.232 331.505 675.191 336.109 667.464C340.713 659.736 377.032 638.968 379.59 619.166C382.148 599.363 383.171 616.751 340.713 586.323C298.255 555.895 231.243 562.174 207.2 567.487C183.157 572.799 187.993 611.046 185.204 621.58C183.669 627.376 181.009 628.922 178.554 633.172C175.484 638.485 174.973 641.866 174.973 648.627C174.973 655.389 182.646 665.049 189.807 665.049C196.969 665.049 205.154 661.185 207.2 653.94C209.246 646.695 209.758 640.9 204.131 635.587C199.897 631.589 194.411 630.757 189.807 634.138C185.204 637.519 183.669 643.315 186.738 648.627C188.831 652.25 199.527 652.008 196.969 645.246"
            stroke="#590000"
            stroke-width="3"
          />
          <defs>
            <filter
              id="filter0_f_102_1726"
              x="0.799999"
              y="302.8"
              width="403.4"
              height="432.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="27.6"
                result="effect1_foregroundBlur_102_1726"
              />
            </filter>
          </defs>
        </Venus>
      </motion.div>
      <motion.div
        className="explore-motion-container"
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        viewport={{ amount: "all", once: true }}
        transition={{ delay: 2.5, duration: 0.3 }}
      >
        <ExploreText>scroll to explore</ExploreText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="15"
          viewBox="0 0 37 15"
          fill="none"
          style={{ transform: "rotate(90deg)" }}
        >
          <path
            d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
            fill="#8C1C1C"
          />
        </svg>
      </motion.div>
      <Section2 id="Second">
        <motion.div
          className="wise-motion-container"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            WISE
            <br />
            WILD
            <br />
            WHOLE
          </h2>          
          <motion.svg
            className="orb1-motion-container"
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            width="217"
            height="217"
            viewBox="0 0 217 217"
            fill="none"
          >
            <circle className="orb-1-fill" cx="108.5" cy="108.5" r="108.5" />
          </motion.svg>
        </motion.div>
        <motion.div
          className="wise-text-motion-container"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="bold">
            The most important relationship is the one you foster with your
            truest self!
          </p>
          <p>
            <br />
            I mentor women in midlife who are travelling the creative journey to
            self, re-discovering heart-based wisdom, gifts, and purpose.
            <br />
            <br />
            As a Transformational Mentor, Teacher, and Purpose Guide, I offer
            one-to-one mentoring, courses, meditations, retreats, and
            ceremonies.
            <br />
            <br />
            I’m so glad you’re here.
          </p>
          <motion.button
            className="primary-button"
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ amount: "all", once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>meet nicki</p>
            <svg
              className="button-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="15"
              viewBox="0 0 37 15"
              fill="none"
            >
              <path
                className="arrow"
                d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                fill="#590000"
              />
            </svg>
          </motion.button>
          <motion.svg
            className="orb2-motion-container"
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
          >
            <circle className="orb-2-fill" cx="60" cy="60" r="60" />
          </motion.svg>
          <motion.svg
          className="trisk-motion-container"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ duration: 0.5 }}
          width="397"
          height="420"
          viewBox="0 0 397 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="trisk-path-fill"
            d="M207.928 264.873C210.118 232.071 210.107 207.452 194.829 174.338C226.11 195.705 239.957 201.245 277.345 207.349C247.251 224.567 230.436 238.501 207.928 264.873Z"
          />
          <path
            className="trisk-path-stroke"
            d="M207.928 264.873C210.118 232.071 210.107 207.452 194.829 174.338M207.928 264.873C230.436 238.501 247.251 224.567 277.345 207.349M207.928 264.873C161.053 369.879 276.252 455.243 355.736 396.897C446.957 329.936 352.712 191.481 263.351 255.384C192.837 305.809 263.392 418.712 334.875 366.24C385.553 329.04 335.141 250.298 286.063 286.324C251.922 311.385 284.281 356.587 312.555 335.833C327.942 324.538 313.11 307.515 304.042 314.171M194.829 174.338C226.11 195.705 239.957 201.245 277.345 207.349M194.829 174.338C109.145 63.2013 -11.5551 157.354 5.30933 237.11C30.5526 356.49 197.629 324.146 171.509 215.259C152.087 134.292 37.3115 150.982 41.5562 226.1C45.3789 293.752 144.291 287.626 136.937 230.787C130.439 180.556 78.4499 199.018 78.6598 221.85C78.8888 246.764 107.307 241.865 101.752 228.705M277.345 207.349C402.566 193.416 410.538 42.3613 316.172 9.74189C212.771 -26.0006 147.345 119.714 249.861 164.316C324.477 196.779 387.321 79.8283 303.238 44.683C249.084 22.0474 205.219 103.5 258.844 127.348C276.949 135.399 293.104 129.287 301.565 117.33C310.027 105.373 306.085 84.7852 291.764 79.3752C276.997 73.7967 264.518 90.3453 276.226 97.3482"
            stroke-width="7"
          />
        </motion.svg>
        </motion.div>
        <SplotchBottom
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 206"
        >
          <path
            d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
            fill="#8C1C1C"
          />
        </SplotchBottom>
      </Section2>
      <StickyScrollDiv>
        <Section3 id="Third">
          <motion.div
            className="circle-text-motion-container"
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ margin: "-200px", once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>the circle of rebirth</h3>
          </motion.div>
          <motion.div
            className="spiral-div"
            style={{
              rotate,
            }}
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ margin: "00px", once: true }}
            transition={{ duration: 0.5 }}
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
      </StickyScrollDiv>
      <Section4>
        <motion.div
          className="bento-motion-container"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ margin: "-200px", once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="crone-card">
            <Mask className="crone-mask">
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox className="box-mask">b</DisapearingBox>
              <DisapearingBox className="box-mask">i</DisapearingBox>
              <DisapearingBox className="box-mask">r</DisapearingBox>
              <DisapearingBox className="box-mask">t</DisapearingBox>
              <DisapearingBox className="box-mask">h</DisapearingBox>
              <DisapearingBox className="box-mask">i</DisapearingBox>
              <DisapearingBox className="box-mask">n</DisapearingBox>
              <DisapearingBox className="box-mask">g</DisapearingBox>
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox className="box-mask">t</DisapearingBox>
              <DisapearingBox className="box-mask">h</DisapearingBox>
              <DisapearingBox className="box-mask">e</DisapearingBox>
              <DisapearingBox />
              <DisapearingBox className="box-mask">c</DisapearingBox>
              <DisapearingBox className="box-mask">r</DisapearingBox>
              <DisapearingBox className="box-mask">o</DisapearingBox>
              <DisapearingBox className="box-mask">n</DisapearingBox>
              <DisapearingBox className="box-mask">e</DisapearingBox>
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
              <DisapearingBox />
            </Mask>
            <svg
              viewBox="0 0 819 446"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M411.166 185.418C409.443 186.72 414.442 188.836 415.821 186.558C417.2 184.279 415.157 180.623 413.407 180.698C409.615 180.861 407.546 183.791 407.029 186.72C406.616 189.064 411.052 191.169 412.718 191.929C413.35 192.037 414.89 192.189 415.993 191.929C417.372 191.603 418.924 189.65 419.096 188.999C419.268 188.348 420.475 183.303 421.682 181.512C422.889 179.722 430.129 177.606 430.129 179.396C430.129 181.187 425.819 182.652 424.612 183.791C423.406 184.93 422.889 188.511 421.682 190.627C420.475 192.743 418.579 193.068 417.889 193.556C417.2 194.045 415.821 197.137 415.476 198.602C415.131 200.067 412.546 207.391 411.684 203.81C410.822 200.229 410.477 200.88 409.787 198.927C409.098 196.974 399.444 184.605 396.859 181.512C394.273 178.42 386.343 180.536 385.137 180.698C383.93 180.861 375.828 182.652 375.138 184.116C374.449 185.581 376.862 184.605 378.586 184.605C379.965 184.605 385.711 188.619 388.412 190.627C393.641 194.641 402.272 206.056 403.926 211.134C405.995 217.482 405.995 221.713 408.236 223.667C410.477 225.62 411.511 224.48 413.925 221.876C416.338 219.272 423.923 214.552 426.164 212.925C428.405 211.297 445.643 191.766 451.677 190.627C457.71 189.487 444.954 198.927 443.919 200.392C442.885 201.857 419.268 220.411 422.716 219.435C426.164 218.458 439.61 210.971 443.23 210.158C446.85 209.344 451.504 209.507 453.228 209.507C454.952 209.507 455.986 211.134 457.02 212.925C457.417 213.61 457.825 214.878 457.71 215.366C457.71 215.366 458.744 210.809 459.434 209.507C460.123 208.205 461.433 206.707 463.916 201.369C467.019 194.696 467.191 186.558 467.363 182.652C467.536 178.745 466.674 177.606 464.26 173.374C461.847 169.143 450.125 167.19 440.816 165.887C431.508 164.585 432.37 168.492 418.579 165.887M382.378 216.505C378.931 216.668 376.69 213.413 377.724 210.483C378.758 207.554 380.482 207.228 383.413 207.554C386.343 207.879 387.55 209.995 388.412 214.552C389.274 219.109 385.137 225.294 379.965 223.667C375.828 222.364 372.208 219.272 371.863 218.621C365.313 212.925 368.243 192.58 379.965 197.3C394.174 203.021 397.548 211.948 396.169 221.876C394.986 230.393 382.551 234.083 378.586 232.781C374.621 231.479 363.933 222.853 361.003 219.435C358.072 216.017 358.59 210.646 358.59 205.6C358.59 200.555 365.485 191.929 368.76 189.65C372.035 187.372 370.656 188.185 376.173 187.86C381.689 187.534 391.515 197.366 396.169 205.6C400.826 213.84 402.03 213.738 402.03 221.388C402.03 227.407 398.583 231.967 394.962 233.432C392.364 234.484 384.102 236.85 382.378 237.013C380.999 237.143 376.173 237.013 373.587 235.385C370.484 231.804 361.52 221.876 359.107 221.876C356.693 221.876 353.59 221.388 352.384 224.155C351.177 226.922 346.523 235.548 347.04 238.803C347.557 242.058 348.764 250.847 352.039 255.242C355.314 259.636 357.728 261.752 357.728 262.728C357.728 263.705 357.555 265.821 358.072 267.611C358.59 269.402 359.452 271.355 360.831 272.331C362.21 273.308 363.933 273.47 364.795 272.331C365.657 271.192 367.554 269.89 369.105 268.913C370.656 267.937 376.517 267.286 380.655 266.96C384.792 266.635 408.064 268.099 415.648 274.122C423.233 280.144 427.888 281.771 430.129 282.422C432.37 283.073 434.806 281.439 438.403 280.306C441.973 279.182 442.626 276.447 445.471 274.122C448.73 271.458 453.315 268.701 454.09 267.611C462.881 255.242 463.571 247.266 462.881 234.083C462.379 224.48 456.331 219.76 452.711 216.993C447.884 215.746 434.093 217.742 431.335 219.435C428.577 221.128 418.579 227.247 415.476 228.712C409.27 232.455 404.099 236.752 402.03 242.221C399.444 249.057 403.237 258.497 410.477 263.054C417.717 267.611 434.955 269.076 439.093 267.611C443.23 266.146 460.985 247.429 456.503 238.315C452.021 229.2 435.3 227.573 430.129 229.851C424.957 232.13 417.545 238.478 417.889 247.104C418.234 255.73 429.094 256.706 433.749 256.869C438.403 257.032 444.781 251.824 443.23 245.476C441.678 239.129 434.783 237.175 432.37 238.803M366.174 233.432C363.416 230.34 359.107 223.992 356.693 226.596C354.28 229.2 351.005 235.222 351.694 239.129C352.384 243.035 352.729 249.708 359.796 256.869C366.864 264.031 376.345 261.101 377.724 255.242C379.103 249.382 371.346 237.013 368.071 237.013C364.795 237.013 361.865 236.488 359.796 240.331C357.728 244.174 359.107 248.373 361.003 250.522C364.451 254.428 368.243 252.8 370.139 249.708C372.035 246.615 368.76 242.221 366.174 243.849M356.693 213.576C354.28 221.225 354.625 223.016 351.694 215.366C348.764 207.716 355.487 193.394 360.486 190.627C365.485 187.86 363.416 186.72 365.485 184.116C367.14 182.033 373.3 180.97 376.173 180.698C380.77 179.613 390.653 176.629 393.411 173.374C396.859 169.305 402.72 169.794 405.478 165.399C408.236 161.005 398.914 157.005 395.997 154.657C391.827 151.301 387.391 147.708 385.137 141.148C383.176 135.445 381.689 116.572 397.893 107.946C414.097 99.3195 446.333 102.737 455.469 112.34C464.605 121.943 471.328 140.334 469.777 151.565C468.225 162.795 468.649 171.254 464.26 168.492C460.123 165.887 444.264 161.656 437.196 162.47C430.129 163.283 418.407 161.33 409.787 154.657C401.168 147.984 396.686 131.546 401.685 123.408C406.685 115.27 418.751 108.597 437.196 114.944C450.987 119.69 457.057 132.589 451.677 142.45C445.815 153.192 435.472 154.1 424.612 150.588C417.717 148.359 414.442 140.823 415.993 130.895C417.545 120.966 430.064 120.006 437.886 125.686C442.368 128.941 442.713 133.987 439.61 137.73C437.506 140.268 427.026 143.427 425.13 136.428M361.52 285.189C361.52 289.746 361.003 290.235 358.59 294.792C356.656 298.443 358.072 302.279 359.279 304.72C360.486 307.161 370.139 311.881 373.415 313.834C376.69 315.788 381.517 325.39 379.276 327.669C377.035 329.948 379.276 333.528 380.138 334.179C380.999 334.83 384.102 334.83 385.654 337.597C387.205 340.364 385.309 340.69 389.101 341.992C392.894 343.294 399.962 342.48 402.547 339.713C405.133 336.946 403.754 336.946 408.064 334.179C412.373 331.412 417.717 321.159 414.959 317.09C412.201 313.021 412.546 308.626 414.097 306.022C415.648 303.418 427.888 296.419 428.75 289.746C429.611 283.073 429.956 288.933 415.648 278.679C401.341 268.425 378.758 270.541 370.656 272.331C362.554 274.122 364.184 287.01 363.244 290.56C362.727 292.513 361.83 293.034 361.003 294.466C359.969 296.257 359.796 297.396 359.796 299.675C359.796 301.953 362.382 305.208 364.795 305.208C367.209 305.208 369.967 303.906 370.656 301.465C371.346 299.023 371.518 297.07 369.622 295.28C368.195 293.933 366.347 293.652 364.795 294.792C363.244 295.931 362.727 297.884 363.761 299.675C364.466 300.895 368.071 300.814 367.209 298.535"
                stroke="#590000"
              />
              <g opacity="0.5">
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="409"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="359"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="309"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="259"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="209"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="159"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="109"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="59"
                  stroke="#FAD07D"
                />
                <circle
                  opacity="0.3"
                  cx="409.5"
                  cy="222.5"
                  r="14"
                  stroke="#FAD07D"
                />
              </g>
              <circle cx="281.5" cy="84.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M273.348 69.6961C277.882 68.1648 288.346 67.0077 293.934 74.6293C300.918 84.1562 296.961 99.6436 286.192 100.621C276.721 101.481 264.179 98.0733 265.325 86.3513C266.471 74.6293 273.348 71.8614 280.116 71.5697C287.903 71.2342 297.469 79.1442 294.32 89.4513C291.836 97.5814 282.319 100.92 276.007 98.0733C266.925 93.9774 267.942 89.9494 269.39 84.0884C270.839 78.2274 273.397 73.8474 281.976 74.6293C287.856 75.1652 292.592 82.3375 291.905 87.166C290.768 95.1569 282.322 97.9602 277.716 95.7651C273.11 93.5701 270.558 89.1121 271.596 85.1746C273.198 79.0963 278.387 76.5404 283.251 78.4537C287.025 79.9376 289.741 83.3535 288.917 87.4828C288.195 91.1002 284.333 93.9577 281.976 93.9577C279.619 93.9577 277.287 92.9823 276.007 90.6509C274.369 87.6651 275.186 84.3599 278.581 82.2554C280.585 81.0132 283.057 81.4498 284.441 82.7532C285.522 83.7716 286.552 85.4461 286.192 87.166C285.71 89.4741 283.554 90.9827 281.976 90.9375C280.397 90.8922 278.127 89.4063 278.127 87.8448C278.127 85.6498 279.965 84.0884 281.457 84.6315C281.457 84.6315 283.396 85.2662 283.619 86.3513C283.831 87.3791 283.43 88.3878 282.495 88.7726C281.572 89.1524 280.224 88.876 280.116 87.8448C280.047 87.1844 280.264 86.4254 280.894 86.3513C281.412 86.2906 281.867 86.6335 281.976 87.166"
                stroke="#FFF4DF"
              />
              <circle cx="389.5" cy="44.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M381.348 29.6961C385.882 28.1648 396.346 27.0077 401.934 34.6293C408.918 44.1562 404.961 59.6436 394.192 60.6213C384.721 61.4812 372.179 58.0733 373.325 46.3513C374.471 34.6293 381.348 31.8614 388.116 31.5697C395.903 31.2342 405.469 39.1442 402.32 49.4513C399.836 57.5814 390.319 60.9198 384.007 58.0733C374.925 53.9774 375.942 49.9494 377.39 44.0884C378.839 38.2274 381.397 33.8474 389.976 34.6293C395.856 35.1652 400.592 42.3375 399.905 47.166C398.768 55.1569 390.322 57.9602 385.716 55.7651C381.11 53.5701 378.558 49.1121 379.596 45.1746C381.198 39.0963 386.387 36.5404 391.251 38.4537C395.025 39.9376 397.741 43.3535 396.917 47.4828C396.195 51.1002 392.333 53.9577 389.976 53.9577C387.619 53.9577 385.287 52.9823 384.007 50.6509C382.369 47.6651 383.186 44.3599 386.581 42.2554C388.585 41.0132 391.057 41.4498 392.441 42.7532C393.522 43.7716 394.552 45.4461 394.192 47.166C393.71 49.4741 391.554 50.9827 389.976 50.9375C388.397 50.8922 386.127 49.4063 386.127 47.8448C386.127 45.6498 387.965 44.0884 389.457 44.6315C389.457 44.6315 391.396 45.2662 391.619 46.3513C391.831 47.3791 391.43 48.3878 390.495 48.7726C389.572 49.1524 388.224 48.876 388.116 47.8448C388.047 47.1844 388.264 46.4254 388.894 46.3513C389.412 46.2906 389.867 46.6335 389.976 47.166"
                stroke="#FFF4DF"
              />
              <circle cx="500.5" cy="68.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M492.348 53.6961C496.882 52.1648 507.346 51.0077 512.934 58.6293C519.918 68.1562 515.961 83.6436 505.192 84.6213C495.721 85.4812 483.179 82.0733 484.325 70.3513C485.471 58.6293 492.348 55.8614 499.116 55.5697C506.903 55.2342 516.469 63.1442 513.32 73.4513C510.836 81.5814 501.319 84.9198 495.007 82.0733C485.925 77.9774 486.942 73.9494 488.39 68.0884C489.839 62.2274 492.397 57.8474 500.976 58.6293C506.856 59.1652 511.592 66.3375 510.905 71.166C509.768 79.1569 501.322 81.9602 496.716 79.7651C492.11 77.5701 489.558 73.1121 490.596 69.1746C492.198 63.0963 497.387 60.5404 502.251 62.4537C506.025 63.9376 508.741 67.3535 507.917 71.4828C507.195 75.1002 503.333 77.9577 500.976 77.9577C498.619 77.9577 496.287 76.9823 495.007 74.6509C493.369 71.6651 494.186 68.3599 497.581 66.2554C499.585 65.0132 502.057 65.4498 503.441 66.7532C504.522 67.7716 505.552 69.4461 505.192 71.166C504.71 73.4741 502.554 74.9827 500.976 74.9375C499.397 74.8922 497.127 73.4063 497.127 71.8448C497.127 69.6498 498.965 68.0884 500.457 68.6315C500.457 68.6315 502.396 69.2662 502.619 70.3513C502.831 71.3791 502.43 72.3878 501.495 72.7726C500.572 73.1524 499.224 72.876 499.116 71.8448C499.047 71.1844 499.264 70.4254 499.894 70.3513C500.412 70.2906 500.867 70.6335 500.976 71.166"
                stroke="#FFF4DF"
              />
              <circle cx="569.5" cy="144.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M561.348 129.696C565.882 128.165 576.346 127.008 581.934 134.629C588.918 144.156 584.961 159.644 574.192 160.621C564.721 161.481 552.179 158.073 553.325 146.351C554.471 134.629 561.348 131.861 568.116 131.57C575.903 131.234 585.469 139.144 582.32 149.451C579.836 157.581 570.319 160.92 564.007 158.073C554.925 153.977 555.942 149.949 557.39 144.088C558.839 138.227 561.397 133.847 569.976 134.629C575.856 135.165 580.592 142.338 579.905 147.166C578.768 155.157 570.322 157.96 565.716 155.765C561.11 153.57 558.558 149.112 559.596 145.175C561.198 139.096 566.387 136.54 571.251 138.454C575.025 139.938 577.741 143.354 576.917 147.483C576.195 151.1 572.333 153.958 569.976 153.958C567.619 153.958 565.287 152.982 564.007 150.651C562.369 147.665 563.186 144.36 566.581 142.255C568.585 141.013 571.057 141.45 572.441 142.753C573.522 143.772 574.552 145.446 574.192 147.166C573.71 149.474 571.554 150.983 569.976 150.937C568.397 150.892 566.127 149.406 566.127 147.845C566.127 145.65 567.965 144.088 569.457 144.631C569.457 144.631 571.396 145.266 571.619 146.351C571.831 147.379 571.43 148.388 570.495 148.773C569.572 149.152 568.224 148.876 568.116 147.845C568.047 147.184 568.264 146.425 568.894 146.351C569.412 146.291 569.867 146.634 569.976 147.166"
                stroke="#FFF4DF"
              />
              <circle cx="578.5" cy="255.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M570.348 240.696C574.882 239.165 585.346 238.008 590.934 245.629C597.918 255.156 593.961 270.644 583.192 271.621C573.721 272.481 561.179 269.073 562.325 257.351C563.471 245.629 570.348 242.861 577.116 242.57C584.903 242.234 594.469 250.144 591.32 260.451C588.836 268.581 579.319 271.92 573.007 269.073C563.925 264.977 564.942 260.949 566.39 255.088C567.839 249.227 570.397 244.847 578.976 245.629C584.856 246.165 589.592 253.338 588.905 258.166C587.768 266.157 579.322 268.96 574.716 266.765C570.11 264.57 567.558 260.112 568.596 256.175C570.198 250.096 575.387 247.54 580.251 249.454C584.025 250.938 586.741 254.354 585.917 258.483C585.195 262.1 581.333 264.958 578.976 264.958C576.619 264.958 574.287 263.982 573.007 261.651C571.369 258.665 572.186 255.36 575.581 253.255C577.585 252.013 580.057 252.45 581.441 253.753C582.522 254.772 583.552 256.446 583.192 258.166C582.71 260.474 580.554 261.983 578.976 261.937C577.397 261.892 575.127 260.406 575.127 258.845C575.127 256.65 576.965 255.088 578.457 255.631C578.457 255.631 580.396 256.266 580.619 257.351C580.831 258.379 580.43 259.388 579.495 259.773C578.572 260.152 577.224 259.876 577.116 258.845C577.047 258.184 577.264 257.425 577.894 257.351C578.412 257.291 578.867 257.634 578.976 258.166"
                stroke="#FFF4DF"
              />
              <circle cx="541.5" cy="342.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M533.348 327.696C537.882 326.165 548.346 325.008 553.934 332.629C560.918 342.156 556.961 357.644 546.192 358.621C536.721 359.481 524.179 356.073 525.325 344.351C526.471 332.629 533.348 329.861 540.116 329.57C547.903 329.234 557.469 337.144 554.32 347.451C551.836 355.581 542.319 358.92 536.007 356.073C526.925 351.977 527.942 347.949 529.39 342.088C530.839 336.227 533.397 331.847 541.976 332.629C547.856 333.165 552.592 340.338 551.905 345.166C550.768 353.157 542.322 355.96 537.716 353.765C533.11 351.57 530.558 347.112 531.596 343.175C533.198 337.096 538.387 334.54 543.251 336.454C547.025 337.938 549.741 341.354 548.917 345.483C548.195 349.1 544.333 351.958 541.976 351.958C539.619 351.958 537.287 350.982 536.007 348.651C534.369 345.665 535.186 342.36 538.581 340.255C540.585 339.013 543.057 339.45 544.441 340.753C545.522 341.772 546.552 343.446 546.192 345.166C545.71 347.474 543.554 348.983 541.976 348.937C540.397 348.892 538.127 347.406 538.127 345.845C538.127 343.65 539.965 342.088 541.457 342.631C541.457 342.631 543.396 343.266 543.619 344.351C543.831 345.379 543.43 346.388 542.495 346.773C541.572 347.152 540.224 346.876 540.116 345.845C540.047 345.184 540.264 344.425 540.894 344.351C541.412 344.291 541.867 344.634 541.976 345.166"
                stroke="#FFF4DF"
              />
              <circle cx="442.5" cy="400.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M434.348 385.696C438.882 384.165 449.346 383.008 454.934 390.629C461.918 400.156 457.961 415.644 447.192 416.621C437.721 417.481 425.179 414.073 426.325 402.351C427.471 390.629 434.348 387.861 441.116 387.57C448.903 387.234 458.469 395.144 455.32 405.451C452.836 413.581 443.319 416.92 437.007 414.073C427.925 409.977 428.942 405.949 430.39 400.088C431.839 394.227 434.397 389.847 442.976 390.629C448.856 391.165 453.592 398.338 452.905 403.166C451.768 411.157 443.322 413.96 438.716 411.765C434.11 409.57 431.558 405.112 432.596 401.175C434.198 395.096 439.387 392.54 444.251 394.454C448.025 395.938 450.741 399.354 449.917 403.483C449.195 407.1 445.333 409.958 442.976 409.958C440.619 409.958 438.287 408.982 437.007 406.651C435.369 403.665 436.186 400.36 439.581 398.255C441.585 397.013 444.057 397.45 445.441 398.753C446.522 399.772 447.552 401.446 447.192 403.166C446.71 405.474 444.554 406.983 442.976 406.937C441.397 406.892 439.127 405.406 439.127 403.845C439.127 401.65 440.965 400.088 442.457 400.631C442.457 400.631 444.396 401.266 444.619 402.351C444.831 403.379 444.43 404.388 443.495 404.773C442.572 405.152 441.224 404.876 441.116 403.845C441.047 403.184 441.264 402.425 441.894 402.351C442.412 402.291 442.867 402.634 442.976 403.166"
                stroke="#FFF4DF"
              />
              <circle cx="328.5" cy="384.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M320.348 369.696C324.882 368.165 335.346 367.008 340.934 374.629C347.918 384.156 343.961 399.644 333.192 400.621C323.721 401.481 311.179 398.073 312.325 386.351C313.471 374.629 320.348 371.861 327.116 371.57C334.903 371.234 344.469 379.144 341.32 389.451C338.836 397.581 329.319 400.92 323.007 398.073C313.925 393.977 314.942 389.949 316.39 384.088C317.839 378.227 320.397 373.847 328.976 374.629C334.856 375.165 339.592 382.338 338.905 387.166C337.768 395.157 329.322 397.96 324.716 395.765C320.11 393.57 317.558 389.112 318.596 385.175C320.198 379.096 325.387 376.54 330.251 378.454C334.025 379.938 336.741 383.354 335.917 387.483C335.195 391.1 331.333 393.958 328.976 393.958C326.619 393.958 324.287 392.982 323.007 390.651C321.369 387.665 322.186 384.36 325.581 382.255C327.585 381.013 330.057 381.45 331.441 382.753C332.522 383.772 333.552 385.446 333.192 387.166C332.71 389.474 330.554 390.983 328.976 390.937C327.397 390.892 325.127 389.406 325.127 387.845C325.127 385.65 326.965 384.088 328.457 384.631C328.457 384.631 330.396 385.266 330.619 386.351C330.831 387.379 330.43 388.388 329.495 388.773C328.572 389.152 327.224 388.876 327.116 387.845C327.047 387.184 327.264 386.425 327.894 386.351C328.412 386.291 328.867 386.634 328.976 387.166"
                stroke="#FFF4DF"
              />
              <circle cx="250.5" cy="313.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M242.348 298.696C246.882 297.165 257.346 296.008 262.934 303.629C269.918 313.156 265.961 328.644 255.192 329.621C245.721 330.481 233.179 327.073 234.325 315.351C235.471 303.629 242.348 300.861 249.116 300.57C256.903 300.234 266.469 308.144 263.32 318.451C260.836 326.581 251.319 329.92 245.007 327.073C235.925 322.977 236.942 318.949 238.39 313.088C239.839 307.227 242.397 302.847 250.976 303.629C256.856 304.165 261.592 311.338 260.905 316.166C259.768 324.157 251.322 326.96 246.716 324.765C242.11 322.57 239.558 318.112 240.596 314.175C242.198 308.096 247.387 305.54 252.251 307.454C256.025 308.938 258.741 312.354 257.917 316.483C257.195 320.1 253.333 322.958 250.976 322.958C248.619 322.958 246.287 321.982 245.007 319.651C243.369 316.665 244.186 313.36 247.581 311.255C249.585 310.013 252.057 310.45 253.441 311.753C254.522 312.772 255.552 314.446 255.192 316.166C254.71 318.474 252.554 319.983 250.976 319.937C249.397 319.892 247.127 318.406 247.127 316.845C247.127 314.65 248.965 313.088 250.457 313.631C250.457 313.631 252.396 314.266 252.619 315.351C252.831 316.379 252.43 317.388 251.495 317.773C250.572 318.152 249.224 317.876 249.116 316.845C249.047 316.184 249.264 315.425 249.894 315.351C250.412 315.291 250.867 315.634 250.976 316.166"
                stroke="#FFF4DF"
              />
              <circle cx="231.5" cy="204.5" r="18.5" fill="#8C1C1C" />
              <path
                d="M223.348 189.696C227.882 188.165 238.346 187.008 243.934 194.629C250.918 204.156 246.961 219.644 236.192 220.621C226.721 221.481 214.179 218.073 215.325 206.351C216.471 194.629 223.348 191.861 230.116 191.57C237.903 191.234 247.469 199.144 244.32 209.451C241.836 217.581 232.319 220.92 226.007 218.073C216.925 213.977 217.942 209.949 219.39 204.088C220.839 198.227 223.397 193.847 231.976 194.629C237.856 195.165 242.592 202.338 241.905 207.166C240.768 215.157 232.322 217.96 227.716 215.765C223.11 213.57 220.558 209.112 221.596 205.175C223.198 199.096 228.387 196.54 233.251 198.454C237.025 199.938 239.741 203.354 238.917 207.483C238.195 211.1 234.333 213.958 231.976 213.958C229.619 213.958 227.287 212.982 226.007 210.651C224.369 207.665 225.186 204.36 228.581 202.255C230.585 201.013 233.057 201.45 234.441 202.753C235.522 203.772 236.552 205.446 236.192 207.166C235.71 209.474 233.554 210.983 231.976 210.937C230.397 210.892 228.127 209.406 228.127 207.845C228.127 205.65 229.965 204.088 231.457 204.631C231.457 204.631 233.396 205.266 233.619 206.351C233.831 207.379 233.43 208.388 232.495 208.773C231.572 209.152 230.224 208.876 230.116 207.845C230.047 207.184 230.264 206.425 230.894 206.351C231.412 206.291 231.867 206.634 231.976 207.166"
                stroke="#FFF4DF"
              />
            </svg>
          </div>
          <div className="selkie-card">
            <Mask className="selkie-mask">
              <SlidingBar className="slide-Y"></SlidingBar>
              <SlidingBar className="slide-Y"></SlidingBar>
              <SlidingBar className="slide-Y"></SlidingBar>
              <SlidingBar className="slide-Y"></SlidingBar>
              <SlidingBar className="slide-Y"></SlidingBar>
              <SlidingBar className="slide-Y"></SlidingBar>
            </Mask>
            <svg
              viewBox="0 0 832 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-5.5 272.5L2 267.5C3.5 266.5 6.5 263.5 6.5 259.5C6.5 254.5 -2 250.5 4.5 249C11 247.5 14.5 245.5 13 244C11.5 242.5 15.5 240.5 18 239.5C20.5 238.5 15.5 235 18 233.5C19.9612 232.323 19.839 229.768 19.5192 228.57C19.7181 229.228 20.455 230.045 22 228.5C24 226.5 23 226.5 22.5 225C22 223.5 19.5 224.5 21.5 223C23.5 221.5 20 221.5 21.5 220.5C23 219.5 22 219.5 25 219C28 218.5 28 219.5 30.5 219C33 218.5 36.5 217 37.5 216.5C38.5 216 29 218 27.5 218C26 218 27 216 29.5 215.5C32 215 34 215 35.5 215C37 215 39 215 39.5 214C40 213 37 213 39 212.5C39.8 211.3 39 210 38.5 209.5C39.1667 209.167 40.7 208.5 41.5 208.5C42.5 208.5 40 207 40.5 206.5C41 206 41.5 205 42.5 206C43.5 207 43.5 208 44.5 208C45.5 208 48 208 47 207C46 206 43.5 207.5 44 206C44.4 204.8 46.5 204.167 47.5 204C48 204.333 49.3 204.7 50.5 203.5C52 202 53 201.5 50.5 201.5C48 201.5 44.5 202 48.5 200.5C52.5 199 50 198 50.5 195.5C51 193 51.5 191.5 51 191C50.5 190.5 50 191 50 190C50 189 50 189 51 188.5C52 188 52 188 51.5 187C51 186 53 186 54 186C55 186 53 185.5 54 185C55 184.5 56.5 184.5 57.5 184.5C58.5 184.5 58.5 184 57.5 183.5C56.5 183 55 181.5 58.5 181.5C62 181.5 63 182.5 62.5 181C62 179.5 59.5 179 59 179C58.5 179 63 178 64 178.5C65 179 66 179.5 67 179C68 178.5 66.5 177.5 66 177.5C65.5 177.5 68 176.5 68.5 176.5C69 176.5 70.5 175.5 70.5 174.5C70.5 173.5 72 172.5 73 172.5H77C78 172.5 83 171.5 85 171.5H75.5C75 171.5 84.5 170.5 85.5 170.5C86.5 170.5 85.5 171.5 88 170.5C90.5 169.5 94 168.5 91.5 168.5C89 168.5 88 167 87 167C86 167 90 164.5 91.5 164.5C93 164.5 96 164 98 164C100 164 101 163.5 102.5 163.5C104 163.5 105.5 162.5 107 162.5C108.5 162.5 102.5 162 101.5 162C100.5 162 105.5 162 107 161.5C108.5 161 109.5 161 110.5 160C111.5 159 112.5 159 113 159C113.4 159 115.167 157 116 156L110.5 153L-6 156L-5.5 272.5Z"
                fill="#590000"
              />
              <path
                d="M91.4999 139C90.0718 137.961 87.167 136.174 84.8183 135.624C83.0514 135.662 82.175 135.638 82.9999 135.5C83.5304 135.412 84.152 135.468 84.8183 135.624C89.4768 135.526 100.325 135 102.5 135C105.5 135 82.5 134.5 83 134C83.5 133.5 133.5 134 129.5 132.5C126.3 131.3 111.167 130.333 104 130C116.667 130.333 141.6 130.7 140 129.5C138 128 112 128 112.5 127.5C112.9 127.1 138.333 126.333 151 126L142 123.5C148.167 122.167 160.7 119.3 161.5 118.5C162.3 117.7 138.833 114.833 127 113.5H45.5L32 123.5L56 145.5L91.4999 139Z"
                fill="#590000"
              />
              <path
                d="M22.5 88.4999C20.5 90.0999 16.3333 90.8332 14.5 90.9999L26.5 107C40.1667 108 67.9 109.8 69.5 109C71.1 108.2 102.833 109.333 118.5 110L166.5 107C166.167 106.833 165.2 106.3 164 105.5C162.8 104.7 159.167 104.167 157.5 104L154.5 102C152.667 101.833 148.7 101.4 147.5 101C146 100.5 142.5 100.5 140 98.5C137.5 96.5 133 95.5 131.5 95.5C130 95.5 129 95.5 123 96.5C117 97.5 114 95.5 110 94.5C106 93.5 108 90.9999 106.5 90.9999H102C101 90.9999 98 91.5 90.5 90.4999C86.9678 90.0289 86.037 87.4925 86 86.5C85.8497 86.5056 84.7253 88.59 84.5 88.4999C82.5 87.6998 77.6667 87.1666 75.5 87C73 87.1667 67.7 87.1 66.5 85.4999C65 83.4998 59.5 84 53.5 81.9999C47.5 79.9998 48.5 83.4999 46 82.9999C43.5 82.4999 48.5 78.9999 46 79.4999C43.5 79.9999 42.5 85.4999 42 85.4999C41.5 85.4999 39 86.9999 36.5 85.4999C34 83.9999 33.5 81.9999 32 81.9999C30.5 81.9999 34 85.9999 30 85.4999C26 84.9999 25 86.4999 22.5 88.4999Z"
                fill="#590000"
              />
              <path
                d="M419.5 107.5C419.5 107 419.9 106 421.5 106C423.5 106 424 106 424.5 105.5C424.9 105.1 427.667 106.333 429 107C430.833 107.167 434.7 107.6 435.5 108C436.5 108.5 438 108.5 438.5 108.5C439 108.5 443 109.5 443.5 109C444 108.5 447.5 108.5 448 108.5C448.5 108.5 450.5 108.5 451 109C451.4 109.4 454.5 110.5 456 111L458.5 110.5L467.5 112.5H479C481.5 112.333 486.9 111.8 488.5 111C490.5 110 488.5 110 492.5 108.5C496.5 107 505 105.5 506.5 106C508 106.5 513 106.5 514.5 107C516 107.5 514.5 108.5 516.5 108.5C518.5 108.5 525.5 106 526 106C526.5 106 531 105 533.5 105C536 105 537.5 105.5 539 106C540.5 106.5 541 107 542 107C543 107 543.5 107 545.5 106.5C547.1 106.1 548.5 106 549 106C551.5 106.167 556.9 106.6 558.5 107C560.5 107.5 560.5 107 563 107.5C565.5 108 567 109 569 109C571 109 571.5 108.5 574.5 108.5C577.5 108.5 580 109.5 580.5 109C581 108.5 579.5 106.5 581.5 108C583.5 109.5 587.5 110 590 110C592.5 110 591.5 109.5 593.5 109.5C595.5 109.5 597 110.5 597.5 110.5C598 110.5 612 111 613.5 111C615 111 614 111 616 111.5C618 112 620 112.5 622 112C624 111.5 630.5 112.5 632.5 111.5C634.5 110.5 636 110 637 110.5C638 111 639.5 112 640 112C640.5 112 649.5 111.5 650 111.5C650.4 111.5 651.833 112.167 652.5 112.5L601.5 113H521H483.5L419.5 112.5V107.5Z"
                fill="#FAD07D"
              />
              <path
                d="M385 109.5C385.333 108.833 386.4 107.6 388 108C390 108.5 391.5 107.5 392.5 107.5C393.5 107.5 397 108 397.5 108H402C403.5 108 406 108.5 407.5 108C409 107.5 412.5 109 414 108C415.2 107.2 416.833 106.333 417.5 106C419.667 106.5 424.5 107.6 426.5 108C429 108.5 431.5 110 433.5 110C435.5 110 442.5 110.5 443.5 110.5C444.5 110.5 446 110.5 447 111C448 111.5 449 112.5 450 112.5C451 112.5 456 112 457.5 111.5C459 111 461.5 109.5 463 109.5C464.5 109.5 467 109.5 468.5 110C470 110.5 472.5 111.5 473.5 111C474.3 110.6 476.167 109.833 477 109.5C477.667 110.167 479.2 111.5 480 111.5C481 111.5 485 111 485.5 111C485.9 111 488 111.333 489 111.5H500.5C502 111.5 503 111.5 504 112C504.8 112.4 509 113.167 511 113.5H521.5L527.5 111.5C529 111 529.5 110 532.5 110.5C535.5 111 543 111.5 544 111.5C545 111.5 550.5 110 552.5 110C554.5 110 556.5 109.5 558 110C559.5 110.5 558.5 109.5 561.5 110.5C564.5 111.5 569 111.5 569.5 111.5C570 111.5 574 111 575 111C576 111 580.499 111 581.249 111.5C581.85 111.9 582 112.333 582 112.5L541 115H513L505.5 113.5L498 112.5L428 114L385 111V109.5Z"
                fill="#590000"
              />
              <path
                d="M37.5 123C53 120.667 86.6 116.2 97 117C110 118 122.5 120 145 120C167.5 120 173.5 117 189 117C204.5 117 244.5 115.5 255 115.5C265.5 115.5 294 112.5 297 115.5C300 118.5 306.5 115.5 314 115.5C321.5 115.5 340.5 117 351.5 117C362.5 117 454.5 115.5 462 115.5C469.5 115.5 496.5 112.5 503 114C509.5 115.5 510.5 115.5 518 115.5C525.5 115.5 558 117 564.5 115.5C571 114 572.5 114 580 114H622.5H650.5C656 114 667.5 112 670 112H578C568.5 112 395.5 112.5 390 109.5C384.5 106.5 354 106 347.5 105.5C341 105 327.4 102.665 318.5 104C308.5 105.5 297 107 290.5 104C285.052 101.486 214.5 101.5 203.5 105.5C192.5 109.5 172 103.5 169.5 105.5C167 107.5 77.5 105.5 68.5 105.5C61.3 105.5 31.1667 103.167 17 102L37.5 123Z"
                fill="#8C1C1C"
              />
              <path
                d="M-3 68.5002C-0.666667 68.1668 4 68.1002 4 70.5002C4 73.5002 11.5 72.5 12 76C12.5 79.5 12 83 14.5 85C17 87 20.5 89 21 91C21.5 93 20 90.5 25 98.5C30 106.5 31.5 105.5 34.5 109.5C37.5 113.5 38.5 116.5 40 118C41.5 119.5 43.5 122.5 46 124C48.5 125.5 51 127.5 54 128C57 128.5 58.5 129 62.5 131.5C66.5 134 68 135.5 79 137.5C90 139.5 90.5 135 93.5 137.5C95.9 139.5 101.167 144 103.5 146C106.833 146.167 113.8 147 115 149C116.5 151.5 118 154.5 116.5 156C115 157.5 88 153.5 86 156C84 158.5 83 157 81 159.5C79 162 80.5 164 76 163.5C71.5 163 69 158.5 62.5 161C55.7 165 48.6667 170.333 46 172.5H32H14.5C9.7 172.5 3.5 170.833 1 170H-6L-3 68.5002Z"
                fill="#8C1C1C"
              />
              <circle cx="738.5" cy="10.5" r="34.5" fill="#FAD07D" />
              <path
                d="M723.297 -17.1067C731.752 -19.9623 751.267 -22.1201 761.687 -7.90693C774.713 9.85955 767.333 38.7414 747.251 40.5647C729.588 42.1683 706.199 35.813 708.336 13.953C710.473 -7.90694 723.297 -13.0687 735.919 -13.6126C750.441 -14.2384 768.28 0.512835 762.407 19.7342C757.775 34.8957 740.028 41.1213 728.257 35.813C711.32 28.1746 713.215 20.6629 715.917 9.73295C718.619 -1.19702 723.39 -9.36497 739.387 -7.90693C750.353 -6.90749 759.184 6.46791 757.904 15.4722C755.784 30.3742 740.032 35.602 731.443 31.5085C722.853 27.415 718.095 19.1015 720.031 11.7586C723.019 0.423434 732.694 -4.34292 741.766 -0.775015C748.803 1.99236 753.868 8.36258 752.332 16.0631C750.985 22.8091 743.783 28.1379 739.387 28.1379C734.991 28.1379 730.643 26.319 728.257 21.9711C725.201 16.4031 726.725 10.2394 733.056 6.3147C736.793 3.99825 741.403 4.81236 743.984 7.24311C746 9.14214 747.921 12.265 747.251 15.4722C746.351 19.7767 742.331 22.59 739.387 22.5056C736.443 22.4212 732.209 19.6501 732.209 16.7383C732.209 12.6448 735.637 9.73295 738.419 10.7458C738.419 10.7458 742.036 11.9294 742.452 13.953C742.846 15.8697 742.098 17.7508 740.355 18.4685C738.634 19.1767 736.121 18.6613 735.919 16.7383C735.789 15.5067 736.194 14.0912 737.371 13.953C738.335 13.8397 739.184 14.4794 739.387 15.4722"
                stroke="#8C1C1C"
              />
              <path
                d="M813 156.5H833.5L835.5 128H733L709 126L702 127H691C689.936 127.266 688.392 127.645 687.359 127.881C690.244 127.722 698.177 128.5 699.5 128.5C701 128.5 684 130 687 130.5C690 131 697 130 700.5 130H707.5L706.5 132C707 132.167 708.5 132.4 710.5 132C713 131.5 714.5 132.5 719 133.5C722.6 134.3 726.833 135.167 728.5 135.5C725 135.5 718.759 136.247 718 136.5C716.5 137 724 136.5 727 136.5C729.4 136.5 722.667 137.5 719 138C721.833 138.167 728.4 138.4 732 138C736.5 137.5 743.5 138.5 744 139C744.4 139.4 752.167 140.833 756 141.5C746.833 141.167 727.5 141.833 727 142.5C726.5 143.167 764 142 765 142.5C766 143 753.5 144 757 144C760.5 144 779.5 144.5 783.5 145.5C783 146.5 780.5 146.5 777.5 146.5H765.5C767 146.5 772 147.5 775.5 147.5C778.3 147.5 782.333 149.167 784 150C788.167 149.833 797.6 149.4 802 149C807.5 148.5 811.5 151 808 151C804.5 151 805 152 794 151C783 150 798 153 800.5 153H811.5C816.5 153 829.5 154.5 827 154.5C824.5 154.5 810.5 156.5 813 156.5Z"
                fill="#590000"
              />
              <path
                d="M694.5 132C695.018 131.482 696.265 131.635 697.395 131.943L694.675 131C694.117 131.167 692.9 131.5 692.5 131.5H690C688.5 131.5 687.5 132 686.721 131.5C685.943 131 685 131.5 684 131C683 130.5 672 131.5 673 131.5C674 131.5 678 132 680 132L684 132C684.5 132 686 132.5 687.359 133C688.719 133.5 690 133.5 691 133.5C692 133.5 693.5 133 694.5 132Z"
                fill="#590000"
              />
              <path
                d="M832.5 100.5C831 101 823 101 822.5 102.5C822 104 820.5 104 818.5 104C816.5 104 817 101 814.5 102.5C812 104 808 103 805.5 104C803 105 800.5 105.5 798 105.5C795.5 105.5 795 106 793.5 105.5C792 105 785 105 783 106.5C779.5 110.5 781 111 776.5 111C772 111 772.5 108 769 110C765.5 112 768 111.5 763 112.5C758 113.5 753.5 113.5 752 113.5H746C743 113.5 743 114.5 741.5 114.5C740.3 114.5 738.333 113.833 737.5 113.5C737 113.167 735.7 112.9 734.5 114.5C733 116.5 731.5 116.5 730 116.5C728.5 116.5 723 116 722 117C721 118 723 119 719.5 120C716 121 709 120 708 122C707 124 706.5 126.5 704.5 126C702.5 125.5 699.5 126 697 126C694.5 126 691 125 689 126.5C687 128 682.5 127.5 681 128C679.5 128.5 694.5 127 699.5 128C704.5 129 707 126.5 712 128C717 129.5 719 128 723 130C727 132 729.5 132.5 734.5 133C739.5 133.5 743 132.5 746 132C749 131.5 757.5 132 764 132C770.5 132 770 132.5 776.5 133.5C783 134.5 793 134 795.5 133.5C798 133 803.5 133.5 810 133.5C816.5 133.5 817.5 130.5 820.5 134.5C823.5 138.5 826 141.5 827 141.5C828 141.5 829.5 142.5 831.5 141.5C833.1 140.7 835.167 139.5 836 139L832.5 100.5Z"
                fill="#8C1C1C"
              />
            </svg>
          </div>
          <div className="triskelion-card">
            <Mask className="trisk-mask">
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
              <SlideAcross className="slide-across"></SlideAcross>
            </Mask>
            <svg
              height="100%"
              width="100%"
              viewBox="0 0 505 498"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M415 249.5C415 339.246 342.246 412 252.5 412C162.754 412 90 339.246 90 249.5C90 159.754 162.754 87 252.5 87C342.246 87 415 159.754 415 249.5Z"
                fill="#FAD07D"
              />
              <path
                d="M438.5 249.5C438.5 352.225 355.225 435.5 252.5 435.5C149.775 435.5 66.5 352.225 66.5 249.5C66.5 146.775 149.775 63.5 252.5 63.5C355.225 63.5 438.5 146.775 438.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M463.5 249.5C463.5 366.032 369.032 460.5 252.5 460.5C135.968 460.5 41.5 366.032 41.5 249.5C41.5 132.968 135.968 38.5 252.5 38.5C369.032 38.5 463.5 132.968 463.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M488.5 249.5C488.5 379.839 382.839 485.5 252.5 485.5C122.161 485.5 16.5 379.839 16.5 249.5C16.5 119.161 122.161 13.5 252.5 13.5C382.839 13.5 488.5 119.161 488.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M513.5 249.5C513.5 393.646 396.646 510.5 252.5 510.5C108.354 510.5 -8.5 393.646 -8.5 249.5C-8.5 105.354 108.354 -11.5 252.5 -11.5C396.646 -11.5 513.5 105.354 513.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M538.5 249.5C538.5 407.453 410.453 535.5 252.5 535.5C94.5466 535.5 -33.5 407.453 -33.5 249.5C-33.5 91.5466 94.5466 -36.5 252.5 -36.5C410.453 -36.5 538.5 91.5466 538.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M563.5 249.5C563.5 421.261 424.261 560.5 252.5 560.5C80.7394 560.5 -58.5 421.261 -58.5 249.5C-58.5 77.7394 80.7394 -61.5 252.5 -61.5C424.261 -61.5 563.5 77.7394 563.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M588.5 249.5C588.5 435.068 438.068 585.5 252.5 585.5C66.9323 585.5 -83.5 435.068 -83.5 249.5C-83.5 63.9323 66.9323 -86.5 252.5 -86.5C438.068 -86.5 588.5 63.9323 588.5 249.5Z"
                stroke="#FAD07D"
                stroke-width="3"
              />
              <path
                d="M221.153 269.466C234.671 253.413 243.965 240.741 248.611 217.929C256.637 240.741 261.67 248.822 278.604 266.086C256.614 263.578 242.697 264.397 221.153 269.466Z"
                fill="#590000"
              />
              <path
                d="M221.153 269.466C234.671 253.413 243.965 240.741 248.611 217.929M221.153 269.466C242.697 264.397 256.614 263.578 278.604 266.086M221.153 269.466C157.367 305.794 184.402 393.237 247.344 393.237C319.579 393.237 323.381 286.389 253.258 285.518C197.925 284.831 191.584 369.581 248.189 369.581C288.32 369.581 292.121 310.019 253.258 310.019C226.223 310.019 225.8 345.503 248.189 345.503C260.374 345.503 259.172 331.14 251.991 331.14M248.611 217.929C256.637 240.741 261.67 248.822 278.604 266.086M248.611 217.929C246.5 128.373 148.823 131.231 127.375 178.642C95.2703 249.61 193.464 296.077 221.153 230.178C241.743 181.177 176.376 146.41 150.186 186.669C126.598 222.926 179.812 257.136 197.498 225.11C213.128 196.807 179.401 186.669 170.885 198.497C161.591 211.404 178.066 219.618 180.178 210.747M278.604 266.086C348.304 306.216 409.466 231.497 373.227 179.065C333.519 121.614 244.81 171.884 280.716 233.56C306.85 278.45 383.366 242.007 353.373 192.16C334.056 160.056 280.716 185.402 299.303 217.929C305.578 228.912 316.2 231.869 325.071 228.912C333.942 225.955 339.69 213.872 334.364 205.678C328.873 197.23 316.2 201.031 319.579 209.058"
                stroke="#590000"
                stroke-width="4"
              />
            </svg>
          </div>
          <div className="leaf-card">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 221 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.40302 8.83793C21.8506 10.7792 31.2887 19.0489 32.9393 11.3175C34.3399 4.75712 17.0029 2.42756 17.939 1.25558C23.082 -5.18298 39.3091 3.22502 38.9397 -5.00713C38.7014 -10.3169 27.3793 -9.76177 26.9886 -10.0738C26.2629 -10.6535 40.2732 -17.8926 36.6623 -22.1846C35.021 -24.1355 33.1203 -22.0785 32.3673 -22.4156C31.4246 -22.8376 32.2077 -27.0226 28.4582 -28.7377C24.7088 -30.4528 22.7602 -25.6099 22.3696 -25.922C21.578 -26.5543 21.6306 -29.3462 19.7897 -29.9025C14.6348 -31.4604 17.1209 -15.3453 15.7402 -15.2191C14.3596 -15.0929 15.1089 -24.0425 7.29792 -27.082C1.02903 -29.5214 14.3444 -2.25566 12.5483 -2.41045C11.3081 -2.51733 3.55428 -21.1133 -3.00226 -17.3914C-10.0271 -13.4038 2.7888 -0.607149 7.40302 8.83793Z"
                fill="#FAD07D"
              />
              <path
                d="M-5.23153 35.4938C0.741344 36.2519 10.1378 37.7375 10.6574 35.2921C11.3674 31.951 4.04888 30.3096 4.25663 29.3314C4.46438 28.3532 14.9001 24.9481 14.8575 20.3385C14.8301 17.3838 7.6253 18.2905 7.72914 17.8014C7.83298 17.3123 16.1207 15.9877 16.4164 13.0023C16.8627 8.49668 10.8593 10.2879 10.4741 9.6949C10.089 9.10188 15.9395 7.69402 14.937 5.53163C13.8855 3.26353 10.4185 4.45154 10.1501 4.00324C10.026 3.79583 11.5681 0.974868 10.5964 -0.502407C10.1166 -1.23198 9.40401 -1.22295 8.84799 -1.89629C7.84559 -3.11016 9.18946 -5.84748 7.61919 -5.73557C6.64535 -5.66616 6.27025 -4.19861 5.73623 -4.09104C5.2022 -3.98348 4.53584 -4.70323 3.77991 -4.50677C2.26803 -4.11386 3.39302 -0.891611 2.94846 -0.594139C2.16131 -0.067439 0.299909 -2.65615 -1.34932 -2.0186C-3.88607 -1.03796 0.337974 4.47394 -0.255035 4.85908C-0.848044 5.24422 -3.26662 2.42382 -5.42704 2.73768C-9.66499 3.35336 -1.22099 11.8101 -3.10396 13.4546C-3.7316 14.0028 -8.15373 10.6272 -11.834 13.6441C-14.31 15.6738 -0.884794 24.6607 -2.76776 26.3052C-3.39541 26.8534 -9.13798 17.7952 -13.4663 18.9201C-14.5362 26.3602 -8.44743 29.0213 -5.23153 35.4938Z"
                fill="#8C1C1C"
              />
              <path
                d="M-6.72935 37.7313C-6.72935 37.7313 -5.81647 36.3676 -5.23153 35.4938M-5.23153 35.4938C0.741344 36.2519 10.1378 37.7375 10.6574 35.2921C11.3674 31.951 4.04888 30.3096 4.25663 29.3314C4.46438 28.3532 14.9001 24.9481 14.8575 20.3385C14.8301 17.3838 7.6253 18.2905 7.72914 17.8014C7.83298 17.3123 16.1207 15.9877 16.4164 13.0023C16.8627 8.49668 10.8593 10.2879 10.4741 9.6949C10.089 9.10188 15.9395 7.69402 14.937 5.53163C13.8855 3.26353 10.4185 4.45154 10.1501 4.00324C10.026 3.79583 11.5681 0.974869 10.5964 -0.502407C10.1166 -1.23198 9.40401 -1.22295 8.84799 -1.89629C7.84559 -3.11016 9.18946 -5.84748 7.61919 -5.73557C6.64535 -5.66616 6.27025 -4.19861 5.73623 -4.09104C5.2022 -3.98348 4.53584 -4.70323 3.77991 -4.50677C2.26803 -4.11386 3.39302 -0.891611 2.94846 -0.594139C2.16132 -0.0674387 0.299909 -2.65615 -1.34932 -2.0186C-3.88606 -1.03796 0.337974 4.47394 -0.255035 4.85908C-0.848044 5.24422 -3.26662 2.42382 -5.42704 2.73768C-9.66499 3.35336 -1.22099 11.8101 -3.10396 13.4546C-3.7316 14.0028 -8.15373 10.6272 -11.834 13.6441C-14.31 15.6738 -0.884794 24.6607 -2.76776 26.3052C-3.39541 26.8534 -9.13798 17.7952 -13.4663 18.9201C-14.5362 26.3602 -8.44743 29.0213 -5.23153 35.4938Z"
                stroke="#8C1C1C"
              />
              <path
                d="M0.00817622 167.877C-7.25102 163.442 -19.9362 161.038 -18.5801 156.52C-17.1645 151.804 -11.1775 154.311 -10.6585 153.438C-10.3991 153.002 -16.4226 145.632 -13.1956 143.348C-11.513 142.157 -10.3597 143.583 -9.9959 143.46C-9.63211 143.337 -8.75321 138.331 -5.86678 137.12C-1.74305 135.389 -3.44399 140.658 -3.10521 140.811C-2.68626 141 0.37621 137.877 2.04946 138.648C5.35575 140.17 1.84523 148.092 2.41777 148.193C2.9903 148.294 5.59232 144.096 7.51904 145.325C10.4995 147.227 2.94135 159.07 0.00817622 167.877Z"
                fill="#590000"
              />
              <path
                d="M1.41288 172.38C1.41288 172.38 0.556749 169.635 0.00817622 167.877M0.00817622 167.877C-7.25102 163.442 -19.9362 161.038 -18.5801 156.52C-17.1645 151.804 -11.1775 154.311 -10.6585 153.438C-10.3991 153.002 -16.4226 145.632 -13.1956 143.348C-11.513 142.157 -10.3597 143.583 -9.9959 143.46C-9.63211 143.337 -8.75321 138.331 -5.86678 137.12C-1.74305 135.389 -3.44399 140.658 -3.10521 140.811C-2.68626 141 0.37621 137.877 2.04946 138.648C5.35575 140.17 1.84523 148.092 2.41777 148.193C2.9903 148.294 5.59232 144.096 7.51904 145.325C10.4995 147.227 2.94135 159.07 0.00817622 167.877Z"
                stroke="#590000"
              />
              <path
                d="M13.6467 191.286C17.9611 183.728 24.5098 181.385 20.7653 177.574C17.588 174.339 12.4108 183.409 11.9989 182.438C9.73613 177.105 17.8999 170.924 13.43 168.084C10.547 166.252 8.27223 172.945 8.01728 173.054C7.54368 173.254 6.86754 162.543 3.76103 163.021C2.34897 163.239 3.0134 165.09 2.66285 165.397C2.22395 165.78 0.172045 163.78 -1.593 165.293C-3.35804 166.805 -1.22019 169.717 -1.47514 169.825C-1.99172 170.044 -3.46728 168.979 -4.18163 169.828C-6.18197 172.204 2.96841 176.753 2.72218 177.591C2.47595 178.429 -2.12215 174.682 -5.5149 178.031C-8.23784 180.719 9.31208 183.196 8.82183 184.168C8.48332 184.839 -3.1848 182.389 -2.69037 187.525C-2.16062 193.028 7.56689 190.429 13.6467 191.286Z"
                fill="#FAD07D"
              />
              <path
                d="M31.1296 214.44C34.5635 209.925 40.1761 202.929 38.6704 201.606C36.6133 199.799 31.8939 205.068 31.2915 204.539C30.6892 204.01 33.2905 194.369 29.9579 192.696C27.8218 191.624 24.9881 197.746 24.6869 197.481C24.3858 197.217 27.443 190.071 25.441 188.728C22.4196 186.701 20.8026 192.185 20.1903 192.275C19.5779 192.365 21.3963 187.145 19.3577 187.149C17.2195 187.154 16.396 190.378 15.9441 190.428C15.735 190.45 14.4541 188.168 12.9227 188.401C12.1664 188.516 11.8282 189.092 11.0754 189.289C9.71839 189.644 8.40168 187.551 7.72252 188.854C7.30133 189.662 8.17432 190.506 7.99329 190.975C7.81226 191.444 6.9728 191.712 6.74829 192.392C6.29928 193.752 9.15863 194.041 9.15732 194.508C9.155 195.336 6.39463 195.872 6.05495 197.432C5.53247 199.833 11.536 198.481 11.5259 199.1C11.5157 199.719 8.31939 200.617 7.49987 202.468C5.89227 206.099 16.0529 202.45 16.3237 204.571C16.4139 205.278 11.8495 207.579 12.237 211.652C12.4976 214.392 25.4487 206.938 25.7194 209.059C25.8097 209.766 16.5236 211.024 15.2381 214.916C20.0663 218.53 24.9236 214.626 31.1296 214.44Z"
                fill="#8C1C1C"
              />
              <path
                d="M32.0128 216.472C32.0128 216.472 31.4745 215.234 31.1296 214.44M31.1296 214.44C34.5635 209.925 40.1761 202.929 38.6704 201.606C36.6133 199.799 31.8939 205.068 31.2915 204.539C30.6892 204.01 33.2905 194.369 29.9579 192.696C27.8218 191.624 24.9881 197.746 24.6869 197.481C24.3858 197.217 27.443 190.071 25.441 188.728C22.4196 186.701 20.8026 192.185 20.1903 192.275C19.5779 192.365 21.3963 187.145 19.3577 187.149C17.2195 187.154 16.396 190.378 15.9441 190.428C15.735 190.45 14.4541 188.168 12.9227 188.401C12.1664 188.516 11.8282 189.092 11.0754 189.289C9.71839 189.644 8.40168 187.551 7.72252 188.854C7.30133 189.662 8.17432 190.506 7.99329 190.975C7.81226 191.444 6.9728 191.712 6.74829 192.392C6.29928 193.752 9.15863 194.041 9.15732 194.508C9.155 195.336 6.39463 195.872 6.05495 197.432C5.53247 199.833 11.536 198.481 11.5259 199.1C11.5157 199.719 8.31939 200.617 7.49987 202.468C5.89227 206.099 16.0529 202.45 16.3237 204.571C16.4139 205.278 11.8495 207.579 12.237 211.652C12.4976 214.392 25.4487 206.938 25.7194 209.059C25.8097 209.766 16.5236 211.024 15.2381 214.916C20.0663 218.53 24.9236 214.626 31.1296 214.44Z"
                stroke="#8C1C1C"
              />
              <path
                d="M50.4978 235.408C51.3518 226.5 56.5379 222.974 51.3782 219.35C47 216.275 45.9752 226.966 45.1727 225.963C40.7638 220.456 45.8396 212.491 40.4089 210.037C36.9061 208.454 37.6094 216.116 37.4148 216.272C37.0532 216.562 31.8517 204.934 29.1218 205.913C27.881 206.358 29.2972 208.287 29.0967 208.674C28.8458 209.159 26.0562 207.27 25.0338 209.185C24.0115 211.1 27.2706 213.974 27.076 214.13C26.6815 214.446 24.8345 213.496 24.5214 214.53C23.6448 217.425 34.2234 221.064 34.3478 222.017C34.4722 222.971 28.5341 219.543 26.757 223.707C25.3308 227.049 42.9585 227.187 42.9095 228.323C42.8757 229.107 30.8137 228.136 33.4687 233.687C36.3134 239.635 44.3915 235.362 50.4978 235.408Z"
                fill="#FAD07D"
              />
              <path
                d="M67.5328 244.435C59.0348 244.048 46.7619 248.057 45.7723 243.445C44.7392 238.63 51.1934 237.941 51.2274 236.926C51.2445 236.419 42.4146 232.865 44.1409 229.308C45.041 227.453 46.739 228.147 46.9984 227.864C47.2578 227.581 45.6149 222.771 47.56 220.319C50.3389 216.815 51.3884 222.251 51.7588 222.222C52.2169 222.185 53.395 217.973 55.2324 217.842C58.8631 217.582 59.6059 226.215 60.1562 226.028C60.7064 225.84 60.9625 220.907 63.2431 221.056C66.7711 221.285 65.8576 235.305 67.5328 244.435Z"
                fill="#590000"
              />
              <path
                d="M70.9341 247.703C70.9341 247.703 68.8611 245.711 67.5328 244.435M67.5328 244.435C59.0348 244.048 46.7619 248.057 45.7723 243.445C44.7392 238.63 51.1934 237.941 51.2274 236.926C51.2445 236.419 42.4146 232.865 44.1409 229.308C45.041 227.453 46.739 228.147 46.9984 227.864C47.2578 227.581 45.6149 222.771 47.56 220.319C50.3389 216.815 51.3884 222.251 51.7588 222.222C52.2169 222.185 53.395 217.973 55.2324 217.842C58.8631 217.582 59.6059 226.215 60.1562 226.028C60.7064 225.84 60.9625 220.907 63.2431 221.056C66.7711 221.285 65.8576 235.305 67.5328 244.435Z"
                stroke="#590000"
              />
              <path
                d="M90.7427 254.096C92.4128 248.674 95.2751 240.174 93.4062 239.45C90.8527 238.461 88.2349 245.033 87.4873 244.743C86.7397 244.454 85.8642 234.506 82.1596 234.083C79.7849 233.811 79.231 240.534 78.8572 240.389C78.4834 240.245 78.8947 232.483 76.5529 231.911C73.0185 231.048 73.3877 236.754 72.8436 237.049C72.2995 237.344 72.2106 231.817 70.298 232.523C68.2919 233.263 68.6283 236.573 68.221 236.775C68.0326 236.869 66.0443 235.166 64.6866 235.912C64.0162 236.281 63.8967 236.937 63.2578 237.382C62.106 238.182 60.1495 236.671 59.96 238.127C59.8425 239.031 60.9529 239.523 60.9442 240.025C60.9355 240.528 60.2398 241.069 60.2629 241.784C60.3092 243.216 63.0936 242.504 63.2532 242.943C63.5356 243.72 61.1284 245.173 61.3465 246.756C61.682 249.189 66.8538 245.854 67.0573 246.439C67.2607 247.023 64.5686 248.966 64.4362 250.986C64.1764 254.949 72.4605 248.026 73.4447 249.924C73.7728 250.557 70.2791 254.288 72.0444 257.979C73.232 260.462 82.827 249.007 83.8112 250.905C84.1392 251.538 75.8531 255.914 75.9857 260.011C81.7627 261.743 84.9797 256.406 90.7427 254.096Z"
                fill="#8C1C1C"
              />
              <path
                d="M92.271 255.699C92.271 255.699 91.3395 254.722 90.7427 254.096M90.7427 254.096C92.4128 248.674 95.2751 240.174 93.4062 239.45C90.8527 238.461 88.2349 245.033 87.4873 244.743C86.7397 244.454 85.8642 234.506 82.1596 234.083C79.7849 233.811 79.231 240.534 78.8572 240.389C78.4834 240.245 78.8947 232.483 76.5529 231.911C73.0185 231.048 73.3877 236.754 72.8436 237.049C72.2995 237.344 72.2106 231.817 70.298 232.523C68.2919 233.263 68.6283 236.573 68.221 236.775C68.0326 236.869 66.0443 235.166 64.6866 235.912C64.0162 236.281 63.8967 236.937 63.2578 237.382C62.106 238.182 60.1495 236.671 59.96 238.127C59.8425 239.031 60.9529 239.523 60.9442 240.025C60.9355 240.528 60.2398 241.069 60.2629 241.784C60.3092 243.216 63.0936 242.504 63.2532 242.943C63.5356 243.72 61.1284 245.173 61.3465 246.756C61.682 249.189 66.8538 245.854 67.0573 246.439C67.2607 247.023 64.5686 248.966 64.4362 250.986C64.1764 254.949 72.4605 248.026 73.4447 249.924C73.7728 250.557 70.2791 254.288 72.0444 257.979C73.232 260.462 82.827 249.007 83.8112 250.905C84.1392 251.538 75.8531 255.914 75.9857 260.011C81.7627 261.743 84.9797 256.406 90.7427 254.096Z"
                stroke="#8C1C1C"
              />
              <path
                d="M127.527 256.64C123.067 248.881 125.255 243.004 118.95 243.036C113.6 243.063 118.952 252.373 117.718 252.02C110.934 250.082 110.462 240.649 104.614 241.792C100.842 242.529 105.85 248.369 105.782 248.609C105.654 249.054 94.682 242.584 93.0228 244.962C92.2686 246.043 94.5404 246.797 94.601 247.229C94.6768 247.769 91.3088 247.844 91.5837 249.997C91.8586 252.151 96.18 252.608 96.1115 252.847C95.9727 253.333 93.9168 253.628 94.26 254.652C95.2211 257.52 105.953 254.364 106.607 255.069C107.26 255.774 100.434 256.417 101.395 260.841C102.167 264.392 116.621 254.3 117.238 255.255C117.665 255.914 107.267 262.104 112.645 265.094C118.408 268.297 122.521 260.136 127.527 256.64Z"
                fill="#FAD07D"
              />
              <path
                d="M159.514 251.461C154.039 257.942 149.485 269.677 145.493 268.058C141.325 266.367 144.762 260.933 144.037 260.379C143.675 260.102 135.67 265.198 134.112 261.991C133.3 260.319 134.847 259.344 134.797 258.993C134.748 258.642 130.211 257.433 129.598 254.628C128.722 250.621 133.356 252.623 133.561 252.316C133.814 251.937 131.44 248.82 132.466 247.307C134.493 244.317 141.288 248.221 141.487 247.691C141.685 247.161 138.218 244.395 139.72 242.679C142.044 240.024 151.784 248.031 159.514 251.461Z"
                fill="#590000"
              />
              <path
                d="M163.993 250.485C163.993 250.485 161.263 251.08 159.514 251.461M159.514 251.461C154.039 257.942 149.485 269.677 145.493 268.058C141.325 266.367 144.762 260.933 144.037 260.379C143.675 260.102 135.67 265.198 134.112 261.991C133.3 260.319 134.847 259.344 134.797 258.993C134.748 258.642 130.211 257.433 129.598 254.628C128.722 250.621 133.356 252.623 133.561 252.316C133.814 251.937 131.44 248.82 132.466 247.307C134.493 244.317 141.288 248.221 141.487 247.691C141.685 247.161 138.218 244.395 139.72 242.679C142.044 240.024 151.784 248.031 159.514 251.461Z"
                stroke="#590000"
              />
              <path
                d="M186.305 245.909C181.597 252.968 178.399 265.143 174.249 263.985C169.917 262.776 172.717 256.989 171.935 256.52C171.544 256.285 164.166 262.253 162.256 259.243C161.259 257.674 162.686 256.531 162.597 256.187C162.509 255.844 157.864 255.156 156.938 252.438C155.615 248.556 160.446 250.02 160.614 249.693C160.823 249.287 158.112 246.459 158.96 244.84C160.636 241.64 167.829 244.751 167.966 244.202C168.104 243.652 164.346 241.296 165.645 239.421C167.654 236.52 178.237 243.375 186.305 245.909Z"
                fill="#590000"
              />
              <path
                d="M190.644 244.434C190.644 244.434 187.999 245.333 186.305 245.909M186.305 245.909C181.597 252.968 178.399 265.143 174.249 263.985C169.917 262.776 172.717 256.989 171.935 256.52C171.544 256.285 164.166 262.253 162.256 259.243C161.259 257.674 162.686 256.531 162.597 256.187C162.509 255.844 157.864 255.156 156.938 252.438C155.615 248.556 160.446 250.02 160.614 249.693C160.823 249.287 158.112 246.459 158.96 244.84C160.636 241.64 167.829 244.751 167.966 244.202C168.104 243.652 164.346 241.296 165.645 239.421C167.654 236.52 178.237 243.375 186.305 245.909Z"
                stroke="#590000"
              />
              <path
                d="M209.858 236.363C206.522 231.775 201.438 224.387 199.737 225.448C197.415 226.898 201.103 232.934 200.422 233.359C199.742 233.783 191.258 228.517 188.697 231.227C187.055 232.964 192.102 237.44 191.762 237.652C191.422 237.865 185.459 232.88 183.596 234.411C180.786 236.721 185.572 239.848 185.482 240.46C185.392 241.072 180.916 237.829 180.334 239.782C179.723 241.831 182.573 243.548 182.491 243.995C182.453 244.202 179.897 244.771 179.68 246.305C179.573 247.063 180.027 247.552 179.999 248.33C179.949 249.732 177.565 250.39 178.617 251.416C179.27 252.052 180.33 251.459 180.727 251.767C181.123 252.075 181.139 252.956 181.725 253.367C182.898 254.188 183.999 251.533 184.446 251.669C185.237 251.909 184.956 254.707 186.353 255.482C188.501 256.673 188.935 250.535 189.525 250.722C190.115 250.91 190.054 254.23 191.591 255.547C194.606 258.132 194.036 247.351 196.145 247.702C196.848 247.819 197.738 252.853 201.75 253.654C204.449 254.193 201.039 239.645 203.148 239.996C203.851 240.113 202.382 249.368 205.74 251.719C210.591 248.136 208.25 242.36 209.858 236.363Z"
                fill="#8C1C1C"
              />
              <path
                d="M212.058 236.102C212.058 236.102 210.717 236.261 209.858 236.363M209.858 236.363C206.522 231.775 201.438 224.387 199.737 225.448C197.415 226.898 201.103 232.934 200.422 233.359C199.742 233.783 191.258 228.517 188.697 231.227C187.055 232.964 192.102 237.44 191.762 237.652C191.422 237.865 185.459 232.88 183.596 234.411C180.786 236.721 185.572 239.848 185.482 240.46C185.392 241.072 180.916 237.829 180.334 239.782C179.723 241.831 182.573 243.548 182.491 243.995C182.453 244.202 179.897 244.771 179.68 246.305C179.573 247.063 180.027 247.552 179.999 248.33C179.949 249.732 177.565 250.39 178.617 251.416C179.27 252.052 180.33 251.459 180.727 251.767C181.123 252.075 181.139 252.956 181.725 253.367C182.898 254.188 183.999 251.533 184.446 251.669C185.237 251.909 184.956 254.707 186.353 255.482C188.501 256.673 188.935 250.535 189.525 250.722C190.115 250.91 190.054 254.23 191.591 255.547C194.606 258.132 194.036 247.351 196.145 247.702C196.848 247.819 197.738 252.853 201.75 253.654C204.449 254.193 201.039 239.645 203.148 239.996C203.851 240.113 202.382 249.368 205.74 251.719C210.591 248.136 208.25 242.36 209.858 236.363Z"
                stroke="#8C1C1C"
              />
              <path
                d="M224.607 214.786C213.175 212.973 205.121 206.531 204.481 212.296C203.938 217.189 217.656 219.364 217.024 220.221C213.552 224.93 200.191 218.217 201.169 224.408C201.799 228.402 210.584 228.263 210.915 228.507C211.529 228.96 201.208 234.053 204.384 237.365C205.827 238.87 207.137 237.372 207.753 237.644C208.524 237.984 208.263 241.107 211.332 242.488C214.4 243.868 215.514 240.279 215.845 240.523C216.515 241.017 216.708 243.112 218.19 243.575C222.342 244.872 219.053 232.709 220.119 232.648C221.185 232.587 221.351 239.29 227.698 241.764C232.792 243.75 220.122 222.947 221.536 223.107C222.512 223.218 230.118 237.374 234.92 234.74C240.065 231.918 228.997 221.993 224.607 214.786Z"
                fill="#FAD07D"
              />
              <path
                d="M199.769 8.38852C206.577 4.06528 213.57 -7.8888 217.203 -2.68182C220.995 2.75414 216.435 7.26654 217.04 8.55449C217.342 9.19846 226.376 8.64719 227.253 14.0712C227.711 16.8994 225.967 16.9922 225.943 17.493C225.918 17.9938 230.178 23.0785 230.2 27.2454C230.231 33.1985 226.04 26.9946 225.772 27.241C225.441 27.5457 227.149 33.4787 225.811 34.6824C223.166 37.061 217.224 26.6865 216.916 27.2322C216.607 27.778 219.476 34.0907 217.621 35.1952C214.752 36.9038 206.741 18.8572 199.769 8.38852Z"
                fill="#590000"
              />
              <path
                d="M195.108 6.22589C195.108 6.22589 197.949 7.54396 199.769 8.38852M199.769 8.38852C206.577 4.06528 213.57 -7.8888 217.203 -2.68182C220.995 2.75414 216.435 7.26654 217.04 8.55449C217.342 9.19846 226.376 8.64719 227.253 14.0712C227.711 16.8994 225.967 16.9922 225.943 17.493C225.918 17.9938 230.178 23.0785 230.2 27.2454C230.231 33.1985 226.04 26.9946 225.772 27.241C225.441 27.5457 227.149 33.4787 225.811 34.6824C223.166 37.061 217.224 26.6865 216.916 27.2322C216.607 27.778 219.476 34.0907 217.621 35.1952C214.752 36.9038 206.741 18.8572 199.769 8.38852Z"
                stroke="#590000"
              />
              <path
                d="M171.393 -4.14459C169.77 1.29153 166.983 9.81621 168.858 10.5236C171.42 11.4902 173.98 4.89584 174.73 5.17872C175.48 5.46159 176.443 15.4011 180.151 15.7922C182.528 16.0428 183.023 9.31543 183.398 9.45683C183.773 9.59823 183.43 17.3631 185.777 17.9145C189.319 18.7466 188.899 13.0443 189.441 12.7445C189.982 12.4448 190.12 17.9703 192.026 17.2479C194.026 16.4902 193.66 13.1828 194.066 12.9772C194.253 12.8821 196.256 14.5673 197.607 13.8094C198.275 13.4351 198.388 12.7773 199.023 12.3275C200.168 11.5166 202.138 13.0112 202.314 11.553C202.424 10.6487 201.309 10.1658 201.314 9.66339C201.318 9.16099 202.009 8.61382 201.979 7.89851C201.921 6.4679 199.142 7.20428 198.979 6.76662C198.69 5.99171 201.084 4.51722 200.852 2.93713C200.495 0.50673 195.353 3.88661 195.144 3.3039C194.936 2.7212 197.611 0.754633 197.726 -1.26654C197.95 -5.23135 189.727 1.76431 188.727 -0.125291C188.393 -0.75515 191.854 -4.51712 190.056 -8.19198C188.847 -10.6643 179.353 0.874481 178.352 -1.01513C178.018 -1.645 186.266 -6.09384 186.097 -10.1895C180.305 -11.8706 177.135 -6.50529 171.393 -4.14459Z"
                fill="#8C1C1C"
              />
              <path
                d="M169.85 -5.73446C169.85 -5.73446 170.79 -4.76547 171.393 -4.14459M171.393 -4.14459C169.77 1.29154 166.983 9.81621 168.858 10.5236C171.42 11.4902 173.98 4.89584 174.73 5.17872C175.48 5.46159 176.443 15.4011 180.151 15.7922C182.528 16.0428 183.023 9.31543 183.398 9.45683C183.773 9.59823 183.43 17.3631 185.777 17.9145C189.319 18.7466 188.899 13.0443 189.441 12.7445C189.982 12.4448 190.12 17.9703 192.026 17.2479C194.026 16.4902 193.66 13.1828 194.066 12.9772C194.253 12.8821 196.256 14.5673 197.607 13.8094C198.275 13.4351 198.388 12.7773 199.023 12.3275C200.168 11.5166 202.138 13.0112 202.314 11.553C202.424 10.6487 201.309 10.1658 201.314 9.66339C201.318 9.16099 202.009 8.61382 201.979 7.89851C201.921 6.4679 199.142 7.20428 198.979 6.76662C198.69 5.99171 201.084 4.51722 200.852 2.93713C200.495 0.506731 195.353 3.88661 195.144 3.3039C194.936 2.7212 197.611 0.754633 197.726 -1.26654C197.95 -5.23135 189.727 1.76431 188.727 -0.125291C188.393 -0.75515 191.854 -4.51712 190.056 -8.19198C188.847 -10.6643 179.353 0.874481 178.352 -1.01513C178.018 -1.645 186.266 -6.09384 186.097 -10.1895C180.305 -11.8706 177.135 -6.50529 171.393 -4.14459Z"
                stroke="#8C1C1C"
              />
              <path
                d="M141.821 -8.15163C145.424 -0.229186 143.49 6.4514 148.772 5.64683C153.254 4.96412 148.931 -4.5428 149.959 -4.30844C155.608 -3.02095 155.841 7.21609 160.76 5.25452C163.932 3.9893 159.838 -1.77293 159.899 -2.04295C160.013 -2.54454 169.093 3.17721 170.524 0.37879C171.175 -0.893228 169.285 -1.43836 169.241 -1.90199C169.187 -2.48245 172.01 -2.97531 171.817 -5.29174C171.624 -7.60818 168.011 -7.57932 168.073 -7.84934C168.198 -8.39645 169.925 -8.96932 169.655 -10.0452C168.9 -13.0579 159.855 -8.30219 159.32 -8.99227C158.785 -9.68236 164.514 -11.217 163.785 -15.928C163.2 -19.7089 150.918 -6.93057 150.417 -7.89689C150.071 -8.56413 158.888 -16.5896 154.434 -19.1955C149.662 -21.9874 146.076 -12.579 141.821 -8.15163Z"
                fill="#FAD07D"
              />
              <path
                d="M102.954 -0.212944C115.751 -7.28231 131.032 -20.7111 135.723 -18.3152C140.62 -15.8139 131.589 -9.75194 132.25 -9.0073C132.581 -8.63498 148.086 -13.7588 148.034 -9.76014C148.007 -7.67515 145.018 -6.69725 144.834 -6.27352C144.65 -5.84979 150.442 -3.87891 149.294 -0.469602C147.653 4.40116 142.297 1.47584 141.771 1.81667C141.122 2.23815 142.337 6.22497 139.721 7.90512C134.551 11.225 127.406 5.78141 126.727 6.38904C126.047 6.99666 129.126 10.6949 125.661 12.5608C120.3 15.447 111.822 4.7755 102.954 -0.212944Z"
                fill="#590000"
              />
              <path
                d="M95.6504 0.421899C95.6504 0.421899 100.102 0.0349775 102.954 -0.212944M102.954 -0.212944C115.751 -7.28231 131.032 -20.7111 135.723 -18.3152C140.62 -15.8139 131.589 -9.75194 132.25 -9.0073C132.581 -8.63498 148.086 -13.7588 148.034 -9.76014C148.007 -7.67515 145.018 -6.69725 144.834 -6.27352C144.65 -5.84979 150.442 -3.87891 149.294 -0.469602C147.653 4.40116 142.297 1.47584 141.771 1.81667C141.122 2.23815 142.337 6.22497 139.721 7.90512C134.551 11.225 127.406 5.78141 126.727 6.38904C126.047 6.99666 129.126 10.6949 125.661 12.5608C120.3 15.447 111.822 4.7755 102.954 -0.212944Z"
                stroke="#590000"
              />
              <path
                d="M76.7315 8.39384C79.6697 13.2467 84.1139 21.0371 85.8974 20.1228C88.3341 18.8736 85.1674 12.5482 85.8807 12.1824C86.5941 11.8165 94.6052 17.7783 97.3853 15.2934C99.1673 13.7005 94.5151 8.81594 94.8718 8.633C95.2284 8.45005 100.751 13.919 102.736 12.5505C105.731 10.4851 101.224 6.96616 101.366 6.36365C101.507 5.76113 105.694 9.37015 106.439 7.47254C107.22 5.48218 104.524 3.53175 104.644 3.09324C104.7 2.89037 107.294 2.53786 107.639 1.02785C107.81 0.282111 107.399 -0.243901 107.492 -1.01645C107.66 -2.40918 110.09 -2.86486 109.129 -3.97505C108.532 -4.66357 107.426 -4.16197 107.056 -4.50254C106.687 -4.84311 106.746 -5.72255 106.196 -6.18112C105.096 -7.09827 103.776 -4.54537 103.342 -4.71823C102.574 -5.0243 103.089 -7.78862 101.763 -8.67789C99.7225 -10.0457 98.7732 -3.96569 98.2014 -4.20248C97.6296 -4.43926 97.9689 -7.74194 96.5484 -9.18429C93.7618 -12.0136 93.4227 -1.22278 91.3506 -1.75027C90.6599 -1.92609 90.1966 -7.01677 86.2666 -8.15277C83.6226 -8.91704 85.7961 5.86662 83.7239 5.33912C83.0332 5.16329 85.2756 -3.93523 82.1277 -6.56095C76.9924 -3.39839 78.8388 2.55363 76.7315 8.39384Z"
                fill="#8C1C1C"
              />
              <path
                d="M74.5177 8.46885C74.5177 8.46885 75.8669 8.42313 76.7315 8.39384M76.7315 8.39384C79.6697 13.2467 84.1139 21.0371 85.8974 20.1228C88.3341 18.8736 85.1674 12.5482 85.8807 12.1824C86.5941 11.8165 94.6052 17.7783 97.3853 15.2934C99.1673 13.7005 94.5151 8.81594 94.8718 8.633C95.2284 8.45005 100.751 13.919 102.736 12.5505C105.731 10.4851 101.224 6.96616 101.366 6.36365C101.507 5.76113 105.694 9.37015 106.439 7.47254C107.22 5.48217 104.524 3.53175 104.644 3.09324C104.7 2.89037 107.294 2.53786 107.639 1.02785C107.81 0.28211 107.399 -0.243902 107.492 -1.01645C107.66 -2.40918 110.09 -2.86486 109.129 -3.97505C108.532 -4.66357 107.426 -4.16197 107.056 -4.50254C106.687 -4.84311 106.746 -5.72255 106.196 -6.18112C105.096 -7.09827 103.776 -4.54537 103.342 -4.71823C102.574 -5.0243 103.089 -7.78861 101.763 -8.67789C99.7225 -10.0457 98.7732 -3.96569 98.2014 -4.20248C97.6296 -4.43926 97.9689 -7.74194 96.5484 -9.18429C93.7618 -12.0136 93.4227 -1.22278 91.3506 -1.75027C90.6599 -1.92609 90.1966 -7.01677 86.2666 -8.15277C83.6226 -8.91704 85.7961 5.86662 83.7239 5.33912C83.0332 5.16329 85.2756 -3.93523 82.1277 -6.56095C76.9924 -3.39839 78.8388 2.55363 76.7315 8.39384Z"
                stroke="#8C1C1C"
              />
              <path
                d="M49.7095 25.0301C53.8482 14.8221 55.4632 -0.936225 60.3072 -1.10899C65.3643 -1.28936 63.1598 6.68215 64.1138 6.94914C64.5908 7.08263 71.9014 -2.82283 74.5332 0.0595443C75.9054 1.56246 74.4894 3.46502 74.6448 3.84225C74.8002 4.21948 80.1229 3.29931 81.6028 6.20111C83.717 10.3468 78.059 10.4087 77.9228 10.864C77.7545 11.427 81.255 13.7911 80.5656 16.0461C79.2034 20.5019 70.628 19.4811 70.5631 20.1894C70.4982 20.8977 75.0961 22.3052 73.9429 25.0349C72.1588 29.2574 59.1732 25.032 49.7095 25.0301Z"
                fill="#590000"
              />
              <path
                d="M45.0792 28.4231C45.0792 28.4231 47.9013 26.3552 49.7095 25.0301M49.7095 25.0301C53.8482 14.8221 55.4632 -0.936225 60.3072 -1.10899C65.3643 -1.28936 63.1598 6.68215 64.1138 6.94914C64.5908 7.08263 71.9014 -2.82283 74.5332 0.0595442C75.9054 1.56246 74.4894 3.46502 74.6448 3.84225C74.8002 4.21948 80.1229 3.29931 81.6028 6.20111C83.717 10.3468 78.059 10.4087 77.9228 10.864C77.7545 11.427 81.255 13.7911 80.5656 16.0461C79.2034 20.5019 70.628 19.4811 70.5631 20.1894C70.4982 20.8977 75.0961 22.3052 73.9429 25.0348C72.1588 29.2574 59.1732 25.032 49.7095 25.0301Z"
                stroke="#590000"
              />
              <path
                d="M37.6508 42.2375C33.1598 33.1103 25.6023 28.5295 30.3413 25.9172C34.3626 23.7005 39.7518 34.6531 40.3178 33.8056C43.4274 29.1496 34.2706 20.1271 39.789 18.7457C43.3484 17.8546 45.4966 25.4172 45.7895 25.6127C46.3335 25.9761 48.0021 15.3249 51.6385 16.8548C53.2914 17.5503 52.3552 19.2073 52.745 19.6365C53.2332 20.1738 55.8229 18.8324 57.7883 20.962C59.7538 23.0917 56.9884 25.3301 57.2813 25.5257C57.8746 25.922 59.7067 25.3363 60.483 26.4383C62.6567 29.5242 51.4624 31.068 51.6858 32.0018C51.9091 32.9355 57.6528 30.676 61.395 35.2179C64.3983 38.8631 43.435 35.4789 43.9362 36.6307C44.2822 37.426 58.2849 38.8601 57.2834 43.9106C56.2103 49.3217 44.9131 43.4109 37.6508 42.2375Z"
                fill="#FAD07D"
              />
              <path
                d="M17.9938 75.1703C28.6506 72.073 45.6505 73.6855 45.2822 67.2391C44.8976 60.5091 36.4575 61.5519 36.0567 60.2101C35.8563 59.5393 45.8186 52.1212 42.3727 47.9058C40.5759 45.7078 38.6638 47.1485 38.2346 46.85C37.8053 46.5514 38.197 39.643 34.8623 36.9658C30.0981 33.1409 30.681 40.704 30.2001 40.7773C29.6054 40.8679 26.6249 35.6131 24.2449 35.9962C19.5421 36.753 21.641 48.4828 20.876 48.4001C20.111 48.3173 18.0476 41.822 15.2032 42.7126C10.8033 44.0903 16.904 62.4948 17.9938 75.1703Z"
                fill="#590000"
              />
              <path
                d="M14.8256 80.5588C14.8256 80.5588 16.7565 77.2746 17.9938 75.1703M17.9938 75.1703C28.6506 72.073 45.6505 73.6855 45.2822 67.2391C44.8976 60.5091 36.4575 61.5519 36.0567 60.2101C35.8563 59.5393 45.8186 52.1212 42.3727 47.9058C40.5759 45.7078 38.6638 47.1485 38.2346 46.85C37.8053 46.5514 38.197 39.643 34.8623 36.9658C30.0981 33.1409 30.681 40.704 30.2001 40.7773C29.6054 40.8679 26.6249 35.6131 24.2449 35.9962C19.5421 36.753 21.641 48.4828 20.876 48.4001C20.111 48.3173 18.0476 41.822 15.2032 42.7126C10.8033 44.0903 16.904 62.4948 17.9938 75.1703Z"
                stroke="#590000"
              />
              <path
                d="M21.2837 103.661C28.7152 102.401 40.5087 100.638 40.2791 98.6469C39.9655 95.9266 30.6111 96.937 30.5191 96.1406C30.4272 95.3442 41.7616 89.5991 40.1023 86.159C39.0387 83.9538 30.7097 86.8383 30.6637 86.4401C30.6176 86.0419 40.1004 82.5129 39.4138 80.1859C38.3775 76.674 31.7986 79.8533 31.1295 79.527C30.4605 79.2006 36.9896 76.3552 35.0323 75.0421C32.9794 73.6648 29.2336 75.616 28.7552 75.3623C28.5339 75.2449 29.4002 72.6596 27.7189 71.8503C26.8886 71.4506 26.0367 71.6754 25.1346 71.3412C23.5084 70.7386 24.166 68.2767 22.3208 68.8411C21.1765 69.1912 21.2383 70.4054 20.6351 70.6494C20.0318 70.8935 18.9811 70.5582 18.1426 70.9368C16.4655 71.6939 18.9395 73.7635 18.5098 74.1224C17.749 74.7579 14.6124 73.3883 12.8558 74.3707C10.154 75.8818 17.1454 78.7181 16.5682 79.1881C15.991 79.6582 12.1049 78.2855 9.62202 79.1819C4.75151 80.9403 17.834 84.6911 16.1482 86.4995C15.5863 87.1022 9.10243 85.9269 5.73876 89.3134C3.4758 91.5918 22.7203 94.2152 21.0346 96.0235C20.4727 96.6263 10.422 91.598 5.62059 93.7655C6.93228 99.6667 15.1668 99.7967 21.2837 103.661Z"
                fill="#8C1C1C"
              />
              <path
                d="M20.2669 105.796C20.2669 105.796 20.8866 104.495 21.2837 103.661M21.2837 103.661C28.7152 102.401 40.5087 100.638 40.2791 98.6469C39.9655 95.9266 30.6111 96.937 30.5191 96.1406C30.4272 95.3442 41.7616 89.5991 40.1023 86.159C39.0387 83.9538 30.7097 86.8383 30.6637 86.4401C30.6176 86.0419 40.1004 82.5129 39.4138 80.1859C38.3775 76.674 31.7986 79.8533 31.1295 79.527C30.4605 79.2006 36.9896 76.3552 35.0323 75.0421C32.9794 73.6648 29.2336 75.616 28.7552 75.3623C28.5339 75.2449 29.4002 72.6596 27.7189 71.8503C26.8886 71.4506 26.0367 71.6754 25.1346 71.3412C23.5084 70.7386 24.166 68.2767 22.3208 68.8411C21.1765 69.1912 21.2383 70.4054 20.6351 70.6494C20.0318 70.8935 18.9811 70.5582 18.1426 70.9368C16.4655 71.6939 18.9395 73.7635 18.5098 74.1224C17.749 74.7579 14.6124 73.3883 12.8558 74.3707C10.154 75.8818 17.1454 78.7181 16.5682 79.1881C15.991 79.6582 12.1049 78.2855 9.62202 79.1819C4.75151 80.9403 17.834 84.6911 16.1482 86.4994C15.5863 87.1022 9.10243 85.9269 5.73875 89.3134C3.4758 91.5918 22.7203 94.2152 21.0346 96.0235C20.4727 96.6263 10.422 91.598 5.62058 93.7655C6.93228 99.6667 15.1668 99.7967 21.2837 103.661Z"
                stroke="#8C1C1C"
              />
              <path
                d="M24.6022 140.354C37.1385 132.044 49.8488 132.461 46.1458 124.871C43.0036 118.432 27.9601 128.404 27.9344 126.782C27.7934 117.871 45.895 113.737 40.2911 107.118C36.6766 102.849 28.1929 111.095 27.6864 111.103C26.7453 111.118 33.0124 95.4437 27.4212 94.3426C24.8797 93.842 24.7236 96.8658 23.9179 97.1019C22.9091 97.3976 20.8185 93.3655 16.7829 94.5109C12.7474 95.6562 14.3527 101.039 13.8461 101.047C12.8197 101.063 11.058 98.696 9.26116 99.4969C4.22953 101.74 16.5764 113.485 15.5797 114.539C14.5829 115.593 9.38946 107.607 1.32689 110.438C-5.14391 112.711 22.86 126.321 21.3574 127.427C20.3198 128.19 2.25719 117.995 -0.45995 125.609C-3.37114 133.766 14.9001 135.641 24.6022 140.354Z"
                fill="#FAD07D"
              />
              <path
                d="M33.2096 163.75C39.0254 160.29 48.3272 154.986 47.5282 153.475C46.4366 151.409 38.9401 155.307 38.6204 154.702C38.3007 154.097 46.0045 145.771 43.5705 143.576C42.0103 142.17 35.9412 147.222 35.7813 146.92C35.6214 146.618 42.4565 140.67 41.1736 139.042C39.2375 136.584 34.7186 141.293 34.0608 141.254C33.403 141.215 37.9823 136.789 35.9487 136.388C33.8156 135.969 31.2857 138.762 30.8091 138.718C30.5887 138.698 30.5227 136.35 28.873 136.261C28.0583 136.216 27.4162 136.677 26.5615 136.709C25.0209 136.766 24.8184 134.586 23.4511 135.645C22.6031 136.303 23.0252 137.25 22.5964 137.644C22.1675 138.038 21.1886 138.118 20.6045 138.697C19.4362 139.855 22.1318 140.687 21.8828 141.116C21.442 141.874 18.4071 141.818 17.2412 143.182C15.448 145.28 22.1466 145.231 21.8084 145.796C21.4702 146.362 17.8092 146.552 16.0111 148.087C12.484 151.099 24.5435 149.766 23.6888 151.764C23.4039 152.431 17.6355 153.637 15.8624 157.448C14.6695 160.013 31.5262 155.744 30.6714 157.743C30.3865 158.409 20.4668 157.722 17.1221 161.037C20.017 165.309 26.927 162.691 33.2096 163.75Z"
                fill="#8C1C1C"
              />
              <path
                d="M33.0126 165.788C33.0126 165.788 33.1326 164.546 33.2096 163.75M33.2096 163.75C39.0254 160.29 48.3272 154.986 47.5282 153.475C46.4366 151.409 38.9401 155.307 38.6204 154.702C38.3007 154.097 46.0045 145.771 43.5705 143.576C42.0103 142.17 35.9412 147.222 35.7813 146.92C35.6214 146.618 42.4565 140.67 41.1736 139.042C39.2375 136.584 34.7186 141.293 34.0608 141.254C33.403 141.215 37.9823 136.789 35.9487 136.388C33.8156 135.969 31.2857 138.762 30.8091 138.718C30.5887 138.698 30.5227 136.35 28.873 136.261C28.0583 136.216 27.4162 136.677 26.5615 136.709C25.0209 136.766 24.8184 134.586 23.4511 135.645C22.6031 136.303 23.0252 137.25 22.5964 137.644C22.1675 138.038 21.1886 138.118 20.6045 138.697C19.4362 139.855 22.1318 140.687 21.8828 141.116C21.442 141.874 18.4071 141.818 17.2412 143.182C15.448 145.28 22.1466 145.231 21.8084 145.796C21.4702 146.362 17.8092 146.552 16.0111 148.087C12.484 151.099 24.5435 149.766 23.6888 151.764C23.4039 152.431 17.6355 153.637 15.8624 157.448C14.6695 160.013 31.5262 155.744 30.6714 157.743C30.3865 158.409 20.4668 157.722 17.1221 161.037C20.017 165.309 26.927 162.691 33.2096 163.75Z"
                stroke="#8C1C1C"
              />
              <path
                d="M54.9481 189.559C44.0472 187.8 27.7591 190.892 27.0345 185.055C26.278 178.962 34.6745 179.085 34.8394 177.839C34.9219 177.216 23.9712 171.502 26.6193 167.376C28 165.225 30.1047 166.337 30.4726 166.027C30.8406 165.717 29.2979 159.537 32.0962 156.806C36.094 152.904 36.7973 159.767 37.278 159.786C37.8725 159.81 39.8926 154.794 42.2752 154.909C46.9833 155.136 46.9102 165.894 47.6415 165.746C48.3727 165.598 49.291 159.553 52.2112 160.08C56.7286 160.895 53.8793 178.046 54.9481 189.559Z"
                fill="#590000"
              />
              <path
                d="M58.9398 194.102C58.9398 194.102 56.507 191.333 54.9482 189.559M54.9482 189.559C44.0472 187.8 27.7591 190.892 27.0345 185.055C26.278 178.962 34.6745 179.085 34.8394 177.839C34.9219 177.216 23.9712 171.502 26.6193 167.376C28 165.225 30.1047 166.337 30.4726 166.027C30.8406 165.717 29.2979 159.537 32.0962 156.806C36.094 152.904 36.7973 159.767 37.278 159.786C37.8725 159.81 39.8926 154.794 42.2752 154.909C46.9832 155.136 46.9102 165.894 47.6415 165.746C48.3727 165.598 49.291 159.553 52.2112 160.08C56.7286 160.895 53.8793 178.046 54.9482 189.559Z"
                stroke="#590000"
              />
              <path
                d="M82.0949 198.345C81.6945 188.053 86.4785 180.798 80.7013 180.226C75.7992 179.74 76.2797 192.091 75.3185 191.522C70.0381 188.4 74.0762 176.367 68.1898 177.251C64.3931 177.822 66.2032 185.73 66.027 186.028C65.6996 186.581 58.7379 177.293 56.0946 180.154C54.8931 181.455 56.6122 182.633 56.4631 183.187C56.2763 183.881 53.163 183.649 52.3939 186.412C51.6249 189.175 55.3576 190.176 55.1814 190.474C54.8243 191.077 52.8058 191.252 52.6341 192.587C52.1535 196.325 63.4571 193.356 63.72 194.316C63.9828 195.276 57.4401 195.429 56.2225 201.144C55.2453 205.731 73.2358 194.313 73.348 195.586C73.4254 196.465 60.99 203.32 64.4888 207.642C68.2374 212.272 75.863 202.302 82.0949 198.345Z"
                fill="#FAD07D"
              />
              <path
                d="M102.277 210.456C98.7012 202.626 97.6166 189.78 93.1207 190.406C88.4271 191.058 90.2649 197.336 89.3715 197.709C88.9248 197.896 82.3941 190.821 79.8729 193.635C78.5584 195.102 79.8237 196.459 79.6694 196.797C79.515 197.136 74.5942 197.215 73.1427 199.863C71.069 203.645 76.324 202.799 76.4385 203.155C76.5801 203.597 73.2655 206.118 73.8464 207.883C74.9944 211.372 82.9885 209.162 83.0301 209.741C83.0717 210.319 78.7628 212.219 79.7622 214.305C81.3082 217.533 93.4844 211.959 102.277 210.456Z"
                fill="#590000"
              />
              <path
                d="M106.489 212.542C106.489 212.542 103.922 211.27 102.277 210.456M102.277 210.456C98.7012 202.626 97.6166 189.78 93.1207 190.406C88.4271 191.058 90.2649 197.336 89.3715 197.709C88.9248 197.896 82.3941 190.821 79.8729 193.635C78.5584 195.102 79.8237 196.459 79.6694 196.797C79.515 197.136 74.5942 197.215 73.1427 199.863C71.069 203.645 76.324 202.799 76.4385 203.155C76.5801 203.597 73.2655 206.118 73.8464 207.883C74.9944 211.372 82.9885 209.162 83.0301 209.741C83.0717 210.319 78.7628 212.219 79.7622 214.305C81.3082 217.533 93.4844 211.959 102.277 210.456Z"
                stroke="#590000"
              />
              <path
                d="M135.038 220.05C135.02 213.276 135.257 202.567 132.98 202.419C129.868 202.217 129.245 210.643 128.334 210.584C127.423 210.526 123.106 199.521 118.934 200.38C116.259 200.93 117.932 208.781 117.476 208.752C117.021 208.722 114.842 199.74 112.102 199.937C107.966 200.233 110.298 206.593 109.806 207.126C109.315 207.658 107.348 201.401 105.507 202.896C103.576 204.464 105.062 208.11 104.687 208.487C104.514 208.662 101.776 207.443 100.552 208.783C99.9473 209.445 100.04 210.236 99.4951 210.973C98.5135 212.301 95.8745 211.288 96.1612 213.014C96.3391 214.085 97.7132 214.244 97.8737 214.819C98.0342 215.393 97.4607 216.261 97.728 217.067C98.2625 218.679 101.05 216.861 101.372 217.303C101.942 218.086 99.8158 220.611 100.588 222.332C101.776 224.98 106.272 219.314 106.691 219.906C107.11 220.497 104.84 223.683 105.379 226.03C106.438 230.633 113.104 219.757 114.816 221.561C115.387 222.163 112.85 227.673 116.019 231.235C118.15 233.631 124.709 217.123 126.421 218.927C126.992 219.528 119.462 227.507 120.992 232.122C127.86 232.002 129.553 224.764 135.038 220.05Z"
                fill="#8C1C1C"
              />
              <path
                d="M137.243 221.322C137.243 221.322 135.899 220.547 135.038 220.05M135.038 220.05C135.02 213.276 135.257 202.567 132.98 202.419C129.868 202.217 129.245 210.643 128.334 210.584C127.423 210.526 123.106 199.521 118.934 200.38C116.259 200.93 117.932 208.781 117.476 208.752C117.021 208.722 114.842 199.74 112.102 199.937C107.966 200.233 110.298 206.593 109.806 207.126C109.315 207.658 107.348 201.401 105.507 202.896C103.576 204.464 105.062 208.11 104.687 208.487C104.514 208.662 101.776 207.443 100.552 208.783C99.9473 209.445 100.04 210.236 99.4951 210.973C98.5135 212.301 95.8745 211.288 96.1612 213.014C96.3391 214.085 97.7132 214.244 97.8737 214.819C98.0342 215.393 97.4607 216.261 97.728 217.067C98.2625 218.679 101.05 216.861 101.372 217.303C101.942 218.086 99.8158 220.611 100.588 222.332C101.776 224.98 106.272 219.314 106.691 219.906C107.11 220.497 104.84 223.683 105.379 226.03C106.438 230.633 113.104 219.757 114.816 221.561C115.387 222.163 112.85 227.673 116.019 231.235C118.15 233.631 124.709 217.123 126.421 218.927C126.992 219.528 119.462 227.507 120.992 232.122C127.86 232.002 129.553 224.764 135.038 220.05Z"
                stroke="#8C1C1C"
              />
              <path
                d="M170.543 214.044C160.792 206.952 160.727 198.923 152.451 201.969C145.428 204.554 157.129 213.065 155.329 213.235C145.437 214.167 140.093 203.181 132.974 207.33C128.382 210.006 137.894 214.557 137.923 214.875C137.979 215.465 120.309 213.01 119.318 216.628C118.867 218.273 122.232 218.085 122.528 218.569C122.898 219.175 118.506 220.871 119.946 223.299C121.386 225.727 127.298 224.209 127.328 224.526C127.389 225.17 124.833 226.501 125.797 227.555C128.497 230.505 141.03 221.633 142.243 222.159C143.456 222.686 134.8 226.706 138.28 231.506C141.073 235.358 155.028 216.468 156.318 217.308C157.209 217.888 146.634 230.206 155.205 231.193C164.387 232.25 165.71 220.589 170.543 214.044Z"
                fill="#FAD07D"
              />
              <path
                d="M194.042 200.792C189.907 195.425 183.582 186.781 181.685 188.049C179.092 189.781 183.722 196.848 182.963 197.356C182.204 197.863 172.084 191.754 169.295 194.972C167.506 197.036 173.609 202.251 173.23 202.504C172.85 202.758 165.658 196.953 163.602 198.776C160.5 201.526 166.219 205.156 166.152 205.878C166.086 206.6 160.719 202.829 160.167 205.136C159.588 207.555 162.985 209.545 162.917 210.073C162.885 210.317 159.971 211.015 159.814 212.823C159.737 213.716 160.291 214.288 160.307 215.203C160.336 216.855 157.625 217.656 158.902 218.852C159.695 219.593 160.882 218.884 161.359 219.242C161.836 219.601 161.908 220.639 162.611 221.116C164.015 222.07 165.122 218.932 165.647 219.087C166.575 219.362 166.423 222.659 168.084 223.556C170.637 224.935 170.76 217.703 171.452 217.918C172.145 218.133 172.28 222.042 174.135 223.577C177.775 226.587 176.452 213.9 178.909 214.29C179.728 214.421 181.066 220.338 185.747 221.238C188.896 221.843 184.062 204.751 186.518 205.141C187.337 205.272 186.212 216.184 190.234 218.917C195.613 214.645 192.555 207.87 194.042 200.792Z"
                fill="#8C1C1C"
              />
              <path
                d="M196.565 200.461C196.565 200.461 195.027 200.663 194.042 200.792M194.042 200.792C189.907 195.425 183.582 186.781 181.685 188.049C179.092 189.781 183.722 196.848 182.963 197.356C182.204 197.863 172.084 191.754 169.295 194.972C167.506 197.036 173.609 202.251 173.23 202.504C172.85 202.758 165.658 196.953 163.602 198.776C160.5 201.526 166.219 205.156 166.152 205.878C166.086 206.6 160.719 202.829 160.167 205.136C159.588 207.555 162.985 209.545 162.917 210.073C162.885 210.317 159.971 211.015 159.814 212.823C159.737 213.716 160.291 214.288 160.307 215.203C160.336 216.855 157.625 217.656 158.902 218.852C159.695 219.593 160.882 218.884 161.359 219.242C161.836 219.601 161.908 220.639 162.611 221.116C164.015 222.07 165.122 218.932 165.647 219.087C166.575 219.362 166.423 222.659 168.084 223.556C170.637 224.935 170.76 217.703 171.452 217.918C172.145 218.133 172.28 222.042 174.135 223.577C177.775 226.587 176.452 213.9 178.909 214.29C179.728 214.421 181.066 220.338 185.747 221.238C188.896 221.843 184.062 204.751 186.518 205.141C187.337 205.272 186.212 216.184 190.234 218.917C195.613 214.645 192.555 207.87 194.042 200.792Z"
                stroke="#8C1C1C"
              />
              <path
                d="M210.9 186.224C209.325 194.687 211.38 207.413 206.866 207.894C202.154 208.396 202.419 201.86 201.462 201.714C200.983 201.641 196.358 210.086 193.231 207.965C191.601 206.86 192.5 205.237 192.268 204.946C192.037 204.655 187.243 205.768 185.194 203.55C182.267 200.382 187.571 199.932 187.595 199.558C187.626 199.096 183.8 197.451 183.937 195.598C184.207 191.936 192.498 192.146 192.398 191.574C192.299 191.003 187.658 190.202 188.123 187.935C188.842 184.43 202.005 186.893 210.9 186.224Z"
                fill="#590000"
              />
              <path
                d="M214.483 183.181C214.483 183.181 212.299 185.036 210.9 186.224M210.9 186.224C209.325 194.687 211.38 207.413 206.866 207.894C202.154 208.396 202.419 201.86 201.462 201.714C200.983 201.641 196.358 210.086 193.231 207.965C191.601 206.86 192.5 205.237 192.268 204.946C192.037 204.655 187.243 205.768 185.194 203.55C182.267 200.382 187.571 199.932 187.595 199.558C187.626 199.096 183.8 197.451 183.937 195.598C184.207 191.936 192.498 192.146 192.398 191.574C192.299 191.003 187.658 190.202 188.123 187.935C188.842 184.43 202.005 186.893 210.9 186.224Z"
                stroke="#590000"
              />
              <path
                d="M222.381 167.271C217.826 164.864 210.739 160.856 209.671 162.546C208.212 164.854 213.602 168.341 213.175 169.017C212.748 169.693 203.525 169.064 202.326 172.562C201.557 174.804 207.538 176.33 207.325 176.668C207.111 177.006 200.156 175.463 199.121 177.63C197.561 180.899 202.821 181.388 202.97 181.954C203.118 182.521 198.081 181.789 198.301 183.732C198.532 185.77 201.611 185.936 201.705 186.357C201.748 186.552 199.765 188.211 200.144 189.627C200.331 190.325 200.901 190.537 201.164 191.217C201.638 192.443 199.835 194.1 201.116 194.497C201.91 194.744 202.601 193.749 203.055 193.832C203.509 193.914 203.848 194.663 204.502 194.747C205.812 194.914 205.778 192.132 206.211 192.044C206.979 191.887 207.769 194.416 209.253 194.44C211.536 194.477 209.646 189.013 210.222 188.904C210.797 188.795 211.969 191.67 213.774 192.096C217.314 192.932 212.851 183.946 214.79 183.28C215.437 183.059 218.056 186.968 221.794 185.817C224.309 185.043 216.021 174.127 217.96 173.461C218.607 173.24 220.758 181.851 224.506 182.329C227.349 177.033 223.211 173.152 222.381 167.271Z"
                fill="#8C1C1C"
              />
              <path
                d="M224.172 166.039C224.172 166.039 223.08 166.79 222.381 167.271M222.381 167.271C217.826 164.864 210.739 160.856 209.671 162.546C208.212 164.854 213.602 168.341 213.175 169.017C212.748 169.693 203.525 169.064 202.326 172.562C201.557 174.804 207.538 176.33 207.325 176.668C207.111 177.006 200.156 175.463 199.121 177.63C197.561 180.899 202.821 181.388 202.97 181.954C203.118 182.521 198.081 181.789 198.301 183.732C198.532 185.77 201.611 185.936 201.705 186.357C201.748 186.552 199.765 188.211 200.144 189.627C200.331 190.325 200.901 190.537 201.164 191.217C201.638 192.443 199.835 194.1 201.116 194.497C201.91 194.744 202.601 193.749 203.055 193.832C203.509 193.914 203.848 194.663 204.502 194.747C205.812 194.914 205.778 192.132 206.211 192.044C206.979 191.887 207.769 194.416 209.253 194.44C211.536 194.477 209.646 189.013 210.222 188.904C210.797 188.795 211.969 191.67 213.774 192.096C217.314 192.932 212.851 183.946 214.79 183.28C215.437 183.059 218.056 186.968 221.794 185.817C224.309 185.043 216.021 174.127 217.96 173.461C218.607 173.24 220.758 181.851 224.506 182.329C227.349 177.033 223.211 173.152 222.381 167.271Z"
                stroke="#8C1C1C"
              />
              <path
                d="M233.235 130.702C222.703 134.308 215.726 130.351 214.632 137.934C213.704 144.369 226.343 140.041 225.678 141.445C222.027 149.158 210.112 147.593 210.494 154.879C210.74 159.578 218.965 154.88 219.254 155.016C219.789 155.27 209.701 166.992 212.386 169.523C213.606 170.673 214.96 168.114 215.512 168.139C216.204 168.17 215.692 172.234 218.442 172.39C221.192 172.546 222.542 167.457 222.831 167.593C223.415 167.87 223.415 170.407 224.761 170.226C228.531 169.719 226.502 156.11 227.504 155.485C228.506 154.859 228.084 163.207 233.806 163.051C238.398 162.926 228.341 143.278 229.649 142.752C230.552 142.389 236.446 156.281 241.163 150.494C246.216 144.294 236.721 137.507 233.235 130.702Z"
                fill="#FAD07D"
              />
              <path
                d="M223.647 89.107C218.579 90.0939 210.528 91.3504 210.765 93.9756C211.089 97.5625 217.491 97.0736 217.586 98.1237C217.68 99.1738 210.103 105.681 211.382 110.329C212.202 113.309 217.823 110.277 217.871 110.802C217.918 111.327 211.528 115.099 212.094 118.205C212.947 122.892 217.351 119.318 217.825 119.805C218.298 120.291 213.915 123.432 215.315 125.325C216.783 127.309 219.285 125.09 219.625 125.465C219.782 125.638 219.288 128.943 220.478 130.152C221.066 130.749 221.643 130.53 222.278 131.048C223.422 131.981 223.066 135.143 224.315 134.569C225.089 134.213 224.998 132.619 225.404 132.354C225.809 132.088 226.546 132.62 227.109 132.2C228.234 131.358 226.448 128.431 226.729 127.999C227.228 127.236 229.442 129.307 230.613 128.178C232.414 126.442 227.487 122.108 227.865 121.545C228.244 120.981 230.975 123.123 232.649 122.171C235.933 120.305 226.775 114.232 227.864 112.017C228.227 111.278 232.739 113.393 234.921 109.262C236.389 106.483 223.032 101.337 224.122 99.1214C224.485 98.3829 231.605 105.856 234.826 103.448C233.688 95.6108 228.013 94.7075 223.647 89.107Z"
                fill="#8C1C1C"
              />
              <path
                d="M224.262 86.4047C224.262 86.4047 223.887 88.0517 223.647 89.107M223.647 89.107C218.579 90.0939 210.528 91.3504 210.765 93.9756C211.089 97.5625 217.491 97.0736 217.586 98.1237C217.68 99.1738 210.103 105.681 211.382 110.329C212.202 113.309 217.823 110.277 217.871 110.802C217.918 111.327 211.528 115.099 212.094 118.205C212.947 122.892 217.351 119.318 217.825 119.805C218.298 120.291 213.915 123.432 215.315 125.325C216.783 127.309 219.285 125.09 219.625 125.465C219.782 125.638 219.288 128.943 220.478 130.152C221.066 130.749 221.643 130.53 222.278 131.048C223.422 131.981 223.066 135.143 224.315 134.569C225.089 134.213 224.998 132.619 225.404 132.354C225.809 132.088 226.546 132.62 227.109 132.2C228.234 131.358 226.448 128.431 226.729 127.999C227.228 127.236 229.442 129.307 230.613 128.178C232.414 126.442 227.487 122.108 227.865 121.545C228.244 120.981 230.975 123.123 232.649 122.171C235.933 120.305 226.775 114.232 227.864 112.017C228.227 111.278 232.739 113.393 234.921 109.262C236.389 106.483 223.032 101.337 224.122 99.1214C224.485 98.3829 231.605 105.856 234.826 103.448C233.688 95.6108 228.013 94.7075 223.647 89.107Z"
                stroke="#8C1C1C"
              />
              <path
                d="M197.081 53.9505C209.981 59.1758 230.18 60.8199 230.113 67.3305C230.042 74.1275 219.908 71.4292 219.507 72.7215C219.306 73.3676 231.626 82.87 227.757 86.507C225.739 88.4034 223.373 86.5623 222.878 86.7841C222.383 87.0058 223.25 94.1352 219.424 96.2232C213.958 99.2064 214.217 91.5971 213.639 91.4292C212.924 91.2216 209.669 96.0099 206.806 95.1581C201.149 93.4751 202.977 81.9049 202.068 81.8413C201.16 81.7778 199.072 88.0103 195.626 86.5504C190.294 84.292 196.513 66.6816 197.081 53.9505Z"
                fill="#590000"
              />
              <path
                d="M192.988 47.8355C192.988 47.8355 195.483 51.5625 197.081 53.9505M197.081 53.9505C209.981 59.1758 230.18 60.8199 230.113 67.3305C230.042 74.1275 219.908 71.4292 219.507 72.7215C219.306 73.3676 231.626 82.87 227.757 86.507C225.739 88.4034 223.373 86.5623 222.878 86.7841C222.383 87.0058 223.25 94.1352 219.424 96.2232C213.958 99.2064 214.217 91.5971 213.639 91.4292C212.924 91.2216 209.669 96.0099 206.806 95.1581C201.149 93.4751 202.977 81.9049 202.068 81.8413C201.16 81.7778 199.072 88.0103 195.626 86.5504C190.294 84.292 196.513 66.6816 197.081 53.9505Z"
                stroke="#590000"
              />
              <path
                d="M174.774 43.5445C175.962 53.746 171.129 59.7823 177.637 61.6611C183.159 63.2553 181.733 51.0136 182.85 51.791C188.985 56.0618 185.331 66.9613 191.856 67.4343C196.065 67.7394 193.47 59.5586 193.646 59.306C193.972 58.8368 202.433 69.5476 205.186 67.3393C206.437 66.3355 204.428 64.7861 204.555 64.2756C204.714 63.6364 208.216 64.5741 208.878 62.0352C209.54 59.4964 205.29 57.6627 205.466 57.4101C205.822 56.8983 208.069 57.1865 208.165 55.9144C208.434 52.352 195.995 52.6922 195.632 51.6894C195.268 50.6865 202.581 52.0273 203.533 46.6904C204.296 42.4071 184.98 49.5244 184.763 48.2483C184.613 47.3673 198.039 43.4666 193.812 38.4242C189.283 33.0217 181.465 41.0778 174.774 43.5445Z"
                fill="#FAD07D"
              />
              <path
                d="M148.899 43.0086C156.451 37.7134 164.621 27.0158 168.237 29.4493C172.013 31.9898 166.867 36.6679 167.445 37.3678C167.735 37.7178 177.471 34.3207 178.116 37.8244C178.452 39.6513 176.574 40.2976 176.52 40.6562C176.466 41.0149 180.764 43.1535 180.559 46.0627C180.265 50.2189 176.103 47.2739 175.801 47.5357C175.428 47.8595 176.938 51.4424 175.434 52.731C172.462 55.2773 166.648 49.9968 166.286 50.4817C165.925 50.9666 168.661 54.4284 166.607 55.8197C163.431 57.9721 155.814 48.0117 148.899 43.0086Z"
                fill="#590000"
              />
              <path
                d="M144.01 43.0486C144.01 43.0486 146.989 43.0242 148.899 43.0086M148.899 43.0086C156.451 37.7134 164.621 27.0158 168.237 29.4493C172.013 31.9898 166.867 36.6679 167.445 37.3678C167.735 37.7178 177.471 34.3207 178.116 37.8244C178.452 39.6513 176.574 40.2976 176.52 40.6562C176.466 41.0149 180.764 43.1535 180.559 46.0627C180.265 50.2189 176.103 47.2739 175.801 47.5357C175.428 47.8595 176.938 51.4424 175.434 52.731C172.462 55.2773 166.648 49.9968 166.286 50.4817C165.925 50.9666 168.661 54.4284 166.607 55.8197C163.431 57.9721 155.814 48.0117 148.899 43.0086Z"
                stroke="#590000"
              />
              <path
                d="M115.747 45.6335C117.397 50.5258 119.708 58.3398 122.279 57.757C125.791 56.9608 124.459 50.6803 125.487 50.4471C126.515 50.2139 133.969 56.8624 138.407 54.9788C141.252 53.7713 137.502 48.6013 138.016 48.4847C138.53 48.3681 143.116 54.2021 146.119 53.2305C150.652 51.7642 146.526 47.8721 146.945 47.3382C147.365 46.8042 151.059 50.7327 152.749 49.0944C154.522 47.3761 151.991 45.1901 152.317 44.8039C152.468 44.6253 155.81 44.6771 156.85 43.3376C157.364 42.6761 157.071 42.1323 157.5 41.4349C158.273 40.1775 161.455 40.1107 160.72 38.9495C160.265 38.2293 158.697 38.5305 158.38 38.1635C158.063 37.7965 158.493 36.9956 158.001 36.4939C157.019 35.4904 154.353 37.6483 153.888 37.4263C153.065 37.0332 154.825 34.5639 153.551 33.5532C151.591 31.9984 147.949 37.4561 147.34 37.1553C146.731 36.8544 148.492 33.8642 147.327 32.3308C145.042 29.3228 140.237 39.2044 137.896 38.4184C137.116 38.1564 138.615 33.4043 134.231 31.7888C131.282 30.702 127.951 44.6225 125.61 43.8365C124.83 43.5745 131.294 35.5265 128.481 32.6535C120.863 34.8191 120.72 40.5645 115.747 45.6335Z"
                fill="#8C1C1C"
              />
              <path
                d="M112.987 45.3815C112.987 45.3815 114.669 45.5351 115.747 45.6335M115.747 45.6335C117.397 50.5258 119.708 58.3398 122.279 57.757C125.791 56.9608 124.459 50.6803 125.487 50.4471C126.515 50.2139 133.969 56.8624 138.407 54.9788C141.252 53.7713 137.502 48.6013 138.016 48.4847C138.53 48.3681 143.116 54.2021 146.119 53.2305C150.652 51.7642 146.526 47.8721 146.945 47.3382C147.365 46.8042 151.059 50.7327 152.749 49.0944C154.522 47.3761 151.991 45.1901 152.317 44.8039C152.468 44.6253 155.81 44.6771 156.85 43.3376C157.364 42.6761 157.071 42.1323 157.5 41.4349C158.273 40.1775 161.455 40.1107 160.72 38.9495C160.265 38.2293 158.697 38.5305 158.38 38.1635C158.063 37.7965 158.493 36.9956 158.001 36.4939C157.019 35.4904 154.353 37.6483 153.888 37.4263C153.065 37.0332 154.825 34.5639 153.551 33.5532C151.591 31.9984 147.949 37.4561 147.34 37.1553C146.731 36.8544 148.492 33.8642 147.327 32.3308C145.042 29.3228 140.237 39.2044 137.896 38.4184C137.116 38.1564 138.615 33.4043 134.231 31.7888C131.282 30.702 127.951 44.6225 125.61 43.8365C124.83 43.5745 131.294 35.5265 128.481 32.6535C120.863 34.8191 120.72 40.5645 115.747 45.6335Z"
                stroke="#8C1C1C"
              />
              <path
                d="M93.1999 58.0595C96.729 49.5376 97.8787 36.1264 102.237 36.2379C106.786 36.3542 104.955 43.0641 105.819 43.3438C106.251 43.4837 112.642 35.3908 115.067 38.0006C116.332 39.3614 115.094 40.9152 115.241 41.2466C115.388 41.5781 120.162 41.075 121.551 43.6397C123.534 47.3039 118.441 47.0539 118.328 47.4366C118.187 47.9098 121.384 50.1222 120.807 52.0168C119.667 55.7604 111.926 54.4268 111.882 55.03C111.837 55.6332 116.004 57.0851 115.018 59.3614C113.493 62.8826 101.72 58.5679 93.1999 58.0595Z"
                fill="#590000"
              />
              <path
                d="M89.0967 60.7178C89.0967 60.7178 91.5975 59.0976 93.1999 58.0595M93.1999 58.0595C96.729 49.5376 97.8787 36.1264 102.237 36.2379C106.786 36.3542 104.955 43.0641 105.819 43.3438C106.251 43.4837 112.642 35.3908 115.067 38.0006C116.332 39.3614 115.094 40.9152 115.241 41.2466C115.388 41.5781 120.162 41.075 121.551 43.6397C123.534 47.3039 118.441 47.0539 118.328 47.4366C118.187 47.9098 121.384 50.1222 120.807 52.0168C119.667 55.7604 111.926 54.4268 111.882 55.03C111.837 55.6332 116.004 57.0851 115.018 59.3614C113.493 62.8826 101.72 58.5679 93.1999 58.0595Z"
                stroke="#590000"
              />
              <path
                d="M78.0765 83.6247C74.3825 74.0416 67.2959 70.9469 72.1824 66.256C76.3288 62.2757 80.7617 73.7754 81.3886 72.5677C84.8325 65.9327 76.5266 57.985 82.0827 54.5303C85.6664 52.302 87.1754 60.751 87.4485 60.8927C87.9559 61.1561 90.4622 47.7387 93.9264 48.4126C95.501 48.7189 94.4435 51.0251 94.7935 51.4179C95.2318 51.9097 97.8951 49.4505 99.6623 51.3898C101.43 53.3292 98.5205 56.9297 98.7936 57.0715C99.3471 57.3588 101.202 56.0583 101.879 57.1397C103.774 60.1678 92.6052 65.6541 92.7501 66.7108C92.8951 67.7675 98.7444 63.1785 102.07 67.4598C104.739 70.8959 84.329 73.5828 84.7305 74.8133C85.0077 75.663 98.7073 72.8691 97.3114 79.2993C95.8158 86.1887 85.1469 82.6952 78.0765 83.6247Z"
                fill="#FAD07D"
              />
              <path
                d="M83.3505 118.311C78.1912 118.502 70.065 119.109 69.699 116.499C69.199 112.932 75.5442 111.953 75.3979 110.909C75.2516 109.864 66.3934 105.251 66.5823 100.433C66.7033 97.345 72.8666 99.0196 72.7935 98.4975C72.7204 97.9754 65.64 95.7545 65.4843 92.6018C65.2494 87.8437 70.3508 90.3225 70.7015 89.741C71.0521 89.1595 66.0695 87.0971 67.0026 84.9361C67.9814 82.6695 70.9224 84.2617 71.1679 83.8198C71.2814 83.6154 70.049 80.5091 70.9329 79.0617C71.3695 78.3469 71.9817 78.4281 72.4819 77.7798C73.3836 76.6111 72.3188 73.6122 73.6649 73.8876C74.4997 74.0583 74.7737 75.6313 75.2292 75.7976C75.6847 75.964 76.2813 75.2782 76.9246 75.5599C78.2112 76.1233 77.1378 79.3806 77.5102 79.7366C78.1694 80.3669 79.8549 77.8466 81.2515 78.6797C83.3998 79.9612 79.5868 85.3012 80.0839 85.7639C80.5809 86.2265 82.753 83.52 84.5998 84.0661C88.2224 85.1372 80.6848 93.1324 82.2491 95.0425C82.7705 95.6792 86.6832 92.5938 89.7472 96.1206C91.8085 98.4933 79.9716 106.541 81.5359 108.451C82.0574 109.088 87.2927 100.191 90.9762 101.804C91.6503 109.695 86.3285 111.865 83.3505 118.311Z"
                fill="#8C1C1C"
              />
              <path
                d="M84.5641 120.803C84.5641 120.803 83.8244 119.284 83.3505 118.311M83.3505 118.311C78.1912 118.502 70.065 119.109 69.699 116.499C69.199 112.932 75.5442 111.953 75.3979 110.909C75.2516 109.864 66.3934 105.251 66.5823 100.433C66.7033 97.345 72.8666 99.0196 72.7935 98.4975C72.7204 97.9754 65.64 95.7545 65.4843 92.6018C65.2494 87.8437 70.3508 90.3225 70.7015 89.741C71.0521 89.1595 66.0695 87.0971 67.0026 84.9361C67.9814 82.6695 70.9224 84.2617 71.1679 83.8198C71.2814 83.6154 70.049 80.5091 70.9329 79.0617C71.3695 78.3469 71.9817 78.4281 72.4819 77.7798C73.3836 76.6111 72.3188 73.6122 73.6649 73.8876C74.4997 74.0583 74.7737 75.6313 75.2292 75.7976C75.6847 75.964 76.2813 75.2782 76.9246 75.5599C78.2112 76.1233 77.1378 79.3806 77.5102 79.7366C78.1694 80.3669 79.8549 77.8466 81.2515 78.6797C83.3998 79.9612 79.5868 85.3012 80.0839 85.7639C80.5809 86.2265 82.753 83.52 84.5998 84.0661C88.2224 85.1372 80.6848 93.1324 82.2491 95.0425C82.7705 95.6792 86.6832 92.5938 89.7472 96.1206C91.8085 98.4933 79.9716 106.541 81.5359 108.451C82.0574 109.088 87.2927 100.191 90.9762 101.804C91.6503 109.695 86.3285 111.865 83.3505 118.311Z"
                stroke="#8C1C1C"
              />
              <path
                d="M83.9774 143.129C87.4777 134.595 96.1114 124.268 92.9405 121.277C89.6302 118.154 86.2016 124.205 85.3913 123.795C84.9862 123.59 86.1536 113.344 82.5939 113.487C80.7378 113.562 80.5216 115.537 80.1836 115.668C79.8456 115.8 76.8122 112.079 74.0198 112.92C70.0305 114.123 73.8206 117.534 73.6317 117.886C73.3981 118.321 69.5704 117.638 68.645 119.389C66.8165 122.849 73.2487 127.356 72.8554 127.816C72.4622 128.275 68.4824 126.37 67.578 128.679C66.1788 132.252 77.573 137.486 83.9774 143.129Z"
                fill="#590000"
              />
              <path
                d="M85.016 147.906C85.016 147.906 84.383 144.994 83.9774 143.129M83.9774 143.129C87.4777 134.595 96.1114 124.268 92.9405 121.277C89.6302 118.154 86.2016 124.205 85.3913 123.795C84.9862 123.59 86.1536 113.344 82.5939 113.487C80.7378 113.562 80.5216 115.537 80.1836 115.668C79.8456 115.8 76.8122 112.079 74.0198 112.92C70.0305 114.123 73.8206 117.534 73.6317 117.886C73.3981 118.321 69.5704 117.638 68.645 119.389C66.8165 122.849 73.2487 127.356 72.8554 127.816C72.4622 128.275 68.4824 126.37 67.578 128.679C66.1788 132.252 77.573 137.486 83.9774 143.129Z"
                stroke="#590000"
              />
              <path
                d="M104.45 166.452C94.1855 166.811 88.9448 172.497 86.1085 166.346C83.7018 161.126 96.0188 160.695 95.0823 159.708C89.9372 154.284 79.7114 159.537 78.2622 153.157C77.3276 149.042 85.8057 150.377 86.0289 150.165C86.4436 149.771 74.5821 143.018 76.3512 139.964C77.1553 138.576 78.9893 140.329 79.4749 140.127C80.0829 139.873 78.6292 136.552 81.0396 135.516C83.45 134.48 85.9021 138.406 86.1254 138.194C86.5777 137.765 85.9549 135.587 87.1981 135.3C90.6794 134.499 92.2141 146.848 93.2602 147.056C94.3063 147.264 91.8809 140.236 97.0139 138.493C101.134 137.093 97.0027 157.261 98.2968 157.283C99.1904 157.299 101.027 143.439 106.648 146.859C112.67 150.524 105.882 159.466 104.45 166.452Z"
                fill="#FAD07D"
              />
              <path
                d="M122.999 174.826C120.241 167.577 120.128 155.875 115.938 156.263C111.563 156.668 112.825 162.439 111.975 162.742C111.55 162.894 106.015 156.211 103.495 158.665C102.182 159.944 103.255 161.226 103.089 161.527C102.924 161.828 98.3794 161.703 96.8579 164.048C94.6842 167.398 99.5896 166.84 99.6706 167.168C99.7707 167.575 96.5394 169.73 96.9534 171.356C97.7715 174.567 105.297 172.881 105.296 173.408C105.294 173.935 101.189 175.487 101.967 177.421C103.17 180.412 114.785 175.839 122.999 174.826Z"
                fill="#590000"
              />
              <path
                d="M126.74 176.888C126.74 176.888 124.46 175.631 122.999 174.826M122.999 174.826C120.241 167.577 120.128 155.875 115.938 156.263C111.563 156.668 112.825 162.439 111.975 162.742C111.55 162.894 106.015 156.211 103.495 158.665C102.182 159.944 103.255 161.226 103.089 161.527C102.924 161.828 98.3794 161.703 96.8579 164.048C94.6842 167.398 99.5896 166.84 99.6706 167.168C99.7707 167.575 96.5394 169.73 96.9534 171.356C97.7715 174.567 105.297 172.881 105.296 173.408C105.294 173.935 101.189 175.487 101.967 177.421C103.17 180.412 114.785 175.839 122.999 174.826Z"
                stroke="#590000"
              />
              <path
                d="M158.519 168.783C158.64 176.424 159.139 188.495 156.509 188.719C152.916 189.026 152.019 179.538 150.967 179.628C149.915 179.717 145.154 192.237 140.313 191.375C137.209 190.822 138.978 181.925 138.452 181.97C137.926 182.014 135.595 192.199 132.423 192.047C127.636 191.818 130.198 184.586 129.618 183.998C129.038 183.409 126.896 190.516 124.736 188.877C122.47 187.157 124.112 183.008 123.671 182.592C123.467 182.399 120.326 183.843 118.883 182.362C118.17 181.631 118.26 180.737 117.615 179.92C116.453 178.447 113.423 179.656 113.718 177.701C113.901 176.49 115.487 176.276 115.66 175.623C115.834 174.971 115.152 174.007 115.444 173.091C116.028 171.26 119.289 173.239 119.652 172.733C120.295 171.836 117.784 169.042 118.64 167.081C119.958 164.064 125.276 170.341 125.748 169.663C126.22 168.985 123.528 165.45 124.102 162.79C125.229 157.571 133.165 169.668 135.107 167.59C135.754 166.897 132.706 160.747 136.294 156.65C138.708 153.894 146.638 172.346 148.58 170.268C149.227 169.575 140.353 160.767 142.025 155.524C149.969 155.485 152.078 163.605 158.519 168.783Z"
                fill="#8C1C1C"
              />
              <path
                d="M161.041 167.293C161.041 167.293 159.504 168.201 158.519 168.783M158.519 168.783C158.64 176.424 159.139 188.495 156.509 188.719C152.916 189.026 152.019 179.538 150.967 179.628C149.915 179.717 145.154 192.237 140.313 191.375C137.209 190.822 138.978 181.925 138.452 181.97C137.926 182.014 135.595 192.199 132.423 192.047C127.636 191.818 130.198 184.586 129.618 183.998C129.038 183.409 126.896 190.516 124.736 188.877C122.47 187.157 124.112 183.008 123.671 182.592C123.467 182.399 120.326 183.843 118.883 182.362C118.17 181.631 118.26 180.737 117.615 179.92C116.453 178.447 113.423 179.656 113.718 177.701C113.901 176.49 115.487 176.276 115.66 175.623C115.834 174.971 115.152 174.007 115.444 173.091C116.028 171.26 119.289 173.239 119.652 172.733C120.295 171.836 117.784 169.042 118.64 167.081C119.958 164.064 125.276 170.341 125.748 169.663C126.22 168.985 123.528 165.45 124.102 162.79C125.229 157.571 133.165 169.668 135.107 167.59C135.754 166.897 132.706 160.747 136.294 156.65C138.708 153.894 146.638 172.346 148.58 170.268C149.227 169.575 140.353 160.767 142.025 155.524C149.969 155.485 152.078 163.605 158.519 168.783Z"
                stroke="#8C1C1C"
              />
              <path
                d="M183.307 151.256C184.446 161.463 190.514 166.256 184.596 169.552C179.575 172.349 178.208 160.1 177.295 161.109C172.279 166.652 178.294 176.449 172.042 178.379C168.01 179.624 168.696 171.069 168.468 170.862C168.044 170.479 162.213 182.82 159.033 181.288C157.588 180.592 159.196 178.63 158.958 178.161C158.659 177.574 155.458 179.276 154.241 176.951C153.025 174.627 156.753 171.883 156.525 171.677C156.062 171.258 153.938 172.045 153.558 170.827C152.494 167.417 164.69 164.947 164.818 163.888C164.946 162.83 158.123 165.783 155.994 160.797C154.286 156.796 174.709 159.381 174.633 158.089C174.581 157.196 160.621 156.419 163.604 150.554C166.8 144.271 176.232 150.359 183.307 151.256Z"
                fill="#FAD07D"
              />
              <path
                d="M186.762 132.491C190.895 134.932 197.517 138.642 196.844 139.961C195.925 141.763 190.568 139.086 190.299 139.614C190.03 140.141 195.307 146.49 193.384 148.501C192.152 149.79 187.916 146.044 187.781 146.307C187.647 146.571 192.404 151.005 191.366 152.457C189.8 154.65 186.695 151.072 186.205 151.154C185.715 151.237 188.879 154.575 187.349 155.062C185.744 155.573 184.014 153.439 183.658 153.512C183.493 153.545 183.32 155.505 182.092 155.704C181.485 155.803 181.032 155.468 180.4 155.506C179.26 155.575 178.994 157.406 178.036 156.627C177.441 156.144 177.804 155.323 177.507 155.028C177.21 154.732 176.487 154.74 176.085 154.302C175.279 153.427 177.323 152.529 177.161 152.192C176.874 151.594 174.619 151.87 173.826 150.823C172.606 149.213 177.574 148.746 177.353 148.301C177.132 147.856 174.426 147.975 173.172 146.833C170.714 144.593 179.593 144.79 179.064 143.19C178.888 142.657 174.671 142.09 173.557 139.051C172.807 137.007 185.09 139.284 184.561 137.684C184.385 137.151 176.988 138.475 174.681 135.968C177.055 132.193 182.044 133.849 186.762 132.491Z"
                fill="#8C1C1C"
              />
              <path
                d="M186.724 130.809C186.724 130.809 186.747 131.834 186.762 132.491M186.762 132.491C190.895 134.932 197.517 138.642 196.844 139.961C195.925 141.763 190.568 139.086 190.299 139.614C190.03 140.141 195.307 146.49 193.384 148.501C192.152 149.79 187.916 146.044 187.781 146.307C187.647 146.571 192.404 151.005 191.366 152.457C189.8 154.65 186.695 151.072 186.205 151.154C185.715 151.237 188.879 154.575 187.349 155.062C185.744 155.573 184.014 153.439 183.658 153.512C183.493 153.545 183.32 155.505 182.092 155.704C181.485 155.803 181.032 155.468 180.4 155.506C179.26 155.575 178.994 157.406 178.036 156.627C177.441 156.144 177.804 155.323 177.507 155.028C177.21 154.732 176.487 154.74 176.085 154.302C175.279 153.427 177.323 152.529 177.161 152.192C176.874 151.594 174.619 151.87 173.826 150.823C172.606 149.213 177.574 148.746 177.353 148.301C177.132 147.856 174.426 147.975 173.172 146.833C170.714 144.593 179.593 144.79 179.064 143.19C178.888 142.657 174.671 142.09 173.557 139.051C172.807 137.007 185.09 139.284 184.561 137.684C184.385 137.151 176.988 138.475 174.681 135.968C177.055 132.193 182.044 133.849 186.762 132.491Z"
                stroke="#8C1C1C"
              />
              <path
                d="M180.538 98.1813C189.611 104.277 205.775 108.056 203.77 113.791C201.677 119.778 194.128 116.229 193.41 117.323C193.051 117.87 200.365 127.671 196.085 130.433C193.854 131.873 192.454 129.976 191.98 130.115C191.505 130.253 190.085 136.641 186.305 138.042C180.905 140.043 183.397 133.361 182.97 133.147C182.443 132.881 178.325 136.729 176.22 135.648C172.059 133.511 177.03 123.517 176.3 123.356C175.57 123.195 171.982 128.452 169.577 126.767C165.857 124.16 176.258 109.345 180.538 98.1813Z"
                fill="#590000"
              />
              <path
                d="M178.994 92.3159C178.994 92.3159 179.935 95.8907 180.538 98.1813M180.538 98.1813C189.611 104.277 205.775 108.056 203.77 113.791C201.677 119.778 194.128 116.229 193.41 117.323C193.051 117.87 200.365 127.671 196.085 130.433C193.854 131.873 192.454 129.976 191.98 130.115C191.505 130.253 190.085 136.641 186.305 138.042C180.905 140.043 183.397 133.361 182.97 133.147C182.443 132.881 178.325 136.729 176.22 135.648C172.059 133.511 177.03 123.517 176.3 123.356C175.57 123.195 171.982 128.452 169.577 126.767C165.857 124.16 176.258 109.345 180.538 98.1813Z"
                stroke="#590000"
              />
              <path
                d="M154.67 86.2425C164.149 82.2894 167.05 75.1213 171.872 79.8786C175.964 83.9153 164.589 88.6591 165.813 89.2529C172.539 92.5152 180.258 83.9964 183.863 89.4566C186.187 92.9784 177.783 94.7164 177.648 94.9933C177.399 95.5077 190.88 97.6483 190.3 101.13C190.037 102.712 187.702 101.718 187.319 102.078C186.84 102.53 189.37 105.125 187.48 106.944C185.589 108.764 181.911 105.953 181.777 106.23C181.504 106.791 182.855 108.61 181.792 109.316C178.817 111.293 173.029 100.277 171.977 100.451C170.924 100.625 175.67 106.347 171.481 109.788C168.119 112.549 164.878 92.2198 163.659 92.6546C162.817 92.9548 165.982 106.573 159.517 105.353C152.589 104.045 155.791 93.285 154.67 86.2425Z"
                fill="#FAD07D"
              />
              <path
                d="M132.845 91.7217C132.081 86.9834 130.702 79.5191 132.146 79.1935C134.119 78.7487 135.485 84.5791 136.062 84.4489C136.64 84.3188 138.15 76.2033 140.925 76.396C142.704 76.5195 142.531 82.1723 142.82 82.1072C143.108 82.0422 143.477 75.5495 145.258 75.4192C147.946 75.2226 147.178 79.8971 147.555 80.2214C147.931 80.5457 148.476 75.9787 149.829 76.8442C151.248 77.752 150.712 80.4462 150.996 80.6734C151.127 80.7785 152.744 79.6592 153.683 80.4768C154.147 80.8805 154.178 81.4424 154.612 81.9043C155.394 82.737 156.971 81.7712 156.985 83.0062C156.994 83.7721 156.13 84.0174 156.093 84.4349C156.056 84.8525 156.523 85.4031 156.444 85.9927C156.286 87.1719 154.289 86.1732 154.133 86.5136C153.857 87.1164 155.511 88.6743 155.212 89.9534C154.753 91.9208 151.219 88.3982 151.018 88.8528C150.817 89.3073 152.639 91.3127 152.562 93.0063C152.41 96.3284 146.886 89.375 145.994 90.8037C145.697 91.28 147.956 94.8852 146.331 97.6845C145.238 99.5679 139.138 88.6663 138.246 90.0951C137.949 90.5713 143.695 95.4143 143.241 98.7903C138.821 99.3776 136.905 94.4822 132.845 91.7217Z"
                fill="#8C1C1C"
              />
              <path
                d="M131.577 92.8262C131.577 92.8262 132.35 92.153 132.845 91.7217M132.845 91.7217C132.081 86.9834 130.702 79.5191 132.146 79.1935C134.119 78.7487 135.485 84.5791 136.062 84.4489C136.64 84.3188 138.15 76.2033 140.925 76.396C142.704 76.5195 142.531 82.1723 142.82 82.1072C143.108 82.0422 143.477 75.5495 145.258 75.4192C147.946 75.2226 147.178 79.8971 147.555 80.2214C147.931 80.5457 148.476 75.9787 149.829 76.8442C151.248 77.752 150.712 80.4462 150.996 80.6734C151.127 80.7785 152.744 79.6592 153.683 80.4768C154.147 80.8805 154.178 81.4424 154.612 81.9043C155.394 82.737 156.971 81.7712 156.985 83.0062C156.994 83.7721 156.13 84.0174 156.093 84.4349C156.056 84.8525 156.523 85.4031 156.444 85.9927C156.286 87.1719 154.289 86.1732 154.133 86.5136C153.857 87.1164 155.511 88.6743 155.212 89.9534C154.753 91.9208 151.219 88.3982 151.018 88.8528C150.817 89.3073 152.639 91.3127 152.562 93.0063C152.41 96.3284 146.886 89.375 145.994 90.8037C145.697 91.28 147.956 94.8852 146.331 97.6845C145.238 99.5679 139.138 88.6663 138.246 90.0951C137.949 90.5713 143.695 95.4143 143.241 98.7903C138.821 99.3776 136.905 94.4822 132.845 91.7217Z"
                stroke="#8C1C1C"
              />
              <path
                d="M121.593 109.093C117.698 102.839 112.142 101.255 115.118 97.6995C117.643 94.6822 122.317 102.187 122.623 101.318C124.303 96.5445 117.249 91.7454 120.869 88.982C123.203 87.1996 125.362 92.8423 125.579 92.9187C125.982 93.0605 126.129 83.7373 128.74 83.9402C129.927 84.0325 129.444 85.6813 129.749 85.923C130.13 86.2255 131.764 84.3538 133.296 85.544C134.828 86.7342 133.158 89.4014 133.375 89.4778C133.814 89.6325 135.004 88.6098 135.633 89.2962C137.395 91.2185 129.937 95.7804 130.175 96.4893C130.413 97.1983 134.104 93.6406 137.066 96.3107C139.443 98.4537 124.895 101.792 125.342 102.6C125.65 103.158 135.292 100.243 135.079 104.726C134.852 109.528 126.633 107.938 121.593 109.093Z"
                fill="#FAD07D"
              />
              <path
                d="M122.698 131.003C127.621 124.948 138.081 119.074 135.303 115.499C132.403 111.767 127.943 115.748 127.178 115.134C126.795 114.827 129.597 106.555 125.93 105.501C124.018 104.951 123.487 106.548 123.12 106.548C122.753 106.547 120.231 102.401 117.239 102.19C112.966 101.889 116.312 106.023 116.063 106.257C115.756 106.548 111.944 104.707 110.722 105.881C108.307 108.2 114.186 114.133 113.711 114.392C113.237 114.65 109.46 111.726 108.172 113.378C106.179 115.935 117.025 124.12 122.698 131.003Z"
                fill="#590000"
              />
              <path
                d="M123.013 135.382C123.013 135.382 122.821 132.713 122.698 131.003M122.698 131.003C127.621 124.948 138.081 119.074 135.303 115.499C132.403 111.767 127.943 115.748 127.178 115.134C126.795 114.827 129.597 106.555 125.93 105.501C124.018 104.951 123.487 106.548 123.12 106.548C122.753 106.547 120.231 102.401 117.239 102.19C112.966 101.889 116.312 106.023 116.063 106.257C115.756 106.548 111.944 104.707 110.722 105.881C108.307 108.2 114.186 114.133 113.711 114.392C113.237 114.65 109.46 111.726 108.172 113.378C106.179 115.935 117.025 124.12 122.698 131.003Z"
                stroke="#590000"
              />
              <path
                d="M145.604 135.946C140.04 140.775 139.349 146.511 135.369 144.131C131.993 142.112 138.669 136.316 137.763 136.151C132.785 135.242 129.154 142.962 125.856 139.822C123.729 137.797 128.962 134.777 129.004 134.551C129.081 134.131 119.85 135.452 119.64 132.841C119.545 131.655 121.249 131.872 121.44 131.533C121.679 131.109 119.573 129.789 120.508 128.089C121.443 126.389 124.339 127.62 124.381 127.394C124.464 126.935 123.267 125.921 123.846 125.191C125.468 123.149 131.145 129.798 131.808 129.451C132.471 129.105 128.377 126.019 130.548 122.674C132.291 119.99 137.874 133.833 138.602 133.264C139.105 132.872 134.711 123.808 139.171 123.314C143.95 122.783 143.67 131.15 145.604 135.946Z"
                fill="#FAD07D"
              />
              <path
                d="M152.932 124.987C153.103 130.398 155.897 137.893 153.368 138.843C150.728 139.836 150.05 135.795 149.482 135.845C149.198 135.869 147.616 141.713 145.552 140.869C144.476 140.429 144.786 139.304 144.616 139.16C144.446 139.015 141.836 140.394 140.379 139.333C138.297 137.819 141.284 136.772 141.25 136.54C141.209 136.252 138.805 135.801 138.648 134.646C138.338 132.364 143.123 131.288 142.993 130.952C142.864 130.617 140.099 130.801 140.078 129.345C140.046 127.094 147.912 126.689 152.932 124.987Z"
                fill="#590000"
              />
              <path
                d="M154.602 122.603C154.602 122.603 153.585 124.056 152.932 124.987M152.932 124.987C153.103 130.398 155.897 137.893 153.368 138.843C150.728 139.836 150.05 135.795 149.482 135.845C149.198 135.869 147.616 141.713 145.552 140.869C144.476 140.429 144.786 139.304 144.616 139.16C144.446 139.015 141.836 140.394 140.379 139.333C138.297 137.819 141.284 136.772 141.25 136.54C141.209 136.252 138.805 135.801 138.648 134.646C138.338 132.364 143.123 131.288 142.993 130.952C142.864 130.617 140.099 130.801 140.078 129.345C140.046 127.094 147.912 126.689 152.932 124.987Z"
                stroke="#590000"
              />
              <path
                d="M156.412 107.329C160.515 109.82 167.092 113.61 166.403 114.921C165.462 116.711 160.138 113.97 159.862 114.494C159.587 115.018 164.786 121.43 162.839 123.418C161.592 124.692 157.401 120.894 157.263 121.156C157.125 121.419 161.829 125.91 160.773 127.35C159.18 129.523 156.119 125.907 155.628 125.984C155.137 126.06 158.26 129.437 156.724 129.905C155.113 130.396 153.41 128.242 153.053 128.31C152.888 128.342 152.691 130.299 151.46 130.483C150.852 130.575 150.404 130.234 149.771 130.265C148.63 130.32 148.342 132.147 147.393 131.357C146.804 130.867 147.177 130.05 146.884 129.751C146.59 129.452 145.868 129.451 145.47 129.008C144.675 128.123 146.73 127.251 146.572 126.911C146.292 126.31 144.034 126.559 143.254 125.502C142.054 123.877 147.027 123.471 146.812 123.023C146.596 122.575 143.888 122.662 142.649 121.505C140.218 119.235 149.094 119.539 148.584 117.934C148.415 117.398 144.205 116.78 143.128 113.728C142.403 111.675 154.658 114.1 154.148 112.495C153.979 111.96 146.566 113.193 144.29 110.659C146.709 106.913 151.678 108.629 156.412 107.329Z"
                fill="#8C1C1C"
              />
              <path
                d="M156.394 105.647C156.394 105.647 156.405 106.672 156.412 107.329M156.412 107.329C160.515 109.82 167.092 113.61 166.403 114.921C165.462 116.711 160.138 113.97 159.862 114.494C159.587 115.018 164.786 121.43 162.839 123.418C161.592 124.692 157.401 120.894 157.263 121.156C157.125 121.419 161.829 125.91 160.773 127.35C159.18 129.523 156.119 125.907 155.628 125.984C155.137 126.06 158.26 129.437 156.724 129.905C155.113 130.396 153.41 128.242 153.053 128.31C152.888 128.342 152.691 130.299 151.46 130.483C150.852 130.575 150.404 130.234 149.771 130.265C148.63 130.32 148.342 132.147 147.393 131.357C146.804 130.867 147.177 130.05 146.884 129.751C146.59 129.452 145.868 129.451 145.47 129.008C144.675 128.123 146.73 127.251 146.572 126.911C146.292 126.31 144.034 126.559 143.254 125.502C142.054 123.877 147.027 123.471 146.812 123.023C146.596 122.575 143.888 122.662 142.649 121.505C140.218 119.235 149.094 119.539 148.584 117.934C148.415 117.398 144.205 116.78 143.128 113.728C142.403 111.675 154.658 114.1 154.148 112.495C153.979 111.96 146.566 113.193 144.29 110.659C146.71 106.913 151.678 108.629 156.412 107.329Z"
                stroke="#8C1C1C"
              />
            </svg>
          </div>
          <p className="title-card">my programs</p>
        </motion.div>
      </Section4>
      <Footer></Footer>
    </ParalaxWrapper>
  );
}

export default LandingPage;
