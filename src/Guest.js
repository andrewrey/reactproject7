import React from "react";

const Guest = ({ name, isConfirmed, toggleConfirm, index }) => {
  return (
    <li>
      <span>{name}</span>
      <label>
        <input
          type="checkbox"
          checked={isConfirmed}
          onClick={() => toggleConfirm(index)}
        />{" "}
        Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
  );
};

export default Guest;
