import React from "react";
import PropTypes from "prop-types";

const Counter = ({ total, confirmed, unconfirmed }) => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{confirmed}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{unconfirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

Counter.propTypes = {
  attending: PropTypes.number,
  unconfirmed: PropTypes.number,
  total: PropTypes.number,
};

export default Counter;
