import React, { useState ,useRef} from "react";
import { Link } from "react-router-dom";


import "../Stylesheet/Login.css";
import accImg from "../images/account.png";

export default function Login() {

const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // login validation
  function loginValidator() {
    const { email, password } = details;
    if (!email || !password) {
      setMessageFn("fill the data");
      return false;
    }
    return true;
  }
  // login on click
  const handleSubmit = async (e) => {
    const { email, password } = details;
    let validator = loginValidator();
    if (!validator) {
      return;
    }

    const URL = "http://localhost:3001/api/auth/login";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.message === "error") {
      setMessageFn(data.error);
    } else {
      setMessageFn("welcome dude");
      sessionStorage.setItem("authToken", data.token);
      window.location.href = "/";
    }
  };

  // show the message
  function setMessageFn(msg) {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }

  const clickRef=useRef(null)

  window.onkeydown=(e)=>{
    if(e.key==="Enter")
    {
      clickRef.current.click()
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login">
          <div className="log-form">
            <div className="login-data">
              <img src={accImg} alt="" className="accImg" />
              <p>login</p>
            </div>
            <div className="input-div">
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                name="email"
                id="loginEmail"
                autoComplete="off"
                onChange={handleChange}
                value={details.email}
              />
            </div>
            <div className="input-div">
              <label htmlFor="loginPass">Password</label>
              <input
                type="text"
                id="loginPass"
                name="password"
                autoComplete="off"
                onChange={handleChange}
                value={details.password}
              />
            </div>
            <p style={{ color: "#ef5f5f", fontSize: 13 }} className="errorMsg">
              {message}
            </p>
            <button onClick={handleSubmit} ref={clickRef}>
              Login
            </button>
            <p className="reg-text">
              Create account <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
