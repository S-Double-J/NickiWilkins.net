  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  import { motion } from "framer-motion";

  interface Props {
    class_name: string
    fadeInViewProps: {
        initial: { opacity: number };
        whileInView: { opacity: number };
        transition: { duration: number; ease: string };
        viewport: { once: boolean; margin: string };
      };
  }
  export default function MeetingButton({class_name, fadeInViewProps}: Props) {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <motion.button className={class_name} {...fadeInViewProps} data-cal-namespace="30min"
	  data-cal-link="nickiwilkins/30min"
    
	  data-cal-config='{"layout":"month_view"}'
	  ><p>Book a meeting with Nicki</p></motion.button>;
  };
  