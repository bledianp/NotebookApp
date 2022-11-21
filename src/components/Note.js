import { useState } from "react";
import NoteDetails from "./NoteDetails";

const Note = ({ title, text, id, onDelete, setActive }) => {
  const [prevPage, setPage] = useState("false");
  console.log(onDelete);
  console.log(id);

  function enterPage(event) {
    setPage(!prevPage);
    return;
  }
  return (
    <div className="main-note" onClick={()=>setActive(id) }>
      <span className="main">
        <h2>{title}</h2>
        <button onClick={() => onDelete(id)}>Delete</button>
      </span>
      {/* <p>{text}</p> */}
    </div>
  );
};

export default Note;
