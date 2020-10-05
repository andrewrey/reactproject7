import React, { useState } from "react";
import "./App.css";
import GuestList from "./GuestList";

const App = () => {
  const [guests, setGuests] = useState([
    {
      name: "Paul",
      isConfirmed: false,
      isEditing: false,
    },
    {
      name: "Mike",
      isConfirmed: true,
      isEditing: false,
    },
    {
      name: "Andrew",
      isConfirmed: true,
      isEditing: false,
    },
  ]);

  const getTotalInvited = () => {
    return guests.length;
  };

  const togglePropertyAt = (indexToChange, property) => {
    setGuests(
      guests.map((guest, index) => {
        if (indexToChange === index) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        } else {
          return { ...guest };
        }
      })
    );
  };

  const toggleConfirmAt = (indexToChange) => {
    togglePropertyAt(indexToChange, "isConfirmed");
  };
  const toggleEditingAt = (indexToChange) => {
    togglePropertyAt(indexToChange, "isEditing");
  };

  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>
  return (
    <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
          <input type="text" value="Safia" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">
            Submit
          </button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList
          guests={guests}
          toggleConfirmAt={toggleConfirmAt}
          toggleEditingAt={toggleEditingAt}
        />
      </div>
    </div>
  );
};

export default App;
