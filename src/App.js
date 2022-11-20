import "./App.css";
import Note from "./components/Note";
import List from "./components/List";
import AddNote from "./components/AddNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note 1",
      text: "This is a text.",
    },
    {
      id: 2,
      title: "Note 2",
      text: "This is another text.",
    },
    {
      id: 3,
      title: "Note 3",
      text: "This is text text...",
    },
    {
      id: 4,
      title: "Note 4",
      text: "Mire se Shkut",
    },
    {
      id: 5,
      title: "Shqiperia",
      text: "Mire se Shkut",
    },
  ]);

  function handleAdd(event, text, title) {
    const note = {
      id: Math.random(),
      text: text,
      title: title,
    };

    const newNotes = [...notes, note];
    setNotes(newNotes);
  }
  console.log("notes brenda app", notes);

  function handleDelete(id) {
    console.log(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <div>
        <span className="main-note main">
          <h1>Notes</h1>
          <button onClick={(event) => handleAdd(event, text, title)}>
            Add
          </button>
        </span>

        <List notes={notes} onDelete={handleDelete} />
      </div>

      <AddNote handle={handleAdd} />
    </div>
  );
}

export default App;
