import React, { useEffect, useState } from "react";

function BillInput({ billAmount, setBillAmount }) {
  // function onHandleChange(e) {
  //   setBillAmount(e.target.value);
  // }

  return (
    <div className="flex gap-5 items-center">
      <label htmlFor="bill-value" className="font-bold text-xl">
        How much was the bill?
      </label>
      <input
        type="text"
        value={billAmount || ""}
        onChange={(e) => setBillAmount(Number(e.target.value))}
        className="border px-5 py-2"
      />
    </div>
  );
}

export default BillInput;
