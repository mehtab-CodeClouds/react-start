import { useState } from "react";

const message = [
  "Create Your Account",
  "Choose The Currency",
  "Start Investing",
];

function App() {
  const [step, setStep] = useState(1);

  function prevHandler() {
    if (step > 1) setStep(step - 1);
  }

  function nextHandler() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <div className="mx-auto max-w-xl px-4 bg-gray-900 my-16 py-8 rounded-xl">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between">
            <div
              className={`${
                step >= 1 ? "bg-blue-900" : "bg-gray-800"
              } w-10 h-10 rounded-full flex justify-center items-center`}
            >
              1
            </div>
            <div
              className={`${
                step >= 2 ? "bg-blue-900" : "bg-gray-800"
              } w-10 h-10 rounded-full flex justify-center items-center`}
            >
              2
            </div>
            <div
              className={`${
                step >= 3 ? "bg-blue-900" : "bg-gray-800"
              } w-10 h-10 rounded-full flex justify-center items-center`}
            >
              3
            </div>
          </div>
          <h1 className="my-8 font-bold text-3xl text-center">
            Step {step}: {message[step - 1]}
          </h1>
          <div className="flex justify-between">
            <button
              className="rounded-3xl bg-blue-900 px-5 py-2"
              onClick={prevHandler}
            >
              Previous
            </button>
            <button
              className="rounded-3xl bg-blue-900 px-5 py-2"
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
