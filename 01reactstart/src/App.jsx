import { useState } from "react";
import "./App.css";

function App() {
  let [counterNumber, setCounter] = useState(10);
  let [message, setMessage] = useState("Counter");

  const increaseNumber = () => {
    // counterNumber = counterNumber + 1; // This will not work because we are using a state variable
    if (counterNumber < 20) {
      setCounter(counterNumber + 1);
      setMessage("Counter");
    } else setMessage("Counter can't be more then 20");
  };

  const decreaseNumber = () => {
    // counterNumber = counterNumber - 1;  // This will not work because we are using a state variable
    if (counterNumber > 0) {
      setCounter(counterNumber - 1);
      setMessage("Counter");
    } else setMessage("Counter can't be less then 0");
  };

  return (
    <>
      <h1>{message}</h1>
      <div>{counterNumber}</div>
      <br />
      <button onClick={increaseNumber}>Increase number +</button>
      <br /> <br />
      <button onClick={decreaseNumber}>Decrease number -</button>
    </>
  );
}

export default App;
