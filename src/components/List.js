import Note from "./Note";

const List = ({ notes, onDelete, setActive }) => {
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
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default List;
