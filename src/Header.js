import React from "react";
import PropTypes from "prop-types";
import GuestInputForm from "./GuestInputForm.js";

const Header = ({ handleNameInput, newGuest, addGuest, setNewGuest }) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm handleNameInput={handleNameInput} newGuest={newGuest} addGuest={addGuest} setNewGuest={setNewGuest} />
    </header>
  );
};

export default Header;
