import React from "react";

function Output({ billAmount, myTip, friendTip }) {
  const calculateAvgTip = (billAmount * ((myTip + friendTip) / 2)) / 100;

  return (
    <h2 className="font-bold text-4xl mt-7">
      You pay ${billAmount + calculateAvgTip} ($
      {billAmount} + ${calculateAvgTip} tip)
    </h2>
  );
}

export default Output;
