import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";

const App = () => {
  const [newGuest, setNewGuest] = useState("");
  const [isFiltered, setFiltered] = useState(false);
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

  const toggleFilter = () => {
    setFiltered(!isFiltered);
  };

  const removeName = (name) => {
    setGuests(guests.filter((guest) => guest.name !== name));
  };

  const setNameAt = (name, indexToChange) => {
    setGuests(
      guests.map((per, index) => {
        if (indexToChange === index) {
          return {
            ...per,
            name,
          };
        } else {
          return { ...per };
        }
      })
    );
  };

  const addGuest = (name) => {
    setGuests([{ name, isConfirmed: false, isEditing: false }, ...guests]);
  };

  const handleNameInput = (e) => {
    setNewGuest(e.target.value);
  };

  const getTotalInvited = () => {
    return guests.length;
  };

  const getConfirmed = () => {
    return guests.reduce((acc, guest) => {
      return guest.isConfirmed ? acc + 1 : acc;
    }, 0);
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

  let total = getTotalInvited();
  let confirmed = getConfirmed();
  let unconfirmed = total - confirmed;

  return (
    <div className="App">
      <Header handleNameInput={handleNameInput} newGuest={newGuest} addGuest={addGuest} setNewGuest={setNewGuest} />
      <MainContent toggleFilter={toggleFilter} isFiltered={isFiltered} total={total} confirmed={confirmed} unconfirmed={unconfirmed} guests={guests} toggleConfirmAt={toggleConfirmAt} toggleEditingAt={toggleEditingAt} setNameAt={setNameAt} removeName={removeName} newGuest={newGuest} />
    </div>
  );
};

// create Inputs:
//Header
//  GuestInputForm
//MainContent
//  ConfirmedFilter
//  Counter
//  GuestList
//    PendingGuest
//    Guest
//      GuestName

export default App;
