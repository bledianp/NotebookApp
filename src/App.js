import "./App.css";
import Note from "./components/Note";
import List from "./components/List";
import AddNote from "./components/AddNote";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import NoteDetails from "./components/NoteDetails";

function App() {
  const [activeNote, setActive] = useState(false);
  console.log(activeNote);
  const [searchTxt, setText] = useState("");
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState(
    localStorage.notes
      ? JSON.parse(localStorage.notes)
      : [
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
        ]
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleAddButton() {
    setShow((current) => !current);
  }

  function handleAdd(text, title) {
    console.log(title, title);
    if (title.trim().length > 0) {
      const note = {
        id: Math.random(),
        text: text,
        title: title,
      };

      const newNotes = [...notes, note];
      setNotes(newNotes);
    }
  }
  console.log("notes brenda app", notes);

  function getActiveNote() {
    const newnote = notes.find((note) => note.id === activeNote);
    console.log(newnote);
    return newnote;
  }
  function handleDelete(id) {
    console.log(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <div className="test">
        {/* <span className="main-note main">
          <h1>Notes</h1>
          <button onClick={(event) => handleAdd(event, text, title)}>
            Add
          </button>
        </span> */}
        <SearchBar handle={setText} />
        <List
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(searchTxt.toLowerCase())
          )}
          onDelete={handleDelete}
          setActive={setActive}
        />
      </div>
      <NoteDetails activeNote={getActiveNote} />
      <button
        onClick={handleAddButton}
        className="addButton"
        style={{ position: "fixed" }}
      >
        +
      </button>
      {show && <AddNote handle={handleAdd} />}
      {/* <AddNote handle={handleAdd} /> */}
    </div>
  );
}

export default App;
