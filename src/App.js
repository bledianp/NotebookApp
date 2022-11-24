import "./App.css";
import List from "./components/List";
import AddNote from "./components/AddNote";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import NoteDetails from "./components/NoteDetails";
import { nanoid } from "nanoid";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function App() {
  const [options, setOptions] = useState(
    localStorage.options ? JSON.parse(localStorage.options) : ["All", "Sport"]
  );
  const [defaultOption, setDefaultOption] = useState("All");
  const [activeNote, setActive] = useState("0");
  const [searchTxt, setText] = useState("");
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState(
    localStorage.notes
      ? JSON.parse(localStorage.notes)
      : [
          {
            id: 1,
            title: "Note 1",
            category: "Sport",
            text: "This is a text.",
            date: new Date().toLocaleString(),
          },
          {
            id: 2,
            category: "Sport",
            title: "Note 2",
            text: "This is another text.",
            date: new Date().toLocaleString(),
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  function handleAddButton() {
    setShow((current) => !current);
  }

  function handleAdd(text, title, category) {
    // console.log("title", title);
    if (title.trim().length > 0) {
      const note = {
        id: nanoid(),
        category: category,
        text: text,
        title: title,
        date: new Date().toLocaleString(),
      };

      const newNotes = [...notes, note];
      setNotes(newNotes);
      const newCategories = [...options, category];
      setOptions(newCategories);
    }
  }
  // console.log("notes brenda app", notes);

  function getActiveNote() {
    const newnote = notes.find((note) => note.id === activeNote);
    // console.log(newnote);
    return newnote;
  }
  function handleDelete(id) {
    // console.log(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setActive("0");
  }

  function categorySelected(selectedOption) {
    // console.log(selectedOption);
    setDefaultOption(selectedOption.value);
  }

  return (
    <div className="container">
      <div className="test">
        <SearchBar handle={setText} />

        <div className="second">
          <h1>All Notes</h1>
          <Dropdown
            className="dropdown"
            options={options}
            onChange={categorySelected}
            value={defaultOption}
            placeholder="Select a category"
          />
        </div>
        <List
          notes={
            defaultOption == "All"
              ? notes.filter((note) =>
                  note.title
                    .toLowerCase()
                    .includes(searchTxt.trim().toLowerCase())
                )
              : notes.filter((note) => note.category === defaultOption)
          }
          onDelete={handleDelete}
          setActive={setActive}
        />
      </div>
      <div style={{ width: "100%" }}>
        {activeNote !== "0" ? (
          <NoteDetails activeNote={getActiveNote()} onDelete={handleDelete} />
        ) : (
          <h2 style={{ position: "fixed", margin: "30vh 30vw", color: "red" }}>
            No notes selected!
          </h2>
        )}
      </div>
      <button
        onClick={handleAddButton}
        className="addButton"
        style={{ position: "fixed" }}
      >
        Add
      </button>
      {show && <AddNote handle={handleAdd} />}
    </div>
  );
}

export default App;
