import React from "react";
import style from "./logo.module.css";

const Logo = () => {
  const { logo, logo_text } = style;

  return (
    <a href="https://flowbite.com/" className={logo}>
      <span className={`text-text-light dark:text-text-dark ${logo_text}`}>
        NFTropoli$
      </span>
    </a>
  );
};

export default Logo;
