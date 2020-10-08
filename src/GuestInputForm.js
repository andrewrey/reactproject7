import React from "react";
import PropTypes from "prop-types";

const GuestInputForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addGuest(newGuest);
        setNewGuest("");
      }}
    >
      <input type="text" placeholder="Invite Someone" onChange={handleNameInput} value={newGuest} />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default GuestInputForm;
