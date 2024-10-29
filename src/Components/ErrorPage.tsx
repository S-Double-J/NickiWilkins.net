import Navbar from "./Navbar";
import { useState } from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";

const Frame = styled.div`
  display: flex;
  height: 100svh;
  width: 100svw;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
`;
const TextFrame = styled.div`
  width: 100%;
  max-width: 800px;
`;
function ErrorPage() {
    const [active, setActive] = useState(false);
    const error = useRouteError();
  
    let errorMessage: string;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null && 'data' in error) {
      errorMessage = (error as { data: string }).data;
    } else {
      errorMessage = 'Unknown error';
    }
  
    return (
      <>
        <Navbar active={active} setActive={setActive} />
        <Frame>
          <TextFrame>
            <h1>Oops!</h1>
            <p>
              It looks like there has been an unexpected error. Please try either
              pressing any button in the navigation bar, refreshing the page, or
              returning to the previous page.
            </p>
            <br/>
            <p>{errorMessage}</p>
          </TextFrame>
        </Frame>
      </>
    );
  }
  

export default ErrorPage;
