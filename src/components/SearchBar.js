import { useState } from "react";

const SearchBar = ({ handle }) => {
  const [input, setInput] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          event.key === "Enter" && handle(input);
        }}
        style={{
          width: "15vw",
          height: "25px",
          borderRadius: "1em",
          margin: "auto",
        }}
      />
      <button onClick={() => handle(input)}>Search</button>
    </div>
  );
};

export default SearchBar;
