import AdminContext from "./AdminContext";
import { useState } from "react";

const AdminState = (props) => {
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);

  async function fetchAllUser() {
    try{
    const response = await fetch(
      "http://localhost:3001/api/auth/fetchalluser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setUsers(data.users);
    }catch(e){
      
  }
  }

  async function fetchAllNotes() {
    try{
    const response = await fetch(
      "http://localhost:3001/api/note/fetchallnote",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setNotes(data.notes);
    }catch(e){}
  }

  return (
    <AdminContext.Provider value={{ 
        users,
        notes,
        fetchAllUser,
        fetchAllNotes
        }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
