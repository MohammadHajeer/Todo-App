import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import TaskHeader from "./TaskHeader";
import TasksContainer from "./TasksContainer";
import { reducer, initialState } from "./tasksReducer";

function List() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.localStorage.tasks = JSON.stringify(tasks);
  }, [tasks]);
  return (
    <div className="w-[600px] max-w-full absolute left-1/2 -translate-x-1/2 top-0 p-8 pt-14">
      <Header />
      <TaskHeader dispatch={dispatch} />
      <TasksContainer tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default List;
