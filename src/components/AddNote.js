import { useState } from "react";
import App from "../App";

const AddNote = (prop) => {
  console.log(prop);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  function ChangedText(event) {
    console.log(event.target.value);
    if (event.target.value.length > 0) {
      setText(event.target.value);
    }
  }
  function ChangedTitle(event) {
    console.log(event.target.value.length);
    if (event.target.value.length > 0) {
      setTitle(event.target.value);
    }
  }
  return (
    <div className="addnote">
      <label>Title:</label>
      <input
        type="text"
        onChange={ChangedTitle}
        style={{ width: "100px", marginTop: "10px" }}
      ></input>
      <label>Text:</label>
      <textarea onChange={ChangedText}></textarea>
      <button
        onClick={(event) => prop.handle(event, text, title)}
        style={{ width: "fit-content" }}
      >
        Save
      </button>
    </div>
  );
};

export default AddNote;
