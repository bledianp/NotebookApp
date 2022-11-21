import { useState } from "react";

const SearchBar = ({ handle }) => {
  console.log({ handle });
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div className="search">
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          event.key === "Enter" && handle(input);
        }}
        style={{ width: "20vw", height: "25px", borderRadius: "1em" }}
      />
      <button onClick={(event) => handle(input)}>Search</button>
    </div>
  );
};

export default SearchBar;
