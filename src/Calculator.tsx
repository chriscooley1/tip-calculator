import React, { useState }from "react";

const Calculator: React.FC = () => {
  // State variables for Bill Amount and Tip Percentage
  const [billAmount, setBillAmount] = useState<number | string>("");
  const [tipPercentage, setTipPercentage] = useState<number | string>("");
  const [totalBill, setTotalBill] = useState<number | null>(null);

  // Handler for changes in the bill amount input field
  const handleBillAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Update bill amount state with the value from the input field
    setBillAmount(event.target.valueAsNumber);
    const newBillAmount = event.target.value;
    if (newBillAmount === "") {
      setBillAmount("");
    } else {
      setBillAmount(Number(newBillAmount));
    }
  };

  // Handler for changes in the tip percentage input field
  const handleTipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Update tip percentage state with the value from the input field
    setTipPercentage(event.target.valueAsNumber);
    const newTipPercentage = event.target.value;
    if (newTipPercentage === "") {
      setTipPercentage("");
    } else {
      setTipPercentage(Number(newTipPercentage));
    }
  };

  // Function to calculate total bill based on bill amount and tip percentage
  const calculateTotalBill = (): void => {
    // 
  }

  return (
    <div className="calculator">
      <h2>Total Bill</h2>
      {/* Form for entering bill amount and tip and displaying total bill */}
      <form onSubmit={(e) => {e.preventDefault(); calculateTotalBill();}}>
        <div>
          <label htmlFor="billAmount">Bill Amount</label>
          <input
            type="number"
            id="billAmount"
            value={billAmount !== undefined ? billAmount : ""}
            placeholder="Bill Amount"
            onChange={handleBillAmountChange}
          />
        </div>
        <div>
          <label htmlFor="tipPercentage">Tip Percentage</label>
          <input
            type="number"
            id="tipPercentage"
            value={tipPercentage !== undefined ? tipPercentage : ""}
            placeholder="Tip Percentage"
            onChange={handleTipPercentageChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Calculator;