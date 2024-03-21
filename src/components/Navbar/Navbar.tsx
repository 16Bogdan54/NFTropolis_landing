import Logo from "../Logo/Logo.tsx";
import Button from "../Button/Button.tsx";
import NavLink from "./NavLink.tsx";
import ToggleBtn from "./ToggleBtn.tsx";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import style from "./navbar.module.css";
import React from "react";
const Navbar = () => {
  const { navbar, wrapper, mobile_menu, links_wrapper, links_list, progress } =
    style;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className={`bg-background-light dark:bg-background-dark ${navbar}`}>
      <div className={wrapper}>
        <Logo />
        <div className={mobile_menu}>
          <Button variant="primary" text="Join Now" />
          <ToggleBtn />
        </div>

        <div className={`${links_wrapper} hidden`} id="navbar-sticky">
          <ul className={`dark:text-text-dark ${links_list}`}>
            <li key={1}>
              <NavLink href="#" text="Creators" />
            </li>
            <li key={2}>
              <NavLink href="#" text="Collectors" />
            </li>
            <li key={3}>
              <NavLink href="#" text="Community" />
            </li>
          </ul>
        </div>
      </div>
      <motion.div style={{ scaleX }} className={progress} />
    </nav>
  );
};

export default Navbar;
