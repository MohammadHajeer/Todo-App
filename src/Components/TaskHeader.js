import React, { useState } from "react";
import checkIcon from "../images/icon-check.svg";
import { motion } from "framer-motion";

function TaskHeader({ dispatch }) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  function handleActiveClick() {
    setActive((prev) => !prev);
  }

  function addTask(key) {
    if (key === "Enter" && value.trim() !== "") {
      dispatch({
        type: "add",
        text: value,
        status: active,
      });
      setValue("");
      setActive(false);
    }
  }

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex items-center gap-5 p-5 bg-[--task-color] my-8 rounded-md"
    >
      <span
        onClick={handleActiveClick}
        className={
          active
            ? "active"
            : "w-5 h-5 border-2 rounded-full border-[--border-color] cursor-pointer"
        }
      >
        {active && <img src={checkIcon} alt="Check Icon" />}
      </span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => addTask(e.key)}
        type="text"
        placeholder="create a new todo..."
        className="flex-1 text-lg outline-none bg-transparent text-[--bright-color]"
      />
    </motion.div>
  );
}

export default TaskHeader;
