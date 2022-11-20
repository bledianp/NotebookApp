import Note from "./Note";
import App from "../App";

const List = ({ notes, onDelete }) => {
  console.log(onDelete);
  return (
    <div>
      {notes.map((note) => (
        <Note
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
