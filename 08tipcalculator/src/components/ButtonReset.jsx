import React from "react";

function ButtonReset({ setmyTip, setFriendTip, setBillAmount }) {

  const resetHandler = (){
    setmyTip(0); 
    setFriendTip(0); 
    setBillAmount ="";
  }

  return (
    <button
      onClick={resetHandler}
      className="px-8 py-3 bg-blue-950 mt-10 text-white rounded-full hover:bg-blue-800"
    >
      Reset
    </button>
  );
}

export default ButtonReset;
