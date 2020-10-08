import React from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = ({ name, isConfirmed, handleConfirm, toggleEditingAt, isEditing, setName, removeName }) => {
  return (
    <li>
      <GuestName isEditing={isEditing} handleNameEdits={(e) => setName(e.target.value)}>
        {name}
      </GuestName>
      <label>
        <input type="checkbox" checked={isConfirmed} onClick={handleConfirm} /> Confirmed
      </label>
      <button onClick={toggleEditingAt}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => removeName(name)}>remove</button>
    </li>
  );
};

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired,
  removeName: PropTypes.func.isRequired,
};

export default Guest;
