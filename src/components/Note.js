const Note = ({ title, text, id, date, setActive }) => {
  return (
    <div className="main-note">
      <div className="main" onClick={() => setActive(id)}>
        <h2>{title} </h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Note;
