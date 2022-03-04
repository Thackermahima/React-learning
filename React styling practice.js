import React from "react";
import ReactDom from "react-dom";
const today = new Date();
const currHr = today.getHours();
let greeting;
let customeSize = {
  color: " "
};
if (currHr < 12) {
  greeting = "Good morning";
  customeSize.color = "red";
} else if (currHr < 18) {
  greeting = "Good afternoon";
  customeSize.color = "green";
} else {
  greeting = "Good night";
  customeSize.color = "blue";
}
ReactDom.render(
  <h1 style={customeSize}>{greeting} </h1>,
  document.getElementById("root")
);
