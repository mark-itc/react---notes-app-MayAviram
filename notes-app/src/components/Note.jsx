import React from "react";

function Note(props) {
  const { textOfNote, dateToday, noteIndex, onClickDeleteNote } = props;

  const deleteConfirmation = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      onClickDeleteNote(noteIndex);
    }
  };
  return (
    <div className="note">
      <div className="noteContainer">
        <div className="dateNote" style={{ fontSize: 10, marginBottom: 10 }}>
          {dateToday}
        </div>
        <div className="textNote">{textOfNote}</div>
      </div>
      <div className="noteContainer">
        <button
          className="deleteNoteButton"
          onClick={() => {
            deleteConfirmation();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Note;
