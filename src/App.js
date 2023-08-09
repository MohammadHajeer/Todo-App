import React, { useEffect } from "react";
import BackgroundImage from "./Components/BackgroundImage";
import List from "./Components/List";

function App() {
  useEffect(() => {
    if (window.localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className=" h-screen bg-[--bg-color]">
      <BackgroundImage />
      <List />
    </div>
  );
}

export default App;
