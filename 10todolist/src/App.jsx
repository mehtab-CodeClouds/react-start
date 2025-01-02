import { useState } from "react";
import ExampleToDo from "./components/ExampleToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ExampleToDo />
    </>
  );
}

export default App;
