import React, { useState } from "react";

function ExampleToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // Filter for All, Active, or Completed
  const [editIndex, setEditIndex] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState("");

  // Add a new task to the list
  const addTask = () => {
    if (task.trim() !== "") {
      const newTask = { text: task, completed: false, createdAt: new Date() };
      setTasks([newTask, ...tasks]); // Add to the front (newest first)
      setTask(""); // Clear the input field
    }
  };

  // Toggle the completion status of a task
  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Remove a task from the list
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Edit a task
  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = () => {
    const newTasks = [...tasks];
    newTasks[editIndex].text = editText;
    setTasks(newTasks);
    setEditIndex(null);
    setEditText("");
  };

  // Filter tasks based on their status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all' tasks
  });

  // Clear completed tasks
  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          To-Do List
        </h1>

        {/* Add Task Input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTask}
            className="p-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        {/* Task Filters */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-md ${
              filter === "active" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md ${
              filter === "completed"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Clear Completed Button */}
        {tasks.some((task) => task.completed) && (
          <button
            onClick={clearCompleted}
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition mb-4"
          >
            Clear Completed Tasks
          </button>
        )}

        {/* Task List */}
        <ul className="space-y-2">
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 rounded-md cursor-pointer ${
                task.completed
                  ? "bg-green-100 line-through text-gray-400"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => toggleCompletion(index)}
            >
              {editIndex === index ? (
                <div className="flex w-full">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={saveEdit}
                    className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ml-2"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span className="flex-1">{task.text}</span>
              )}

              <div className="flex items-center space-x-2">
                {editIndex !== index && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startEditing(index);
                    }}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTask(index);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExampleToDo;
