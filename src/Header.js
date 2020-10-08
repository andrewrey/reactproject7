import React from "react";
import PropTypes from "prop-types";
import GuestInputForm from "./GuestInputForm.js";

const Header = () => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm />
    </header>
  );
};

export default Header;
