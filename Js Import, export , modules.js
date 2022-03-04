import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, treeplePi } from "./Math.js";

ReactDOM.render(
  <div>
    <li>{pi} </li>
    <li>{doublePi()}</li>
    <li>{treeplePi()}</li>
  </div>,
  document.getElementById("root")
);
