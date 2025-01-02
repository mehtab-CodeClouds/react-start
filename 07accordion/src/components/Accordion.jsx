import React from "react";

function Accordion({
  id,
  question,
  answer,
  isOpen,
  handleToggle,
  currOpen,
  onSetCurrOpen,
}) {
  isOpen = id === currOpen;

  function handleToggle(id) {
    onSetCurrOpen(!isOpen ? id : null);
  }

  return (
    <div>
      <h2>
        <button
          onClick={() => handleToggle(id)}
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border mt-6 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        >
          <span>{question}</span>
          <svg
            className={`w-3 h-3 ${
              !isOpen ? "rotate-180" : ""
            } shrink-0 transition-all`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-5  dark:bg-gray-900">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
