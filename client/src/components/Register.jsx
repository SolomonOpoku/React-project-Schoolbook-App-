import React, { useState } from "react";
// import Button from "./Button";
import Axios from "axios";

function Register(props) {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [nicky, setNicky] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/userinfos", {
      name: name,
      school: school,
      nicky: nicky,
      email: email,
      password: password,
    })
  };

  return (
    <div className="registerContainer">
      <div className="register">
        <h1>Register</h1>
      </div>
      <label>Name</label>
      <br />
      <input
      className="registerInputs"
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      <br />
      <label>School</label>
      <br />
      <input
      className="registerInputs"
        type="text"
        onChange={(event) => {
          setSchool(event.target.value);
        }}
      />
      <br />
      <br />
      <label>Nicky</label>
      <br />
      <input
      className="registerInputs"
        type="text"
        onChange={(event) => {
          setNicky(event.target.value);
        }}
      />
      <br />
      <br />
      <label>Email</label>
      <br />
      <input
      className="registerInputs"
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />
      <br />
      <label>Password</label>
      <br />
      <input
      className="registerInputs"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <br />
      <label>Confirm Password</label>
      <br />
      <input
      className="registerInputs"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br /> <br /> <br />
      <button className="newButton" onClick={addUser} >Register</button>
    </div>
  );
}

export default Register;
