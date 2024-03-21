import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/Button.tsx";
import style from "./hero.module.css";
import { useRef } from "react";

const Hero = () => {
  const { bg_dark, bg_img } = style;

  const ref = useRef(null);

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref} className="relative h-screen w-full">
      <motion.div style={{ y }} className={`${bg_img} ${bg_dark}`}></motion.div>
      <div className="absolute z-10 top-1/2 inset-x-0 flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-6xl font-bold mb-4">
          NFTropolis Gateway
        </h2>
        <p className="text-white mb-4 text-xl">
          Embark on a Wild Journey Through the NFT Universe - Where Creativity
          Knows No Bounds!
        </p>
        <Button variant="primary" text="Explore Now" />
      </div>
    </section>
  );
};

export default Hero;

// dark-bg bg-blend-darken bg-no-repeat mb-4 bg-center bg-cover h-screen w-full flex justify-center items-center text-center"
//       ></ParallaxBanner>

// ---
// import {ParallaxBanner} from 'react-scroll-parallax';
//
// ---
//     <!-- bg-hero-image (style)-->
//     <section>
//         <ParallaxBanner layers={[
//             {image: "/images/hero-image.png", speed: -20}
//             {
//                 speed: -15,
//                 children: ()
//             }
//         ]}
//                         class="aspect-[2/1] dark-bg bg-blend-darken bg-no-repeat mb-4 bg-center bg-cover h-screen w-full flex justify-center items-center text-center">
//             <div class="z-10 absolute inset-0">
//                 <h2 class="text-white text-6xl font-bold mb-4">
//                     NFTropolis Gateway
//                 </h2>
//                 <p class="text-white mb-4 text-xl">Embark on a Wild Journey Through the NFT Universe - Where Creativity
//                     Knows No Bounds!</p>
//                 <button type="button"
//                         class="py-2.5 px-5 me-2 mb-4 text-sm font-bold text-white focus:outline-none border border-white rounded-lg hover:bg-gray-50 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-white dark:focus:ring-gray-700 dark:text-white">Explore Now</button>
//             </div>
//         </ParallaxBanner>
//     </section>
//
// <style>
//     .dark-bg::after {
//     content: "";
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//
//     background-color: rgba(0, 0, 0, 0.35);
// }
// </style>
