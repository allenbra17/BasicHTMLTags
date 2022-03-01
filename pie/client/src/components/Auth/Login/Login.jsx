import React, { useState } from "react"; //imrs
import { APIURL, EndPoints } from "../../endpoints";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button was clicked");
    console.log(APIURL + EndPoints.user.login);
    const requestObject = {
      email: email,
      password: password,
    };

    fetch(APIURL + EndPoints.user.login, {
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
        <label htmlFor="email">Email Name</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />

        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
