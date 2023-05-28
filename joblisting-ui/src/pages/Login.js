import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Creds from "../credentials";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({ uname: "", pass: "" });
  const [errorMessages, setErrorMessages] = useState({ uname: "", pass: "" });

  const handleChange = (e) => {
    setErrorMessages({ uname: "", pass: "" });

    let name = e.target.name;
    let value = e.target.value;

    if (name === "uname") {
      setInputFields({ ...inputFields, uname: value });
    } else if (name === "pass") {
      setInputFields({ ...inputFields, pass: value });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let unameFlag = false;

    for (let cred of Creds) {
      if (inputFields.uname === cred.uname) {
        unameFlag = true;
        if (inputFields.pass === cred.pass) {
          if (inputFields.uname === "admin") {
            navigate("/employer/feed");
          } else {
            navigate("/employee/feed");
          }
          break;
        }
      }
    }

    if (unameFlag === true) {
      setErrorMessages({ ...errorMessages, pass: "invalid password" });
    } else {
      setErrorMessages({ uname: "invalid username", pass: "invalid password" });
    }
  };

  return (
    <div className="login-div">
      <Navbar page="login" />
      <div className="login-container">
        <div className="login-form">
          <h2>Sign In</h2>
          <form autoComplete="off" onSubmit={handleLogin}>
            <div className="input-container">
              <label htmlFor="uname">Username</label>
              <input
                type="text"
                name="uname"
                required
                value={inputFields.uname}
                onChange={handleChange}
              />
              <div className="login-error">{errorMessages.uname}</div>
            </div>
            <div className="input-container">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                name="pass"
                required
                value={inputFields.pass}
                onChange={handleChange}
              />
              <div className="login-error">{errorMessages.pass}</div>
            </div>
            <div className="button-container">
              <button className="login-submit" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
