function Note(props) {
  const { textOfNote, dateToday } = props;
  return (
    <div className="note">
      <div className="dateNote" style={{ fontSize: 10, marginBottom: 10 }}>
        Created date: {dateToday}
      </div>
      <div className="textNote">{textOfNote}</div>
    </div>
  );
}

export default Note;
