import React from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = ({
  name,
  isConfirmed,
  handleConfirm,
  toggleEditingAt,
  isEditing,
}) => {
  return (
    <li>
      <GuestName isEditing={isEditing}>{name}</GuestName>
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
  toggleEditingAt: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default Guest;
