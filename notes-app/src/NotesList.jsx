import Note from "./Note";

function NotesList(props) {
  const { listOfNotes } = props;

  const isEmptyNotesList = listOfNotes.length === 0;

  const createList = () => {
    return listOfNotes.map((item, index) => (
      <Note key={index} textOfNote={item.text} dateToday={item.date} />
    ));
  };

  return (
    <div className="notesList">
      {isEmptyNotesList ? <div>No Notes</div> : createList()}
    </div>
  );
}

export default NotesList;
