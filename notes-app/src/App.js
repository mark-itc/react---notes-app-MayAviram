import React from "react";
import "./App.css";
import { useState } from "react";
import NotesList from "./components/NotesList";
import FormList from "./components/FormList";
import moment from "moment";

function App() {
  const [notesList, setNotesList] = useState([]);
  const date = moment().format("MMM Do LT");
  const [dateToday, SetDateToday] = useState(date);

  const onAddNote = (e) => {
    e.preventDefault();
    SetDateToday(date);
    setNotesList([
      { title: "Note title", text: "Example note", date: dateToday },
      ...notesList,
    ]);
  };
  const onDeleteNote = (index) => {
    const filterListOfNotes = [...notesList];
    filterListOfNotes.splice(index, 1);
    setNotesList(filterListOfNotes);
  };
  return (
    <div className="App">
      <FormList onAddNoteClick={onAddNote} />
      <NotesList listOfNotes={notesList} onClickDeleteNote={onDeleteNote} />
    </div>
  );
}

export default App;
