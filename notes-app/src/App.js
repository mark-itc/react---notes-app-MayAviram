import "./App.css";
import { useState } from "react";
import NotesList from "./NotesList";
import FormList from "./FormList";

function App() {
  const [notesList, setNotesList] = useState([]);
  const [dateToday, SetDateToday] = useState(new Date().toString());

  const onAddNote = (e) => {
    e.preventDefault();
    SetDateToday(new Date().toString());
    setNotesList([{ text: "Example note", date: dateToday }, ...notesList]);
  };

  return (
    <div className="App">
      <FormList onAddNoteClick={onAddNote} />
      <NotesList listOfNotes={notesList} />
    </div>
  );
}

export default App;
