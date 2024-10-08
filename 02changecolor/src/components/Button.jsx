import { useState } from "react";
import "../App.css";

function Button({ colorName = "white" }) {
  //   PaymentResponse.colorName = "red";
  console.log(colorName);

  return <button className={`bg-${colorName}-500`}>{colorName}</button>;
}

export default Button;
