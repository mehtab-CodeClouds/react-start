import React from "react";

function ExampleToDo() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          To-Do List
        </h1>

        {/* Add Task Input (Static) */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          
          />
          <button className="p-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition">
            Add
          </button>
        </div>

        {/* Task Filters (Static) */}
        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">
            All
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200">
            Active
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200">
            Completed
          </button>
        </div>

        {/* Clear Completed Button (Static) */}
        <button className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition mb-4">
          Clear Completed Tasks
        </button>

        {/* Task List (Static) */}
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-3 rounded-md bg-gray-200">
            <span className="flex-1">Sample Task 1</span>
            <div className="flex items-center space-x-2">
              <button className="text-indigo-600 hover:text-indigo-800">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center p-3 rounded-md bg-gray-200">
            <span className="flex-1">Sample Task 2</span>
            <div className="flex items-center space-x-2">
              <button className="text-indigo-600 hover:text-indigo-800">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center p-3 rounded-md bg-green-100 line-through text-gray-400">
            <span className="flex-1">Completed Task</span>
            <div className="flex items-center space-x-2">
              <button className="text-indigo-600 hover:text-indigo-800">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExampleToDo;
