import React from "react";
import PropTypes from "prop-types";

const GuestTile = ({ name }) => {
  if (name) {
    return (
      <li>
        <span>{name}</span>
      </li>
    );
  } else {
    return null;
  }
};

GuestTile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GuestTile;
