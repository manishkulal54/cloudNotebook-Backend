import React, { useState } from "react";
import {Link} from 'react-router-dom'


import "../Stylesheet/Signup.css";
import img from "../images/signup.png";

export default function Signup() {
  // img parallax code
  function signupParallax(e) {
    let regImg = document.querySelectorAll(".reg-img");
    regImg.forEach((elem) => {
      let data = elem.getAttribute("data-value");
      elem.style.transform = `translateX(${
        (e.clientX * data) / 250
      }px) translateY(${(e.clientY * data) / 250}px)`;
    });
  }

  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // validating the signup
  function signupValidator() {
    const { name, phone, email, password, cPassword } = details;

    if (!name || !phone || !email || !password || !cPassword) {
      setMessageFn("fill all the data");
      return false;
    }
    if (!email.includes(".") || !email.includes("@")) {
      setMessageFn("Enter a valid email");
      return false;
    }
    if (password.length + 1 <= 6) {
      setMessageFn("password length must be 6 character");
      return false;
    }
    if (password !== cPassword) {
      setMessageFn("Password is not matching...");
      return false;
    }
    if (phone.length !== 10) {
      setMessageFn("invalid phone nummber");
      return false;
    }
    const isAllNumbers=/^\d+$/.test(phone);
    if(!isAllNumbers){
      setMessageFn("invalid Phone Number")
      return false
    }
    return true;
  }

  // on submit btn click
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, password } = details;
    const intPhone = Number(phone);

    let validator = signupValidator();
    if (!validator) {
      return;
    }

    setMessage("Registering....");

    const URL="http://localhost:3001/api/auth/signup"
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: intPhone,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (data.message === "error") {
        setMessageFn(data.error);
      }else{
        setMessageFn("done");
        sessionStorage.setItem("authToken",data.token)
        window.location.href="/"
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  // notify message
  function setMessageFn(msg) {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }

  return (
    <div className="signupContainer">
      <div className="signup">
        <div className="sign-form ">
          <p className="signup-text">Signup</p>
          <div>
            <label htmlFor="regName">Name</label>
            <input
              type="text"
              name="name"
              id="regName"
              autoComplete="off"
              onChange={handleChange}
              value={details.name}
            />
          </div>
          <div>
            <label htmlFor="regPhone">Phone</label>
            <input
              type="text"
              name="phone"
              id="regPhone"
              autoComplete="off"
              onChange={handleChange}
              value={details.phone}
            />
          </div>
          <div>
            <label htmlFor="regEmail">Email</label>
            <input
              type="email"
              name="email"
              id="regEmail"
              autoComplete="off"
              onChange={handleChange}
              value={details.email}
            />
          </div>
          <div>
            <label htmlFor="regPass">Password</label>
            <input
              type="password"
              name="password"
              id="regPass"
              autoComplete="off"
              onChange={handleChange}
              value={details.password}
            />
            {/* for show password */}
            {/* <i class="fa-sharp fa-solid fa-eye-slash"></i> */}
            {/* <i class="fa-solid fa-eye btn"></i> */}
          </div>
          <div>
            <label htmlFor="regCPass">ConfirmPassword</label>
            <input
              type="password"
              name="cPassword"
              id="regCPass"
              autoComplete="off"
              onChange={handleChange}
              value={details.cPassword}
              
            />
          </div>
          <p style={{ color: "red" }} className="errorMsg">
            {message}
          </p>
          <button onClick={handleSubmit}>Signup</button>
          <div className="log-text">
            I'am already a User ,<Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="signup-img" id="signupImg" onMouseMove={signupParallax}>
        <img src={img} alt="" className="reg-img" data-value="8" />
      </div>
    </div>
  );
}
