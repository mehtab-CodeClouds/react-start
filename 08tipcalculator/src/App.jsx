import { useEffect, useState } from "react";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";
import ButtonReset from "./components/ButtonReset";

function App() {
  const [myTip, setmyTip] = useState("");
  const [friendTip, setFriendTip] = useState("");
  const [billAmount, setBillAmount] = useState(0);

  function handleMyTipChange(e) {
    setmyTip(Number(e.target.value));
  }
  function handleFriendTipChange(e) {
    setFriendTip(Number(e.target.value));
  }

  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
      <SelectPercentage tip={myTip} onHandleChange={handleMyTipChange}>
        How did you like the service.
      </SelectPercentage>
      <SelectPercentage tip={friendTip} onHandleChange={handleFriendTipChange}>
        How did your friend like the service.
      </SelectPercentage>
      <Output
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        myTip={myTip}
        friendTip={friendTip}
      />
      <ButtonReset
        setmyTip={setmyTip}
        setFriendTip={setFriendTip}
        setBillAmount={setBillAmount}
      />
    </div>
  );
}

export default App;
