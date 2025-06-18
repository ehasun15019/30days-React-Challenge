import React, { useState } from "react";

const Button = () => {
  const [increment, setIncrement] = useState(0);
  return (
    <div className="h-[500px] flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold">Increment By 3 Button create</h2>

      <div className="card flex flex-col justify-center items-center">
        <h1 className="mt-3 text-4xl">{increment}</h1>

        <button
          className="bg-amber-300 rounded-full mt-4 text-black p-4 px-6 cursor-pointer"
          onClick={() => {
            setIncrement(increment + 3);
          }}
        >
          Increment By 3
        </button>
      </div>
    </div>
  );
};

export default Button;
