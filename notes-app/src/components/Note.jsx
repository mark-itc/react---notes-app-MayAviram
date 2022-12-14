import React from "react";
import Modal from "react-modal";
import { useState } from "react";

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

  const customStyles = {
    content: {
      top: "40%",
      left: "40%",
      transform: "scale(1)",
      width: "20%",
      height: "15%",
    },
  };

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("setIsOpen:false");
    setIsOpen(false);
  };

  const noteRender = (classNote) => {
    return (
      <div className={`${classNote}note`} onClick={openModal}>
        <div className="noteContainer dateAndButton">
          <div className="dateNote" style={{ fontSize: 10, marginBottom: 10 }}>
            {dateToday}
          </div>
          <button
            className="deleteNoteButton"
            onClick={(e) => {
              e.stopPropagation();
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
  };

  return (
    <div>
      {noteRender("")}
      <div className="modalNote">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Note Modal"
        >
          {noteRender("modal")}
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  );
}

export default Note;
