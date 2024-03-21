import React, { useId, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Heading from "../Heading/Heading.tsx";
import style from "./slider.module.css";

interface ISlider {
  heading: string;
  images: string[];
}

const DecorativeSlider = ({ heading, images }: ISlider) => {
  const { slider_section, slider_heading, slider_motion, slider_img } = style;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    smooth: 10,
  });

  const xProgress = useTransform(scrollYProgress, [0, 1], ["-900%", "100%"]);

  const x = useSpring(xProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={ref}
      className={`bg-white dark:bg-background-dark text-text-light dark:text-text-dark ${slider_section}`}
    >
      <Heading text={heading} />
      <motion.div style={{ x }} className={slider_motion}>
        {images?.map((img) => (
          <img className={slider_img} src={img} alt={`Slider image`} />
        ))}
        {images?.map((img) => (
          <img className={slider_img} src={img} alt={`Slider image`} />
        ))}
        {images?.map((img) => (
          <img className={slider_img} src={img} alt={`Slider image`} />
        ))}
      </motion.div>
    </section>
  );
};

export default DecorativeSlider;
