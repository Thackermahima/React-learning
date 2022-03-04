import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [Heading, setHeadingText] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function clickValue() {
    setHeadingText(name);
  }
  return (
    <div className="container">
      <h1>Hello {Heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={clickValue}>Submit</button>
    </div>
  );
}

export default App;
