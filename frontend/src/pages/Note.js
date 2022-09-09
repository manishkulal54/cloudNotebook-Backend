import React, { useContext} from "react";
import "../Stylesheet/Note.css";
import noteContext from "../context/NoteContext";

export default function Note(props) {
  const noteState = useContext(noteContext);

  const { deleteNote } = noteState;
  const {authToken,note,editNote}=props

  const myStyle={
    width:'100vw',
    height:'max-content',
    overflow:'hidden'
  }

  return (
    <>
      <div className="mt-5 me-5 border border-3 p-3 noteBox " style={myStyle} >
        <div className="icons">
          <i
            className="fa-solid fa-pen-to-square btn"
            onClick={
              ()=>{editNote(note)}
            }
          ></i>
          <i
            className="fa-solid fa-trash-can btn"
            onClick={() => {
              deleteNote(note._id, authToken);
            }}
          ></i>
        </div>
        <h5 className="title text-center" style={{textDecoration:'underline'}}>{note.title}</h5>
        <p className="description text-center">{note.description}</p>
      </div>
    </>
  );
}
