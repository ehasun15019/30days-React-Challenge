import React, { useState } from "react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [error, setError] = useState("");

  const calculateDays = () => {
    if (!selectedDate) return;

    const today = new Date();
    const selected = new Date(selectedDate);

    today.setHours(0, 0, 0, 0);
    selected.setHours(0, 0, 0, 0);

    const inDate = selected.getTime() - today.getTime();
    const dayCount = Math.ceil(inDate / (1000 * 60 * 60 * 24));

    if (dayCount < 0) {
      setError("Error: Past Date Entered");
      setDaysLeft("");
    } else {
      setError("");
      setDaysLeft(dayCount);
    }
  };
  return (
    <div className="h-[500px] flex flex-col justify-center items-center">
      <input
        type="date"
        name=""
        id="datePicker"
        className="border border-black ps-2 py-2 px-4 text-center"
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button
        className="mt-3 px-4 py-3 bg-amber-200 rounded cursour-pointer"
        id="findDays"
        onClick={calculateDays}
      >
        Find Days
      </button>

      <div style={{ marginTop: "10px" }}>
        <span id="daysLeft">{daysLeft}</span>
      </div>

      <div id="error" style={{ color: "red", marginTop: "10px" }}>
        {error}
      </div>
    </div>
  );
};

export default App;
