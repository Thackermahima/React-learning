import react from "react";
import ReactDOM from "react-dom";

//const name = "mahima";
const fname = "Mahima";
const lname = "Thacker";
const number = 8;
ReactDOM.render(
  <div>
    {/* <h1>Helllo {name} </h1> */}
    <h1>{`Your first name and last name is ${fname} ${lname} `} </h1>
    <p>Your lucky number is {number}</p>
    <p> Random number is : {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);