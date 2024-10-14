import { useState } from "react";
import "../App.css";

function Button({ colorName }) {
  const [color, setColor] = useState("black");
  document.body.style.backgroundColor = `${color}`;

  const bgChange = function (e) {
    e.preventDefault();

    setColor(colorName);
  };

  return (
    <button style={{ backgroundColor: `${colorName}` }} onClick={bgChange}>
      {colorName}
    </button>
  );
}

export default Button;
