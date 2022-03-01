import React, { useState, useEffect } from "react";

// ? Add a button for clicking to fetch the joke
// ? function to run when we click the button
// ? Manage a state variable so it can be displayed to the user

const Chuck = (props) => {
  const [joke, setJoke] = useState("Loading...");

  async function handleFetch() {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setJoke(data.value);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <h2>Hello from Chuck</h2>
      <p>Chuck Norris Joke: {joke} </p>
      <button onClick={handleFetch}>Click for New Joke</button>
    </div>
  );
};

export default Chuck;
