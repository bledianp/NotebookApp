import Note from "./Note";

const List = ({ notes,  setActive }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note
          setActive={setActive}
          title={note.title}
          text={note.text}
          key={note.id}
          id={note.id}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default List;
