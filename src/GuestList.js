import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";

const GuestList = ({ guests, toggleConfirmAt }) => (
  <ul>
    {guests.map((person, index) => {
      return (
        <Guest
          key={index}
          name={person.name}
          handleConfirm={() => toggleConfirmAt(index)}
          isConfirmed={person.isConfirmed}
        />
      );
    })}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmAt: PropTypes.func.isRequired,
};

export default GuestList;
