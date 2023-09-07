import React, { useState, useRef } from "react";
import Task from "./Task";
import { motion, AnimatePresence } from "framer-motion";

function TasksContainer({ tasks, dispatch }) {
  const [filter, setFilter] = useState("All");
  const buttons = useRef();

  function handleFilterClick(e) {
    setFilter(e.target.innerHTML);
    [...buttons.current.children].forEach((button) => {
      button.classList.remove("text-[--bright-color]");
    });
    e.target.classList.add("text-[--bright-color]");
  }

  function onDragging(e) {
    const draggedTask = [...e.currentTarget.children].find((child) =>
      child.classList.contains("dragged")
    );
    const restTasks = [...e.currentTarget.children].filter(
      (child) => !child.classList.contains("dragged")
    );

    let clientY = 0;
    if (e.type === "dragover") {
      clientY = e.clientY;
    } else {
      clientY = e.touches[0].clientY;
    }
    let nextTask = [...restTasks].find((task) => {
      return (
        clientY <=
        task.getBoundingClientRect().top +
          task.getBoundingClientRect().height / 2
      );
    });
    e.currentTarget.insertBefore(draggedTask, nextTask);
  }

  const filteredTasks = tasks
    .map((task) => {
      switch (filter) {
        case "Completed": {
          return (
            task.status && <Task key={task.id} {...task} dispatch={dispatch} />
          );
        }
        case "Active": {
          return (
            !task.status && <Task key={task.id} {...task} dispatch={dispatch} />
          );
        }
        default:
          return <Task key={task.id} {...task} dispatch={dispatch} />;
      }
    })
    .filter((task) => task);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.5}}
      className="rounded-md overflow-hidden shadow-2xl bg-[--task-color]"
    >
      <AnimatePresence>
        {tasks.length ? (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            exit={{ opacity: 0.5, x: 200 }}
          >
            <div
              className="overflow-auto h-80  relative"
              onDragOver={(e) => onDragging(e)}
              onTouchMove={(e) => onDragging(e)}
            >
              {filteredTasks.length > 0 ? (
                filteredTasks
              ) : (
                <motion.p
                  animate={{ scale: 2 }}
                  initial={{ scale: 1, x: "-50%", y: "-50%" }}
                  className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 text-4xl text-[--secondary-text-color]"
                >
                  EMPTY
                </motion.p>
              )}
            </div>
            <div className="bg-[--task-color] flex justify-between items-center p-5 text-[--secondary-text-color]">
              <div>
                {filteredTasks.length} {tasks.length > 1 ? "items" : "item"}{" "}
                left
              </div>
              <motion.div
                initial={{ scale: 0, x: "-50%", y: "100%" }}
                animate={{ scale: 1, x: "-50%", y: "100%" }}
                transition={{ delay: 1.5 }}
                className="flex absolute bottom-0 left-1/2 rounded-md
              -translate-x-1/2 translate-y-full p-4 bg-[--task-color] w-footer-w
              justify-center gap-10  shadow-2xl"
                ref={buttons}
              >
                <button
                  className="text-[--bright-color]"
                  onClick={(e) => handleFilterClick(e)}
                >
                  All
                </button>
                <button onClick={(e) => handleFilterClick(e)}>Completed</button>
                <button onClick={(e) => handleFilterClick(e)}>Active</button>
              </motion.div>
              <button
                onClick={() => dispatch({ type: "delete-completed" })}
                className="hover:text-[--bright-color]"
              >
                Delete Completed
              </button>
              <p
                className="absolute bottom-0 translate-y-note left-1/2 
      -translate-x-1/2 text-[--secondary-text-color] text-center"
              >
                Drag and drop to reorder list
              </p>
            </div>
          </motion.div>
        ) : (
          <h2 className="text-center mx-auto text-2xl bg-[--task-color] p-5 text-[--secondary-text-color]">
            EMPTY
          </h2>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default TasksContainer;
