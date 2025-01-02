import React, { useState } from "react";

function SelectPercentage({ children, onHandleChange, tip }) {
  return (
    <div className="flex gap-5 items-center mt-5">
      <label className="font-bold text-xl">{children}</label>
      <select
        value={tip || ""}
        onChange={onHandleChange}
        className="border px-5 py-2"
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was Okay (5%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>Absolutly Amazing (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage;
