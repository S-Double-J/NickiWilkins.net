import styled from "styled-components";
import Heroine from "../Components/Landing Page Components/Heroine";
import WiseWildWhole from "../Components/Landing Page Components/Introduction";
import TheCycle from "../Components/Landing Page Components/TheCycle";
import Conclusion from "../Components/Landing Page Components/Conclusion";
import Testimonials from "../Components/Landing Page Components/Testimonials";

const ColourBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex: 1 0 0;
  align-self: stretch;
  background: #590000;
  position: relative;
`;
interface Props {
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
  };
  MakeSplitTextAnim: (props: {children:string}) => JSX.Element;
}
function LandingPage({fadeInViewProps, MakeSplitTextAnim}: Props) {
  return (
    <>
      <Heroine fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/>
      <WiseWildWhole fadeInViewProps={fadeInViewProps}/>
      <TheCycle fadeInViewProps={fadeInViewProps}/>
      <ColourBox>
        <Testimonials fadeInViewProps={fadeInViewProps}/>
        <Conclusion fadeInViewProps={fadeInViewProps}/>
      </ColourBox>
    </>
  );
}

export default LandingPage;
