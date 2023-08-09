const initialState = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
const reducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      console.log("ADDDD");
      return [
        ...tasks,
        { id: Date.now(), text: action.text, status: action.status },
      ];
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "update": {
      return tasks.map((task) =>
        task.id === action.id ? { ...task, status: !task.status } : task
      );
    }
    case "delete-completed": {
      return tasks.filter((task) => !task.status);
    }
    default:
      throw new console.error("Such action doesn't exist");
  }
};

export { reducer, initialState };
