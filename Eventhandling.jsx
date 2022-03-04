import React, { useState } from "react";

function App() {
  const [HandleText, setHandleText] = useState("Hello");
  const[isMouseOver, setMouseOver] = useState(false);
function handleClick(){
  setHandleText("Submitted")
}
function handleMouseOver(){
setMouseOver(true);
}
function handleMouseOut(){
  setMouseOver(false);

}
  return (
    <div className="container">
      <h1>{HandleText}</h1>
      <input type="text" placeholder="What's your name?" />

      <button
      style = {{ backgroundColor : isMouseOver ? "black" : "white"}}
      onClick = {handleClick}
      onMouseOver = {handleMouseOver}
      onMouseOut = {handleMouseOut}
      >Submit</button>
    </div>
  );
}
export default App;
