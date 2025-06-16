import React, { useRef, useState } from "react";

const NamePicker = () => {
  const [nameList, setNameList] = useState([]);
  const [pickList, setPickedList] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const nameInputRef = useRef(null);
  const dialog = useRef(null);

  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      const name = e.target.value.trim();

      if (name && !nameList.includes(name) && !pickList.includes(name)) {
        setNameList([...nameList, name]);
        e.target.value = "";
      }
    }
  };

  const pickRandomName = () => {
    if (nameList.length === 0) return;

    const index = Math.floor(Math.random() * nameList.length);
    const name = nameList[index];

    setNameList(
      nameList.filter((n) => {
        return n !== name;
      })
    );

    setPickedList([...pickList, name]);
    setSelectedName(name);

    if (dialog.current) {
      dialog.current.showModal();
    }
  };

  return (
    <div className="flex flex-col h-[500px] items-center justify-center raffle-app">
      <h1 className="text-5xl font-semibold">Name Picker</h1>

      {/* input field */}
      <input
        type="text"
        className="border border-white p-5 w-[250px] mt-10"
        id="nameInput"
        placeholder="Enter name and press Enter"
        onKeyDown={handlePressKey}
        ref={nameInputRef}
      />

      {/* Name list */}
      <div id="nameList" className="my-4">
        {nameList.map((name, index) => {
          return (
            <span key={index} className="name p-3">
              {name}
            </span>
          );
        })}
      </div>

      {/* Picker button */}
      <button
        className="cursor-pointer p-3 mt-5  bg-amber-300 rounded-full text-black px-5"
        id="pick"
        onClick={pickRandomName}
      >
        Pick a Name
      </button>

      {/* Dialog  for picked name*/}
      <dialog id="nameDialog" ref={dialog} className="px-10 py-10">
        <p>
          Picked Name: <strong>{selectedName}</strong>
        </p>

        <button
          onClick={() => {
            dialog.current.close();
          }}
          className="px-4 bg-amber-500 cursor-pointer mt-4"
        >
          Close
        </button>
      </dialog>

      {/* Picked Names List */}
      <div id="pickedList" className="mt-3">
        {pickList.map((name, idx) => (
          <span key={idx} className="name px-3">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NamePicker;
