import React, { useContext, useState } from "react";

import noteContext from "../context/NoteContext";

export default function CreateNote(props) {
  // eslint-disable-next-lin
  const noteState = useContext(noteContext);
  const { createNote } = noteState;

  const [notes, setNotes] = useState({ title: "", description: "", tag: "" });

  function handleSubmit() {
    if (notes.title.length === 0) {
      return alert("Give a title for the notes");
    }
    setNotes({ title: "", description: "", tag: "" });
    createNote(notes.title, notes.description, notes.tag, props.authToken);
  }

  function handleChange(e) {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <h2 className="text-center"> Create a note</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          name="title"
          autoComplete="false"
          onChange={handleChange}
          value={notes.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          name="description"
          rows="3"
          autoComplete="off"
          onChange={handleChange}
          value={notes.description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput2"
          name="tag"
          autoComplete="off"
          onChange={handleChange}
          value={notes.tag}
        />
      </div>
      <div className="container text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
