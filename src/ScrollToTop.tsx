import { useEffect } from "react";

function ScrollToTop(){
    useEffect(() => {
        document.body.scrollTo(0, 0); 
    });

    return null;
}

export default ScrollToTop;