import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";

const GuestList = ({ guests, confirmed }) => (
  <ul>
    {guests.map((person, index) => {
      return (
        <Guest
          key={index}
          name={person.name}
          toggleConfirm={confirmed}
          isConfirmed={person.isConfirmed}
          index={index}
        />
      );
    })}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
};

export default GuestList;
