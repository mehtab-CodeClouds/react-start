import { useState } from "react";
import "../App.css";

function Button({ colorName = "white" }) {
  //   PaymentResponse.colorName = "red";
  //   console.log(colorName);
  const [color, setColor] = useState("white");
  //   console.log(color);

  return (
    <button
      className={`bg-${colorName}-500`}
      onClick={() => setColor(colorName)}
    >
      {colorName}
    </button>
  );
}

export default Button;
