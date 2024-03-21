import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface IProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: IProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef, children]);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="w-full fixed top-0 flex flex-col"
        style={{ y }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
