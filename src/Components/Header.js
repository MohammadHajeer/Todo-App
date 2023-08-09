import React, { useState } from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

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
    <div className="flex justify-between items-center text-white">
      <h1 className="text-4xl tracking-widest font-bold">TODO</h1>
      <div onClick={handleThemeSwitcherClick} className="cursor-pointer">
        <img src={!lightTheme ? sunIcon : moonIcon} alt="Moon Icon" />
      </div>
    </div>
  );
}

export default Header;
