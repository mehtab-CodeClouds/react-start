import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [totalBill, setTotalBill] = useState(0);

  function submitHadnler(e) {
    e.preventDefault();

    setTipPerPerson((billAmount * tipPercentage) / 100 / numOfPeople);
    setTotalPerPerson(
      billAmount / numOfPeople +
        (billAmount * tipPercentage) / 100 / numOfPeople
    );
    setTotalBill(
      billAmount +
        ((billAmount * tipPercentage) / 100 / numOfPeople) * numOfPeople
    );
  }

  function resetHandler(e) {
    e.preventDefault();

    setBillAmount("");
    setTipPercentage("");
    setNumOfPeople("");
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setTotalBill(0);
  }

  return (
    <>
      <form className="max-w-xl mx-auto mt-10 bg-blue-50 px-8 py-10 rounded-lg">
        <Input
          inputText="Bill Amount ($)"
          inputValue={billAmount}
          onChangeValue={setBillAmount}
        />
        <Input
          inputText="Tip Percentage (%)"
          inputValue={tipPercentage}
          onChangeValue={setTipPercentage}
        />
        <Input
          inputText="Number of People ($)"
          inputValue={numOfPeople}
          onChangeValue={setNumOfPeople}
        />
        <div className="flex gap-5">
          <Button onclickHandle={submitHadnler}>Calulate</Button>
          <Button onclickHandle={resetHandler}>Reset</Button>
        </div>
        <div className="flex justify-between mt-5 text-gray-500 font-medium">
          <div>Tip per Person</div>
          <div>${tipPerPerson.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-5 text-gray-500 font-medium">
          <div>Total per Person</div>
          <div>${totalPerPerson}</div>
        </div>
        <div className="flex justify-between mt-5 text-gray-500 font-medium">
          <div>Total Bill</div>
          <div>${totalBill}</div>
        </div>
      </form>
    </>
  );
}

export default App;
