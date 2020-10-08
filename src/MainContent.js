import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import GuestList from "./GuestList";
import ConfirmedFilter from "./ConfirmedFilter";

const MainContent = ({ toggleFilter, isFiltered, total, confirmed, unconfirmed, guests, toggleConfirmAt, toggleEditingAt, setNameAt, removeName, newGuest }) => {
  return (
    <div className="main">
      <ConfirmedFilter toggleFilter={toggleFilter} isFiltered={isFiltered} />
      <Counter total={total} confirmed={confirmed} unconfirmed={unconfirmed} />
      <GuestList guests={guests} toggleConfirmAt={toggleConfirmAt} toggleEditingAt={toggleEditingAt} setNameAt={setNameAt} isFiltered={isFiltered} removeName={removeName} pendingGuest={newGuest} />
    </div>
  );
};

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  unconfirmed: PropTypes.number.isRequired,
  guest: PropTypes.arrayOf(PropTypes.object),
  toggleConfirmAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeName: PropTypes.func.isRequired,
  newGuest: PropTypes.string.isRequired,
};

export default MainContent;
