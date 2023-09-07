import React, { useState } from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { motion } from "framer-motion";

function Header() {
  const [lightTheme, setlightTheme] = useState(true);

  function handleThemeSwitcherClick() {
    setlightTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    if (!document.documentElement.classList.contains("dark")) {
      window.localStorage.theme = "light";
    } else {
      window.localStorage.theme = "dark";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center text-white"
    >
      <h1 className="text-4xl tracking-widest font-bold">TODO</h1>
      <div onClick={handleThemeSwitcherClick} className="cursor-pointer">
        <img src={!lightTheme ? sunIcon : moonIcon} alt="Moon Icon" />
      </div>
    </motion.div>
  );
}

export default Header;
