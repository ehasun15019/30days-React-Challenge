import React, { useState } from "react";

const EmiCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const handleCalculate = () => {
    const totalCost = parseFloat(document.getElementById("totalCost").value);
    const numberOfIntervals = parseFloat(
      document.getElementById("numberOfIntervals").value
    );

    if (
      isNaN(totalCost) ||
      isNaN(numberOfIntervals) ||
      numberOfIntervals === 0
    ) {
      setMonthlyPayment("Invalid input");
      return;
    }

    const result = (totalCost / numberOfIntervals).toFixed(2);
    setMonthlyPayment(result);
  };

  return (
    <div className="h-[500px] flex flex-col items-center justify-center">
      <h2 className="text-2xl">This is EMI Calculator</h2>

      <input
        type="text"
        className="border border-amber-500 bg-transparent mt-5 py-3 text-center"
        id="totalCost"
        placeholder="total loan amount"
      />

      <input
        type="text"
        className="border border-amber-500 bg-transparent mt-5 py-3 text-center"
        id="numberOfIntervals"
        placeholder="Number of Installment"
      />

      <div className="mt-4">
        <button
          className="p-3 px-5 bg-yellow-900 rounded-full"
          id="calculate"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>

      <div id="output" className="mt-3 text-lg text-green-600">
        {monthlyPayment && <span>Monthly Installment: {monthlyPayment}</span>}
      </div>
    </div>
  );
};

export default EmiCalculator;
