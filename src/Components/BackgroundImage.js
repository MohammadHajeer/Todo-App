import React from "react";

function BackgroundImage() {
  return (
    <div
      className=" h-80 bg-center 
    bg-desktop-light dark:bg-desktop-dark 
    max-md:bg-mobile-light dark:max-md:bg-mobile-dark
     bg-no-repeat bg-cover"
    ></div>
  );
}

export default BackgroundImage;
