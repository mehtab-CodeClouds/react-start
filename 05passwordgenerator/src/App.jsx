import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumbersIncluded, setIsNumbersIncluded] = useState(false);
  const [isCharIncluded, setIsCharIncluded] = useState(false);
  const [randomPassword, setRandomPassword] = useState("");
  const [copyText, SetCopyText] = useState(false);

  const lengthHandler = function (e) {
    setLength(e.target.value);
  };

  const numberIncludedHandler = function () {
    setIsNumbersIncluded((numValue) => !numValue);
  };
  const charIncludedHandler = function () {
    setIsCharIncluded((charValue) => !charValue);
  };

  const passwordSelector = useRef(null);

  const copyToClipboard = function () {
    window.navigator.clipboard
      .writeText(randomPassword)
      .then(() => {
        SetCopyText(true);
        passwordSelector.current.select();
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumbersIncluded) characters += "0123456789";
    if (isCharIncluded) characters += "!@#$%^&*-_+=[]{}~`";

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * characters.length + 1);
      const currChar = characters.charAt(randomNum);
      password += currChar;
    }

    setRandomPassword(password);
  }, [length, isNumbersIncluded, isCharIncluded, setRandomPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumbersIncluded, isCharIncluded, generatePassword]);

  useEffect(() => {
    SetCopyText(false);
  }, [randomPassword]);

  return (
    <>
      <div className="mx-auto max-w-xl px-4 bg-gray-900 my-16 py-8 rounded-xl">
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <input
              ref={passwordSelector}
              readOnly
              value={randomPassword}
              type="text"
              className="pl-5 pr-[100px] bg-white text-emerald-950 py-3 w-full"
            />
            <button
              className="bg-blue-800 mr-[-2px] hover:bg-blue-900 active:bg-blue-950 w-24 h-full top-0 right-0 absolute transition-all"
              onClick={copyToClipboard}
            >
              {!copyText ? "Copy" : "Copied"}
            </button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="flex items-center">
              <input
                name="range"
                type="range"
                min={8}
                max={40}
                value={length}
                onChange={lengthHandler}
              />
              <label htmlFor="range" className="ml-2">
                Length ({length})
              </label>
            </div>
            <div className="flex items-center ml-8">
              <input
                type="checkbox"
                name="numbers"
                className="w-5 h-5"
                onChange={numberIncludedHandler}
              />
              <label htmlFor="numbers" className="ml-2">
                Numbers
              </label>
            </div>
            <div className="flex items-center ml-8">
              <input
                type="checkbox"
                name="charactors"
                className="w-5 h-5"
                onChange={charIncludedHandler}
              />
              <label htmlFor="charactors" className="ml-2">
                Charactors
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
