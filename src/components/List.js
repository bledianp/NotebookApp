import Note from "./Note";
import App from "../App";

const List = ({ notes, onDelete, setActive }) => {
  console.log(onDelete);
  return (
    <div>
      <h1>All Notes</h1>
      {notes.map((note) => (
        <Note setActive={ setActive}
          title={note.title}
          text={note.text}
          key={note.id}
          id={note.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default List;
