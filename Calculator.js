import React from "react";
import ReactDom from "react-dom";
import { add, subtract, multiply, division } from "./Calculator.js";

ReactDom.render(
  <div>
    <ul>
      <li> {subtract(4 , 2)}</li>
      <li>{ multiply(4 ,2)}</li>
    <li>{ add(4 , 2)}</li>
      <li>{ division(4 , 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
