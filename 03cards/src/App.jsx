import { useState } from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto py-14">
        <div className="grid grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
