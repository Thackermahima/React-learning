import react from "react";
import ReactDOM from "react-dom";

//const name = "mahima";
const fname = "Mahima";
ReactDOM.render(
  <div>
  <p>Created by: {fname}</p>
  <p> Copyright {new Date().getFullYear()}</p>

  </div>,
  document.getElementById("root")
);
