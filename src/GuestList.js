import React from "react";
import PropTypes from "prop-types";

const GuestList = ({ guests }) => (
  <ul>
    {guests.map((person, index) => {
      return (
        <li key={index}>
          <span>{person.name}</span>
          <label>
            <input type="checkbox" checked={person.isConfirmed} /> Confirmed
          </label>
          <button>edit</button>
          <button>remove</button>
        </li>
      );
    })}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
};

export default GuestList;
