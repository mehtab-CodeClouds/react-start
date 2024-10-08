import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";

function App() {
  return (
    <>
      <div className="flex gap-2 px-4 py-2 rounded-xl bg-gray-50">
        <Button colorName="red" />
        <Button colorName="green" />
        <Button colorName="blue" />
        <Button colorName="olive" />
        <Button colorName="gray" />
        <Button colorName="yellow" />
        <Button colorName="pink" />
        <Button colorName="purple" />
        <Button colorName="levender" />
        <Button colorName="white" />
        <Button colorName="black" />
      </div>
    </>
  );
}

export default App;
