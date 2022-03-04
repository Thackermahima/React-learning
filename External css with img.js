import react from "react";
import ReactDOM from "react-dom";
const img  = "https://picsum.photos/200/300"
ReactDOM.render(
  <div>
    <h1 className="heading"> My favourite food..!</h1>
    <div>
<img  src = {img + "?grayscale"}/> 
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy644W-HZphWorjMPwMiyShijlFayPRB_n5Q&usqp=CAU"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1L4zkkXN70zeQ9t8lTEsGal3tdE1_M6YTcQ&usqp=CAU"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4abRy1eAVe5nsJD-GWlN-BvL6ntOldQiuw&usqp=CAU"
      />
    </div>
  </div>,
  document.getElementById("root")
);