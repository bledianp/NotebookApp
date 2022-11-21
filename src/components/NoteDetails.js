

const NoteDetails = (props) => {
    console.log(props.activeNote.text);
    return(<div>
        <h1>{props.activeNote.title}</h1>
        <p>{props.activeNote.text}</p>

    </div>);
}

export default NoteDetails;