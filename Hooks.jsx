import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount ( count + 1)
  }
  function Decrease() {
    setCount (count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}> increase</button>
      <button onClick={Decrease}> Decrease</button>
    </div>
  );
}
export default App;
