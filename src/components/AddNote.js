import { useState } from "react";

const AddNote = (props) => {

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  function ChangedText(event) {
    if (event.target.value.length > 0) {
      setText(event.target.value);
    }
  }
  function ChangedTitle(event) {
    if (event.target.value.length > 0) {
      setTitle(event.target.value);
    }
  }

  function ChangedCategory(event) {
    if (event.target.value.length > 0) {
      setCategory(event.target.value);
    }
  }

  function handleSave() {
    props.handle(text, title, category);
    setTitle("");
    setText("");
    setCategory("");
  }

  return (
    <div className="addnote">
      <label>Title:</label>
      <input
        type="text"
        onChange={ChangedTitle}
        
        value={title}
      ></input>
      <label>Category:</label>
      <input
        type="text"
        onChange={ChangedCategory}
        
        value={category}

      />
      <label>Text:</label>
      <textarea
        value={text}
        onChange={ChangedText}
        rows="4"
        
        style={{resize:"none"}}
      ></textarea>
      <button onClick={handleSave} className="buttonSave">
        Save
      </button>
    </div>
  );
};

export default AddNote;
