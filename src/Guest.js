import React from "react";
import PropTypes from "prop-types";

const Guest = ({
  name,
  isConfirmed,
  handleConfirm,
  toggleEditingAt,
  isEditing,
}) => {
  return (
    <li>
      {isEditing ? <input type="text" /> : <span>{name}</span>}
      <label>
        <input type="checkbox" checked={isConfirmed} onClick={handleConfirm} />{" "}
        Confirmed
      </label>
      <button onClick={toggleEditingAt}>edit</button>
      <button>remove</button>
    </li>
  );
};

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default Guest;
