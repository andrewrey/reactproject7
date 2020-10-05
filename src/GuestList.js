import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";

const GuestList = ({ guests, toggleConfirmAt, toggleEditingAt, setNameAt }) => (
  <ul>
    {guests.map((person, index) => {
      return (
        <Guest
          key={index}
          name={person.name}
          handleConfirm={() => toggleConfirmAt(index)}
          isConfirmed={person.isConfirmed}
          toggleEditingAt={() => toggleEditingAt(index)}
          isEditing={person.isEditing}
          setName={(text) => setNameAt(text, index)}
        />
      );
    })}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
};

export default GuestList;
