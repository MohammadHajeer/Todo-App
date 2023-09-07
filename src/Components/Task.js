import React, { useState } from "react";
import checkIcon from "../images/icon-check.svg";
import crossIcon from "../images/icon-cross.svg";
import { motion, AnimatePresence } from "framer-motion";

function Task({ id, text, status, dispatch }) {
  const [hover, setHover] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  function handleActiveClick() {
    dispatch({
      type: "update",
      id: id,
    });
  }
  function handleOnMouseMove() {
    setHover(true);
  }
  function handleOnMouseLeave() {
    setHover(false);
  }
  function handleDeleteTask() {
    dispatch({
      type: "delete",
      id: id,
    });
  }
  function handleStartDragging(e) {
    e.classList.add("dragged");
  }
  function handleLeaveDragging(e) {
    e.classList.remove("dragged");
  }
  return (
    <AnimatePresence>
      {!deleteTask && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          onTouchStart={(e) => {
            handleStartDragging(e.currentTarget);
          }}
          onTouchEnd={(e) => {
            handleLeaveDragging(e.currentTarget);
          }}
          onDragStart={(e) => {
            handleStartDragging(e.currentTarget);
          }}
          onDragEnd={(e) => {
            handleLeaveDragging(e.currentTarget);
          }}
          draggable={true}
          onMouseMove={handleOnMouseMove}
          onMouseLeave={handleOnMouseLeave}
          className="flex justify-between items-center p-5 bg-[--task-color]
       border-b-2 border-[--border-color] cursor-grab"
        >
          <div className="flex items-start gap-5 ">
            <span
              onClick={handleActiveClick}
              className={
                status
                  ? "active"
                  : "w-5 h-5 border-2 rounded-full border-[--border-color] cursor-pointer"
              }
            >
              {status && <img src={checkIcon} alt="Check Icon" />}
            </span>
            <p
              className={
                status
                  ? "line-through text-[--secondary-text-color]"
                  : "text-[--main-text-color]"
              }
            >
              {text}
            </p>
          </div>
          {hover && (
            <button
              onClick={() => {
                setDeleteTask(true)
                setTimeout(() => {
                  handleDeleteTask();
                }, 500);
              }}
              className="cursor-pointer"
            >
              <img src={crossIcon} alt="cross icon" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Task;
