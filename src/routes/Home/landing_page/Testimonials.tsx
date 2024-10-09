import styled from "styled-components";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const SectionContainer = styled.div`
  display: flex;
  padding: 50px 10px;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
`;
const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 70%;
  max-width: 600px;
  flex-grow: 0;
  flex-shrink: 0;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
const DotContainer = styled.div`
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const TestimonialViewWindow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
`;

const TestimonialSliderButton = styled.button`
  flex-shrink: 0;
  flex-grow: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover > * {
    animation: squish 0.6s ease-in-out;
  }
  @keyframes squish {
    50% {
      scale: 1.1;
    }
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const DotButton = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover > * {
    scale: 1.2;
  }
`;

const SlideButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Testimonials() {
  const testimonials = [
    {
      text: `"My experience with Nicki was life changing. She helped me unlock aspects of myself that were hidden. The most transformative moment was when she helped me find my mythopoetic name: River Priestess of the Temple of Ordinary Moments. Working with her is like poetry incarnate."`,
      name: "Kamie, USA",
    },
    {
      text: `"I loved being in the space of Nicki. Our time together was sacred and blessed. There was a dreamy quality to it. She created the space to explore what felt like ancient forgotten parts of myself. Nicki is expansive and vast, honourable and generous, and a perfect guide."`,
      name: "Kristin, USA",
    },
    {
      text: `"Nicki is deeply insightful and skilled at listening and helping me weave together the threads of my life. She asks deep questions in a gentle, supportive way. I appreciated the way she honoured my menopausal transition as being part of my soul’s journey."`,
      name: "Paula, Scotland",
    },
    {
      text: `"During our work together, Nicki shared her enthusiasm and wisdom on the importance of listening to nature and honouring the simplicity and silence within ourselves. It was infectious and transformative. Her vast knowledge of archetypal wisdom and the mythologies we carry helped her identify my strengths and encouraged me to follow my intuition. This gave me the confidence to trust myself and connect more fully with the world around me. I now feel much better equipped to navigate the journey of my life."`,
      name: "Priya, Scotland",
    },
  ];

  const dragX = useMotionValue(0);

  const DRAG_BUFFER = 20;
  const SPRING_VALUES = {
    type: "spring",
    mass: 3,
    stiffness: 40,
    damping: 10,
  };

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [_, setDragging] = useState(false);

  function showPrevTestimonial() {
    setTestimonialIndex((index) => {
      if (index === 0) {
        return testimonials.length - 1;
      }
      return index - 1;
    });
  }
  function showNextTestimonial() {
    setTestimonialIndex((index) => {
      if (index === testimonials.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  function setDotOpacity(currentTestimonialIndex: number) {
    if (currentTestimonialIndex === testimonialIndex) {
      return 1;
    } else {
      return 0.5;
    }
  }
  function onDragStart() {
    setDragging(true);
  }
  function onDragEnd() {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      showNextTestimonial();
    } else if (x >= DRAG_BUFFER) {
      showPrevTestimonial();
    }
  }

  return (
    <SectionContainer id="section-container">
      <SlideButtonDiv>
        <TestimonialSliderButton onClick={showPrevTestimonial}>
          <svg
            className="testimonial-slider-button-left"
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="66"
            viewBox="0 0 71 66"
            fill="none"
          >
            <path
              d="M55.9585 19.5012C59.9585 19.5012 61.9585 16.0015 61.9585 13.0015C61.9585 10.0273 56.22 7.89697 53.4585 9.00146C45.9585 12.0012 48.1768 22.464 52.4585 26.0012C58.9735 31.3834 70.1117 20.3728 68.9585 12.0012C67.9163 4.43495 60.0862 1.11007 52.4585 1.50123C32.9585 2.5012 1.95853 32.5012 1.95853 32.5012C1.95853 32.5012 34.4585 63.501 52.4585 64.5012C60.53 64.9497 68.9585 60.0852 68.9585 52.0012C68.9585 43.9173 59.2785 35.1609 52.4585 39.5012C46.9585 43.0015 45.9585 53.0015 50.4585 56.0012C52.8242 57.5782 60.1774 54.7349 60.9585 52.0012C61.9585 48.5015 56.9585 44.5015 54.4585 46.0012"
              stroke="#FFF4DF"
              stroke-width="2"
            />
          </svg>
        </TestimonialSliderButton>
      </SlideButtonDiv>
      <TestimonialContainer id="testimonial-container" draggable="false">
        <h3 className="white">What Nicki's clients have to say</h3>
        <TestimonialViewWindow id="testimonial-view-window">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-in-view"
              key={index}
              style={{
                translate: `${-100 * testimonialIndex}%`,
                x: dragX,
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              transition={{
                SPRING_VALUES,
              }}
            >
              <motion.p
                className="testimonial-main-text"
                animate={{
                  scale: testimonialIndex === index ? 0.95 : 0.85,
                  opacity: testimonialIndex === index ? 1: 0
                }}
                transition={{
                  SPRING_VALUES,
                  delay: 0.3

                }}
              >
                {testimonial.text}
              </motion.p>
              <motion.p
                className="testimonial-name"
                animate={{
                  scale: testimonialIndex === index ? 1 : 0.85,
                  opacity: testimonialIndex === index ? 1: 0
                }}
                transition={{
                  SPRING_VALUES,
                  delay: 0.3
                }}
              >
                {testimonial.name}
              </motion.p>
            </motion.div>
          ))}
        </TestimonialViewWindow>
        <DotContainer>
          {testimonials.map((_, index) => (
            <DotButton
              onClick={() => setTestimonialIndex(index)}
              style={{ opacity: setDotOpacity(index) }}
            >
              <svg
                className="dot"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <circle cx="10.0415" cy="10" r="10" fill="#FFF4DF" />
                <path
                  d="M11.5 10C11.5 10.5 9.50001 12.25 8.50001 10.5C7.80141 9.27747 7.68348 6.99937 9.00001 6.5C11.0655 5.71652 13.756 7.80437 14 10C14.2761 12.4853 12.5006 14 9.99999 14C7.49999 14 4.49999 13.5 4.49999 10C4.49999 6.09476 6.75611 2.99997 10.5 3C14.6513 3.00004 17 5.84867 17 10C17 14.1513 14.1513 17 9.99999 17C5.99999 17 -0.5 13.5 3.00001 6"
                  stroke="#590000"
                />
              </svg>
            </DotButton>
          ))}
        </DotContainer>
      </TestimonialContainer>
      <SlideButtonDiv>
        <TestimonialSliderButton onClick={showNextTestimonial}>
          <svg
            className="testimonial-slider-button-right"
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="66"
            viewBox="0 0 70 66"
            fill="none"
          >
            <path
              d="M14.1083 46.4862C10.1132 46.4862 8.11572 49.9826 8.11572 52.9798C8.11572 55.9512 13.8472 58.0795 16.6052 56.976C24.0959 53.9791 21.8804 43.5262 17.604 39.9923C11.0971 34.6152 -0.027343 45.6154 1.12438 53.9791C2.16531 61.5383 9.9857 64.86 17.604 64.4692C37.0798 63.4702 68.0415 33.4984 68.0415 33.4984C68.0415 33.4984 35.5817 2.52779 17.604 1.52853C9.54246 1.08044 1.12438 5.94042 1.12438 14.0168C1.12438 22.0931 10.7924 30.8412 17.604 26.505C23.0972 23.0081 24.0959 13.0175 19.6015 10.0205C17.2388 8.44505 9.89461 11.2857 9.11448 14.0168C8.11572 17.5132 13.1095 21.5095 15.6064 20.0111"
              stroke="#FFF4DF"
              stroke-width="2"
            />
          </svg>
        </TestimonialSliderButton>
      </SlideButtonDiv>
    </SectionContainer>
  );
}

export default Testimonials;
