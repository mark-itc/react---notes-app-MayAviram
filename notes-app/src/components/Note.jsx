import React from "react";

function Note(props) {
  const {
    titleOfNote,
    textOfNote,
    dateToday,
    noteIndex,
    onClickDeleteNote,
  } = props;

  const deleteConfirmation = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      onClickDeleteNote(noteIndex);
    }
  };
  return (
    <div className="note">
      <div className="noteContainer dateAndButton">
        <div className="dateNote" style={{ fontSize: 10, marginBottom: 10 }}>
          {dateToday}
        </div>
        <button
          className="deleteNoteButton"
          onClick={() => {
            deleteConfirmation();
          }}
        >
          X
        </button>
      </div>
      <div className="noteContainer">
        <div className="titleNote">{titleOfNote}</div>
        <div className="textNote">{textOfNote}</div>
      </div>
    </div>
  );
}

export default Note;
