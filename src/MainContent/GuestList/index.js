import React from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";
import GuestTile from "./GuestTile";

const GuestList = ({ guests, toggleConfirmAt, toggleEditingAt, setNameAt, isFiltered, removeName, pendingGuest }) => (
  <ul>
    <GuestTile name={pendingGuest} />
    {guests
      .filter((person) => !isFiltered || person.isConfirmed)
      .map((person, index) => {
        return <Guest key={index} name={person.name} handleConfirm={() => toggleConfirmAt(index)} isConfirmed={person.isConfirmed} toggleEditingAt={() => toggleEditingAt(index)} isEditing={person.isEditing} setName={(text) => setNameAt(text, index)} removeName={removeName} />;
      })}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeName: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default GuestList;
