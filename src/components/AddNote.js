import { useState } from "react";

const AddNote = (props) => {
  // console.log(props.handle);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  function ChangedText(event) {
    // console.log(event.target.value);
    if (event.target.value.length > 0) {
      setText(event.target.value);
    }
  }
  function ChangedTitle(event) {
    // console.log(event.target.value);
    if (event.target.value.length > 0) {
      setTitle(event.target.value);
    }
  }

  function ChangedCategory(event) {
    // console.log(event.target.value);
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
        style={{ width: "70%" }}
        value={title}
      ></input>
      <label>Category:</label>
      <input
        type="text"
        onChange={ChangedCategory}
        style={{ width: "70%",  }}
        value={category}

      />
      <label>Text:</label>
      <textarea
        value={text}
        onChange={ChangedText}
        rows="4"
        // cols="10"
        // width="100%"
        style={{resize:"none"}}
      ></textarea>
      <button onClick={handleSave} style={{ width: "fit-content", margin: 0, marginTop: "10px"}}>
        Save
      </button>
    </div>
  );
};

export default AddNote;
