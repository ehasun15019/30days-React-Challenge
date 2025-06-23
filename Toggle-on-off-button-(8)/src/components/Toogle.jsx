import React, { useState } from "react";

const Toogle = () => {
  const [isOff, setIsOff] = useState("");

  const handleToggle = () => {
    setIsOff(!isOff);
  };
  return (
    <div className="h-[300px] flex flex-col justify-center items-center">
      <h1 className="text-4xl text-red-400">
        This is a Toggle (on / off) Button
      </h1>

      <button
        style={{
          background: isOff ? "red" : "green",
          color: isOff ? "black" : "",
          padding: "10px 20px",
          marginTop: "30px",
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        {isOff ? "off" : "on"}
      </button>
    </div>
  );
};

export default Toogle;
