import React, { useState } from "react";

const GenerateTable = () => {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number);

    if (isNaN(num) || num < 0 || num > 1000) {
      setTable(["Please Enter a number between 0 and 1000"]);
      return;
    }

    const newTable = [];

    for (let i = 1; i <= 10; i++) {
      newTable.push(`${num} x ${i} = ${num * i}`);
    }

    setTable(newTable);
  };

  return (
    <div className="h-[700px] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold text-center">Generate a table</h2>

      <div className="flex w-[600px] justify-between mt-[30px] left-side">
        <div className="flex flex-col">
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="px-3 py-3 ps-3 border border-amber-500"
          />

          <button
            id="generateTable"
            onClick={generateTable}
            className="bg-amber-600 rounded px-1 py-2 mt-5 cursor-pointer"
          >
            Generate Table
          </button>
        </div>

        <div className="border border-amber-900 w-[300px]">
          <ul id="multiplicationTable" className="py-2 px-2">
            {table.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenerateTable;
