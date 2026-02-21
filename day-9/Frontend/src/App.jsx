import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  // ---------------- FETCH ----------------
  function fetchNotes(){
    axios.get("https://backend-j23l.onrender.com/notes")
    .then((res) => {
      setNotes(res.data.notes);
    });
  }

  // ---------------- SUBMIT (CREATE + UPDATE) ----------------
  function submitHandler(e){
    e.preventDefault();

    if(editId){
      // UPDATE
      axios.patch("https://backend-j23l.onrender.com/notes/"+editId,{
        title,
        description
      })
      .then(()=>{
        fetchNotes();
        setEditId(null);
        setTitle("");
        setDescription("");
      });
    } else {
      // CREATE
      axios.post("https://backend-j23l.onrender.com/notes",{
        title,
        description
      })
      .then(()=>{
        fetchNotes();
        setTitle("");
        setDescription("");
      });
    }
  }

  // ---------------- DELETE ----------------
  function handleDeleteNote(noteId){
    axios.delete("https://backend-j23l.onrender.com/notes/"+noteId)
    .then(()=>{
      fetchNotes();
    });
  }

  // ---------------- START EDIT ----------------
  function startEdit(note){
    setEditId(note._id);
    setTitle(note.title);
    setDescription(note.description);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button>
          {editId ? "Update Note" : "Create Note"}
        </button>
      </form>

      <div className="notes">
        {notes.map((note) => (
          <div key={note._id} className="note">
            <h2>{note.title}</h2>
            <p>{note.description}</p>

            <button onClick={()=>handleDeleteNote(note._id)}>
              Delete
            </button>

            <button onClick={()=>startEdit(note)}>
              Edit
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
