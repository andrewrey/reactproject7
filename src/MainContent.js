import React from "react";
import PropTypes from "prop-types";

const MainContent = () => {
  return (
    <div className="main">
      <div>
        <h2>Invitees</h2>
        <label>
          <input type="checkbox" onChange={toggleFilter} checked={isFiltered} /> Hide those who haven't responded
        </label>
      </div>
      <Counter total={total} confirmed={confirmed} unconfirmed={unconfirmed} />
      <GuestList guests={guests} toggleConfirmAt={toggleConfirmAt} toggleEditingAt={toggleEditingAt} setNameAt={setNameAt} isFiltered={isFiltered} removeName={removeName} pendingGuest={newGuest} />
    </div>
  );
};

export default MainContent;
