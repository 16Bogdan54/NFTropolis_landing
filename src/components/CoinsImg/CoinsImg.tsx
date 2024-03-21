import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import style from "./coins.module.css";

const CoinsImg = () => {
  const { bg_dark, motion_div } = style;

  const ref = useRef(null);

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref} className={`${bg_dark} relative h-screen`}>
      <motion.div style={{ y }} className={motion_div}></motion.div>
    </section>
  );
};

export default CoinsImg;
