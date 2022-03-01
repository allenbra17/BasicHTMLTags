//? firstName, lastName, email, password
import React, { useState } from "react"; //imrs
import { APIURL, EndPoints } from "../../endpoints";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button was clicked");
    console.log(APIURL + EndPoints.user.register);
    const requestObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    fetch(APIURL + EndPoints.user.register, {
      method: "POST",
      body: JSON.stringify(requestObject),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => props.updateLocalStorage(data.token))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          id="firstName"
          placeholder="Type First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Type Last Name"
        />
        <br />
        <label htmlFor="email">Email Name</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type Email"
        />

        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type Password"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
