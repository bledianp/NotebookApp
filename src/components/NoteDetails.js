const NoteDetails = ({ activeNote, onDelete }) => {
  

  return (
    <div className="noteDetail">
      <div>
        <h2>Category - {activeNote.category}</h2>
        <h1>{activeNote.title} </h1>
        <p>{activeNote.text}</p>
      </div>

      <div className="buttons">
        <button onClick={() => onDelete(activeNote.id, activeNote.category)} style={{float:"right"}}>Delete</button>
      </div>
    </div>
  );
};

export default NoteDetails;
