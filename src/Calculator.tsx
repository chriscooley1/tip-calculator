import React, { useState } from "react";

const Calculator: React.FC = () => {
  // State variables for Bill Amount and Tip Percentage
  const [billAmount, setBillAmount] = useState<number | string>("");
  const [tipPercentage, setTipPercentage] = useState<number | string>("");
  const [totalBill, setTotalBill] = useState<number | null>(null);

  /**
   * Handler for changes in the bill amount input field.
   *
   * @remarks
   * This function updates the `billAmount` state with the value from the input field.
   *
   * @param event - The change event from the bill amount input field.
   */
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

  /**
   * Handler for changes in the tip percentage input field.
   *
   * @remarks
   * This function updates the `tipPercentage` state with the value from the input field.
   *
   * @param event - The change event from the tip percentage input field.
   */
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

  /**
   * Function to calculate total bill based on bill amount and tip percentage.
   *
   * @remarks
   * This function calculates the total bill based on the `billAmount` and `tipPercentage` states.
   * If either value is invalid, it sets the `totalBill` state to `null`.
   */
  const calculateTotalBill = (): void => {
    // Check if bill amount and tip percentage are valid numbers and bill amount is greater than 0
    if (typeof billAmount === "number" && typeof tipPercentage === "number" && billAmount > 0) {
      const total = (billAmount * tipPercentage) / 100; // Calculate total
      setTotalBill(total); // Update total bill state
    } else {
      setTotalBill(null); // Set total bill state to null if bill amount is invalid
    }
  };

  return (
    <div className="calculator">
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
        <button type="submit">Submit</button>
      </form>
      {/* Display the calculated total bill if available */}
      {totalBill !== null && (
        <p>Your total bill is {totalBill}.</p>
      )}
    </div>
  );
};

export default Calculator;
