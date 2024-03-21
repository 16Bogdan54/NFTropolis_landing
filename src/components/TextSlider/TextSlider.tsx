import style from "./slider.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TextSlider = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);

  const { slider_section, slider, text } = style;

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  useGSAP(
    () => {
      gsap.to(slider, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-500px",
      });
      requestAnimationFrame(animate);
    },
    { scope: sliderRef },
  );

  return (
    <section
      className={`dark:border-y-2 dark:border-gray-200 dark:text-text-dark dark:bg-background-dark ${slider_section}`}
    >
      <div ref={sliderRef} className={slider}>
        <h2 ref={firstTextRef} className={`${text}`}>
          Empower Your NFT Journey * Join the NFTropolis Revolution *
        </h2>
        <h2 ref={secondTextRef} className={`${text} `}>
          Empower Your NFT Journey * Join the NFTropolis Revolution *
        </h2>
      </div>
    </section>
  );
};

export default TextSlider;
