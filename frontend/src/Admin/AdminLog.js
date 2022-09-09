import React, { useState,useContext,useEffect} from "react";
import AdminState from "../context/AdminState";
import "../Stylesheet/Admin.css";

import Panel from "./Panel";

export default function AdminLog() {

  const [adminData, setAdminData] = useState({
    userName: "",
    pass: ""
  });
  const [lock,setLock]=useState(true)

  function handleChange(e) {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  }

  function handleClick() {
    if (adminData.userName === "Manish" && adminData.pass === "pass") {
      setLock(false);
    } else {
      alert("Invalid credential");
      setLock(true);
    }
  }

  return (
    <>
    <AdminState>
      <div className={`Acontainer  ${lock === true ? "d-flex" : "d-none"}`}>
        <div
          className="box"
        >
          <h2>Admin</h2>
          <div>
            <label htmlFor="adminUN">UserName</label>
            <input
              type="text"
              name="userName"
              id="adminUN"
              autoComplete="off"
              onChange={handleChange}
              value={adminData.userName}
            />
          </div>
          <div>
            <label htmlFor="adminPW">Password</label>
            <input
              type="password"
              name="pass"
              id="adminPW"
              autoComplete="off"
              onChange={handleChange}
              value={adminData.pass}
            />
          </div>
          <div>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
      <Panel lock={lock}/>
      </AdminState>
    </>
  );
}
