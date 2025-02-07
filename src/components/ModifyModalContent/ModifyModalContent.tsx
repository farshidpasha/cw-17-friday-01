import { useEffect, useReducer, useRef, useState } from "react";

import { Itask } from "../../types/types";

interface Iprops {
  isEdit: boolean;
  addFunction: (
    taskName: string,
    priority: string,
    description: string
  ) => void;
  editFunction: (
    id: string,
    taskName: string,
    priority: string,
    description: string
  ) => void;
  handleSubmit: (task: Itask) => void;
}

export default function ModifyModalContent({ isEdit, handleSubmit }: Iprops) {
  const [taskName, setTaskName] = useState("");
  const taskName2 = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = useState("low");
  const [description, setDescription] = useState("");
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  // const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   e.currentTarget.style.backgroundColor = "blue";
  // };

  const handleSubmitButton = () => {
    handleSubmit({
      taskName,
      priority,
      description,
      completed: false,
    });
  };

  // useEffect(() => {
  //   descriptionRef.current?.focus();
  // }, []);

  return (
    <div>
      <label htmlFor="taskName" className="block mb-2 font-medium">
        Task Name:
      </label>
      <span className="task-name-error text-red-500 text-sm hidden">
        *required
      </span>
      <input
        ref={taskName2}
        type="text"
        id="taskName"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 mb-4"
      ></input>
      <label htmlFor="priority" className="block mb-2 font-medium">
        priority
      </label>
      <select
        id="priority"
        className="w-full p-2 rounded-lg border border-gray-300 mb-4"
        value={priority}
        defaultValue={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label htmlFor="description" className="block mb-2 font-medium">
        Description
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 mb-4"
        ref={descriptionRef}
      ></textarea>
      <button
        onClick={handleSubmitButton}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {isEdit ? "Edit" : "Add"}
      </button>
    </div>
  );
}
