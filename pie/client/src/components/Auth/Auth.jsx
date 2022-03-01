import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./auth.css";
const Auth = (props) => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  function handleToggle() {
    // if (isLoginVisible === true) {
    //   setIsLoginVisible(false);
    // } else {
    //   setIsLoginVisible(true);
    // }
    setIsLoginVisible(!isLoginVisible);
  }
  return (
    <div>
      {isLoginVisible === true ? (
        <Login updateLocalStorage={props.updateLocalStorage} />
      ) : (
        <Signup updateLocalStorage={props.updateLocalStorage} />
      )}
      <br />
      <button onClick={handleToggle}>Toggle Login/Sigup</button>
    </div>
  );
};

export default Auth;
