import { useEffect, useReducer, useState } from "react";
import { addTask, getTasks } from "./api/api";
import "./App.css";
import Header from "./components/Header/Header";
import Table from "./components/table/table";

const taskReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [...state, action.payload];
    }
    case "GET_TASKS": {
      return action.payload;
    }

    default:
      return state;
  }
};

function App() {
  const [taskState, taskDispatch] = useReducer(taskReducer, []);
  useEffect(() => {
    getTasks().then((getRes) => {
      if (getRes.status === 200) {
        taskDispatch({ type: "GET_TASKS", payload: getRes.data });
      }
    });
  }, []);

  const handleSubmit = async ({ taskName, priority, description }: any) => {
    const newTask = {
      taskName,
      priority,
      description,
      completed: false,
    };

    try {
      const response = await addTask(newTask);
      if (response.status === 201) {
        taskDispatch({
          type: "ADD_TASK",
          payload: response.data,
        });
      }
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <Table data={taskState} />
    </>
  );
}

export default App;
