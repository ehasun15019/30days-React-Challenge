import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((0 * 9) / 5 + 32);
  const [editing, setEditing] = useState("celsius");

  const celsiusChanger = (e) => {
    const c = e.target.value;
    setEditing("celsius");
    setCelsius(c);

    const cFloat = parseFloat(c);
    if (!isNaN(cFloat)) {
      setFahrenheit(((cFloat * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const fahrenheitChanger = (e) => {
    const f = e.target.value;
    setEditing("fahrenheit");
    setFahrenheit(f);

    const fFloat = parseFloat(f);
    if (!isNaN(fFloat)) {
      setCelsius((((fFloat - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div className="bg-[#242424]  flex justify-center items-center flex-col h-[500px]">
      <h1 className="text-white text-4xl font-semibold">
        Temperature Converter
      </h1>

      <div className="mt-[30px] mb-10">
        <label htmlFor="celsius" className="text-white">
          Celsius:{" "}
        </label>

        <input
          type="number"
          className="py-2.5 border border-amber-500 text-white"
          id="celsius"
          value={
            editing === "fahrenheit"
              ? (((parseFloat(fahrenheit) - 32) * 5) / 9).toFixed(2)
              : celsius
          }
          onChange={celsiusChanger}
        />
      </div>

      <div className="mt-[30px] mb-10">
        <label htmlFor="fahrenheit" className="text-white">
          Fahrenheit:{" "}
        </label>

        <input
          type="number"
          className="py-2.5 border border-amber-500 text-white"
          id="fahrenheit"
          value={
            editing === "celsius"
              ? ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2)
              : fahrenheit
          }
          onChange={fahrenheitChanger}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
