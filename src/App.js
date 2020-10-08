import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";

let guestID = 0;

const App = () => {
  const [newGuest, setNewGuest] = useState("");
  const [isFiltered, setFiltered] = useState(false);
  const [guests, setGuests] = useState([]);

  const createNewId = () => {
    let id = guestID;
    guestID += 1;
    return id;
  };

  const toggleFilter = () => {
    setFiltered(!isFiltered);
  };

  const removeName = (name) => {
    setGuests(guests.filter((guest) => guest.name !== name));
  };

  const setNameAt = (name, id) => {
    setGuests(
      guests.map((per) => {
        if (id === per.id) {
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
    createNewId();
    setGuests([{ name, isConfirmed: false, isEditing: false, id: guestID }, ...guests]);
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

  const togglePropertyAt = (id, property) => {
    setGuests(
      guests.map((guest) => {
        if (id === guest.id) {
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

  const toggleConfirmAt = (id) => {
    togglePropertyAt(id, "isConfirmed");
  };
  const toggleEditingAt = (id) => {
    togglePropertyAt(id, "isEditing");
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
