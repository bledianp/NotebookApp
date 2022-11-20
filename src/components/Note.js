import { useState } from "react";

const Note = ({ title, text, id, onDelete }) => {
  const [prevPage, setPage] = useState("false");
  console.log(onDelete);
  console.log(id);

  function enterPage(event) {
    setPage(!prevPage);
    return;
  }
  return (
    <div className="main-note">
      <span className="main">
        <h1>{title}</h1>
        <button onClick={() => onDelete(id)}>Delete</button>
      </span>
      <p>{text}</p>
    </div>
  );
};

export default Note;
