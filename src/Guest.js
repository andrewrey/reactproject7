import React from "react";
import PropTypes from "prop-types";

const Guest = ({ name, isConfirmed, handleConfirm }) => {
  return (
    <li>
      <span>{name}</span>
      <label>
        <input type="checkbox" checked={isConfirmed} onClick={handleConfirm} />{" "}
        Confirmed
      </label>
      <button>edit</button>
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
