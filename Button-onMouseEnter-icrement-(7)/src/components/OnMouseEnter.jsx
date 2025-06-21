import React, { useEffect, useState } from "react";

const OnMouseEnter = () => {
  const [hoversIn, setHoversIn] = useState(() => {
    // Get initial value from localStorage or default to 0
    const saved = localStorage.getItem("hoversIn");
    return saved ? Number(saved) : 0;
  });

  const handleHover = () => {
    setHoversIn((a) => {
      return a + 1;
    });
  };

  useEffect(() => {
    // Save to localStorage whenever hoversIn changes
    localStorage.setItem("hoversIn", hoversIn);
  }, [hoversIn]);

  return (
    <div>
      <button
        className="bg-amber-400 px-4 py-3 text-black rounded cursor-pointer"
        onMouseEnter={handleHover}
      >
        Hover Me
      </button>

      <h1 className="text-4xl mt-2.5 text-center">{hoversIn}</h1>
    </div>
  );
};

export default OnMouseEnter;
